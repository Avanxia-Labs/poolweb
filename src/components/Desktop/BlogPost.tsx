// components/Desktop/BlogPost.tsx
import React from 'react'

export type BlogPostData = {
  title: string
  excerpt?: string
  heroImage: string
  sectionTitles: string[]
  content: string[]
  sectionImage: string
}

interface BlogPostProps extends BlogPostData {
  sidebar?: React.ReactNode
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  heroImage,
  sectionTitles,
  content,
  sectionImage,
  sidebar,
}) => (
  <div className="w-full bg-gray-50 py-12">
    <article className="max-w-4xl mx-auto space-y-8 px-4">
      {/* VIDEO HERO con texto superpuesto */}
      <div className="relative py-16 flex justify-center items-center rounded-xl overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/videoHD.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay transparente blanca suave */}
        <div className="absolute inset-0 bg-white/20" />
        <h2 className="relative z-10 text-white text-5xl font-bold tracking-tight">
          THE POOL BLOG
        </h2>
      </div>

      {/* TÍTULO REAL ABAJO */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">{title}</h1>
        {excerpt && (
          <p className="mt-2 text-lg text-gray-600 italic">{excerpt}</p>
        )}
      </div>

      {/* HERO estático (imagen) */}
      <div className="overflow-hidden rounded-3xl max-w-3xl w-11/12 mx-auto">
        <img
          src={heroImage}
          alt={`${title} hero`}
          className="w-full h-85 object-cover rounded-3xl"
        />
      </div>

      {/* Grid de contenido y sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contenido principal */}
        <div className="lg:col-span-2 p-8 space-y-6 bg-white rounded-xl shadow">
          {sectionTitles.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-900">
                {section}
              </h3>

              {idx === 2 ? (
                <>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={sectionImage}
                      alt={section}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                  <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {content[idx]}
                  </p>
                </>
              ) : (
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {content[idx]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar dinámico */}
        {sidebar && (
          <aside className="lg:col-span-1 space-y-8 px-4 lg:px-0">
            {sidebar}
          </aside>
        )}
      </div>
    </article>
  </div>
)

export default BlogPost
