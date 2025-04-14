// components/Card.tsx
import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className='max-w-[330px] max-h-[217px] flex flex-col flex-shrink-0 gap-[1.19rem] items-center'>
      <Image className='pt-[1rem]' src={icon} alt={title} width={51} height={51} />
      <p className=' text-[#18181B] text-center font-plus_jakarta_sans text-[21px] font-bold leading-[28px] mx-auto max-w-[315px]'>
        {title}
      </p>
      
      <p className="touch-auto text-center text-gray-600 font-plus_jakarta_sans text-base font-normal leading-6 max-w-[90%] overflow-hidden text-ellipsis line-clamp-4 hover:overflow-y-auto hover:line-clamp-none max-h-[96px] transition-all duration-200 ease-in-out px-1">
        {description}
      </p>


    </div>
  );
}
