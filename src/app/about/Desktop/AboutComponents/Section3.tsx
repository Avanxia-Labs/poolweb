import React from 'react'
import Image from 'next/image'

function Section3() {
    return (
        <section className='w-full max-w-[1920px] mx-auto flex flex-col xl:flex-row justify-center items-center gap-10 py-16'>
            {/* Left side with images */}
            <div className='w-full max-w-[635px] flex justify-center xl:justify-end'>
                <div className='flex flex-row gap-4 sm:gap-[33px] w-full max-w-[635px] px-4'>
                    {/* Image1 */}
                    <div className='w-full sm:w-[299px]'>
                        <Image 
                            src={'/svgs/aboutSection3.svg'} 
                            alt={'pool'} 
                            width={299} 
                            height={575}
                            className='rounded-[15px] w-full h-auto object-cover'
                        />
                    </div>
                    
                    {/* Container with image 2 and blue box */}
                    <div className='flex flex-col gap-4 sm:gap-[15px] w-full sm:w-[303px]'>
                        <div className='w-full'>
                            <Image 
                                src={'/svgs/aboutSection3_2.svg'} 
                                alt={'pool'} 
                                width={303} 
                                height={432}
                                className='rounded-[15px] w-full h-auto object-cover'
                            />
                        </div>

                        <div className='px-6 pt-2 pb-4 rounded-[15px] bg-[#485AFF] w-full'>
                            <p className='text-white font-montserrat text-2xl sm:text-3xl md:text-[36px] font-extrabold leading-normal'>10+</p>
                            <p className='text-white font-montserrat text-lg sm:text-xl md:text-[24px] font-semibold leading-normal'>Years of experience</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side with text content */}
            <div className='w-full max-w-[626px] flex justify-center xl:justify-start'>
                <div className='flex flex-col px-4 sm:px-[16px] pt-6 sm:pt-[24px] gap-4 sm:gap-[20px] w-full max-w-[626px] mx-4 rounded-[15px] bg-white shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] pb-8 sm:pb-[45px]'>
                    <p className='text-[#0F172A] font-montserrat text-3xl sm:text-4xl md:text-[48px] font-semibold leading-tight'>
                        Sparkling Pools, <br />Worry-Free Service
                    </p>

                    <p className='text-[#0F172A] font-montserrat text-sm sm:text-[16px] font-normal leading-normal'>
                        Our expert team takes care of every detail—so you don't have to. From deep cleaning and precise chemical balancing to filter maintenance and equipment checks, we ensure your pool is always ready for you. Whether it's for relaxing weekends, family fun, or impressing your guests, we make sure your pool stays sparkling and hassle-free. Relax, dive in, and leave the work to us.
                    </p>

                    <div className='pt-4 sm:pt-[22px] flex flex-col sm:flex-row gap-4 sm:gap-[20px]'>
                        <div className='w-full px-4 sm:px-[20px] py-4 sm:py-[20px] rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'>
                            <p className='text-[#0F172A] font-montserrat text-sm sm:text-[16px] font-normal leading-normal'>
                                - Weekly or one-time service <br />
                                - Residential and commercial pools <br />
                                - Eco-friendly cleaning products
                            </p>
                        </div>
                        <div className='w-full rounded-[10px] px-4 sm:px-[20px] py-4 sm:py-[20px] bg-white shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'>
                            <p className='text-[#0F172A] font-montserrat text-sm sm:text-[16px] font-normal leading-normal'>
                                - Filter and pump maintenance <br/>
                                - Fast and professional service <br/>
                                - Personalized service
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3