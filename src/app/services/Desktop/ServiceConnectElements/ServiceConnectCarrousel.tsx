"use client";

import * as React from "react";
import { useState } from "react";

interface CarouselSlideProps {
  image: string;
  isCurrent: boolean;
  index: number;
}

function CarouselSlide({ image, isCurrent, index }: CarouselSlideProps) {
  const isSide = index !== 1;

  return (
    <article
      className={`
        overflow-hidden rounded-2xl transition-all duration-[0.3s] ease-[ease]
        ${isCurrent ? "w-[414px] h-[621px]" : "w-[311px] h-[466px]"}
        ${isSide ? "hidden md:block" : "w-full h-[500px] md:w-[414px] md:h-[621px]"}
      `}
    >
      <img
        className="object-cover overflow-hidden aspect-square size-full"
        src={image}
        alt="Carousel image"
        loading="lazy"
      />
    </article>
  );
}

interface CarouselDotsProps {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

function CarouselDots({ total, currentIndex, onDotClick }: CarouselDotsProps) {
  return (
    <nav
      // className="flex relative gap-5 justify-center items-center p-3.5 mt-56 bg-indigo-500 rounded-3xl max-md:mt-10"   
      className="flex flex-row justify-center gap-5 mt-10  w-[160px] p-4 shadow-lg rounded-full"
      role="navigation"
      aria-label="Carousel navigation"
    >
      {Array.from({ length: total }, (_, index) => (
        <button
          className="p-0 w-2.5 h-2.5 rounded-full transition-all cursor-pointer duration-[0.2s] ease-[ease] max-md:w-2 max-md:h-2"
          key={index}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentIndex ? "true" : "false"}
          style={{
            backgroundColor: index === currentIndex ? "white" : "#5000F3",
            // border: index === currentIndex ? "none" : "1px solid #1C1B1F",
          }}
        />
      ))}
    </nav>
  );
}

export interface CustomCarouselProps {
  images?: string[];
}

export function CustomCarousel({
  images: initialImages = [
    "/images/serviceImage1.png",
    "/images/serviceImage2.png",
    "/images/serviceImage3.png"
  ],
}: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [images] = useState(initialImages);

  const getVisibleImages = () => {
    const prev = images[(currentIndex - 1 + images.length) % images.length];
    const current = images[currentIndex];
    const next = images[(currentIndex + 1) % images.length];
    return [prev, current, next];
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex overflow-hidden relative flex-col items-center px-4 md:px-0 py-10 size-full">
      <div
        className="flex gap-5 md:gap-20 justify-center items-center p-0 w-full"
        role="region"
        aria-label="Image carousel"
      >
        {getVisibleImages().map((img, index) => (
          <CarouselSlide
            key={`${img}-${index}`}
            image={img}
            isCurrent={index === 1}
            index={index}
          />
        ))}
      </div>
      
      <CarouselDots
        total={images.length}
        currentIndex={currentIndex}
        onDotClick={handleDotClick}
      />
    </section>
  );
}

export default CustomCarousel;
