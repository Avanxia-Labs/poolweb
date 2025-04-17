import React from 'react'
import InputDesign from './Frame66Card'
import Image from 'next/image'
import SubscriptionCalculatorCard from '../Mobile/SubscriptionCalculatorCard'

function Section3() {
    return (

        <>
            {/* Section 3 */}
            <section id="Frame64" className=" relative overflow-hidden flex w-full mx-auto py-[10vw] flex-col items-center gap-y-10 bg-no-repeat bg-cover bg-center">

                {/* Encabezado y botón */}
                <div id="Frame65" className="flex flex-col items-center gap-5 text-center max-w-3xl w-full">
                    <p className="text-[#0F172A] font-plus_jakarta_sans text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                        Get Your Instant Pool Service <br /> Estimate
                    </p>

                    <button className="flex px-6 py-4 flex-col justify-center items-center gap-2 rounded-lg bg-[#F5F9FF]">
                        <div id="Frame1" className="flex justify-center items-center gap-2">
                            <p className="text-[#485AFF] font-inter text-base sm:text-lg font-extrabold leading-7">
                                Enter Your Pool Details Below
                            </p>
                            {/* NO ESTA EN EL DISEÑO */}
                            <div id="icon"></div>
                        </div>
                    </button>
                </div>

                {/* Contenedor Principal con Formulario e Imagen */}
                <div id="Frame67" className="relative flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-y-[4.75rem] gap-x-10 w-full mx-auto">

                    {/* Fondo vector ajustado al contenedor y con borde inferior alineado */}
                    <div id="Vector12" className="absolute top-[77%] lg:top-[50%] inset-x-0 w-full max-h-[1127px] fill-[#007FBE]">
                        <Image
                            src={'/svgs/vector12.svg'}
                            alt={'vector'}
                            layout="intrinsic"
                            width={3000}
                            height={514}
                            objectFit="cover"
                        />
                    </div>

                    {/* Input Form */}
                    <div
                        id="Frame66"
                        className="z-5 w-full lg:mr-[4.75rem] max-w-md h-auto rounded-[2.5rem] bg-[#F6FEFF] shadow-lg hover:shadow-xl transition-all"
                    >
                        {/* <SubscriptionCalculatorCard/> */}
                        <InputDesign />
                    </div>

                    {/* Imagen de la piscina */}
                    <div id="Image" className="w-full max-w-md h-[400px] sm:h-[500px] lg:h-[643px] rounded-[2.5rem] overflow-hidden bg-[#F6FEFF] relative">
                        <Image
                            src="/images/pool.png"
                            alt="pool"
                            fill
                            className="object-cover scale-110"
                        />
                    </div>
                </div>
            </section>



        </>

    )
}

export default Section3