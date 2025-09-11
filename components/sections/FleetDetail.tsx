import React from 'react';
import Image from 'next/image';

interface FleetDetailProps {
  title: string;
  descriptions: string[];
  imageUrl: string;
  imageAlt: string;
  services?: string[];
}

export default function FleetDetail({ 
  title, 
  descriptions, 
  imageUrl, 
  imageAlt, 
}: FleetDetailProps) {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl m-auto">
            
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-12">
                <Image 
                  src={imageUrl} 
                  alt={imageAlt}
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
          <h2>{title}</h2>
            <div className="prose prose-lg max-w-none">
              {descriptions.map((desc, index) => (
                <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>
 
          </div>
        </div>
   
      </div>
    </div>
  );
}