import React from 'react';

export default function OurSpeek() {
  const stats = [
    { value: '189+', label: 'Happy Customers' },
    { value: '20+', label: 'Verified Professional Drivers' },
    { value: '500+', label: 'Successful Chauffeured Trips' },
    { value: '99%', label: 'Customer Satisfaction Rate' },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase border-b inline-block">Numbers Speak</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-12">
          OUR JOURNEY SO FAR
        </h2>
        <div 
          className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-xl"
          style={{ backgroundImage: 'url("/Rectangle 30.png")' }}
        >
          <div className="absolute inset-0 opacity-60"></div>
          
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 text-white">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-4xl sm:text-5xl  font-bold">{stat.value}</h4>
                  <h4 className="text-lg mt-2 opacity-80">{stat.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
