"use client"
import React from 'react'
import Image from 'next/image'
import SocialMediaButtons from './ServiceConnectElements/SocialMediaButtons'
import CustomCarousel from './ServiceConnectElements/ServiceConnectCarrousel'

function ServicesConnect() {
  return (
    <div className='flex flex-col gap-[79px] items-center px-[166px] pt-[119px] w-full bg-[url(/images/backgroundServicess.png)] pb-[119px] h-full bg-cover bg-center'>

      <div id='textContainer' className='relative md:mx-auto w-full h-[230px] md:max-w-[1600px] flex flex-col items-center'>
        <h1 className='self-stretch text-[#F5F9FF] text-center font-inter text-[80px] font-bold leading-[86px] tracking-[-4px]'>Connect With Us Online</h1>
        <p className='absolute w-[594px] bottom-0 text-center text-white font-inter text-[24px] font-normal leading-[40px]'>Check out our latest videos showcasing pristine pools, helpful advice, and the science behind sparkling water. Connect with us!</p>
      </div>

      <div id='socialmediabuttons' className=' flex items-center gap-[24px] w-[414px] h-[44.4px]'>
        <SocialMediaButtons />
      </div>

      
      <CustomCarousel/>
      

      </div>
  )
}

export default ServicesConnect