import React from "react";
import { Facebook, Instagram, Music2 } from "lucide-react";
import Link from 'next/link';

const MobileFooter = () => {
  return (
<section className="w-full bg-slate-900 px-4 py-10">
  <div className="w-full max-w-screen-sm mx-auto flex flex-col items-center text-center gap-8 rounded-2xl">
    <header className="text-white text-3xl font-bold leading-10">
      POOL QUALITY SOLUTION INC
    </header>

    <div className="flex flex-col gap-4 w-full items-center">
      {/* Email y Phone */}
      <div className="flex flex-col gap-2 items-center">
        {/* Email */}
        <div className="flex gap-2 items-center">
          <svg className="w-5 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>
          <span className="text-xs leading-7 text-white">poolqualitysolutions@hotmail.com</span>
        </div>

        {/* Phone */}
        <div className="flex gap-2 items-center">
          <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.09 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75 12.05 12.05 0 0 0 .56 1.59 1 1 0 0 1-.23 1.09L7.21 7.21a16 16 0 0 0 6.58 6.58l1.78-1.78a1 1 0 0 1 1.09-.23 12.05 12.05 0 0 0 1.59.56 1 1 0 0 1 .75 1V21z" />
          </svg>
          <span className="text-xs leading-7 text-white">+1 (239) 380-0766</span>
        </div>
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
        <Link href="/form"><span className="text-xs font-medium leading-6 text-white">Contact</span></Link>
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
