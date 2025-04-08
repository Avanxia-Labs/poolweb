import React from 'react';

interface CardProps {
  name: string;
  profession: string;
  avatar: string;
  description: string;
}

const CardReview: React.FC<CardProps> = ({ name, profession, avatar, description }) => {
  return (
    <div className='flex flex-col bg-white p-6 rounded-2xl shadow-lg max-w-[400px]'>
      <div className='flex items-center gap-4 mb-4'>
        <img src={avatar} alt={`${name}'s avatar`} className='w-14 h-14 rounded-full object-cover' />
        <div>
          <p className='text-lg font-semibold text-gray-900'>{name}</p>
          <p className='text-sm text-gray-500'>{profession}</p>
        </div>
      </div>
      <p className='text-base text-gray-700 leading-relaxed'>{description}</p>
    </div>
  );
};

export default CardReview;
