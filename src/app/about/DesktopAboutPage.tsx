import NavBar from '@/components/Desktop/NavBar'
import React from 'react'
import Section1 from './Desktop/AboutComponents/Section1'
import Section2 from './Desktop/AboutComponents/Section2'
import Section3 from './Desktop/AboutComponents/Section3'
import Footer from '@/components/shared/Footer'
import Section4 from './Desktop/AboutComponents/Section4'
//import PageTransition from '@/components/Desktop/PageTransition'

function DesktopAboutPage() {
  return (

    <div className='w-full mx-auto bg-[#F5F9FF]'>
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>

  )
}

export default DesktopAboutPage