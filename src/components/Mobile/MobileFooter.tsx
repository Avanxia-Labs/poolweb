import React from "react";
import { Facebook, Instagram, Music2 } from "lucide-react";
import Link from 'next/link';

const MobileFooter = () => {
  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-12">
      <div className="w-full max-w-screen-sm mx-auto flex flex-col items-center text-center gap-6">

        {/* Logo/Nombre con mejor tipografía */}
        <header className="text-white text-2xl font-bold tracking-tight">
          Pool Quality Solutions
        </header>

        {/* Contacto con mejor tamaño */}
        <div className="flex flex-col gap-3 items-center">
          <a
            href="mailto:poolqualitysolutions@hotmail.com"
            className="flex gap-2 items-center text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M4 4l8 8 8-8" />
            </svg>
            <span className="text-sm">poolqualitysolutions@hotmail.com</span>
          </a>

          <a
            href="tel:+12393800766"
            className="flex gap-2 items-center text-gray-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            <span className="text-sm">+1 (239) 380-0766</span>
          </a>
        </div>

        {/* Divider mejorado */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

        {/* Navegación con pills */}
        <nav className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="px-4 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all">
            Home
          </Link>
          <Link href="/services" className="px-4 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all">
            Services
          </Link>
          <Link href="/about" className="px-4 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all">
            About Us
          </Link>
          <Link href="/contact" className="px-4 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all">
            Contact
          </Link>
        </nav>

        {/* Copyright discreto */}
        <p className="text-xs text-gray-500 mt-4">
          © 2025 Pool Quality Solutions. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default MobileFooter;
