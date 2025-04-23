import React from 'react'
import NavBar from "@/components/Desktop/NavBar";
import Section1 from "./Desktop/Section1"
import Section2 from './Desktop/Section2';
import Section3 from './Desktop/Section3';
import Section4 from './Desktop/Section4';
import Section5 from './Desktop/Section5';
import Section6 from './Desktop/Section6';
import Section7 from './Desktop/Section7';
import FooterSection from './Desktop/FooterSection';
import PageTransition from './Desktop/PageTransition';


function DesktopPage() {
  return (
    <PageTransition>
      <div className="w-full mx-auto bg-[#F5F9FF]">
        <NavBar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <FooterSection />
      </div>
    </PageTransition>
  )
}

export default DesktopPage