"use client";
import { FaCarSide, FaClock, FaCalendarCheck, FaRoute } from "react-icons/fa";

export default function OfferSection() {
  const offers = [
    {
      icon: <FaCarSide className="h-8 w-8 text-primary" />,
      title: "Value-Driven Travel",
      description:
        "Maximize savings with our affordable chauffeur service in London. Solo, family, or group—we deliver premium rides that balance budget, luxury, and safety.",
    },
    {
      icon: <FaClock className="h-8 w-8 text-primary" />,
      title: "Generous Wait Time",
      description:
        "Relax with included extended wait times in our business chauffeur service. We handle delays gracefully for a stress-free pickup-to-drop-off experience.",
    },
    {
      icon: <FaCalendarCheck className="h-8 w-8 text-primary" />,
      title: "Flexible Cancellation",
      description:
        "Adapt to changes with 48-hour free cancellations for our event chauffeur service. Confidently plan outings, galas, or celebrations without worry.",
    },
    {
      icon: <FaRoute className="h-8 w-8 text-primary" />,
      title: "Real-Time Journey Tracking",
      description:
        "Stay informed via our app with live tracking in our hourly chauffeur service. Ensure accuracy, timing, and security throughout your trip.",
    },
  ];

  return (
    <section className="bg-primary py-16 px-6 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-12">
          What Do We Offer?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-lg"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-white">
                {offer.icon}
              </div>
              <div>
                <h6 className="text-xl text-left text-white font-bold mb-2">{offer.title}</h6>
                <h6 className="text-md text-[#B8B8B8] text-justify">{offer.description}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
