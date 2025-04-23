import React from 'react'
import NavBar from '@/components/Desktop/NavBar'
import FooterSection from '@/components/Desktop/FooterSection'
import Section1 from './Desktop/Section1'
import Section2 from './Desktop/Section2'
import PageTransition from '@/components/Desktop/PageTransition'


function DesktopFormPage() {
  return (
    <PageTransition>
      <div className='w-full mx-auto'>
        <NavBar />
        <Section1 />
        <Section2 />
        <FooterSection />

      </div>
    </PageTransition>
  )
}

export default DesktopFormPage