import React from 'react'

function Section2() {
    return (
        <section className='relative w-full h-[500px] overflow-hidden flex items-center justify-center group'>
            {/* Background Video with subtle scale */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className='absolute inset-0 w-full h-full object-cover z-0'
            >
                <source src='/videos/videoHD.mp4' type='video/mp4' />
            </video>

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content centered */}
            <div className="relative z-20 flex flex-col items-center justify-center px-4">
                <h2 className="text-white text-center font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold tracking-tight drop-shadow-2xl mb-8">
                    Transform Your Pool Experience
                </h2>
                {/* Decorative accent */}
                <div className="w-24 h-1.5 bg-[#485AFF] rounded-full shadow-[0_0_15px_rgba(72,90,255,0.6)]" />
            </div>
        </section>
    )
}

export default Section2