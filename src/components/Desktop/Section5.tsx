import React from 'react'

function Section5() {
    return (
        <section id='Frame8' className='relative w-full max-w-[1920px] mx-auto overflow-hidden'>
            {/* Contenedor de la imagen de fondo que mantiene las proporciones */}
            <div className='w-full h-0 pb-[73.75%] relative'>
                {/* La imagen de fondo que se ajusta proporcionalmente */}
                <img
                    src='/images/hombrelimpiando.png'
                    alt='Pool background'
                    className='absolute top-0 left-0 w-full h-full object-cover'
                />

                {/* Contenido superpuesto */}
                <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center'>
                    <div id='Content' className='w-full max-w-[966px] px-4 md:px-6 lg:px-0 mx-auto mt-[113px] md:mt-[113px] lg:mt-[113px]'>
                        <div id='Frame5' className='flex flex-col items-start gap-6 md:gap-7 lg:gap-[38px]'>
                            <h2 className='text-[#F5F9FF] font-inter text-4xl md:text-5xl lg:text-[80px] font-bold leading-tight md:leading-tight lg:leading-[86px] tracking-tight lg:tracking-[-4px] self-stretch'>
                                Transform Your Pool Experience
                            </h2>
                            <p className='text-[#FFF] font-inter text-base md:text-xl lg:text-2xl font-normal leading-relaxed md:leading-relaxed lg:leading-[40px] self-stretch'>
                                We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
                                We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
                                We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
                                We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
                            </p>
                            <button className='flex p-3 md:p-4 lg:p-[16px_20px] flex-col justify-center items-center gap-[10px] rounded-[8px] bg-[#F5F9FF]'>
                                <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
                                    <p className='text-[#485AFF] text-center font-inter text-base md:text-lg lg:text-[18px] font-extrabold leading-normal lg:leading-[28px]'>
                                        Start with a Free Estimate
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Section5