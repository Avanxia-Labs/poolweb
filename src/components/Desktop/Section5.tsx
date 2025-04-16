import React from 'react'

function Section5() {
    return (
        // <section id='Frame8' className='relative w-full mx-auto overflow-hidden'>
        //     {/* Contenedor de la imagen de fondo que mantiene las proporciones */}
        //     <div className='w-full h-0 pb-[73.75%] relative'>
        //         {/* La imagen de fondo que se ajusta proporcionalmente */}
        //         <img
        //             src='/images/yosbaniHomeBackground.png'
        //             alt='Pool background'
        //             className='absolute top-0 left-0 w-full h-full object-cover'
        //         />

        //         {/* Contenido superpuesto */}
        //         <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center'>
        //             <div id='Content' className='w-full max-w-[966px] px-4 md:px-6 lg:px-0 mx-auto mt-[113px] md:mt-[113px] lg:mt-[113px]'>
        //                 <div id='Frame5' className='flex flex-col items-start gap-6 md:gap-7 lg:gap-[38px]'>
        //                     <h2 className='text-[#F5F9FF] font-inter text-4xl md:text-5xl lg:text-[80px] font-bold leading-tight md:leading-tight lg:leading-[86px] tracking-tight lg:tracking-[-4px] self-stretch'>
        //                         Transform Your Pool Experience
        //                     </h2>
        //                     <p className='text-[#FFF] font-inter text-base md:text-xl lg:text-2xl font-normal leading-relaxed md:leading-relaxed lg:leading-[40px] self-stretch'>
        //                         We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
        //                         We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
        //                         We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
        //                         We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
        //                     </p>
        //                     <button className='flex p-3 md:p-4 lg:p-[16px_20px] flex-col justify-center items-center gap-[10px] rounded-[8px] bg-[#F5F9FF]'>
        //                         <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
        //                             <p className='text-[#485AFF] text-center font-inter text-base md:text-lg lg:text-[18px] font-extrabold leading-normal lg:leading-[28px]'>
        //                                 Start with a Free Estimate
        //                             </p>
        //                         </div>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

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
                    <div className='w-full lg:max-w-[750px] xl:max-w-[850px] 2xl:max-w-[1150px] max-w-[600px] px-4 pt-8 md:pt-16 lg:pt-24 md:px-6 lg:px-12'>
                        <div className='flex flex-col items-start gap-4 md:gap-6 lg:gap-8'>
                            <h2 className='text-[#F5F9FF] font-inter text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight tracking-tight'>
                                Transform Your Pool Experience
                            </h2>

                            {/* Texto condensado para mejor ajuste */}
                            <p className='text-[#FFF] font-inter text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-[40px] font-normal leading-relaxed'>
                                Owning a pool should be relaxing, not a complex chemistry puzzle. Our founder's Chemical Engineering expertise ensures we apply scientific principles for perfectly balanced and safe water.
                                <br /> <br />
                                This science-backed approach results in consistent water clarity, enhanced safety for swimmers, and better protection for your valuable pool equipment. Experience the peace of mind that comes from truly expert care. Let us transform your pool experience - get started with your free estimate today.
                            </p>

                            <button className='flex p-3 md:p-4 justify-center items-center rounded-[8px] bg-[#F5F9FF]'>
                                <p className='text-[#485AFF] text-center font-inter text-base md:text-lg font-bold'>
                                    Start with a Free Estimate
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Section5