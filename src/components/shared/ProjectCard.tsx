'use client';

import Image from 'next/image';
import { ProjectCategory, categoryColors, categoryLabels } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  category: ProjectCategory;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export default function ProjectCard({
  image,
  category,
  title,
  subtitle,
  onClick,
}: ProjectCardProps) {
  const tagColor = categoryColors[category];
  const tagLabel = categoryLabels[category];

  return (
    <div
      onClick={onClick}
      className="project-card group relative flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer
                 w-[320px] flex-shrink-0 
                 shadow-[0_2px_8px_rgba(0,0,0,0.08)]
                 transition-all duration-500 ease-out
                 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Category Tag */}
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
        <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0F172A] leading-tight group-hover:text-[#485AFF] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#667085] leading-relaxed">
          {subtitle}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-1 mt-2 text-[#485AFF] font-semibold text-sm
                        transition-all duration-300 group-hover:gap-2 opacity-80 group-hover:opacity-100">
          <span>View details</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
