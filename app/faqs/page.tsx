import CustomBoxSection from "@/components/sections/CustomBoxSection";
import WhyChooseUs from "@/components/sections/WyChooseUs";

export default function Faqs(){
    return(
        <div className="min-h-screen h-full">
        <CustomBoxSection title="FAQS" content="Common Questions Before Booking a Ride" />
        <WhyChooseUs/>
        </div>
    )
}