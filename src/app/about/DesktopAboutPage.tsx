import NavBar from '@/components/Desktop/NavBar'
import React from 'react'
import Section1 from './Desktop/AboutComponents/Section1'
import Section2 from './Desktop/AboutComponents/Section2'
import Section3 from './Desktop/AboutComponents/Section3'
import FooterSection from '@/components/Desktop/FooterSection'
import Section4 from './Desktop/AboutComponents/Section4'

function DesktopAboutPage() {
  return (
      <div className='w-full mx-auto bg-[#F5F9FF]'>
          <NavBar/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/> 
          <FooterSection/>
      </div>
    )
}

export default DesktopAboutPage