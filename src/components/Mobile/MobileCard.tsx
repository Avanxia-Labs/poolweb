// components/Card.tsx
import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function MobileCard({ icon, title, description }: CardProps) {
  return (
    <div className="max-w-[330px] flex flex-col flex-shrink-0 items-center px-4">
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

      <p className="text-center text-gray-600 font-inter text-sm font-normal leading-relaxed w-full break-words">
        {description}
      </p>
    </div>
  );
}
