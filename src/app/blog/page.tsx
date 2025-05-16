// src/app/blog/page.tsx
import Blog from '@/components/Desktop/Blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'THE POOL BLOG',
  description: 'Descubre nuestros artículos sobre mantenimiento y diseño de piscinas',
}

export default async function Page({
  searchParams,
}: {
  // Next te pasa searchParams como una promesa
  searchParams: Promise<{ search?: string }>
}) {
  const { search } = await searchParams
  const initialSearch = search ?? ''
  return <Blog initialSearch={initialSearch} />
}
