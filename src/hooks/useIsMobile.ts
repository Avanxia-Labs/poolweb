"use client"
import { useState, useEffect } from "react";


//const MOBILE_BREAKPOINT = 1280;
const MOBILE_BREAKPOINT = 720

/**
 * Custom hook that determines if the current viewport width is considered "mobile".
 * It delays rendering until the component is hydrated to avoid layout shifting.
 */
export function useIsMobile(): [boolean | null, boolean] {
  // Represents whether the screen is mobile. Starts as null until determined on mount.
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Indicates whether the component has been hydrated (client-side rendering).
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    // Sets the current media query match result
    setIsMobile(mediaQuery.matches);
    setHydrated(true);

    // Updates state when the screen size changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleans up the event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return [isMobile, hydrated];
}
