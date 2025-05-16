// components/Desktop/Blog.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiRefreshCw } from 'react-icons/fi'
import { SubscriptionCalculator } from '../shared/SubscriptionCalculator'
import { featured, posts, PostEntry } from '@/data/post'
import { PostCardSkeleton } from './PostCardSkeleton'

type BlogProps = {
  initialSearch?: string
}

const pageTitle = 'THE POOL BLOG'
const searchPlaceholder = 'Search'
const services = [
  'Pool Maintenance',
  'Pool Cleaning',
  'Diagnostics & Troubleshooting',
  'Custom Pool Design & Construction',
]

export const Blog: React.FC<BlogProps> = ({ initialSearch = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  const allPosts: PostEntry[] = [featured, ...posts]
  const matched = allPosts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const displayPosts = matched.length > 0 ? matched : allPosts

  const dynamicFeatured = displayPosts[0]
  const leftPosts = displayPosts.slice(1, 5)

  const handleReset = () => setSearchTerm('')

  return (
    <div className="w-full bg-white">
      <section className="px-4 py-12 max-w-7xl mx-auto">
        {/* HERO de vídeo */}
        <div className="relative py-16 flex justify-center items-center rounded-xl overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/videos/videoHD.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h2 className="relative z-10 text-white text-5xl font-bold tracking-tight">
            {pageTitle}
          </h2>
        </div>

        {/* BUSCADOR + BOTÓN RESET */}
        <div className="-mt-8 relative w-full max-w-3xl mx-auto px-4 z-20 flex items-center gap-2">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              flex-1 p-3 bg-white rounded-full shadow-lg border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-blue-400
            "
          />
          <button
            onClick={handleReset}
            aria-label="Reset filters"
            className="
              p-3 bg-white rounded-full shadow-lg border border-gray-200
              hover:bg-gray-100 transition
            "
          >
            <FiRefreshCw className="text-gray-600 w-5 h-5" />
          </button>
        </div>

        {/* 1) POST DESTACADO */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          <img
            src={dynamicFeatured.heroImage}
            alt={dynamicFeatured.title}
            className="w-full lg:w-1/3 h-64 object-cover rounded-lg"
          />
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-black">
              {dynamicFeatured.title}
            </h3>
            <p className="text-gray-600 mb-4">{dynamicFeatured.excerpt}</p>
            <Link
              href={`/blog/${dynamicFeatured.slug}`}
              className="self-start inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700"
            >
              {dynamicFeatured.buttonText ?? 'READ ME'}
            </Link>
          </div>
        </div>

        {/* 2) GRID DE 4 POSTS + “Próximamente” o ESQUELETOS */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          {/* Grid o Próximamente */}
          <div className="flex-1 bg-white p-6 rounded-xl shadow">
            {leftPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {leftPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="flex flex-col border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/blog/${post.slug}`} className="block flex-1">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4 flex-1 flex flex-col">
                        <h4 className="font-semibold mb-2 text-black">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 text-sm flex-1">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                    <div className="p-4 pt-0">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="w-full block text-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700"
                      >
                        READ ME
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
  <div className="relative">
             {/* Esqueletos de carga */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {Array.from({ length: 4 }).map((_, i) => (
                 <PostCardSkeleton key={i} />
               ))}
             </div>

             {/* Overlay “Próximamente” */}
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 pointer-events-none">
               <h3 className="text-2xl font-semibold text-gray-700">
                 Próximamente más artículos
               </h3>
               <p className="mt-2 text-gray-500">
                 Estamos preparando contenido nuevo para ti.
               </p>
             </div>
           </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 space-y-6">
            <div className="p-6 text-black rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {services.map((svc) => (
                  <li
                    key={svc}
                    onClick={() => setSearchTerm(svc)}
                    className="cursor-pointer hover:text-blue-600"
                  >
                    {svc}
                  </li>
                ))}
              </ul>
            </div>
            <SubscriptionCalculator />
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Blog
