// src/app/blog/[slug]/page.tsx
import BlogPost, { BlogPostData } from '@/components/Desktop/BlogPost'
import { featured, posts as allPosts, PostEntry } from '@/data/post'
import { SubscriptionCalculator } from '@/components/shared/SubscriptionCalculator'
import Link from 'next/link'
import { Metadata } from 'next'

type Params = { slug: string }

// Genera metadata dinámico
export function generateMetadata({ params }: { params: Params }): Metadata {
  const all: PostEntry[] = [featured, ...allPosts]
  const entry = all.find((p) => p.slug === params.slug) ?? featured
  return {
    title: entry.title,
    description: entry.excerpt,
    openGraph: {
      title: entry.title,
      description: entry.excerpt,
      images: [entry.heroImage, entry.sectionImage],
      type: 'article',
    },
  }
}

// Prerenderiza todas las rutas /blog/<slug>
export function generateStaticParams() {
  return [featured, ...allPosts].map((p) => ({ slug: p.slug }))
}

interface Props { params: Params }

export default function PostPage({ params }: { params: { slug: string } }) {
  const all: PostEntry[] = [featured, ...allPosts]
  const entry = all.find((p) => p.slug === params.slug) ?? featured

  // Ahora usamos heroImage y sectionImage
  const props: BlogPostData = {
    title: entry.title,
    excerpt: entry.excerpt,
    heroImage: entry.heroImage,
    sectionImage: entry.sectionImage,
    sectionTitles: entry.sectionTitles,
    content: entry.content,
  }

  return (
    <BlogPost
      {...props}
      sidebar={
        <>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-4 text-black">Categories</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {entry.tags?.map((svc) => (
                <li key={svc}>
                  <Link
                    href={`/blog?search=${encodeURIComponent(svc)}`}
                    className="cursor-pointer hover:text-blue-600"
                  >
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <SubscriptionCalculator />
        </>
      }
    />
  )
}
