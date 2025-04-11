import React from 'react'
import MobileHeroContent from '@/components/Mobile/MobileHeroContent'
import MobileNavBar from '@/components/Mobile/MobileNavBar'

function MobileServicePage() {
  return (
    <div className="min-h-screen bg-[#f7fafe]">
    <MobileNavBar/>
    <MobileHeroContent />    
</div>  )
}

export default MobileServicePage