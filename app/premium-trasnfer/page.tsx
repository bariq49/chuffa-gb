

import CustomBoxSection from "@/components/sections/CustomBoxSection";
import FaqsSection from "@/components/sections/FaqsSections";
import FleetDetail from "@/components/sections/FleetDetail";
import WhyChooseUs from "@/components/sections/WyChooseUs";
import { FaCar, FaClock, FaHeadset, FaUserShield } from "react-icons/fa";

export default function AirportTransfer() {
  const descriptions = [
    "If you're coming in or heading out, ChuffaGB makes your transfer easy, classy, and worry-free. We manage chauffeur providers at London City Airport, plus rides to and from Heathrow, Gawlock, Stansted, and other UK spots.",
    "We check your flight, meet you interior, help with baggage, and take you to a high-stop vehicle. Our drivers understand airport policies, brief routes, and incredible providers, so you get there on time and look correct."
  ];

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


  const customFaqData = [
    {
      question: "WHAT TYPES OF VEHICLES DO YOU OFFER?",
      answer: "We offer a range of luxury vehicles including sedans, SUVs, and executive vans to accommodate individuals and groups of all sizes."
    },
    {
      question: "HOW FAR IN ADVANCE SHOULD I BOOK?",
      answer: "We recommend booking at least 24 hours in advance to ensure availability, especially during peak seasons. However, we also accommodate last-minute requests when possible."
    },
    {
      question: "DO YOU PROVIDE CHILD SEATS?",
      answer: "Yes, we provide child seats upon request. Please specify your needs during booking so we can ensure the appropriate safety equipment is available."
    },
    {
      question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
      answer: "We accept all major credit cards, debit cards, and corporate accounts. Payment is processed securely through our encrypted payment system."
    },
    {
      question: "CAN I REQUEST A SPECIFIC CHAUFFEUR?",
      answer: "Yes, you can request a specific chauffeur if you've had a positive experience with them before. We'll do our best to accommodate your preference based on availability."
    }
  ];

  return (
    <>
     <CustomBoxSection title="Luxury Airport Transfers, On Time Every Time" content="Get a smooth, private, and pro ride – enjoy top airport travel with skilled drivers at all major London airports, open 24/7."/>
    <FleetDetail
    title="Business-Class Travel Services IN London"
    descriptions={descriptions}
    imageUrl="/Rectangle 42 (3).png"
    imageAlt="Airport Chauffeur Service"
    />
    <WhyChooseUs chooseData={customChooseData} />
    <CustomBoxSection title="FAQS" content="Frequently Asked Questions"/>
    <FaqsSection faqData={customFaqData} />

    </>
  );
}