"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { PiSuitcaseSimple, PiHandbagSimple } from "react-icons/pi";
import { FiWifi, FiCheckCircle, FiArrowRight } from "react-icons/fi";

type Spec = { text: string; icon?: React.ReactNode };

export type FleetBookingCardProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  specs?: Spec[];
  features?: string[];
  price: number | string;
  currencySymbol?: string;
  cta?: { label: string; href?: string; onClick?: () => void };
  className?: string;
};

export default function FleetBookingCard({
  imageSrc,
  imageAlt = "",
  title,
  specs,
  features = [
    "First class chauffeur",
    "Free 60 mins airport waiting",
    "Free 15 mins waiting for other journeys",
    "Free cancellation within 24 hours",
  ],
  price,
  currencySymbol = "£",
  cta = { label: "Select Vehicle" },
  className = "",
}: FleetBookingCardProps) {
  const defaultSpecs: Spec[] = [
    { text: "4 Passengers", icon: <FaUserFriends className="h-4 w-4" /> },
    { text: "2 Small cases", icon: <PiSuitcaseSimple className="h-4 w-4" /> },
    { text: "2 Handbags", icon: <PiHandbagSimple className="h-4 w-4" /> },
    { text: "Onboard Wi-Fi", icon: <FiWifi className="h-4 w-4" /> },
  ];
  const specList = specs && specs.length ? specs : defaultSpecs;

  const priceStr =
    typeof price === "number"
      ? `${currencySymbol} ${price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      : price;

  return (
    <article
      className={
        "flex items-stretch gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:gap-6 md:p-6 dark:border-zinc-800 dark:bg-zinc-900 " +
        className
      }
      aria-label={title}
    >
      <div className="flex w-40 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 p-3 md:w-60 dark:border-zinc-800 dark:bg-zinc-800">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={520}
          height={260}
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between">
          <h3 className="truncate text-lg font-semibold tracking-wide text-zinc-900 md:text-xl dark:text-zinc-100">
            {title.toUpperCase()}
          </h3>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          {specList.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              {s.icon && <span className="text-zinc-500">{s.icon}</span>}
              <span>{s.text}</span>
              {i < specList.length - 1 && (
                <span className="mx-2 hidden h-4 w-px bg-zinc-200 md:inline dark:bg-zinc-700" />
              )}
            </div>
          ))}
        </div>

        <hr className="mt-4 border-zinc-200 dark:border-zinc-800" />

        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-200">
              <FiCheckCircle  />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex shrink-0 flex-col justify-between rounded-xl  bg-[#F9FAFB] text-right md:p-5">
        <div>
          <h6 className="text-sm font-medium text-[#4B5563]">Your Journey Price</h6>
          <p className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-100">
            {priceStr}
          </p>
        </div>

        {cta?.href ? (
          <Link
            href={cta.href}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {cta.label}
            <FiArrowRight className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          <button
            type="button"
            onClick={cta?.onClick}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {cta?.label ?? "Select Vehicle"}
            <FiArrowRight className="ml-2 h-4 w-4" />
          </button>
        )}
      </div>
    </article>
  );
}
