"use client"

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function Card({ icon, title, description, href }: CardProps) {
  return (
    <div className='w-full flex flex-col flex-shrink-0 gap-[1.19rem] items-center py-4 h-full justify-between'>
      <div className='flex flex-col items-center gap-[1.19rem]'>
        <Image
          className='pt-[0.5rem] mt-2'
          src={icon}
          alt={title}
          width={51}
          height={51}
        />

        <p className="text-[#18181B] text-center font-['Plus_Jakarta_Sans'] text-xl font-bold leading-tight mx-auto max-w-[315px] px-2">
          {title}
        </p>

        <p className="text-center text-gray-600 font-inter text-base font-normal leading-relaxed max-w-[95%] px-1 pb-2">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="mt-4 group"
      >
        <div className="px-5 py-2.5 rounded-full border border-[#485AFF] bg-transparent text-[#485AFF] font-semibold text-sm 
                      hover:bg-[#485AFF] hover:text-white transition-all duration-300 flex items-center gap-2">
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
