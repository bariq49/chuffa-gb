"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button/PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";

type RateItem = { label: string; price: string | number };

export type FleetCardProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  rates: RateItem[];
  currencySymbol?: string;
  note?: string;
  primaryCta?: { label: string; href?: string; onClick?: () => void };
  secondaryLink?: { label: string; href?: string; onClick?: () => void };
  className?: string;
};

export default function FleetCard({
  imageSrc,
  imageAlt = "",
  title,
  rates,
  currencySymbol = "£",
  note = "Prices subject to VAT",
  primaryCta,
  secondaryLink,
  className = "",
}: FleetCardProps) {
  const formatPrice = (p: string | number) => (typeof p === "number" ? `${currencySymbol}${p}` : p);

  return (
    <article
      className={
        "relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 " +
        className
      }
      aria-label={title}
    >
      <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-xl ">
        <Image src={imageSrc} alt={imageAlt || title} width={900} height={420} className="h-auto w-full object-contain" priority />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold tracking-tight text-secondary dark:text-zinc-100">{title}</h3>

        <dl className="mt-4 space-y-2">
          {rates.map((row, i) => (
            <div key={i} className="flex items-start justify-between gap-4 pb-2 border-b border-secondary">
              <dt className="text-lg text-secondary dark:text-zinc-300 ">{row.label}</dt>
              <dd className="text-sm font-bold text-secondary ">{formatPrice(row.price)}</dd>
            </div>
          ))}
        </dl>

        {note && <span className="mt-4 text-md text-secondary dark:text-zinc-400 pb-4">{note}</span>}

        {primaryCta && (
          primaryCta.href ? (
            // <Link
            //   href={primaryCta.href}
            //   className="mt-4 inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            // >
            //   {primaryCta.label}
            //   <span aria-hidden className="ml-2">→</span>
            // </Link>
            <Button onClick={primaryCta.onClick} label={primaryCta.label} icon={<FaArrowRightLong />}/>
          ) : (
            // <button
            //   type="button"
            //    
            //   className="mt-4 inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            // >
            //   {primaryCta.label}
            //   <span aria-hidden className="ml-2">→</span>
            // </button>
            <Button label={primaryCta.label}/>
          )
        )}

        {secondaryLink && (
          secondaryLink.href ? (
            <Link href={secondaryLink.href} className="mt-3 self-center text-xs font-semibold underline text-black underline-offset-4 hover:underline dark:text-zinc-300">
              {secondaryLink.label}
            </Link>
          ) : (
            <button type="button" onClick={secondaryLink.onClick} className="mt-3 self-center text-xs font-medium text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-300">
              {secondaryLink.label}
            </button>
          )
        )}
      </div>
    </article>
  );
}
