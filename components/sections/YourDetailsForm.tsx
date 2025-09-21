"use client";
import React from "react";

export type Vehicle = { title: string; imageSrc: string; price: number };

export type DetailsFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pickupDateTime: string;
  passengers: string;
  suitcases: string;
  someoneElse?: boolean;
  airportPickup?: boolean;
  notes?: string;
};

export default function YourDetailsForm({
  selected,
  onBack,
  onSubmit,
}: {
  selected: Vehicle | null;
  onBack: () => void;
  onSubmit: (data: DetailsFormValues) => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: DetailsFormValues = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      pickupDateTime: String(fd.get("pickupDateTime") || ""),
      passengers: String(fd.get("passengers") || ""),
      suitcases: String(fd.get("suitcases") || ""),
      someoneElse: fd.get("someoneElse") === "on",
      airportPickup: fd.get("airportPickup") === "on",
      notes: String(fd.get("notes") || ""),
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 p-6">
      <h2 className="text-xl font-semibold text-zinc-900">Booking Details</h2>
      <p className="mt-1 text-sm text-zinc-500">Please fill in your travel details</p>

      {selected && (
        <div className="mt-4 rounded-lg border border-zinc-200 p-3 text-sm text-zinc-700">
          Selected Vehicle: <span className="font-medium">{selected.title}</span> · £{selected.price.toFixed(2)}
        </div>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-zinc-900">Personal Information</h3>
          <div className="space-y-3">
            <input name="firstName" className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-500" placeholder="First Name" />
            <input name="lastName" className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-500" placeholder="Last Name" />
            <input name="email" type="email" className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-500" placeholder="Email Address" />
            <div className="flex gap-2">
              <span className="inline-flex items-center rounded-lg border border-zinc-300 px-3 text-sm text-zinc-500">+44</span>
              <input name="phone" className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-500" placeholder="Enter phone number" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-zinc-900">Trip Details</h3>
          <div className="space-y-3">
            <input name="pickupDateTime" type="datetime-local" className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-500" placeholder="Pickup Date & Time" />
            <select name="passengers" className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-500">
              <option value="">Select passengers</option>
              {Array.from({ length: 8 }).map((_, i) => (
                <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
              ))}
            </select>
            <select name="suitcases" className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-500">
              <option value="">Select suitcases</option>
              {Array.from({ length: 8 }).map((_, i) => (
                <option key={i} value={String(i)}>{i}</option>
              ))}
            </select>

            <div className="mt-2 space-y-2">
              <label className="flex items-center gap-2 text-sm text-zinc-700">
                <input type="checkbox" name="someoneElse" className="h-4 w-4 rounded border-zinc-300" />
                Booking for someone else?
              </label>
              <label className="flex items-center gap-2 text-sm text-zinc-700">
                <input type="checkbox" name="airportPickup" className="h-4 w-4 rounded border-zinc-300" />
                Airport Pickup?
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-zinc-900">Additional Requirements</label>
        <textarea name="notes" rows={4} className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-500" placeholder="Enter any additional requirements (wheelchair access, child seat, etc.)" />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button type="button" onClick={onBack} className="inline-flex items-center rounded-lg border border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
          ‹ Back to Cars
        </button>
        <button type="submit" className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800">
          Go to Payment ›
        </button>
      </div>

      <div className="mx-auto mt-8 text-center text-sm text-zinc-500">
        Need more help? Call Us<br />+44 (0)20 8400 4829
      </div>
    </form>
  );
}
