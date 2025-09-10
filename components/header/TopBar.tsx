import { phoneInfo, socialLinks } from "@/utils/data";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";

export default function TopBar() {


  return (
    <div className="bg-primary  text-white py-3 pr-12 flex items-center justify-end gap-12">
        <div className="mb-2 sm:mb-0">
          <a 
            href={`tel:${phoneInfo.number}`}
            className="flex items-center gap-2 hover:text-white/90 transition-colors"
            aria-label={phoneInfo.label}
          >
            <FaPhoneAlt className="text-sm" />
            <span>{phoneInfo.number}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/90 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
    </div>
  );
}