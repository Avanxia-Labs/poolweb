// src/app/blog/page.tsx
import Blog from '@/components/Desktop/Blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'THE POOL BLOG',
  description: 'Descubre nuestros artículos sobre mantenimiento y diseño de piscinas',
}

// Ahora es async y await sobre searchParams:
export default async function Page({
  searchParams,
}: {
  // Next te pasa searchParams como Promise<{ search?: string }>
  searchParams: Promise<{ search?: string }>
}) {
  const { search } = await searchParams
  const initialSearch = search ?? ''
  return <Blog initialSearch={initialSearch} />
}
