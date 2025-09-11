import CtaSection from "@/components/sections/CtaSection";
import CustomBoxSection from "@/components/sections/CustomBoxSection";
import FleetDetail from "@/components/sections/FleetDetail";
import OurSpeek from "@/components/sections/OurSpeak";
import VissionMission from "@/components/sections/VisionMission";
import WhyChooseUs from "@/components/sections/WyChooseUs";
import { FaCar, FaClock, FaHeadset, FaUserShield } from "react-icons/fa";

export default function About() {
    const descriptions = [
        "At Chuffagb, we do more than give rides – we create high-end chauffeur trips. With lots of years in the business and great knowledge of London's roads, we mix old-school service with today's luxury. From airport pickups to big events, your trip is with pros who know what they're doing."
    ]

    const customChooseData = [
        {
            icon: <FaClock />,
            title: "No Rush, Just Comfort",
            description: "We give you flexible pickup times so you can take it easy at the start of your ride."
        },
        {
            icon: <FaUserShield />,
            title: "Plans Change? We Get It",
            description: "You can update or cancel your booking up to 48 hours ahead without any hassle."
        },
        {
            icon: <FaCar />,
            title: "Know Where Your Driver Is",
            description: "Follow your driver's location live, with updates on when they'll arrive and the whole route."
        },
        {
            icon: <FaHeadset />,
            title: "Clear Prices, No Guesswork",
            description: "Our prices are shown right up front – no hidden extras or surprises at the end."
        }
    ];
    return (
        <>
            <CustomBoxSection title="ABOUT US" content="Home / About Us" />
            <FleetDetail
                title="Welcome to Chuffagb"
                descriptions={descriptions}
                imageUrl="/Group 2136.png"
                imageAlt="Airport Chauffeur Service"
            />
            <WhyChooseUs chooseData={customChooseData} showHeader={true}
                subtitle="Why Choose Us"
                title="Premium features designed to make every ride smooth, safe, and stress-free." />
                <OurSpeek/>
                <CtaSection/>
                <VissionMission/>
        </>
    )
}