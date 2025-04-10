import React from 'react'
import NavBar from '@/components/Desktop/NavBar'
import Section1 from './AboutComponents/Hero'

function AboutUs() {
  return (
    <div className='w-full max-w-[1600px] mx-auto bg-[#F5F9FF]'>
        <NavBar/>
        <Section1/>
    </div>
  )
}

export default AboutUs