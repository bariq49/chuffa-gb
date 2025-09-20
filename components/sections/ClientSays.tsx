"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Testimonial = {
  name: string;
  quote: string;
  avatarSrc: string;
  rating?: number;
};

export default function ClientSays() {
  const heading = "WHAT OUR PASSENGERS SAY";
  const blurb =
    "Listen to our happy clients. With a 4.9/5 average rating, 600+ monthly rides, and 93% satisfaction from verified trips, we consistently surpass expectations.";
  const cta = { label: "Get Started", href: "/get-started" };

  const testimonials: Testimonial[] = [
    {
      name: "Meera V.",
      quote:
        "Exceptional event chauffeur service in London—punctual, professional, and made our night truly special!",
      avatarSrc: "/avatars/meera.jpg",
      rating: 5,
    },
    {
      name: "James H.",
      quote:
        "Airport pickup was smooth and stress-free. Car was pristine and the driver was fantastic.",
      avatarSrc: "/avatars/james.jpg",
      rating: 5,
    },
    {
      name: "Sofia R.",
      quote:
        "Booked hourly for meetings. Always on time and the ride quality is top-notch.",
      avatarSrc: "/avatars/sofia.jpg",
      rating: 5,
    },
  ];

  const [idx, setIdx] = useState(0);
  const go = (dir: -1 | 1) => setIdx((p) => (p + dir + testimonials.length) % testimonials.length);

  const t = testimonials[idx];
  const stars = Array.from({ length: t.rating ?? 5 });

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-xl text-zinc-600">{blurb}</p>
          <Link
            href={cta.href}
            className="mt-6 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            {cta.label}
            <span aria-hidden className="ml-2">↗</span>
          </Link>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="overflow-hidden rounded-xl bg-[#0b1b36] p-6 text-white">
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatarSrc}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-sm font-semibold">{t.name}</span>
              </div>

              <p className="mt-4 text-[15px] leading-7 text-zinc-200">“{t.quote}”</p>

              <div className="mt-4 flex items-center gap-1 text-amber-400">
                {stars.map((_, i) => (
                  <FaStar key={i} className="h-4 w-4" />
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => go(-1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
              >
                <FiChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => go(1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
              >
                <FiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
