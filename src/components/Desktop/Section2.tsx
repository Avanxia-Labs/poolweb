import React from 'react'
import Card from './Card'
import Image from 'next/image'
import FancyButton from './FancyButton'
import Link from 'next/link'

function Section2() {
    return (

        <section id="Frame4" className="overflow-hidden flex flex-col items-center self-stretch bg-gradient-to-b from-[#4CF7FB] to-[#206680] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pb-6 lg:pb-10">

            {/* Background blur */}
            <div className="mb-10 w-3/4 max-w-md aspect-[2.5] blur-[14.5px] w-[22rem] h-[10rem] mb-[4.05rem]">
                <div className="w-full h-full flex justify-center items-center rounded-[1.875rem 1.875rem 0rem 0rem] bg-[#0F172A]"></div>
            </div>

            <div className="w-full max-w-screen-xl flex flex-col items-center text-center">

                {/* Título y Descripción */}
                <div className="flex flex-col items-center gap-[1.14rem] px-4 mb-[3.12rem]">
                    <div className="flex justify-center w-full max-w-md mx-auto">
                        <Image src="/svgs/Deep.svg" alt="Deep" width={200} height={160} className="w-auto h-auto" />
                    </div>

                    <h2 className="text-[#0F172A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                        Into our Services
                    </h2>

                    <Link href="/services">
                        <FancyButton
                            text={'View All Services'}
                        />
                    </Link>


                    <p className="mt-2 max-w-2xl text-[#212939] text-base sm:text-lg md:text-xl leading-relaxed">
                        We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
                    </p>
                </div>

                {/* Cuadro con cards */}
                <div className="w-full bg-white/50 backdrop-blur-sm rounded-2xl px-4 sm:px-6 md:px-10 py-6">

                    <div className="flex flex-col items-center gap-10">

                        <div className="relative w-full">

                            {/* Líneas divisorias (solo en pantallas grandes) */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#E4E4E7]" />
                            <div className="hidden md:block absolute top-0 left-1/3 w-px h-full bg-[#E4E4E7]" />
                            <div className="hidden md:block absolute top-0 left-2/3 w-px h-full bg-[#E4E4E7]" />

                            {/* Grid responsive */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                                <Card icon="/svgs/Clock_Desktop2.svg" title="Regular Maintenance" description=" Scheduled service to keep your pool in top condition, anticipating and correcting issues before they become costly." />
                                <Card icon="/svgs/bubble.svg" title="Deep and Routine Cleaning" description="We remove dirt, debris, and algae to ensure your pool stays clean, safe, and always ready to enjoy." />
                                <Card icon="/svgs/tools.svg" title="Repair and Installation" description="We install and repair essential equipment for efficient and safe pool operation." />
                                <Card icon="/svgs/balde.svg" title="Pool System Automation" description="Control your pool from your phone with smart technology that makes daily management easy." />
                                <Card icon="/svgs/bulb.svg" title="Diagnosis and Troubleshooting" description="We quickly identify any pool issue and provide precise, effective solutions." />
                                <Card icon="/svgs/helmet.svg" title="Custom Pool Design &Construction" description="Coming soon: custom pool construction using quality materials and exceptional finishes." />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Section2