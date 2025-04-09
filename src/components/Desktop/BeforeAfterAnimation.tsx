import React from 'react';

const BeforeAfterAnimation = () => {
  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      <div 
        id='Before' 
        className='absolute inset-0 flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0 before-animation'
      >
        <p className='text-[#3D4B5C] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px] blur-[11.9px]'>BEFORE</p>
      </div>

      <div 
        id='After' 
        className='absolute inset-0 flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0 after-animation'
      >
        <p className='text-[#49EDF2] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px] tracking-[63.91px]'>AFTER</p>
      </div>
      
      {/* Este div es para mantener el tamaño del contenedor */}
      <div className='invisible flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0 p-20'>
        <p className='text-[#3D4B5C] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px]'>SPACER</p>
      </div>
    </div>
  );
};

export default BeforeAfterAnimation;