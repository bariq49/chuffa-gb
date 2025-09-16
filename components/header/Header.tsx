'use client';

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HiMenu, HiOutlineX, HiPhone, HiOutlineDeviceMobile } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { navItems } from "@/utils/data";
import { usePathname } from "next/navigation";
import Image from "next/image";

const dropdownVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15, ease: "easeIn" } },
};

const sidebarVariants: Variants = {
    initial: { x: "100%" },
    animate: { x: "0%", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } }
};

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleDropdownToggle = (id: string) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    const handleMouseEnter = (id: string) => {
        if (window.innerWidth >= 768) {
            setActiveDropdown(id);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 768) {
            setActiveDropdown(null);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        if (activeDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown]);

    return (
        <header className={`${isHomePage ? 'fixed left-0 right-0 top-0 z-50' : 'relative'}`}>
            <div className={`${isHomePage ? 'bg-transparent' : 'bg-primary'}`}>
                <div className="container mx-auto md:px-12 px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo on the left */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/mainLogo.png"
                                alt="Company Logo"
                                width={120}
                                height={60}
                                className="h-12 w-auto"
                            />
                        </div>

                        {/* Navigation in the middle - hidden on mobile */}
                        <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
                            {navItems.map((item) => (
                                item.isDropdown ? (
                                    <div
                                        key={item.id}
                                        className="relative mx-2"
                                        onMouseEnter={() => handleMouseEnter(item.id)}
                                        onMouseLeave={handleMouseLeave}
                                        ref={dropdownRef}
                                    >
                                        <button
                                            onClick={() => handleDropdownToggle(item.id)}
                                            className="text-white hover:text-white/90 transition-colors flex items-center px-3 py-2"
                                        >
                                            {item.label}
                                            <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        <AnimatePresence>
                                            {activeDropdown === item.id && (
                                                <motion.div
                                                    className="absolute top-full left-0 bg-gray-900 shadow-lg rounded-md mt-2 p-2 min-w-[200px] z-10 text-white"
                                                    variants={dropdownVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                >
                                                    <ul className="space-y-1">
                                                        {item.items.map((subItem, index) => (
                                                            <li key={index}>
                                                                <a
                                                                    href={subItem.href}
                                                                    className="block px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
                                                                    onClick={() => setActiveDropdown(null)}
                                                                >
                                                                    {subItem.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        className="text-white hover:text-white/90 transition-colors px-3 py-2 mx-1"
                                    >
                                        {item.label}
                                    </a>
                                )
                            ))}
                        </nav>

                        {/* Contact info on the right - hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
                            <a 
                                href="tel:+447342193341" 
                                className="flex items-center text-white hover:text-white/90 transition-colors"
                            >
                                <HiOutlineDeviceMobile className="mr-2 h-5 w-5" />
                                <span className="hidden lg:inline">+44 7342 193341</span>
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:text-white/90 transition-colors p-2"
                            >
                                <FaInstagram className="h-5 w-5" />
                            </a>
                        </div>

                        {/* Mobile menu button - visible only on mobile */}
                        <div className="md:hidden">
                            <button onClick={toggleMobileMenu} className="text-white p-2">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={isMobileMenuOpen ? "close" : "open"}
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {isMobileMenuOpen ? <HiOutlineX size={24} /> : <HiMenu size={24} />}
                                    </motion.span>
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile sidebar menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-y-0 right-0 z-40 w-3/4 max-w-sm bg-primary/95 shadow-lg md:hidden overflow-y-auto p-6"
                        variants={sidebarVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-center mb-8">
                                <Image
                                    src="/mainLogo.png"
                                    alt="Company Logo"
                                    width={100}
                                    height={50}
                                    className="h-10 w-auto"
                                />
                                <button onClick={toggleMobileMenu} className="text-white p-2">
                                    <HiOutlineX size={24} />
                                </button>
                            </div>
                            
                            <nav className="flex-1">
                                {navItems.map((item) => (
                                    item.isDropdown ? (
                                        <div key={item.id} className="relative mb-4">
                                            <button
                                                onClick={() => handleDropdownToggle(item.id)}
                                                className="text-white font-medium text-lg w-full text-left flex items-center justify-between py-2"
                                            >
                                                {item.label}
                                                <svg className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === item.id && (
                                                    <motion.div
                                                        className="pl-4 mt-2 space-y-2 bg-black/10 rounded-md"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ul className="space-y-2 py-2">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <a
                                                                        href={subItem.href}
                                                                        className="block px-3 py-2 text-white/70 hover:text-white transition-colors"
                                                                        onClick={toggleMobileMenu}
                                                                    >
                                                                        {subItem.label}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <a
                                            key={item.id}
                                            href={item.href}
                                            className="text-white font-medium text-lg hover:text-white/90 transition-colors block py-2"
                                            onClick={toggleMobileMenu}
                                        >
                                            {item.label}
                                        </a>
                                    )
                                ))}
                            </nav>
                            
                            <div className="pt-8 border-t border-white/20 mt-8">
                                <a 
                                    href="tel:+447342193341" 
                                    className="flex items-center text-white mb-4"
                                >
                                    <HiOutlineDeviceMobile className="mr-3 h-5 w-5" />
                                    <span>+44 7342 193341</span>
                                </a>
                                <a 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center text-white"
                                >
                                    <FaInstagram className="mr-3 h-5 w-5" />
                                    <span>Follow us on Instagram</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-30 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMobileMenu}
                    />
                )}
            </AnimatePresence>
        </header>
    );
}