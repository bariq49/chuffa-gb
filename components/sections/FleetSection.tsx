import FleetCard from "../cards/FleetCard";
import CustomBoxSection from "./CustomBoxSection";

export default function FleetSection() {
  const vehicles = [
    {
      title: "Mercedes S-Class",
      imageSrc: "/sclass.png",
      rates: [
        { label: "Hourly rate (minimum 3 hours)", price: 70 },
        { label: "Day rate (8 hours)", price: 560 },
        { label: "Heathrow to Central London", price: 150 },
      ],
      primaryCta: { label: "BOOK THIS CAR", href: "/book?vehicle=s-class" },
      secondaryLink: { label: "Find out more", href: "/fleet/s-class" },
    },
    {
      title: "Mercedes V-Class",
      imageSrc: "/vclass.png",
      rates: [
        { label: "Hourly rate (minimum 3 hours)", price: 65 },
        { label: "Day rate (8 hours)", price: 480 },
        { label: "Heathrow to Central London", price: 135 },
      ],
      primaryCta: { label: "BOOK THIS CAR", href: "/book?vehicle=v-class" },
      secondaryLink: { label: "Find out more", href: "/fleet/v-class" },
    },
    {
      title: "Range Rover Vogue",
      imageSrc: "/rangerover.png",
      rates: [
        { label: "Hourly rate (minimum 3 hours)", price: 85 },
        { label: "Day rate (8 hours)", price: 680 },
        { label: "Heathrow to Central London", price: 170 },
      ],
      primaryCta: { label: "BOOK THIS CAR", href: "/book?vehicle=range-rover" },
      secondaryLink: { label: "Find out more", href: "/fleet/range-rover" },
    },
  ];

  return (
    <>
      <CustomBoxSection
        title="Our Fleet - Vehicles You Can Count On"
        content="Our versatile fleet caters to solo travelers, groups, and everyone in between. Every vehicle is rigorously maintained for safety, loaded with amenities like Wi-Fi, climate control, and premium seating, and operated by vetted experts."
      />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto">
        {vehicles.map((v) => (
          <FleetCard
            key={v.title}
            imageSrc={v.imageSrc}
            title={v.title}
            rates={v.rates}
            note="Prices subject to VAT"
            primaryCta={v.primaryCta}
            secondaryLink={v.secondaryLink}
          />
        ))}
      </div>
    </>
  );
}
