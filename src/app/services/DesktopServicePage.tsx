import React from 'react'
import NavBar from "@/components/Desktop/NavBar";
import FooterSection from '@/components/Desktop/FooterSection';
import Section1 from './Desktop/Section1';
import Section2 from './Desktop/Section2';
import Section3 from './Desktop/Section3';

function DesktopServicePage() {

  return (
    <div className="w-full max-w-[1920px] mx-auto bg-[#F5F9FF]">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3/>
      <FooterSection />
    </div>
  )
}

export default DesktopServicePage