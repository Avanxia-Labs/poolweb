import MobileAboutContent from '@/components/Mobile/MobileAboutContent'
import MobileNavBar from '@/components/Mobile/MobileNavBar'
import React from 'react'

function MobileAboutPage() {
  return (
    <div className="min-h-screen bg-[#f7fafe]">
    <MobileNavBar/>
    <MobileAboutContent />    
</div>
  )
}

export default MobileAboutPage