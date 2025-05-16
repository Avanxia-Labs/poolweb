'use client'
import React from 'react'
import NavBar from '@/components/Desktop/NavBar'
import FooterSection from '@/components/Desktop/FooterSection'
import Blog from '@/components/Desktop/Blog'

type MobileBlogPageProps = {
  initialSearch?: string
}

export default function MobileBlogPage({
  initialSearch = '',
}: MobileBlogPageProps) {
  return (
    <>
      <NavBar />
      <Blog initialSearch={initialSearch} />
      <FooterSection />
    </>
  )
}
