'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ConstructionCategory,
  ConstructionProject,
  categoryConfig,
  getProjectsByCategory
} from '@/data/constructionProjects';
import CarouselPagination from '@/components/shared/CarouselPagination';

const ConstructionGalleryMobile: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ConstructionCategory>('NEW_BUILD');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const categories = Object.keys(categoryConfig) as ConstructionCategory[];
  const projects = getProjectsByCategory(activeCategory);
  const currentProject = projects[currentProjectIndex];

  // Scroll active tab into view
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const tab = activeTabRef.current;
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();

      const scrollLeft = tab.offsetLeft - container.offsetLeft - (containerRect.width / 2) + (tabRect.width / 2);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeCategory]);

  // Reset indices when category changes
  useEffect(() => {
    setCurrentProjectIndex(0);
    setCurrentImageIndex(0);
  }, [activeCategory]);

  const handleCategoryChange = useCallback((category: ConstructionCategory) => {
    if (category === activeCategory) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 150);
  }, [activeCategory]);

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentProject) {
      // Next image
      setCurrentImageIndex(prev =>
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }
    if (isRightSwipe && currentProject) {
      // Previous image
      setCurrentImageIndex(prev =>
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextProject = useCallback(() => {
    if (projects.length <= 1) return;
    setCurrentImageIndex(0);
    setCurrentProjectIndex(prev =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  }, [projects.length]);

  const handlePrevProject = useCallback(() => {
    if (projects.length <= 1) return;
    setCurrentImageIndex(0);
    setCurrentProjectIndex(prev =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  }, [projects.length]);

  if (!currentProject) {
    return (
      <div className="flex items-center justify-center h-48 bg-gray-100 rounded-lg mx-4">
        <p className="text-gray-500 text-sm">No projects available</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F7FAFE] pb-8">
      {/* Header with glow effect */}
      <div className="construction-service-highlight-mobile mx-4 rounded-xl p-4 mb-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-bold text-white">
              Custom Pool Design
            </h2>
            <span className="px-2 py-0.5 text-[10px] font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full animate-pulse">
              Featured
            </span>
          </div>
          <p className="text-gray-300 text-xs leading-relaxed">
            Transform your backyard into a stunning oasis with our expert design and construction services.
          </p>
        </div>
      </div>

      {/* Category Tabs - Scrollable */}
      <div
        ref={tabsContainerRef}
        className="flex gap-2 overflow-x-auto px-4 pb-3 scrollbar-none"
      >
        {categories.map((category) => {
          const config = categoryConfig[category];
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              ref={isActive ? activeTabRef : null}
              onClick={() => handleCategoryChange(category)}
              className={`
                flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium
                transition-all duration-300 ease-out whitespace-nowrap
                ${isActive
                  ? 'text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
                }
              `}
              style={{
                backgroundColor: isActive ? config.color : undefined,
                boxShadow: isActive ? `0 0 12px ${config.color}40` : undefined
              }}
            >
              {config.label}
            </button>
          );
        })}
      </div>

      {/* Main Image with swipe */}
      <div
        className={`
          px-4 transition-opacity duration-150
          ${isTransitioning ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div
          className="relative w-full rounded-xl overflow-hidden shadow-lg"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={currentProject.images[currentImageIndex]}
            alt={currentProject.title}
            className="w-full h-56 object-cover"
          />

          {/* Category badge */}
          <div
            className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white"
            style={{ backgroundColor: categoryConfig[activeCategory].color }}
          >
            {categoryConfig[activeCategory].label}
          </div>

          {/* Image counter */}
          {currentProject.images.length > 1 && (
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/50 text-white text-[10px]">
              {currentImageIndex + 1} / {currentProject.images.length}
            </div>
          )}

          {/* Navigation arrows */}
          {currentProject.images.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImageIndex(prev => prev === 0 ? currentProject.images.length - 1 : prev - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex(prev => prev === currentProject.images.length - 1 ? 0 : prev + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Image Dots */}
        {currentProject.images.length > 1 && (
          <CarouselPagination
            totalItems={currentProject.images.length}
            activeIndex={currentImageIndex}
            onIndexChange={setCurrentImageIndex}
            className="mt-3"
          />
        )}

        {/* Project Details */}
        <div className="mt-4 p-3 bg-white rounded-xl shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-1">
            {currentProject.title}
          </h3>

          <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
            {currentProject.dimensions && (
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                {currentProject.dimensions}
              </span>
            )}
          </div>

          <p className="text-gray-600 text-xs mb-3 line-clamp-2">
            {currentProject.description}
          </p>

          {/* Features */}
          {currentProject.features && currentProject.features.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {currentProject.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] capitalize"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Project Navigation */}
          {projects.length > 1 && (
            <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-2">
              <button
                onClick={handlePrevProject}
                className="flex items-center gap-1 text-xs text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Prev
              </button>
              <span className="text-[10px] text-gray-400">
                {currentProjectIndex + 1} of {projects.length}
              </span>
              <button
                onClick={handleNextProject}
                className="flex items-center gap-1 text-xs text-gray-500"
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact?service=design-and-construction"
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg"
        >
          Request Free Quote
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ConstructionGalleryMobile;
