import React from 'react'
import Image from 'next/image'
import ContactForm from './FormComponent/ContactForm'

function Section1() {
    return (
        <section className='relative h-[1042px] w-full max-w-[1600px] pt-[34px] pr-[87px] bg-[#F5F9FF]'>

            <div id='container' className='w-full h-full h-max-[1042px] flex flex-row gap-[30px]'>

                <div id='woman' className='overflow-hidden mt-[125px] w-1/5 '>
                    <Image src={'/svgs/ContactWoman.svg'} alt={'woman'} width={371} height={739} />
                </div>

                <div id='text' className='w-1/5 overflow-hidden mb-[125px] mt-[125px] h-[739px] flex flex-col gap-[20px]'>
                    <p className='text-[#0F172A] font-inter text-[64px] font-bold leading-[69px] normal'>Let's work together!</p>
                    <p className='text-[#212939] w-full pr-[15px] font-inter text-[18.93px] font-normal leading-[21.89px]'>We're here to help you enjoy your pool again.
                        Complete the form and we'll be in touch within the next 24 hours.
                    </p>
                </div>

                <div id='form' className='w-3/5 h-full  flex flex-col gap-[10px]'>
                    <div id='tarjetas' className=' flex flex-row gap-[20px] justify-center'>
                        <div className='flex w-[229px] h-[121px] flex-col justify-center items-center gap-4 shrink-0 rounded-[7px] bg-white'>
                            <Image src={'/svgs/ContactPhone.svg'} alt={'Phone'} width={27} height={29} />
                            <p className='text-[#344054] text-center font-inter text-xs font-normal leading-[15.953px]'>+1 (239) 380-0766</p>
                        </div>
                        <div className='flex w-[229px] h-[121px] flex-col justify-center items-center gap-4 shrink-0 rounded-[7px] bg-white'>
                            <Image src={'/svgs/ContactLocation.svg'} alt={'Phone'} width={27} height={29} />
                            <p className='text-[#344054] text-center font-inter text-xs font-normal leading-[15.953px]'>Av.Sunset</p>
                        </div>
                        <div className='flex w-[229px] h-[121px] flex-col justify-center items-center gap-4 shrink-0 rounded-[7px] bg-white'>
                            <Image src={'/svgs/ContactEmail.svg'} alt={'Phone'} width={27} height={29} />
                            <p className='text-[#344054] text-center font-inter text-xs font-normal leading-[15.953px]'>email@hosting.com</p>
                        </div>
                    </div>
                    <ContactForm />
                </div>

            </div>

            <div id='vector' className='absolute bottom-0 left-0'>
                <Image src={'/svgs/ContactVector.svg'} alt={'vector'}
                    width={1600}
                    height={637} />
            </div>

        </section>
    )
}

export default Section1