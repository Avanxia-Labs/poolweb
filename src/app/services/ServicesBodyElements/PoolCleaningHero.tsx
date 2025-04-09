"use client";

import * as React from "react";
import { useState } from "react";
import { CarouselImage } from "./CarouselImage";
import { CarouselPagination } from "./CarouselPagination";
import { HeroContent } from "./HeroContent";

export const PoolCleaningHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const images = [
    "https://cdn.builder.io/api/v1/image/assets/cc725807c14044218a044f65b2af1b69/69d3b3db7839a8f58b41c5b61b0d8e02ded67be5",
    "https://images.pexels.com/photos/6195131/pexels-photo-6195131.jpeg",
    "https://images.pexels.com/photos/5035680/pexels-photo-5035680.jpeg",
    "https://images.pexels.com/photos/6195290/pexels-photo-6195290.jpeg",
    "https://images.pexels.com/photos/17568095/pexels-photo-17568095.jpeg",
    "https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg",
  ];

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
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="overflow-hidden max-h-[683px]"
      role="region"
      aria-label="Pool cleaning service showcase"
    >
      <div
        className="flex overflow-hidden relative flex-col items-center pb-16 w-full h-[683px] max-md:max-w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CarouselImage src={images[currentSlide]} />
        <CarouselImage src="/images/servicesHero.png" isOverlay className="max-md:max-w-full" />
        <HeroContent />
        <CarouselPagination
          totalSlides={images.length}
          currentSlide={currentSlide}
          onSlideChange={goToSlide}
        />
      </div>
    </section>
  );
};

export default PoolCleaningHero;
