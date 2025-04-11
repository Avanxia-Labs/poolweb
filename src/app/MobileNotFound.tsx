import React from 'react'
import MobileNavBar from '@/components/Mobile/MobileNavBar'
import MobileErrorContent from '@/components/Mobile/MobileErrorContent'

function MobileNotFound() {
  return (
    <div className="min-h-screen bg-[#f7fafe]">
    <MobileNavBar/>
    <MobileErrorContent />    
</div>
  )
}

export default MobileNotFound