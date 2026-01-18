import React from 'react'
import NavBar from '@/components/Desktop/NavBar'
import Footer from '@/components/shared/Footer'
import Section1 from './Desktop/Section1'
import Section2 from './Desktop/Section2'
//import PageTransition from '@/components/Desktop/PageTransition'


function DesktopFormPage() {
  return (

    <div className='w-full mx-auto'>
      <NavBar />
      <Section1 />
      <Section2 />
      <Footer />

    </div>

  )
}

export default DesktopFormPage