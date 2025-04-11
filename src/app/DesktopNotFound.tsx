import React from 'react'
import NavBar from '@/components/Desktop/NavBar'
import FooterSection from '@/components/Desktop/FooterSection'
import Image from 'next/image'
import Link from 'next/link'

function DesktopNotFound() {
    return (
        <>
            <NavBar />

            {/* bg-[#F5F9FF] */}

            <section className='h-full w-full flex flex-col items-center gap-[20px] px-[210px] pt-[72px] pb-[89px] w-max-[1600px] bg-[#F5F9FF]'>
                <Image src={'/svgs/404.svg'} alt={'404'} width={1180} height={314} className='mb-[42px]' />

                <nav>
                    <Link href='/'>
                        <div id='button' className="w-[127px] h-[58px] py-[5px] bg-[#485AFF] rounded-[8px] inline-flex flex-col justify-center items-center">
                            <div className="inline-flex justify-center items-center">
                                <div className="text-center justify-center text-white text-lg font-semibold font-inter leading-none">HOME PAGE</div>
                            </div>
                        </div>
                    </Link>
                </nav>


            </section>

            <FooterSection />
        </>
    )
}

export default DesktopNotFound