import React from 'react'
import Link from 'next/link'

function Section5() {
    return (

        //Dandole altura a la seccion para que mantenga toda la imagen (probar poner un punto...)

        <section id='Frame8' className='relative w-full h-screen xl:h-[1280px] 2xl:h-[1440px] h-3xl h-4xl mx-auto overflow-hidden'>
            {/* Contenedor principal con fondo azul para evitar espacios blancos */}
            <div className='absolute inset-0 bg-[#485AFF]'>
                {/* Imagen de fondo que se muestra de lg(1024px) hacia abajo */}
                <img
                    src='/images/yosbaniHomeBackground.png'
                    alt='Pool background'
                    className=' w-full h-full object-contain md:object-cover object-top-right md:object-[75%_15%] xl:object-cover xl:object-[80%_10%]'
                    style={{ objectPosition: 'top right' }}
                />

                {/* Superposición de contenido alineada al cuarto superior izquierdo */}
                <div className='absolute inset-0'>
                    {/* Contenedor que mantiene su borde derecho a 30% del borde derecho de la sección en 2xl */}
                    <div id='contenido' className='absolute top-0 left-0 2xl:right-[30%] w-full max-w-[600px] 2xl:w-auto lg:max-w-[750px] xl:max-w-[850px] 2xl:max-w-none px-4 pt-8 md:pt-16 lg:pt-24 md:px-6 lg:px-12'>
                        <div className='flex flex-col items-start gap-4 md:gap-6 lg:gap-8'>
                            <h2 className='text-[#F5F9FF] font-inter text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-3xl-100px font-bold leading-tight tracking-tight'>
                                Transform Your Pool Experience
                            </h2>

                            {/* Texto condensado para mejor ajuste */}
                            <p className='text-[#FFF] font-inter text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-for-1700px text-3xl-40px leading-3xl-60px font-normal leading-relaxed'>
                                Owning a pool should be relaxing, not a complex chemistry puzzle. Our founder's Chemical Engineering expertise ensures we apply scientific principles for perfectly balanced and safe water.
                                <br /> <br />
                                This science-backed approach results in consistent water clarity, enhanced safety for swimmers, and better protection for your valuable pool equipment. Experience the peace of mind that comes from truly expert care. Let us transform your pool experience - get started with your free estimate today.
                            </p>

                            <Link href="/contact">
                                <button className='flex p-3 md:p-4 justify-center items-center rounded-[8px] bg-[#F5F9FF]'>
                                    <p className='text-[#485AFF] text-center text-for-1700px font-inter text-base md:text-lg font-bold'>
                                        Start with a Free Estimate
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
}

export default Section5