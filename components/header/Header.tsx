'use client';

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import TopBar from "./TopBar";
import { navItems } from "@/utils/data";

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
        <div className="flex flex-col bg-primary/50 absolute w-full z-50">
            <TopBar />
            <div className="bg-transparent">
                <div className="container mx-auto px-4 py-5">
                    <div className="flex items-center justify-center relative">
                        {/* Logo */}
                        <div className="absolute left-0">
                            <h1 className="text-2xl font-bold text-white">Chuffa GB</h1>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                item.isDropdown ? (
                                    <div
                                        key={item.id}
                                        className="relative"
                                        onMouseEnter={() => handleMouseEnter(item.id)}
                                        onMouseLeave={handleMouseLeave}
                                        ref={dropdownRef}
                                    >
                                        <button
                                            onClick={() => handleDropdownToggle(item.id)}
                                            className="text-white hover:text-white/90 transition-colors flex items-center"
                                        >
                                            {item.label}
                                            <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        <AnimatePresence>
                                            {activeDropdown === item.id && (
                                                <motion.div
                                                    className="absolute top-full left-1/2 -translate-x-1/2 bg-gray-900 shadow-lg rounded-md mt-2 p-2 min-w-[300px] z-10 text-white"
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
                                        className="text-white hover:text-white/90 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                )
                            ))}
                        </nav>

                        <div className="absolute right-0 md:hidden">
                            <button onClick={toggleMobileMenu} className="text-white">
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

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-y-0 right-0 z-40 w-3/4 max-w-sm bg-primary/95 shadow-lg md:hidden overflow-y-auto p-8"
                        variants={sidebarVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <nav className="flex flex-col space-y-4 mt-16">
                            {navItems.map((item) => (
                                item.isDropdown ? (
                                    <div key={item.id} className="relative">
                                        <button
                                            onClick={() => handleDropdownToggle(item.id)}
                                            className="text-white font-medium text-lg w-full text-left flex items-center justify-between"
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
                                                    <ul className="space-y-1 mt-1 pb-2">
                                                        {item.items.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <a
                                                                    href={subItem.href}
                                                                    className="block px-3 py-1 text-white/70 hover:text-white transition-colors"
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
                                        className="text-white font-medium text-lg hover:text-white/90 transition-colors"
                                        onClick={toggleMobileMenu}
                                    >
                                        {item.label}
                                    </a>
                                )
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMobileMenu}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}