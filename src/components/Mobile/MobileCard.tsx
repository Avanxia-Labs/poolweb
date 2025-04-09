// components/Card.tsx
import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function MobileCard({ icon, title, description }: CardProps) {
  return (
    <div className='max-w-[330px] max-h-[217px] flex flex-col flex-shrink-0 items-center'>
      <Image className='mb-[45px]' src={icon} alt={title} width={44} height={44} />
      <p className='mb-[22px] text-[#18181B] text-center font-plus_jakarta_sans text-[21px] font-bold leading-[28px] mx-auto max-w-[315px]'>
        {title}
      </p>
      <p className='text-center text-gray-600 font-plus_jakarta_sans text-base font-normal leading-6 w-[330px]'>
        {description}
      </p>
    </div>
  );
}
