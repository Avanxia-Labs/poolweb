import React from "react";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-12 md:py-16">
            <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center text-center gap-8 md:gap-10">

                {/* Logo/Name */}
                <header className="text-white text-2xl md:text-3xl font-bold tracking-tight font-['Plus_Jakarta_Sans']">
                    Pool Quality Solutions
                </header>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    <a
                        href="mailto:poolqualitysolutions@hotmail.com"
                        className="flex gap-2 items-center text-gray-300 hover:text-white transition-colors group"
                    >
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M4 4h16v16H4z" />
                                <path d="M4 4l8 8 8-8" />
                            </svg>
                        </div>
                        <span className="text-sm md:text-base font-inter">poolqualitysolutions@hotmail.com</span>
                    </a>

                    <a
                        href="tel:+12393800766"
                        className="flex gap-2 items-center text-gray-300 hover:text-white transition-colors group"
                    >
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 md:w-5 md:h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                />
                            </svg>
                        </div>
                        <span className="text-sm md:text-base font-inter">+1 (239) 380-0766</span>
                    </a>
                </div>

                {/* Divider */}
                <div className="w-16 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50" />

                {/* Navigation */}
                <nav className="flex flex-wrap gap-3 md:gap-6 justify-center">
                    {[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: 'About Us', href: '/about' },
                        { label: 'Contact', href: '/contact' }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="px-4 py-1.5 text-sm md:text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all font-inter"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Copyright */}
                <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-8 font-inter">
                    © {new Date().getFullYear()} Pool Quality Solutions. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
