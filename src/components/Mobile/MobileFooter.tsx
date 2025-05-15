import React from "react";
import { Facebook, Instagram, Music2 } from "lucide-react";
import Link from 'next/link';

const MobileFooter = () => {
  return (
<section className="w-full bg-slate-900 px-4 py-10">
  <div className="w-full max-w-screen-sm mx-auto flex flex-col items-center text-center gap-8 rounded-2xl">
    <header className="text-white text-3xl font-bold leading-10">
      POOL QUALITY SOLUTIONS INC
    </header>

    <div className="flex flex-col gap-4 w-full items-center">
      {/* Email y Phone */}
      <div className="flex flex-col gap-2 items-center">
          {/* Email */}
            <a
              href="mailto:poolqualitysolutions@hotmail.com"
              className="flex gap-2 items-center hover:underline"
            >
              <svg className="w-5 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="M4 4l8 8 8-8" />
              </svg>
              <span className="text-xs leading-7 text-white">poolqualitysolutions@hotmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+12393800766"
              className="flex gap-2 items-center hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
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
              <span className="text-xs leading-7 text-white">+1 (239) 380-0766</span>
            </a>
        </div>
      {/* Social Icons */}
      <div className="flex justify-center gap-12 py-5">
        {/* <Music2 className="text-white w-6 h-6" aria-label="TikTok" />
        <Facebook className="text-white w-6 h-6" aria-label="Facebook" />
        <Instagram className="text-white w-6 h-6" aria-label="Instagram" /> */}
      </div>

      <hr className="w-full h-px bg-zinc-600" />

      {/* Navegación */}
      <nav className="flex flex-wrap gap-6 justify-center">
        <Link href="/"><span className="text-xs font-medium leading-6 text-white">Home</span></Link>
        <Link href="/services"><span className="text-xs font-medium leading-6 text-white">Services</span></Link>
        <Link href="/about"><span className="text-xs font-medium leading-6 text-white">About Us</span></Link>
        <Link href="/contact"><span className="text-xs font-medium leading-6 text-white">Contact</span></Link>
      </nav>

      {/* Copyright */}
      <div className="mt-5 text-sm leading-6 text-white">
        © Copyright 2025, All Rights Reserved
      </div>
    </div>
  </div>
</section>

  );
};

export default MobileFooter;
