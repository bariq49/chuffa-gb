"use client";
import FleetBookingCard from "@/components/cards/FleetBookingCard";
import { useMemo } from "react";

type Step = { label: string };

function Stepper({ steps, current }: { steps: Step[]; current: number }) {
  return (
    <div className="flex items-center gap-4">
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={s.label} className="flex flex-1 items-center gap-4">
            <div className="flex items-center">
              <div
                className={[
                  "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
                  active || done
                    ? "bg-[#0b1b36] text-white border-[#0b1b36]"
                    : "bg-white text-zinc-600 border-zinc-300",
                ].join(" ")}
              >
                {i + 1}
              </div>
              <span
                className={[
                  "ml-2 text-sm",
                  active || done ? "text-zinc-900 font-medium" : "text-zinc-500",
                ].join(" ")}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={[
                  "h-px flex-1",
                  done ? "bg-[#0b1b36]" : "bg-zinc-200",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function BookingVehicle() {
  const steps: Step[] = [
    { label: "Locations" },
    { label: "Cars" },
    { label: "Your Details" },
    { label: "Payment" },
  ];
  const currentStep = 1;

  const vehicles = useMemo(
    () => [
      {
        title: "Mercedes S-Class",
        imageSrc: "/sclass.png",
        price: 248.86,
      },
      {
        title: "Mercedes V-Class",
        imageSrc: "/vclass.png",
        price: 248.86,
      },
      {
        title: "Range Rover",
        imageSrc: "/rangerover.png",
        price: 248.86,
      },
    ],
    []
  );

  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>{`STEP ${currentStep + 1} OF ${steps.length}`}</span>
          <span>{`${vehicles.length} chauffeur driven cars available`}</span>
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          SELECT YOUR CAR
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          SELECT YOUR LUXURY CHAUFFEUR DRIVEN CAR
        </p>

        <div className="mt-6">
          <Stepper steps={steps} current={currentStep} />
        </div>

        <div className="mt-8 space-y-8">
          {vehicles.map((v) => (
            <FleetBookingCard
              key={v.title}
              imageSrc={v.imageSrc}
              title={v.title}
              price={v.price}
              cta={{ label: "Select Vehicle", href: `/booking?vehicle=${encodeURIComponent(v.title)}` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
