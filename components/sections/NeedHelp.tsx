import React from 'react';
import Button from '../button/PrimaryButton';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoChatbubblesSharp } from 'react-icons/io5';

interface CustomCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ icon, title, description, buttonText }) => (
  <div className="bg-[#F5F5F5] p-6 rounded-2xl flex-1 m-2 ">
    <div className="flex flex-col items-left">
      <div className="text-4xl text-gray-700 mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-medium mb-2">{title}</h4>
      <p className="text-gray-500 mb-4">{description}</p>
      <Button label={buttonText}/>
    </div>
  </div>
);

export default function NeedHelp() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 font-sans flex justify-center items-center">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl text-center font-extrabold text-gray-900 mb-8">
          NEED QUICK HELP? WE'RE HERE FOR YOU
        </h2>
        <div className="flex flex-wrap justify-center items-stretch -m-2">
          <CustomCard
            icon={<FaPhoneAlt />}
            title="Speak With Our Team"
            description="Prefer to talk? Give us a call or send an email. We'll handle your booking or any questions about chauffeur service in London UK."
            buttonText="Contact Us"
          />
          <CustomCard
            icon={
              <IoChatbubblesSharp />
            }
            title="Instant Chat Support"
            description="Got a question or need to tweak something? Chat with our team live – we're available 24/7 to sort it out during your ride or anytime."
            buttonText="Start Chat"
          />
        </div>
      </div>
    </div>
  );
}
