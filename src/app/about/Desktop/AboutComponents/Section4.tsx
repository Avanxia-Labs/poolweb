import React from 'react'
import Image from 'next/image'

function Section4() {
    return (
        <section className='bg-[#0F172A] px-[212px] py-[102px] flex flex-row gap-[35px] w-full max-w-[1600px]'>

            <div id='col1' className='flex flex-col gap-[20px] w-[612px] h-[594px]'>

                <div className='w-full h-[185px] pt-[5px] px-[10px] flex flex-col gap-[10px] rounded-[15px] bg-white'>

                    <div className='bg-[#485AFF] rounded-[5px] flex h-[30px] w-[117px] px-4 flex-col justify-center items-center gap-[10px] shrink-0'>
                        <p className='text-white font-inter text-[16px] not-italic font-bold leading-none'>Our Vision</p>
                    </div>

                    <p className='text-[#0F172A] font-inter text-[20px] not-italic font-normal leading-[24px] self-stretch'>To become the most trusted pool maintenance company in the region, known for our commitment to excellence, innovation, and outstanding customer care.</p>
                </div>

                <div className='w-full h-[185px] pt-[5px] px-[10px] flex flex-col gap-[10px] rounded-[15px] bg-white'>
                    <div className='bg-[#485AFF] rounded-[5px] flex h-[30px] w-[117px] px-3 flex-col justify-center items-center gap-[10px] shrink-0'>
                        <p className='text-white font-inter text-[16px] not-italic font-bold leading-none'>Our Mission</p>
                    </div>

                    <p className='text-[#0F172A] font-inter text-[20px] not-italic font-normal leading-[24px] self-stretch'>Provide reliable, high-quality pool maintenance services that ensure clean, safe, and enjoyable swimming environments for all our clients.</p>
                </div>

                <div className='w-full h-[185px] pt-[5px] px-[10px] flex flex-col gap-[10px] rounded-[15px] bg-white'>
                    <div className='bg-[#485AFF] rounded-[5px] flex h-[30px] w-[117px] px-3 flex-col justify-center items-center gap-[10px] shrink-0'>
                        <p className='text-white font-inter text-[16px] not-italic font-bold leading-none'>Our History</p>
                    </div>

                    <p className='text-[#0F172A] font-inter text-[20px] not-italic font-normal leading-[24px] self-stretch'>Founded by Chemical Engineer Yosbani Martinez, Pool Quality Solutions brings scientific precision and certified experience to pool care, ensuring safe, reliable, and high-quality service.</p>
                </div>
            </div>

            <div id='col2' className='relative w-[529px] h-[595px] rounded-[15px]'> 
                <Image src={'/svgs/aboutSection4.svg'} 
                alt={'pool'} 
                fill
                className='object-cover rounded-[15px]'/>
            </div>

        </section>
    )
}

export default Section4