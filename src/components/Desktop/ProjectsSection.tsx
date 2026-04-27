'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/shared/ProjectCard';
import CarouselPagination from '@/components/shared/CarouselPagination';
import { projects, type Project } from '@/data/projects';

export default function ProjectsSection() {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleViewDetails = (project: Project) => {
    const params = new URLSearchParams({ service: 'design-and-construction' });
    if (project.constructionId) params.set('project', project.constructionId);
    router.push(`/services?${params.toString()}`);
  };

  const cardWidth = 320;
  const gap = 24;
  const visibleCards = 4;
  const totalPages = Math.ceil(projects.length / visibleCards);

  const updateScrollState = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active page index
    const pageWidth = (cardWidth + gap) * visibleCards;
    const newIndex = Math.round(scrollLeft / pageWidth);
    setActiveIndex(Math.min(newIndex, totalPages - 1));
  }, [totalPages]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    return () => container.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scrollTo = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = (cardWidth + gap) * visibleCards;
    const newPosition =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  };

  const scrollToPage = (pageIndex: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = pageIndex * (cardWidth + gap) * visibleCards;
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F0F9FF] to-[#E6F4FA]">
      {/* Background Decor: Clean Ambient Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-blue-400/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-emerald-400/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header - Clean and consistent */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] font-['Plus_Jakarta_Sans']">
              Design & Construction Projects
            </h2>
            <p className="text-lg text-[#667085] max-w-2xl leading-relaxed">
              Explore completed work before requesting a quote.
            </p>
          </div>

          <Link
            href="/services?service=design-and-construction"
            className="group/link flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/50 backdrop-blur-sm
                       text-[#485AFF] font-semibold text-sm hover:bg-white hover:shadow-md
                       transition-all duration-300 border border-white/60"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scrollTo('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20
                       w-12 h-12 rounded-full bg-white shadow-lg
                       flex items-center justify-center
                       transition-all duration-300
                       ${canScrollLeft
                ? 'opacity-0 group-hover:opacity-100 hover:bg-[#485AFF] hover:text-white cursor-pointer'
                : 'opacity-0 cursor-not-allowed'
              }`}
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollTo('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20
                       w-12 h-12 rounded-full bg-white shadow-lg
                       flex items-center justify-center
                       transition-all duration-300
                       ${canScrollRight
                ? 'opacity-0 group-hover:opacity-100 hover:bg-[#485AFF] hover:text-white cursor-pointer'
                : 'opacity-0 cursor-not-allowed'
              }`}
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6" />
          </button>



          {/* Cards Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4 px-2"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                <ProjectCard
                  image={project.image}
                  category={project.category}
                  title={project.title}
                  subtitle={project.subtitle}
                  onClick={() => handleViewDetails(project)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots - Standard app style */}
        <CarouselPagination
          totalItems={totalPages}
          activeIndex={activeIndex}
          onIndexChange={scrollToPage}
          className="mt-8"
        />
      </div>
    </section>
  );
}
