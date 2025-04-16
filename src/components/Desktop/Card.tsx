// // components/Card.tsx
// import Image from 'next/image';

// interface CardProps {
//   icon: string;
//   title: string;
//   description: string;
// }

// export default function Card({ icon, title, description }: CardProps) {
//   return (
//     <div className='max-w-[330px] max-h-[217px] flex flex-col flex-shrink-0 gap-[1.19rem] items-center'>
//       <Image className='pt-[1rem]' src={icon} alt={title} width={51} height={51} />
//       <p className=' text-[#18181B] text-center font-plus_jakarta_sans text-[21px] font-bold leading-[28px] mx-auto max-w-[315px]'>
//         {title}
//       </p>
      
//       <p className="touch-auto text-center text-gray-600 font-plus_jakarta_sans text-base font-normal leading-6 max-w-[90%] overflow-hidden text-ellipsis line-clamp-4 hover:overflow-y-auto hover:line-clamp-none max-h-[96px] transition-all duration-200 ease-in-out px-1">
//         {description}
//       </p>


//     </div>
//   );
// }


"use client"

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  // Check if the text is overflowing
  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        const element = descriptionRef.current;
        setIsOverflowing(element.scrollHeight > element.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [description]);

  return (
    <div 
      className='max-w-[330px] max-h-[217px] flex flex-col flex-shrink-0 gap-[1.19rem] items-center relative'
      onMouseEnter={() => isOverflowing && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Image className='pt-[1rem]' src={icon} alt={title} width={51} height={51} />
      <p className='text-[#18181B] text-center font-plus_jakarta_sans text-[21px] font-bold leading-[28px] mx-auto max-w-[315px]'>
        {title}
      </p>
      
      <p 
        ref={descriptionRef}
        className="touch-auto text-center text-gray-600 font-plus_jakarta_sans text-base font-normal leading-6 max-w-[90%] overflow-hidden text-ellipsis line-clamp-4 max-h-[96px] px-1"
      >
        {description}
      </p>

      {/* Tooltip */}
      {showTooltip && isOverflowing && (
        <div className="absolute z-10 p-3 bg-gray-800 text-white rounded-md shadow-lg max-w-xs bottom-full mb-2 text-sm">
          {description}
          <div className="absolute w-3 h-3 bg-gray-800 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
        </div>
      )}
    </div>
  );
}

