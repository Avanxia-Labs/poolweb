'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  ConstructionCategory,
  ConstructionProject,
  categoryConfig,
  getProjectsByCategory
} from '@/data/constructionProjects';
import CarouselPagination from '@/components/shared/CarouselPagination';

interface ConstructionGalleryProps {
  initialCategory?: ConstructionCategory;
  onCategoryChange?: (category: ConstructionCategory) => void;
  onProjectChange?: (project: ConstructionProject) => void;
}

const ConstructionGallery: React.FC<ConstructionGalleryProps> = ({
  initialCategory = 'NEW_BUILD',
  onCategoryChange,
  onProjectChange
}) => {
  const [activeCategory, setActiveCategory] = useState<ConstructionCategory>(initialCategory);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const categories = Object.keys(categoryConfig) as ConstructionCategory[];
  const projects = getProjectsByCategory(activeCategory);
  const currentProject = projects[currentProjectIndex];

  // Reset indices when category changes
  useEffect(() => {
    setCurrentProjectIndex(0);
    setCurrentImageIndex(0);
  }, [activeCategory]);

  // Notify parent of project changes
  useEffect(() => {
    if (currentProject && onProjectChange) {
      onProjectChange(currentProject);
    }
  }, [currentProject, onProjectChange]);

  const handleCategoryChange = useCallback((category: ConstructionCategory) => {
    if (category === activeCategory) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      onCategoryChange?.(category);
      setIsTransitioning(false);
    }, 150);
  }, [activeCategory, onCategoryChange]);

  const handlePrevImage = useCallback(() => {
    if (!currentProject) return;
    setCurrentImageIndex(prev =>
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  }, [currentProject]);

  const handleNextImage = useCallback(() => {
    if (!currentProject) return;
    setCurrentImageIndex(prev =>
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  }, [currentProject]);

  const handlePrevProject = useCallback(() => {
    if (projects.length <= 1) return;
    setCurrentImageIndex(0);
    setCurrentProjectIndex(prev =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  }, [projects.length]);

  const handleNextProject = useCallback(() => {
    if (projects.length <= 1) return;
    setCurrentImageIndex(0);
    setCurrentProjectIndex(prev =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  }, [projects.length]);

  if (!currentProject) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No projects available in this category</p>
      </div>
    );
  }

  const getPrevImageIndex = () => {
    return currentImageIndex === 0 ? currentProject.images.length - 1 : currentImageIndex - 1;
  };

  const getNextImageIndex = () => {
    return currentImageIndex === currentProject.images.length - 1 ? 0 : currentImageIndex + 1;
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div
        ref={tabsContainerRef}
        className="flex gap-2 overflow-x-auto pb-4 scrollbar-none"
      >
        {categories.map((category) => {
          const config = categoryConfig[category];
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-300 ease-out whitespace-nowrap
                ${isActive
                  ? 'text-white category-tab-active'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }
              `}
              style={{
                backgroundColor: isActive ? config.color : undefined,
                boxShadow: isActive ? `0 0 20px ${config.color}50` : undefined,
                '--tab-color': config.color
              } as React.CSSProperties}
            >
              {config.label}
            </button>
          );
        })}
      </div>

      {/* Main Gallery Area */}
      <div className={`
        transition-opacity duration-150
        ${isTransitioning ? 'opacity-0' : 'opacity-100'}
      `}>
        {/* Image Carousel - 3 images visible */}
        <div className="relative mt-6">
          <div className="flex items-center justify-center gap-4">
            {/* Previous Image (smaller) */}
            {currentProject.images.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="hidden md:block relative w-24 h-32 lg:w-32 lg:h-44 overflow-hidden rounded-lg gallery-image side cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src={currentProject.images[getPrevImageIndex()]}
                  alt="Previous"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </button>
            )}

            {/* Current Image (large) */}
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden rounded-xl gallery-image current shadow-2xl">
              <img
                src={currentProject.images[currentImageIndex]}
                alt={currentProject.title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />

              {/* Navigation arrows on image */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Category badge */}
              <div
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: categoryConfig[activeCategory].color }}
              >
                {categoryConfig[activeCategory].label}
              </div>
            </div>

            {/* Next Image (smaller) */}
            {currentProject.images.length > 1 && (
              <button
                onClick={handleNextImage}
                className="hidden md:block relative w-24 h-32 lg:w-32 lg:h-44 overflow-hidden rounded-lg gallery-image side cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src={currentProject.images[getNextImageIndex()]}
                  alt="Next"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </button>
            )}
          </div>

          {/* Image Dots */}
          {currentProject.images.length > 1 && (
            <CarouselPagination
              totalItems={currentProject.images.length}
              activeIndex={currentImageIndex}
              onIndexChange={setCurrentImageIndex}
              className="mt-4"
            />
          )}
        </div>

        {/* Project Navigation (if multiple projects) */}
        {projects.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrevProject}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-gray-500">
              Project {currentProjectIndex + 1} of {projects.length}
            </span>
            <button
              onClick={handleNextProject}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Project Details */}
        <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {currentProject.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {currentProject.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            {currentProject.dimensions && (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <span className="text-gray-700">{currentProject.dimensions}</span>
              </div>
            )}

            {currentProject.features && currentProject.features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {currentProject.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs capitalize"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionGallery;
