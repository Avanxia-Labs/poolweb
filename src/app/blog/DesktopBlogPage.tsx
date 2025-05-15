import React from 'react'
import NavBar from "@/components/Desktop/NavBar";
import FooterSection from '@/components/Desktop/FooterSection';
import Blog from '@/components/Desktop/Blog';


//import Section3 from './Desktop/Section3';
//import PageTransition from '@/components/Desktop/PageTransition';

function MobileBlogPage() {

  return (
    
      <div className="w-full flex flex-col justify-center mx-auto bg-[#F5F9FF]">
        <NavBar />

        {/* FUTURA SECCION DE REDES SOCIALES Y VIDEOS */}
        <Blog />
        {/* <Section3/> */}
        <FooterSection />
      </div>
    
  )
}

export default MobileBlogPage