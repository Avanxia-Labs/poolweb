import React from 'react'
import  MobileNavBar  from "@/components/Mobile/MobileNavBar";
import MobileBody from "@/components/Mobile/MobileBody";
function MobilePage() {
  return (
    <div className="min-h-screen bg-[#f7fafe]">
    <MobileNavBar />
    <MobileBody />
    {/* Aquí irá el resto de tu contenido */}
  </div>
  )
}

export default MobilePage