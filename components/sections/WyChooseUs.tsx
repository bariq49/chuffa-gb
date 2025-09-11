import { FaClock, FaUserShield, FaCar, FaHeadset } from "react-icons/fa";
import ChooseCard from "../cards/ChooseCard";
import { JSX } from "react";

interface ChooseItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  chooseData: ChooseItem[];
  showHeader?: boolean;
  subtitle?: string;
  title?: string;
}

export default function WhyChooseUs({ 
  chooseData, 
  showHeader = false, 
  subtitle = "Why Choose Us",
  title = "Premium features designed to make every ride smooth, safe, and stress-free."
}: WhyChooseUsProps) {
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

  const dataToUse = chooseData && chooseData.length > 0 ? chooseData : defaultData;

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="max-w-2xl w-full pb-12">
            <h5 className="text-blue-200 font-semibold text-lg mb-2">{subtitle}</h5>
            <h1 className="text-white text-3xl md:text-4xl font-bold">{title}</h1>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dataToUse.map((item, index) => (
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