'use client'
import React from 'react'
import NavBar from '@/components/Desktop/NavBar'
import FooterSection from '@/components/Desktop/FooterSection'
import MobileNavBar from '@/components/Mobile/MobileNavBar'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* mobile: se muestra hasta 767px */}
      <div className="block md:hidden">
        <MobileNavBar />
      </div>

      {/* desktop: se muestra desde 768px en adelante */}
      <div className="hidden md:block">
        <NavBar />
      </div>

      <main>{children}</main>
      <FooterSection />
    </>
  )
}
