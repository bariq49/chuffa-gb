import { FaClock, FaUserShield, FaCar, FaHeadset } from "react-icons/fa";
import ChooseCard from "../cards/ChooseCard";

const chooseData = [
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

export default function WhyChooseUs() {
    return (
        <section className="py-16 bg-primary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
                    <h5 className="text-white text-lg">Experience the difference with our premium transportation services</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {chooseData.map((item, index) => (
                        <ChooseCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}