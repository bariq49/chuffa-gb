import Button from '@/components/button/PrimaryButton';
import CustomBoxSection from '@/components/sections/CustomBoxSection';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center">
      <CustomBoxSection title="CONTACT US" content="Always Here to Help You" />
      
      <div className="w-full max-w-7xl mt-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="bg-white overflow-hidden border border-[#A6A6A6] rounded-xl p-8 lg:p-12 flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                ></textarea>
              </div>
              <div>
               <Button label='Send Message'/>
              </div>
            </form>
          </div>

          <div className="text-gray-800 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className=" p-3 mr-2 flex-shrink-0">
                  <FaPhoneAlt className="text- text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+44 7342 193341</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className=" p-3 mr-2 flex-shrink-0">
                  <IoMail className="text- text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@chuffagb.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className=" p-3 mr-2 flex-shrink-0">
                  <FaLocationDot className="text- text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">123 London Street, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}