import CustomCard from "@/components/cards/CustomFaqs";
import CustomBoxSection from "@/components/sections/CustomBoxSection";
import FaqsSection from "@/components/sections/FaqsSections";
import NeedHelp from "@/components/sections/NeedHelp";
import WhyChooseUs from "@/components/sections/WyChooseUs";
import { FaCar, FaClock, FaHeadset, FaUserShield } from "react-icons/fa";

export default function Faqs(){
     const defaultData = [
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
 
    return(
        <div className="min-h-screen h-full">
        <CustomBoxSection title="FAQS" content="Common Questions Before Booking a Ride" />
        <WhyChooseUs chooseData={defaultData}/>
        <FaqsSection/>
        <NeedHelp/>
        </div>
    )
}