"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CustomBoxSection from "./CustomBoxSection";

type ServiceItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type LandingServiceSecProps = {

  services: ServiceItem[];
  initialIndex?: number;
  className?: string;
  onChange?: (index: number) => void;
};

export default function LandingServiceSec({
  services,
  initialIndex = 0,
  className = "",
  onChange,
}: LandingServiceSecProps) {
  const [active, setActive] = useState(Math.min(initialIndex, services.length - 1));
  const s = services[active];

  const setActiveIdx = (i: number) => {
    setActive(i);
    onChange?.(i);
  };

  return (
    <section className={`w-full bg-white pt-8 pb-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <CustomBoxSection title="Our Premium Chauffeur Services" content="Enjoy the best in elegance, comfort, and dependability for getting about the city or travelling great distances. We offer personalised services that match your needs, making every trip a pleasure."/>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <h3 className="mb-4 text-lg font-semibold text-zinc-900">Services</h3>
            <ul className="space-y-3">
              {services.map((item, i) => {
                const activeState = i === active;
                return (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      className={`w-full rounded-lg px-2 py-2 text-left text-sm transition ${
                        activeState
                          ? "bg-zinc-100 font-semibold text-zinc-900"
                          : "text-zinc-500 hover:text-zinc-800"
                      }`}
                      aria-current={activeState ? "true" : undefined}
                    >
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={s.imageSrc}
                    alt={s.imageAlt || s.title}
                    width={1000}
                    height={700}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col">
                <h4 className="text-xl font-semibold text-zinc-900">{s.title}</h4>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{s.description}</p>

                {(s.ctaHref || s.ctaLabel) && (
                  <div className="mt-6">
                    {s.ctaHref ? (
                      <Link
                        href={s.ctaHref}
                        className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                      >
                        {s.ctaLabel || "View Details"}
                      </Link>
                    ) : (
                      <button
                        className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                        type="button"
                      >
                        {s.ctaLabel || "View Details"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
