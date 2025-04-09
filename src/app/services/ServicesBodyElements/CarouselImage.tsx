"use client";

import * as React from "react";

interface CarouselImageProps {
  src: string;
  isOverlay?: boolean;
  className?: string;
}

export const CarouselImage: React.FC<CarouselImageProps> = ({
  src,
  isOverlay = false,
  className = "",
}) => {
  return (
    <img
      src={src}
      className={`${
        isOverlay
          ? "object-contain overflow-hidden w-full aspect-square fill-white"
          : "object-cover absolute inset-0 size-full"
      } ${className}`}
      alt=""
      role={isOverlay ? "presentation" : "img"}
    />
  );
};
