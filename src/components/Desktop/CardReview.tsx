import React from 'react';

interface CardProps {
  name: string;
  profession: string;
  avatar: string;
  description: string;
}

const CardReview: React.FC<CardProps> = ({ name, profession, avatar, description }) => {
  return (
    <div className='flex w-full h-full flex-col bg-white p-6 rounded-2xl shadow-lg max-w-[400px]'>
      <div className='flex items-center gap-4 mb-4'>
        <img src={avatar} alt={`${name}'s avatar`} className='flex p-[10px_10px_10px_0px] justify-center items-center gap-[10px] rounded-full object-cover' />
        <div>
          <p className='text-[#18181B] font-plus-jakarta font-bold text-base leading-7'>{name}</p>
          <p className='text-[#18181B] font-plus_jakarta_sans text-[14px] not-italic font-normal leading-[22px]'>{profession}</p>
        </div>
      </div>
      <p className='flex mt-[10px] flex-col justify-end shrink-0 text-[#18181B] font-plus_jakarta_sans text-[18px] font-normal leading-[28px]'>{description}</p>
    </div>
  );
};

export default CardReview;
