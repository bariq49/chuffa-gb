"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  KeyboardEvent,
} from "react";

/** ---------- Props & Types ---------- */
type Prediction = google.maps.places.AutocompletePrediction;

type CustomLocationProps = {
  /** e.g. 'Pickup location' */
  label?: string;
  /** e.g. 'From' / 'Enter a location' */
  placeholder?: string;
  /** An icon element, e.g. <MapPinIcon /> from your library */
  icon?: React.ReactNode;
  /** Your Google Maps JS API key (with Places enabled) */
  apiKey: string;
  /** Optional initial text value */
  defaultValue?: string;
  /** Controlled value (optional) */
  value?: string;
  /** When user selects a suggestion */
  onSelect: (data: {
    description: string;
    place_id: string;
    matched_substrings?: Prediction["matched_substrings"];
    terms?: Prediction["terms"];
    types?: Prediction["types"];
  }) => void;
  /** Extra class for the root wrapper */
  className?: string;
  /** Max suggestions to show (default 5) */
  maxSuggestions?: number;
  /** Country restriction (ISO 3166-1 Alpha-2), e.g. 'gb' or ['gb','us'] */
  componentRestrictions?: string | string[];
  /** Bias results around this location {lat, lng} with a radius (meters) */
  locationBias?: { lat: number; lng: number; radius?: number };
};

/** ---------- Load Google Maps JS (once) ---------- */
function useGoogleMapsPlaces(apiKey: string) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Already loaded?
    if (typeof window !== "undefined" && (window as any).google?.maps?.places) {
      setReady(true);
      return;
    }

    // Avoid double-inject
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-id="gmaps-places-loader"]'
    );
    if (existing) {
      const onLoad = () => setReady(true);
      existing.addEventListener("load", onLoad);
      return () => existing.removeEventListener("load", onLoad);
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey
    )}&libraries=places&v=quarterly`;
    script.async = true;
    script.defer = true;
    script.dataset.id = "gmaps-places-loader";
    script.onload = () => setReady(true);
    script.onerror = () => {
      console.error("Failed to load Google Maps JS API.");
    };
    document.head.appendChild(script);
  }, [apiKey]);

  return ready;
}

/** ---------- Small debounce hook ---------- */
function useDebouncedCallback<T extends (...args: any[]) => void>(
  fn: T,
  delay = 250
) {
  const timer = useRef<number | undefined>();
  return useCallback(
    (...args: Parameters<T>) => {
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => fn(...args), delay);
    },
    [fn, delay]
  );
}

/** ---------- Component ---------- */
export default function CustomLocation({
  label = "Pickup location",
  placeholder = "From",
  icon,
  apiKey,
  defaultValue = "",
  value,
  onSelect,
  className = "",
  maxSuggestions = 5,
  componentRestrictions,
  locationBias,
}: CustomLocationProps) {
  const mapsReady = useGoogleMapsPlaces(apiKey);

  const [inputValue, setInputValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preds, setPreds] = useState<Prediction[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const rootRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<google.maps.places.AutocompleteService | null>(null);

  // Controlled support
  useEffect(() => {
    if (typeof value === "string") setInputValue(value);
  }, [value]);

  // Init service
  useEffect(() => {
    if (mapsReady && !serviceRef.current) {
      serviceRef.current = new google.maps.places.AutocompleteService();
    }
  }, [mapsReady]);

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const fetchPredictions = useCallback(
    (query: string) => {
      if (!serviceRef.current) return;
      if (!query) {
        setPreds([]);
        setOpen(false);
        return;
      }
      setLoading(true);

      const request: google.maps.places.AutocompletionRequest = {
        input: query,
        componentRestrictions:
          typeof componentRestrictions === "string"
            ? { country: componentRestrictions }
            : componentRestrictions
            ? { country: componentRestrictions }
            : undefined,
      };

      // Bias by circle if provided
      if (locationBias?.lat && locationBias?.lng) {
        request.location = new google.maps.LatLng(
          locationBias.lat,
          locationBias.lng
        );
        if (locationBias.radius) request.radius = locationBias.radius;
      }

      serviceRef.current.getPlacePredictions(request, (predictions, status) => {
        setLoading(false);
        if (
          status !== google.maps.places.PlacesServiceStatus.OK ||
          !predictions
        ) {
          setPreds([]);
          setOpen(false);
          return;
        }
        setPreds(predictions.slice(0, maxSuggestions));
        setOpen(true);
      });
    },
    [componentRestrictions, locationBias, maxSuggestions]
  );

  const debouncedFetch = useDebouncedCallback(fetchPredictions, 200);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      if (typeof value !== "string") setInputValue(v);
      debouncedFetch(v);
    },
    [debouncedFetch, value]
  );

  const onFocus = useCallback(() => {
    if (inputValue) {
      fetchPredictions(inputValue);
    } else {
      // Open empty list only on click? Keep closed until typing
      setOpen(false);
    }
  }, [fetchPredictions, inputValue]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!open || preds.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % preds.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + preds.length) % preds.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const sel = preds[activeIndex] ?? preds[0];
      if (sel) handleSelect(sel);
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  const handleSelect = (p: Prediction) => {
    if (typeof value !== "string") setInputValue(p.description);
    setOpen(false);
    setActiveIndex(-1);
    onSelect({
      description: p.description,
      place_id: (p as any).place_id,
      matched_substrings: p.matched_substrings,
      terms: p.terms,
      types: p.types,
    });
  };

  const LeftIcon = useMemo(
    () =>
      icon ?? (
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/70 text-gray-700">
          {/* simple pin glyph */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
        </span>
      ),
    [icon]
  );

  return (
    <div className={`relative ${className}`} ref={rootRef}>
      {/* Label */}
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      {/* Input shell (matches your card look) */}
      <div className="flex items-center gap-3 rounded-2xl bg-gray-100/70 backdrop-blur px-3 py-3">
        <div className="shrink-0">{LeftIcon}</div>

        <input
          type="text"
          value={inputValue}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
          disabled={!mapsReady}
        />
      </div>

      {/* Dropdown */}
      {open && preds.length > 0 && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          <div className="px-3 pt-3 pb-2 text-xs font-medium text-gray-500">
            Matches
          </div>
          <ul className="max-h-72 overflow-auto py-1">
            {preds.map((p, idx) => (
              <li key={p.place_id ?? p.description}>
                <button
                  type="button"
                  onClick={() => handleSelect(p)}
                  className={`flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 ${
                    idx === activeIndex ? "bg-gray-50" : ""
                  }`}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gray-200 text-gray-700">
                    {/* small pin */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </span>
                  <span className="line-clamp-1 text-sm text-gray-800">
                    {p.description}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Loading hint */}
      {loading && (
        <div className="absolute right-3 top-3.5 text-xs text-gray-400">
          Loading…
        </div>
      )}

      {/* Not ready / API not loaded */}
      {!mapsReady && (
        <div className="absolute inset-0 rounded-2xl bg-white/30 backdrop-blur-sm" />
      )}
    </div>
  );
}
