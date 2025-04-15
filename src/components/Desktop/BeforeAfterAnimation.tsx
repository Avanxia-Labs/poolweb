// import React from 'react';

// const BeforeAfterAnimation = () => {
//   return (
//     <div className="relative inset-0 w-full h-full overflow-hidden">
//       <div 
//         id='Before' 
//         className='absolute inset-0 flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0 before-animation'
//       >
//         <p className='text-[#3D4B5C] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px] blur-[11.9px]'>BEFORE</p>
//       </div>

//       <div 
//         id='After' 
//         className='absolute inset-0 flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0 after-animation'
//       >
//         <p className='text-[#49EDF2] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px] tracking-[63.91px]'>AFTER</p>
//       </div>
      
//       {/* Este div es para mantener el tamaño del contenedor */}
//       <div className='invisible flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0 p-20'>
//         <p className='text-[#3D4B5C] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px]'>SPACER</p>
//       </div>
//     </div>
//   );
// };

// export default BeforeAfterAnimation;


import React from 'react';
import { useEffect, useState } from 'react';

const BeforeAfterAnimation = () => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate responsive font size based on viewport width
  const getFontSize = () => {
    const baseSize = viewport.width < 640 ? 10 : viewport.width < 768 ? 12 : viewport.width < 1024 ? 16 : 20;
    return `${baseSize}vw`;
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div 
        id='Before' 
        className='absolute inset-0 flex w-full mx-auto h-full justify-center items-center before-animation'
      >
        <p className='text-gray-600 text-center font-bold blur-md' style={{ 
          fontSize: getFontSize(),
          lineHeight: '1.2'
        }}>BEFORE</p>
      </div>

      <div 
        id='After' 
        className='absolute inset-0 flex w-full mx-auto h-full justify-center items-center after-animation'
      >
        <p className='text-cyan-400 text-center font-bold' style={{ 
          fontSize: getFontSize(),
          lineHeight: '1.2',
          letterSpacing: '0.1em'
        }}>AFTER</p>
      </div>
      
      {/* Spacer to maintain container size */}
      <div className='invisible flex w-full mx-auto h-full justify-center items-center p-4 md:p-8 lg:p-12'>
        <p className='text-gray-600 text-center font-bold' style={{ 
          fontSize: getFontSize(),
          lineHeight: '1.2'
        }}>SPACER</p>
      </div>
    </div>
  );
};

export default BeforeAfterAnimation;