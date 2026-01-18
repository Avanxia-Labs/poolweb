'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { projects, categoryColors, categoryLabels, ProjectCategory } from '@/data/projects';
import CarouselPagination from '@/components/shared/CarouselPagination';

// Updated to match the new "Subtle Premium" Desktop Design
interface MobileProjectCardProps {
  image: string;
  category: ProjectCategory;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

function MobileProjectCard({ image, category, title, subtitle, onClick }: MobileProjectCardProps) {
  const tagColor = categoryColors[category];
  const tagLabel = categoryLabels[category];

  return (
    <div
      onClick={onClick}
      className="flex flex-col bg-white rounded-2xl overflow-hidden w-[85vw] max-w-[320px] flex-shrink-0 cursor-pointer
                 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 active:scale-95"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Category Tag - Now rounded-full like Desktop */}
        <div
          className="absolute top-3 left-3 px-3 py-1.5 rounded-full backdrop-blur-md
                     text-[10px] font-bold uppercase tracking-wider
                     bg-white/90 shadow-sm"
          style={{
            boxShadow: `0 0 15px ${tagColor}30`,
          }}
        >
          <span style={{ color: tagColor }}>{tagLabel}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0F172A] leading-tight">
          {title}
        </h3>
        <p className="text-sm text-[#667085] leading-relaxed">
          {subtitle}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-1 mt-2 text-[#485AFF] font-semibold text-sm">
          <span>View details</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default function MobileProjectsSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleViewDetails = () => {
    router.push('/services?service=design-and-construction');
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const containerRect = container.getBoundingClientRect();
    const center = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    if (cards[index]) {
      const card = cards[index];
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollLeft =
        container.scrollLeft +
        cardRect.left -
        containerRect.left -
        (containerRect.width - cardRect.width) / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full pt-8 pb-12 overflow-hidden bg-gradient-to-b from-[#F0F9FF] to-[#E6F4FA]">
      {/* Background Decor: Clean Ambient Glow (Mobile optimized) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] h-[300px] bg-blue-400/10 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[250px] h-[250px] bg-emerald-400/10 blur-[50px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Header - Clean and consistent */}
        <div className="flex flex-col gap-4 px-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#0F172A] font-['Plus_Jakarta_Sans'] leading-tight">
              Design & Construction Projects
            </h2>
            <p className="mt-2 text-sm text-[#667085] leading-relaxed font-inter">
              Explore completed work before requesting a quote.
            </p>
          </div>

          <Link
            href="/services?service=design-and-construction"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm
                       text-[#485AFF] font-semibold text-sm border border-white/60 shadow-sm w-fit"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-smooth px-6 gap-4 pb-4"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="snap-center flex-shrink-0"
            >
              <MobileProjectCard
                image={project.image}
                category={project.category}
                title={project.title}
                subtitle={project.subtitle}
                onClick={handleViewDetails}
              />
            </div>
          ))}
        </div>

        {/* Pagination - Clean dots style using shared component */}
        <CarouselPagination
          totalItems={projects.length}
          activeIndex={activeIndex}
          onIndexChange={scrollToIndex}
          className="mt-2 mb-0"
        />
      </div>
    </section>
  );
}
