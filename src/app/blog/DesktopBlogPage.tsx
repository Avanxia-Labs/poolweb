'use client'
import React from 'react'
import NavBar from '@/components/Desktop/NavBar'
import FooterSection from '@/components/Desktop/FooterSection'
import Blog from '@/components/Desktop/Blog'

type DesktopBlogPageProps = {
  initialSearch?: string
}

export default function DesktopBlogPage({
  initialSearch = '',
}: DesktopBlogPageProps) {
  return (
    <>

      <Blog initialSearch={initialSearch} />
    </>
  )
}
