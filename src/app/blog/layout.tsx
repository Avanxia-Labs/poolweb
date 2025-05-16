// src/app/blog/layout.tsx
'use client'
import React from 'react'
import NavBar from '@/components/Desktop/NavBar'
import FooterSection from '@/components/Desktop/FooterSection'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <FooterSection />
    </>
  )
}
