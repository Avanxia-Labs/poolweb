import React from 'react'
import NavBar from "@/components/Desktop/NavBar";
import FooterSection from '@/components/Desktop/FooterSection';
import Section1 from './Desktop/Section1';
import Section2 from './Desktop/Section2';
//import Section3 from './Desktop/Section3';
import PageTransition from '@/components/Desktop/PageTransition';

function DesktopServicePage() {

  return (
    <PageTransition>
      <div className="w-full flex flex-col justify-center mx-auto bg-[#F5F9FF]">
        <NavBar />
        <Section1 />
        <Section2 />

        {/* FUTURA SECCION DE REDES SOCIALES Y VIDEOS */}
        {/* <Section3/> */}
        <FooterSection />
      </div>
    </PageTransition>
  )
}

export default DesktopServicePage