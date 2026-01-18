'use client';

import React from 'react';

interface CarouselPaginationProps {
    totalItems: number;
    activeIndex: number;
    onIndexChange: (index: number) => void;
    className?: string;
    variant?: 'blue' | 'white';
}

export default function CarouselPagination({
    totalItems,
    activeIndex,
    onIndexChange,
    className = '',
    variant = 'blue',
}: CarouselPaginationProps) {
    const activeClass = variant === 'blue' ? 'bg-[#485AFF]' : 'bg-white';
    const inactiveClass = variant === 'blue' ? 'bg-[#485AFF]/30 hover:bg-[#485AFF]/50' : 'bg-white/30 hover:bg-white/50';

    return (
        <div className={`flex justify-center items-center gap-2 ${className}`}>
            {Array.from({ length: totalItems }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onIndexChange(index)}
                    className={`h-2 rounded-full transition-all duration-300 ease-out
                     ${index === activeIndex
                            ? `${activeClass} w-5`
                            : `${inactiveClass} w-2`
                        }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
}
