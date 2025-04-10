import NavBar from '@/components/Desktop/NavBar'
import React from 'react'
import Section1 from './Desktop/AboutComponents/Section1'
import Section2 from './Desktop/AboutComponents/Section2'

function DesktopAboutPage() {
  return (
      <div className='w-full max-w-[1600px] mx-auto bg-[#F5F9FF]'>
          <NavBar/>
          <Section1/>
          <Section2/>
      </div>
    )
}

export default DesktopAboutPage