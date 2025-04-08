import React from 'react'
import NavBar from "@/components/Desktop/NavBar";
import Body from "@/components/Desktop/Body";

// function DesktopPage() {
//   return (
//     <div className="w-full max-w-[1600px] mx-auto h-[8196px] bg-[#F5F9FF]">
      
//       <NavBar/>
//       <Body/>

      
//     </div>
//   )
// }

function DesktopPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto bg-[#F5F9FF]">
      <NavBar/>
      <Body/>
    </div>
  )
}

export default DesktopPage