// import React from 'react'
// import CardReview from './CardReview'

// function Section6() {
//     return (
//         <section id='6' className='w-full flex flex-row relative py-[2.75rem] px-[4.38rem] gap-[1.56rem] bg-[#161F7B] max-w-[1920px] h-[42rem] flex-shrink-0'>
//                 {/* Sección de texto */}
//                 <div id='Customers' className='bg-indigo-200 flex w-1/3 flex-col justify-center gap-[2.5rem] z-10'>
//                     <p className='bg-black md:px-[1.5px] text-[#F5F9FF] font-inter text-[64px] font-extrabold leading-[76px]'>Customers say About Us</p>
//                     <p className=' bg-black text-[#F5F9FF] font-inter text-[1.5rem] not-italic font-normal leading-[2.375rem]'>
//                         Trust is built through results. Here you can read what our clients say about their experience with our service. Their words reflect our commitment to quality and excellence.
//                     </p>
//                 </div>

//                 {/* Contenedor relativo para posicionar los comentarios */}
//                 <div className='relative bg-indigo-400 w-2/3 h-full px-[1.5rem] py-[1.5rem] flex flex-row items-center'>

//                     <div id='Comentario1' className='rounded-2xl absolute z-5 flex bg-black h-[348px] w-[400px] rotate-[-1.97deg] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
//                         <CardReview
//                             name={'Rick'}
//                             profession={'Consultant'}
//                             avatar={'/images/avatar.png'}
//                             description={'Geo and his team are awesome. They handle everything in a timely manner and are always a great price! No matter where I move in Naples, they are coming with me! Highly recommend!'} />
//                     </div>

//                     <div id='Comentario2' className='rounded-2xl absolute mt-[10%] left-[35%] z-10 flex bg-black h-[318.575px] w-[396.277px] rotate-[6.036deg] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
//                         <CardReview
//                             name={'Joe'}
//                             profession={'Profesional Manager'}
//                             avatar={'/images/avatar.png'}
//                             description={'“Great service! My pool looks fantastic, and I trust the water is safe thanks to their expertise. Highly recommend!”'} />
//                     </div>

//                 </div>
//             </section>

//     )
// }

// export default Section6








import React, { useState } from 'react';
import CardReview from './CardReview';

function Section6() {
  const [activeCard, setActiveCard] = useState(0);
  
  const reviews = [
    {
      name: 'Mostafa Hussein',
      profession: 'Client',
      avatar: '/images/avatar.png',
      description: 'Geo and his team are awesome. They handle everything in a timely manner and are always a great price! No matter where I move in Naples, they are coming with me! Highly recommend!'
    },
    {
      name: 'Marvin McKinney',
      profession: 'Project Manager',
      avatar: '/images/Marvin.png',
      description: '"Great service! My pool looks fantastic, and I trust the water is safe thanks to their expertise. Highly recommend!"'
    }
  ];

  const nextCard = () => {
    setActiveCard((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section 
      id='6' 
      className='w-full flex flex-col sm:flex-row relative py-8 sm:py-10 lg:py-[2.75rem] px-4 sm:px-6 lg:px-[4.38rem] gap-6 sm:gap-[1.56rem] bg-[#161F7B] h-auto sm:h-[32rem] lg:h-[42rem] flex-shrink-0 overflow-hidden'
    >
      {/* Text section */}
      <div 
        id='Customers' 
        className='flex w-full sm:w-1/3 flex-col justify-center gap-4 sm:gap-6 lg:gap-[2.5rem] z-10 py-4 sm:py-0'
      >
        <p className='text-[#F5F9FF] font-inter text-3xl sm:text-4xl lg:text-[64px] font-extrabold leading-tight sm:leading-[1.2] lg:leading-[76px]'>
          Customers say About Us
        </p>
        <p className='text-[#F5F9FF] font-inter text-base sm:text-lg lg:text-[1.5rem] font-normal leading-relaxed sm:leading-[1.8] lg:leading-[2.375rem]'>
          Trust is built through results. Here you can read what our clients say about their experience with our service. Their words reflect our commitment to quality and excellence.
        </p>
      </div>
      
      {/* Comments container */}
      <div className='relative w-full sm:w-2/3 h-[350px] sm:h-full px-2 sm:px-4 lg:px-[1.5rem] py-4 sm:py-[1.5rem] flex flex-col sm:flex-row items-center justify-center'>
        {/* Responsive view for 640px and up - Both cards with rotation */}
        <div className='hidden sm:block w-full h-full relative'>
          {/* First review card - scales based on viewport width */}
          <div 
            id='Comentario1' 
            className='rounded-2xl absolute z-5 flex bg-black sm:h-[260px] md:h-[300px] lg:h-[348px] sm:w-[280px] md:w-[340px] lg:w-[400px] rotate-[-1.97deg] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
          >
            <CardReview 
              name={reviews[0].name} 
              profession={reviews[0].profession} 
              avatar={reviews[0].avatar} 
              description={reviews[0].description} 
            />
          </div>
          
          {/* Second review card - scales based on viewport width */}
          <div 
            id='Comentario2' 
            className='rounded-2xl absolute sm:mt-[8%] md:mt-[10%] sm:left-[30%] md:left-[35%] z-10 flex bg-black sm:h-[240px] md:h-[280px] lg:h-[318.575px] sm:w-[280px] md:w-[330px] lg:w-[396.277px] rotate-[6.036deg] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
          >
            <CardReview 
              name={reviews[1].name} 
              profession={reviews[1].profession} 
              avatar={reviews[1].avatar} 
              description={reviews[1].description} 
            />
          </div>
        </div>
        
        {/* View for below 640px - Single card with navigation */}
        <div className='sm:hidden w-full max-w-[360px] mx-auto flex flex-col items-center'>
          <div className='w-full h-[300px] rounded-2xl bg-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
            <CardReview 
              name={reviews[activeCard].name} 
              profession={reviews[activeCard].profession} 
              avatar={reviews[activeCard].avatar} 
              description={reviews[activeCard].description} 
            />
          </div>
          <div className='flex items-center justify-center mt-4 gap-4'>
            <button 
              onClick={prevCard}
              className='w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white'
            >
              &lt;
            </button>
            <div className='flex gap-2'>
              {reviews.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-2 h-2 rounded-full ${index === activeCard ? 'bg-white' : 'bg-white/40'} cursor-pointer`}
                />
              ))}
            </div>
            <button 
              onClick={nextCard}
              className='w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white'
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;


