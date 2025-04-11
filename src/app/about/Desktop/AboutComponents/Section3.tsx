import React from 'react'
import Image from 'next/image'

function Section3() {
    return (
        <section className='w-full w-max-[1600px] h-[848px] flex flex-row justify-center gap-[30px]'>

            <div className='h-full w-full'>
                <div className='flex flex-row gap-[33px] w-[635px] h-[575px] ml-[163px] mt-[75.5]'>
                    {/* Image1 */}
                    <Image src={'/svgs/aboutSection3.svg'} alt={'pool'} width={299} height={575}
                        className='rounded-[15px]'
                    />
                    {/* Container con imagen 2 y cuadro azul */}
                    <div className='flex flex-col gap-[15px]'>

                        <Image src={'/svgs/aboutSection3_2.svg'} alt={'pool'} width={303} height={432}
                            className='rounded-[15px]'
                        />

                        <div className='px-[33px] pt-[10px] rounded-[15px] bg-[#485AFF] h-full w-full'>
                            <p className='text-white font-montserrat text-[36px] not-italic font-extrabold leading-normal'>30+</p>
                            <p className='text-white font-montserrat text-[24px] not-italic font-semibold leading-normal'>Years of experience</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-full w-full'>
                <div className='flex flex-col px-[16px] pt-[24px] gap-[20px] w-[626px] h-[580px] pb-[45px] mt-[136.5px] rounded-[15px] bg-white shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'>

                    <p className='text-[#0F172A] font-montserrat text-[48px] not-italic font-semibold leading-normal'>Sparkling Pools, <br />Worry-Free Service</p>

                    <p className='text-[#0F172A] font-montserrat text-[16px] not-italic font-normal leading-normal'>Our expert team takes care of every detail—so you don't have to. From deep cleaning and precise chemical balancing to filter maintenance and equipment checks, we ensure your pool is always ready for you. Whether it’s for relaxing weekends ,family fun, or impressing your guests, we make sure your pool stays sparkling and hassle-free.Relax, dive in, and leave the work to us.</p>

                    <div className='pt-[22px] flex flex-row gap-[20px]'>
                        <div className='w-full px-[20px] py-[20px] rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'>
                            <p className='text-[#0F172A] font-montserrat text-[16px] not-italic font-normal leading-normal'>
                                - Weekly or one-time service <br />
                                - Residential and commercial pools <br />
                                - Eco-friendly cleaning products</p>
                        </div>
                        <div className='w-full rounded-[10px] px-[20px] py-[20px] bg-white shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'>
                            <p className='text-[#0F172A] font-montserrat text-[16px] not-italic font-normal leading-normal'>
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