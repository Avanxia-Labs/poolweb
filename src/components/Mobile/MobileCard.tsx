// components/MobileCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function MobileCard({ icon, title, description, href }: CardProps) {
  return (
    <div className="w-full flex flex-col flex-shrink-0 items-center px-4 h-full">
      <div className="flex flex-col items-center flex-grow">
        <Image
          className="mb-4 transition-transform duration-300 group-hover:scale-110"
          src={icon}
          alt={title}
          width={44}
          height={44}
        />

        <p className="mb-2 text-[#18181B] text-center font-['Plus_Jakarta_Sans'] text-lg font-bold leading-tight mx-auto max-w-[315px]">
          {title}
        </p>

        <p className="text-center text-gray-600 font-inter text-sm font-normal leading-relaxed w-full break-words mb-4">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="mt-auto group"
      >
        <div className="px-5 py-2.5 rounded-full border border-[#485AFF] bg-transparent text-[#485AFF] font-semibold text-sm 
                      active:bg-[#485AFF] active:text-white transition-all duration-300 flex items-center gap-2">
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
