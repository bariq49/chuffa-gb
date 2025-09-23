"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { phoneInfo } from "@/utils/data";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "bg-black/30 backdrop-blur-md w-full"
          : "bg-black/30 max-w-7xl"
      } text-white transition-colors duration-300 border-b border-[#898787] m-auto py-1 px-6 flex items-center justify-between z-50`}
    >
      {/* Left Side - Empty */}
      <div className="w-1/3"></div>

      {/* Center - Logo */}
      <div className="w-1/3 flex justify-center">
        <Image
          src="/mainLogo.png"
          alt="Company Logo"
          width={120}
          height={60}
          className="h-12 w-auto"
        />
      </div>

      {/* Right Side - Instagram + Phone */}
      <div className="w-1/3 flex justify-end items-center gap-6">
        <a
          href={`tel:${phoneInfo.number}`}
          className="flex items-center gap-2 hover:text-white/90 transition-colors"
          aria-label={phoneInfo.label}
        >
          <FaPhoneAlt className="text-sm" />
          <span>{phoneInfo.number}</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/90 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
