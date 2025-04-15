import React from 'react'

function Section2() {
    return (
        <section className='relative overflow-hidden w-full h-[458px]'>
            <video
                autoPlay
                loop
                muted
                className='h-[458px] w-full object-cover'>
                <source src='/videos/videoHD.mp4' type='video/mp4' />
            </video>

            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[#0F172A] text-center font-inter text-[48px] font-bold leading-[86px] tracking-[7px]">
                    Transform Your Pool Experience
                </p>
            </div>
        </section>
    )
}

export default Section2