import React from 'react';
import Button from '../button/PrimaryButton';

export default function CtaSection() {
  return (
    <div className="relative bg-black font-sans">
      <div 
        className="relative bg-cover bg-center overflow-hidden shadow-xl mx-4 sm:mx-8 lg:mx-16 my-12"
        style={{
          backgroundImage: 'url("/Rectangle 32.png")',
          minHeight: '400px', 
        }}
      >
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col justify-center h-full text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
                YOUR PRESTIGE RIDE AWAITS YOU
              </h2>
              <Button label='Book Instantly' className='w-1/2'/>

            </div>
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-2 border-white cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
