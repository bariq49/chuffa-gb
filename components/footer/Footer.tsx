import { contactInfo, quickLinks, socialLinks } from '@/utils/data';
import React from 'react';

export default function Footer() {

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          <div>
            <h3 className="md:text-2xl text-lg mb-4">Chuffa GB</h3>
            <p className="text-secondary">
              London's premier chauffeur service, providing safe and comfortable journeys across the city.
            </p>
          </div>
          <div>
            <h3 className="md:text-2xl text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-secondary">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="md:text-2xl text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-secondary">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className='text-white'>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="md:text-2xl text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:text-white hover:bg-secondary text-primary"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-secondary text-sm">
          <p>© 2024 Chuffa GB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}