"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";

// Definimos la estructura de datos para el contenido del Hero
type HeroContent = {
  id: number;
  title: string;
  description: string;
};

export const Section1: React.FC = () => {
  // Datos para el carrusel de contenido
  const heroContents: HeroContent[] = [
    {
      id: 0,
      title: "Pool Maintenance",
      description: "Proactive weekly care ensuring balanced chemistry, pristine cleanliness, and optimal equipment function. Enjoy a worry-free, swim-ready pool year-round."
    },
    {
      id: 1,
      title: "Pool Cleaning",
      description: "Restore your pool's sparkle. We provide thorough one-time or regular cleaning, including brushing, vacuuming, and stain/algae treatment."
    },
    {
      id: 2,
      title: "Equipment Repair & Installation",
      description: "Fast, expert repairs for pumps, filters, heaters, and more. We also install high-quality, energy-efficient new equipment for lasting performance."
    },
    {
      id: 3,
      title: "Pool Automation",
      description: "Simplify pool ownership with smart automation. Control pumps, heating, lights, and cleaning easily from anywhere via your smartphone or tablet."
    },
    {
      id: 4,
      title: "Diagnostics & Troubleshooting",
      description: "Persistent pool problems? Our expert diagnostics pinpoint the root cause of water quality issues, leaks, or equipment malfunctions for targeted, effective solutions."
    },
    {
      id: 5,
      title: "Green Pool Recovery",
      description: "Transform your green, algae-filled pool back to crystal clear water with our specialized treatment program and expert techniques."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      previousSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % heroContents.length);
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? heroContents.length - 1 : currentSlide - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="overflow-hidden relative max-h-screen w-full mx-auto"
      role="region"
      aria-label="Pool services showcase"
      style={{
        maxWidth: "100vw",
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/pool-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      </div>

      <div
        className="flex overflow-hidden relative flex-col items-center w-full min-h-[683px] max-h-screen pb-16 2xl:min-h-[683px] xl:min-h-[600px] lg:min-h-[550px] md:min-h-[500px] sm:min-h-[450px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Vector at top */}
        <div className="z-10 w-full -mt-[10px] h-auto text-[#485AFF]">
          <Image
            src="/svgs/vectorHeroServices.svg"
            alt="decorative vector"
            width={1920}
            height={127}
            className="w-full h-auto text-[#485AFF]"
            priority
          />
        </div>

        {/* Hero Content - Now with exact styling */}
        <div className="flex relative z-10 flex-col mt-20 mb-auto text-center w-full px-4 lg:mt-28 md:mt-16 sm:mt-12">
          <h1
            className="font-bold text-center text-[#0F172A] text-5xl leading-[5.375rem] tracking-[-0.25rem] font-['Inter'] lg:text-4xl md:text-3xl sm:text-2xl lg:leading-tight md:leading-tight sm:leading-tight lg:tracking-[-0.15rem] md:tracking-[-0.1rem] sm:tracking-[-0.05rem]"
          >
            {heroContents[currentSlide].title}
          </h1>
          <p
            className="mt-9 mx-auto text-white text-center text-shadow font-['Inter'] text-[1.5rem] font-semibold leading-[2.5rem] w-[40rem] max-w-full lg:text-[1.25rem] md:text-lg sm:text-base lg:leading-8 md:leading-7 sm:leading-6 lg:w-[32rem] md:w-[28rem] sm:w-full"
            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
          >
            {heroContents[currentSlide].description}
          </p>
        </div>

        
        {/* Pagination */}
        <div className="flex relative z-10 gap-5 justify-center items-center p-3.5 mt-auto bg-indigo-500 rounded-3xl">
          {heroContents.map((_, index) => (
            <button
              className="flex shrink-0 self-stretch my-auto rounded-lg cursor-pointer duration-300 ease-in-out h-3 w-3"
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : "false"}
              style={{
                backgroundColor:
                  currentSlide === index ? "#FFF" : "rgba(80, 0, 243, 1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;