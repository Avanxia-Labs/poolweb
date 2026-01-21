import React, { useState } from 'react'
import Form from './ContactForm/Form'

function Section7() {

    const [showExtraFields, setShowExtraFields] = useState(false);

    const handleClientFieldsChange = (showClientFields: boolean) => {
        setShowExtraFields(showClientFields);
    };

    return (

        <section id='contact' className={`flex flex-col sm:flex-row h-auto mx-auto overflow-hidden w-full ${showExtraFields ? 'md:h-[1950px]' : 'md:h-[1400px]'}`}   >
            {/* Video background - full screen on mobile, half on desktop */}
            <div className='relative h-full sm:h-full w-full sm:w-4/7 overflow-hidden'>
                <video
                    autoPlay
                    loop
                    muted
                    className='absolute inset-0 h-full w-full object-cover'>
                    <source src='/videos/videoHD.mp4' type='video/mp4' />
                </video>
            </div>

            {/* Form - full screen on mobile, half on desktop */}
            <div id='form' className='px-6 md:px-3 md:pb-1 flex flex-col h-auto sm:h-full w-full sm:w-3/7'>

                {/* py-8 sm:py-12 md:py-16 lg:py-24 xl:py-96 */}
                <div id='section' className=' pb-[2rem] pt-[6rem] px-[2rem] xl:pt-[4rem]  flex justify-center sm:items-center gap-4 sm:gap-6 lg:gap-[64px] self-stretch'>
                    {/* Heading */}
                    <div id='heading' className=' w-max-[32rem] flex flex-col items-start gap-4 sm:gap-6 lg:gap-8 self-stretch'>
                        <p className="self-stretch text-[#0F172A] font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            Let's elevate your <br /> pool care, together.
                        </p>

                    </div>


                </div>

                {/* Form */}
                <div className=''>
                    <Form onClientFieldsChange={handleClientFieldsChange} />
                </div>

            </div>



        </section>
    )
}

export default Section7