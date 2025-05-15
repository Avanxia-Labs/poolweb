// components/Blog.tsx
import React, { useState } from 'react'
import Link from 'next/link'

type Post = {
  image: string
  title: string
  excerpt: string
  link: string
}

const blogContent = {
  title: 'THE POOL BLOG',
  searchPlaceholder: 'Search',
  featured: {
    image: '/images/problem-pool.png',
    title: 'An Has Bren Released By Great Scientists',
    excerpt:
      'This geometric swimming pool has an attached hot tub with a spill over feature. The pool features a small waterfall into the pool. Ledger stone and tile accent the modern swimming pool design. The pool is guarded by a clear glass fence to overlook the beautiful valley below.',
    buttonText: 'VIEW NOTICE',
    link: '/blog/an-has-bren-released',
  },
  posts: [
    { image: '/images/custom_comparative.png', title: 'Swimming Pool Filter 101', excerpt: 'Keeping your swimming pool clean is the most essential part of pool ownership. The circulation of water allows the pool chemicals to keep the water sanitized and crystal clear.', link: '/blog/swimming-pool-filter-101' },
    { image: '/images/custom_comparative.png', title: 'How to Balance pH Levels', excerpt: 'To keep your pool healthy, monitoring and adjusting pH is crucial. Learn step-by-step how to test and balance the pH for crystal-clear water.', link: '/blog/balance-ph-levels' },
    { image: '/images/automation-showcase.png', title: 'Top Pool Automation Systems', excerpt: 'Discover the latest in pool automation. From smart timers to remote controls, these systems will simplify your pool maintenance.', link: '/blog/pool-automation-systems' },
    { image: '/images/custom_comparative.png', title: 'Winterizing Your Pool', excerpt: 'Don’t let cold weather damage your pool. Follow our complete guide to winterize your pool and protect your equipment all season long.', link: '/blog/winterize-your-pool' },
    { image: '/images/custom_comparative.png', title: 'Choosing the Right Pool Vacuum', excerpt: 'A good vacuum makes all the difference. We review the best manual and robotic pool vacuums on the market.', link: '/blog/pool-vacuum-guide' },
    { image: '/images/automation-showcase.png', title: 'DIY vs Professional Maintenance', excerpt: 'Should you tackle pool care yourself? We compare costs, time, and results between DIY and hiring a pro.', link: '/blog/diy-vs-professional' },
  ] as Post[],
}

const Blog: React.FC = () => {
  const { title, searchPlaceholder, featured, posts } = blogContent
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      {/* HERO */}
      <div
        className="relative py-16 flex justify-center items-center rounded-xl overflow-hidden"
        style={{
          backgroundImage: 'url(/images/pool_blog.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-white text-5xl font-bold tracking-tight z-10">
          {title}
        </h2>
      </div>

      {/* BUSCADOR flotando con negative margin */}
      <div className="-mt-8 relative w-full max-w-3xl mx-auto px-4 z-20">
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 bg-white rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Featured Post */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        <img
          src={featured.image}
          alt={featured.title}
          className="w-full lg:w-1/3 h-64 object-cover rounded-lg"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-black">
              {featured.title}
            </h3>
            <p className="text-gray-600 mb-4">{featured.excerpt}</p>
          </div>
          {/* Botón reducido */}
          <div>
            <Link
              href={featured.link}
              className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700"
            >
              {featured.buttonText}
            </Link>
          </div>

        </div>
      </div>

      {/* Grid de Posts */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, idx) => (
          <Link
            key={idx}
            href={post.link}
            className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold mb-2 text-black">
                {post.title}
              </h4>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Blog
