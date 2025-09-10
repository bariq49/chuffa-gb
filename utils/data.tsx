import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export const navItems = [
  { id: "home", label: "Home", href: "#" },
  { id: "about", label: "About", href: "#" },
  {
    id: "fleet",
    label: "Our Fleet",
    isDropdown: true,
    items: [
      { label: "Premier Airport Chauffeur Service in London", href: "#" },
      { label: "Custom Hourly Chauffeur Service", href: "#" },
      { label: "Elite Executive Chauffeur Services in London", href: "#" },
      { label: "Scenic City-to-City Drives", href: "#" },
      { label: "Elegant Wedding Chauffeur Service in London", href: "#" },
      { label: "Premium Business Class Service", href: "#" }
    ]
  },
  { id: "blog", label: "Blog", href: "#" },
  { id: "faqs", label: "FAQs", href: "#" },
  { id: "contact", label: "Contact", href: "#" }
];


export const phoneInfo = {
  number: "+447342193341",
  label: "Call us"
};

export const socialLinks = [
  {
    href: "https://facebook.com",
    icon: <FaFacebookF size={18} />,
    label: "Visit our Facebook"
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter size={18} />,
    label: "Visit our Twitter"
  },
  {
    href: "https://instagram.com",
    icon: <FaInstagram size={18} />,
    label: "Visit our Instagram"
  },
  {
    href: "https://linkedin.com",
    icon: <FaLinkedinIn size={18} />,
    label: "Visit our LinkedIn"
  }
];


export const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "Our Fleet", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact", href: "#" }
];

export const contactInfo = [
  { text: "123 London Street, UK", icon: <FaLocationDot size={18} /> },
  {
    text: "+44 7342 193341", icon: <FaPhoneAlt size={18} />
  },
  {
    text: "info@chuffagb.com", icon: <IoMdMail size={18} />
  },
];
