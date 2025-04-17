"use client";

import { useState, useRef, useEffect } from "react";

export const useAnimatedBlobs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Detectar si es móvil para activar animación por scroll
  useEffect(() => {
    const checkIfMobile = () => {
      return window.innerWidth <= 1024;
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (checkIfMobile()) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Handlers para mouse enter/leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Determinar si mostrar los blobs
  const showBlobs = isHovered || isVisible;

  return {
    ref,
    showBlobs,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
};