import React from 'react'
import Card from './Card'
import Image from 'next/image'
import FancyButton from './FancyButton'
import Link from 'next/link'

const SERVICES = [
    {
        icon: "/svgs/helmet.svg",
        title: "Custom Pool Design & Construction",
        description: "Transform your backyard with custom pool design and construction using quality materials and exceptional finishes.",
        featured: true,
        href: "/services?service=design-and-construction"
    },
    {
        icon: "/svgs/Clock_Desktop2.svg",
        title: "Regular Maintenance",
        description: "Scheduled service to keep your pool in top condition, anticipating and correcting issues before they become costly.",
        href: "/services?service=pool-maintenance"
    },
    {
        icon: "/svgs/bubble.svg",
        title: "Deep and Routine Cleaning",
        description: "We remove dirt, debris, and algae to ensure your pool stays clean, safe, and always ready to enjoy.",
        href: "/services?service=pool-cleaning"
    },
    {
        icon: "/svgs/tools.svg",
        title: "Repair and Installation",
        description: "We install and repair essential equipment for efficient and safe pool operation.",
        href: "/services?service=equipment-repair"
    },
    {
        icon: "/svgs/balde.svg",
        title: "Pool System Automation",
        description: "Control your pool from your phone with smart technology that makes daily management easy.",
        href: "/services?service=pool-automation"
    },
    {
        icon: "/svgs/bulb.svg",
        title: "Diagnosis and Troubleshooting",
        description: "We quickly identify any pool issue and provide precise, effective solutions.",
        href: "/services?service=diagnostics"
    }
];

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

                    <h2 className="text-[#0F172A] text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-['Plus_Jakarta_Sans']">
                        Into our Services
                    </h2>

                    <Link href="/services">
                        <FancyButton
                            text={'View All Services'}
                        />
                    </Link>


                    <p className="mt-4 max-w-2xl text-[#0F172A] text-base lg:text-lg leading-relaxed font-inter font-medium">
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
                            {/* Grid responsive - Unified & Animated */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center relative z-10">
                                {SERVICES.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`group relative w-full h-full flex justify-center items-center rounded-2xl p-4 md:p-6
                                                    transition-all duration-500 ease-out
                                                    hover:bg-white/40 hover:backdrop-blur-sm hover:shadow-lg
                                                    hover:-translate-y-1 border border-transparent hover:border-white/30
                                                    ${service.featured ? 'md:row-span-1' : ''}`}
                                    >
                                        {/* Featured Badge */}
                                        {service.featured && (
                                            <div className="absolute top-3 right-3 z-20 animate-fade-in">
                                                <span className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold
                                                               text-white bg-gradient-to-r from-emerald-500 to-cyan-500
                                                               rounded-full shadow-sm">
                                                    <span className="text-yellow-300 animate-pulse">&#9733;</span>
                                                    Featured
                                                </span>
                                            </div>
                                        )}

                                        {/* Card Content */}
                                        <div className="transform transition-transform duration-500 h-full w-full">
                                            <Card
                                                icon={service.icon}
                                                title={service.title}
                                                description={service.description}
                                                href={service.href}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Section2