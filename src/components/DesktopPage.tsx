import React from 'react'
import NavBar from "@/components/Desktop/NavBar";
import Section1 from "./Desktop/Section1"
import Section2 from './Desktop/Section2';
import ProjectsSection from './Desktop/ProjectsSection';
import Section3 from './Desktop/Section3';
import Section4 from './Desktop/Section4';
import Section5 from './Desktop/Section5';
import Section6 from './Desktop/Section6';
import Section7 from './Desktop/Section7';
import Footer from '@/components/shared/Footer';
//import FooterSection from './Desktop/FooterSection';
//import PageTransition from './Desktop/PageTransition';


function DesktopPage() {
  return (

    <div className="w-full mx-auto bg-[#F5F9FF]">
      <NavBar />
      <Section1 />
      <Section2 />
      <ProjectsSection />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>

  )
}

export default DesktopPage