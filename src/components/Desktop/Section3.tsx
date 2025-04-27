import React from 'react';
import Image from 'next/image';
import { SubscriptionCalculator } from '@/components/shared/SubscriptionCalculator';

function Section3() {
    return (
        <>
            <section className="relative w-full min-h-screen py-20 flex items-center justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-20 md:gap-32 lg:gap-44 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    {/* Calculador de Subscripción */}
                    <div
                        id="Frame66"
                        className="z-5 w-full lg:mr-[4.75rem] max-w-md h-auto rounded-[2.5rem] bg-[#F6FEFF] shadow-lg hover:shadow-xl transition-all"
                    >
                        <SubscriptionCalculator isMobile={false} />
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
    );
}

export default Section3;