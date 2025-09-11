import CustomCard from "@/components/cards/CustomFaqs";
import CustomBoxSection from "@/components/sections/CustomBoxSection";
import FaqsSection from "@/components/sections/FaqsSections";
import NeedHelp from "@/components/sections/NeedHelp";
import WhyChooseUs from "@/components/sections/WyChooseUs";

export default function Faqs(){
 
    return(
        <div className="min-h-screen h-full">
        <CustomBoxSection title="FAQS" content="Common Questions Before Booking a Ride" />
        <WhyChooseUs/>
        <FaqsSection/>
        <NeedHelp/>
        </div>
    )
}