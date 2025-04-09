import React from 'react'
import NavBar from "@/components/Desktop/NavBar";
import ServicesBody from './ServicesBody';
import FooterSection from '@/components/Desktop/FooterSection';

function DesktopServicePage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[#F5F9FF]">
      <NavBar/>
      <ServicesBody/>
      <FooterSection/>
    </div>
  )
}

export default DesktopServicePage