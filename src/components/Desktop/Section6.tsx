"use client"

import React, { useState, useEffect, useRef } from 'react';
import CardReview from './CardReview';

function Section6() {
  const [activeCard, setActiveCard] = useState(0);
  const [sectionTopInView, setSectionTopInView] = useState(false);
  //const sectionRef = useRef(null);
  const sectionRef = useRef<HTMLElement | null>(null);


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

  // Observer for section top edge
  useEffect(() => {
    // Create options with rootMargin that triggers exactly when the section's top edge
    // hits the top of the viewport
    const options = {
      threshold: [0, 0.1],
      rootMargin: "0px" 
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      
      if (!entry) return;
      
      // Get the bounding rectangle of the section relative to the viewport
      const rect = entry.boundingClientRect;
      
      // Check if the top edge of the section is at or above the viewport top
      if (rect.top <= 0) {
        setSectionTopInView(true);
      } else {
        setSectionTopInView(false);
      }
    }, options);
    
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Add scroll listener for more precise control
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      
      // If top edge of section is at or above the top of viewport
      if (rect.top <= 0) {
        setSectionTopInView(true);
      } else {
        setSectionTopInView(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextCard = () => {
    setActiveCard((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section 
      id='6' 
      ref={sectionRef}
      className='w-full flex flex-col md:flex-row relative py-8 md:py-10 lg:py-[2.75rem] px-4 md:px-6 lg:px-[4.38rem] gap-6 md:gap-[1.56rem] bg-[#161F7B] h-auto md:h-[32rem] lg:h-[42rem] flex-shrink-0 overflow-hidden'
    >
      {/* Text section */}
      <div 
        id='Customers' 
        className='flex w-full md:w-1/3 flex-col justify-center gap-4 md:gap-6 lg:gap-[2.5rem] z-10 py-4 md:py-0'
      >
        <p className='text-[#F5F9FF] font-inter text-3xl md:text-4xl lg:text-[64px] font-extrabold leading-tight md:leading-[1.2] lg:leading-[76px] transition-all duration-700'>
          Customers say About Us
        </p>
        <p className='text-[#F5F9FF] font-inter text-base md:text-lg lg:text-[1.5rem] font-normal leading-relaxed md:leading-[1.8] lg:leading-[2.375rem] transition-all duration-700 delay-300'>
          Trust is built through results. Here you can read what our clients say about their experience with our service. Their words reflect our commitment to quality and excellence.
        </p>
      </div>
      
      {/* Comments container */}
      <div className='relative w-full md:w-2/3 h-[350px] md:h-full px-2 md:px-4 lg:px-[1.5rem] py-4 md:py-[1.5rem] flex flex-col md:flex-row items-center justify-center'>
        {/* Responsive view for 768px and up - Both cards with rotation */}
        <div className='hidden lg:block w-full h-full relative'>
          {/* First review card - scales based on viewport width */}
          <div 
            id='Comentario1' 
            className={`rounded-2xl absolute z-5 flex bg-black md:h-[300px] lg:h-[348px] md:w-[340px] lg:w-[400px] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-1000 ${sectionTopInView ? 'rotate-[0deg]' : 'rotate-[-15deg]'}`}
            style={{
              left: '3%',
              top: '5%',
              opacity: 1
            }}
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
            className={`rounded-2xl absolute z-10 flex bg-black md:h-[280px] lg:h-[318.575px] md:w-[330px] lg:w-[396.277px] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-1000 delay-300 ${sectionTopInView ? 'rotate-[0deg]' : 'rotate-[15deg]'}`}
            style={{
              left: '50%',
              top: '48%',
              opacity: 1
            }}
          >
            <CardReview 
              name={reviews[1].name} 
              profession={reviews[1].profession} 
              avatar={reviews[1].avatar} 
              description={reviews[1].description} 
            />
          </div>
        </div>
        
        {/* View for below 768px - Single card with navigation */}
        <div className='lg:hidden w-full max-w-[360px] mx-auto flex flex-col items-center'>
          <div className="w-full h-[300px] rounded-2xl bg-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-700">
            <CardReview 
              name={reviews[activeCard].name} 
              profession={reviews[activeCard].profession} 
              avatar={reviews[activeCard].avatar} 
              description={reviews[activeCard].description} 
            />
          </div>
          <div className="flex items-center justify-center mt-4 gap-4 transition-all duration-700 delay-300">
            <button 
              onClick={prevCard}
              className='w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'
            >
              &lt;
            </button>
            <div className='flex gap-2'>
              {reviews.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-2 h-2 rounded-full ${index === activeCard ? 'bg-white' : 'bg-white/40'} cursor-pointer transition-all duration-300`}
                />
              ))}
            </div>
            <button 
              onClick={nextCard}
              className='w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'
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