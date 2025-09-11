'use client';

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 transition-transform duration-300"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CustomCard: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#AEAEAE] rounded-lg overflow-hidden mb-4">
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-2xl text-black'>{question}</span>
        <span className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}>
          <ChevronDown />
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="p-4 pt-0 text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
