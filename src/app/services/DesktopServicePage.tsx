import React from 'react'
import NavBar from "@/components/Desktop/NavBar";
import Footer from '@/components/shared/Footer';
import Section1 from './Desktop/Section1';
import Section2 from './Desktop/Section2';
//import Section3 from './Desktop/Section3';
//import PageTransition from '@/components/Desktop/PageTransition';

function DesktopServicePage() {

  return (

    <div className="w-full flex flex-col justify-center mx-auto bg-[#F5F9FF]">
      <NavBar />
      <Section1 />
      <Section2 />

      {/* FUTURA SECCION DE REDES SOCIALES Y VIDEOS */}
      {/* <Section3/> */}
      <Footer />
    </div>

  )
}

export default DesktopServicePage