"use client";

import * as React from "react";

interface CarouselPaginationProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export const CarouselPagination: React.FC<CarouselPaginationProps> = ({
  totalSlides,
  currentSlide,
  onSlideChange,
}) => {
  return (
    <div className="flex relative gap-5 justify-center items-center p-3.5 mt-56 bg-indigo-500 rounded-3xl max-md:mt-10">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          className="flex shrink-0 self-stretch my-auto rounded-lg cursor-pointer duration-[0.3s] ease-[ease] h-[13px] transition-[background-color] w-[13px]"
          key={index}
          onClick={() => onSlideChange(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={currentSlide === index ? "true" : "false"}
          style={{
            backgroundColor:
              currentSlide === index ? "#FFF" : "rgba(80, 0, 243, 1)",
          }}
        />
      ))}
    </div>
  );
};
