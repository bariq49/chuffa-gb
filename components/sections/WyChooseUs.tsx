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
}

export default function WhyChooseUs({ chooseData }: WhyChooseUsProps) {
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
    <section className="py-18 bg-primary">
      <div className="container mx-auto px-4">
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