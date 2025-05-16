'use client'
import React from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'
import DesktopBlogPage from './DesktopBlogPage'
import MobileBlogPage from './MobileBlogPage'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const [isMobile, hydrated] = useIsMobile()
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get('search') ?? ''

  if (!hydrated || isMobile === null) {
    return null
  }

  return isMobile
    ? <MobileBlogPage initialSearch={initialSearch} />
    : <DesktopBlogPage initialSearch={initialSearch} />
}
