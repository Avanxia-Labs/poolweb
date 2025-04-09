import React from 'react'
import NavBar from "@/components/Desktop/NavBar";
import ServicesBody from './ServicesBody';

function DesktopServicePage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[#F5F9FF]">
      <NavBar/>
      <ServicesBody/>
    </div>
  )
}

export default DesktopServicePage