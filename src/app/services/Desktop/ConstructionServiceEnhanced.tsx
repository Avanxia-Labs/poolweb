'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ConstructionGallery from '@/components/shared/ConstructionGallery';
import {
  ConstructionProject,
  ConstructionCategory,
  categoryConfig
} from '@/data/constructionProjects';

const ConstructionServiceEnhanced: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<ConstructionProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<ConstructionCategory>('NEW_BUILD');

  return (
    <div className="w-full">
      {/* Special Header with Glow Effect */}
      <div className="construction-service-highlight rounded-2xl p-6 mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Custom Pool Design & Construction
            </h2>
            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full animate-pulse">
              Featured
            </span>
          </div>
          <p className="text-gray-300 text-sm lg:text-base max-w-2xl">
            Transform your backyard into a stunning oasis. We specialize in creating custom pools
            that perfectly blend with your vision, lifestyle, and property. From new builds to
            complete renovations, our expert team delivers exceptional craftsmanship.
          </p>
        </div>
      </div>

      {/* Construction Gallery */}
      <ConstructionGallery
        initialCategory="NEW_BUILD"
        onCategoryChange={setActiveCategory}
        onProjectChange={setCurrentProject}
      />

      {/* CTA Section */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">
            Ready to build your dream pool?
          </h4>
          <p className="text-gray-600 text-sm">
            Get a free consultation and custom quote for your project
          </p>
        </div>
        <Link
          href="/contact?service=design-and-construction"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-arrow-bounce"
        >
          Request Quote
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 arrow-icon transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Category Description */}
      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: categoryConfig[activeCategory].color }}
          />
          <span className="text-sm font-medium text-gray-700">
            {categoryConfig[activeCategory].label}
          </span>
        </div>
        <p className="text-gray-500 text-sm">
          {categoryConfig[activeCategory].description}
        </p>
      </div>

      {/* Service Features Grid */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
            title: 'Licensed & Insured',
            desc: 'Full coverage for your peace of mind'
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: 'On-Time Delivery',
            desc: 'Projects completed as scheduled'
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            ),
            title: 'Premium Materials',
            desc: 'Only the best for your pool'
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ),
            title: 'Expert Team',
            desc: 'Decades of combined experience'
          }
        ].map((feature, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-3">
              {feature.icon}
            </div>
            <h5 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h5>
            <p className="text-gray-500 text-xs">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstructionServiceEnhanced;
