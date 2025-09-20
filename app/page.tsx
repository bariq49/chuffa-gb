import Button from "@/components/button/PrimaryButton";
import ClientSays from "@/components/sections/ClientSays";
import FleetSection from "@/components/sections/FleetSection";
import HeroSection from "@/components/sections/HeroSection";
import LandingServiceSec from "@/components/sections/LandingServiceSec";
import OfferSection from "@/components/sections/OfferSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <FleetSection/>
      <OfferSection/>
       <LandingServiceSec
      services={[
        {
          title: "Luxury Airport Transfers",
          description:
            "Get a smooth, private, and pro ride – enjoy top airport travel with skilled drivers at all major London airports, open 24/7.",
          imageSrc: "/Rectangle 42.png",
          ctaLabel: "View Details",
          ctaHref: "/airport-transfer",
        },
        {
          title: "Premier Hourly Chauffeur Services",
          description:
            "Our hourly chauffeur service is designed to make your day handy, whether it’s for work, leisure, or errands.",
          imageSrc: "/Rectangle 42 (2).png",
          ctaLabel: "View Details",
          ctaHref: "hourly-transfer",
        },
        {
          title: "High-End Executive Chauffeur Services",
          description:
            "Get a smooth, private, and pro ride – enjoy top airport travel with skilled drivers at all major London airports, open 24/7.",
          imageSrc: "/Rectangle 42 (5).png",
          ctaLabel: "View Details",
          ctaHref: "/executive-trasnfer",
        },
        {
          title: "Premier Hourly Chauffeur Services",
          description:
            "Get a smooth, private, and pro ride – enjoy top airport travel with skilled drivers at all major London airports, open 24/7.",
          imageSrc: "/Rectangle 42 (4).png",
          ctaLabel: "View Details",
          ctaHref: "/city-to-city",
        },
        {
          title: "Wedding Chauffeur Services",
          description:
            " Make your wedding entrance unforgettable with our luxury cars decorated in ribbons and flowers, driven by polite pros in sharp suits – all across London.",
          imageSrc: "/Rectangle 42 (1).png",
          ctaLabel: "View Details",
          ctaHref: "/weding-transfer",
        },
        {
          title: "Business-Class Travel Services",
          description:
            "Get a smooth, private, and pro ride – enjoy top airport travel with skilled drivers at all major London airports, open 24/7.",
          imageSrc: "/Rectangle 42 (3).png",
          ctaLabel: "View Details",
          ctaHref: "/premium-trasnfer",
        },
      ]}
    />
    <ClientSays/>
    </div>
  );
}
