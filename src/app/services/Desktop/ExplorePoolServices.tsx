"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export const ExplorePoolServices: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleRequestQuote = React.useCallback(() => {
        // Handle quote request
        console.log("Quote requested");
    }, []);

    // Handle scroll-based animation for mobile
    useEffect(() => {
        const checkIfMobile = () => {
            return window.innerWidth <= 1024; // Common breakpoint for mobile devices
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            // Only apply scroll animation on mobile
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
            threshold: 0.3
        });

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    // Use isHovered for desktop and isVisible for mobile
    const showBlobs = isHovered || isVisible;

    return (
        <article
            ref={cardRef}
            className="flex overflow-hidden flex-col items-start px-6 py-12 font-bold leading-10 bg-slate-50 max-w-[482px] rounded-[39px] shadow-[0px_3px_8px_rgba(0,0,0,0.25)] text-slate-900 max-md:px-5 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Blob superior izquierdo */}
            <div
                className={`absolute w-60 h-60 left-[-100px] top-[-100px] rounded-full blur-lg transition-all duration-700 ease-out z-0 ${showBlobs ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                style={{
                    background: 'linear-gradient(205deg, rgba(255, 227, 174, 1) 7.53%, rgba(175, 239, 239, 1) 84.19%)',
                }}
            />

            {/* Blob inferior derecho */}
            <div
                className={`absolute w-60 h-60 right-[-100px] bottom-[-100px] rounded-full blur-lg transition-all duration-700 ease-out z-0 ${showBlobs ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                style={{
                    background: 'linear-gradient(205deg, rgba(255, 227, 174, 1) 7.53%, rgba(175, 239, 239, 1) 84.19%)',
                }}
            />

            {/* Original content with relative z-index */}
            <div className="relative z-10 w-full">
                <h2 className="text-4xl text-center max-md:max-w-full">
                    Explore Additional Pool Services
                </h2>

                <div className="self-stretch mt-2.5 w-full text-lg min-h-[138px] max-md:max-w-full">
                    <p className="gap-4 self-stretch w-full max-md:max-w-full">
                        Need a custom service or have specific questions?{" "}<br />
                        <span className="font-normal text-sm leading-6">
                            Fill out the form and our team will contact you with a personalized
                            quote and assistance tailored to your needs.
                        </span>
                    </p>

                </div>

                <div className="flex items-center mt-2.5">
                    <Link href="/form">
                        <button
                            onClick={handleRequestQuote}
                            className="flex flex-col hover:bg-blue-700 items-center px-5 py-2 text-sm font-semibold leading-7 text-center text-slate-50 bg-[#485AFF] rounded-lg min-h-11 w-[170px]"
                        >
                            Request Quote
                        </button>
                    </Link>
                </div>

                {/* line */}
                <div className="object-contain mt-4 max-w-full aspect-[200] w-[389px] h-[1px] bg-[#C2D3E2]">

                </div>
            </div>
        </article>
    );
};

export default ExplorePoolServices;