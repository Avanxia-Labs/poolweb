"use client";

import React from "react";

interface AnimatedBlobsProps {
  showBlobs: boolean;
  topLeftPosition?: string;
  bottomRightPosition?: string;
  size?: "sm" | "md" | "lg";
  customGradient?: string;
}

export const AnimatedBlobs: React.FC<AnimatedBlobsProps> = ({
  showBlobs,
  topLeftPosition = "left-[-100px] top-[-100px]",
  bottomRightPosition = "right-[-100px] bottom-[-100px]",
  size = "md",
  customGradient,
}) => {
  // Tamaños predefinidos
  const sizeClasses = {
    sm: "w-40 h-40",
    md: "w-60 h-60",
    lg: "w-80 h-80",
  };

  // Gradiente predeterminado
  const defaultGradient = 'linear-gradient(205deg, rgba(255, 227, 174, 1) 7.53%, rgba(175, 239, 239, 1) 84.19%)';
  
  return (
    <>
      {/* Blob superior izquierdo */}
      <div
        className={`absolute ${sizeClasses[size]} ${topLeftPosition} rounded-full blur-lg transition-all duration-700 ease-out z-0 ${
          showBlobs ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          background: customGradient || defaultGradient,
        }}
      />
      
      {/* Blob inferior derecho */}
      <div
        className={`absolute ${sizeClasses[size]} ${bottomRightPosition} rounded-full blur-lg transition-all duration-700 ease-out z-0 ${
          showBlobs ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          background: customGradient || defaultGradient,
        }}
      />
    </>
  );
};