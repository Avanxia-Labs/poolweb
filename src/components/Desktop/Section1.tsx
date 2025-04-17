import React from 'react'
import FancyButton from './FancyButton'
import BeforeAfterAnimation from './BeforeAfterAnimation'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

function Section1() {


    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentText, setCurrentText] = useState<'BEFORE' | 'AFTER'>('BEFORE');

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const currentTime = video.currentTime;
            if (currentTime < 2.5) {
                setCurrentText('BEFORE');
            } else {
                setCurrentText('AFTER');
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    return (
        <section className='flex w-full mx-auto h-[1200px] flex-col items-start shrink-0'>

            <div id='Frame5' className='relative flex h-3/8 flex-col items-center gap-4 md:gap-5 lg:gap-[23px] w-full max-w-[650px] mx-auto justify-center'>
                {/* Main heading - Responsive text scaling */}
                <p className='text-[#0F172A] text-center font-inter text-4xl md:text-5xl lg:text-[80px] font-bold leading-tight md:leading-tight lg:leading-[86px] tracking-tight md:tracking-tighter lg:tracking-[-4px] self-stretch'>
                    Transform Your Pool Experience
                </p>

                {/* Subheading - Responsive width and text size */}
                <p className='text-[#212939] text-center font-inter text-lg md:text-xl lg:text-[24px] font-normal leading-relaxed md:leading-relaxed lg:leading-[40px] w-full max-w-[594px] px-4 md:px-6 lg:px-0'>
                    We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
                </p>

                {/* CTA Button - Maintained proportions while being responsive */}
                <button id='button' className='flex flex-col justify-center items-center gap-[10px] p-3 md:p-4 px-4 md:px-5 rounded-[8px]'>
                    <div id='Frame1' className='flex justify-center items-center gap-[9px]'>

                        <Link href="/form">
                            <FancyButton text={"GET YOUR FREE ESTIMATE"} width="17.18rem" height="3.75rem" textSize="1.125rem" />
                        </Link>

                        {/* Icon placeholder */}
                        <div id='icon'></div>
                    </div>
                </button>

                {/* Info dot/separator - Maintained for design consistency */}
                <div id='info' className='w-[5px] h-[24px]'>
                    <p className='text-[#9EA4B2] text-center font-poppins text-base lg:text-[16px] font-bold leading-none'>.</p>
                </div>
            </div>

            {/* <div className='h-[300px] bg-sky-400 w-full'> Video</div> */}

            <div id='abajo' className='z-0 h-5/8 flex flex-col relative w-full overflow-hidden'>

                {/* //bg-white absolute top-[-10%] w-full */}
                <div className='absolute top-[-5%] min-top-[-10%] w-full'>
                    <BeforeAfterAnimation currentText={currentText} />
                </div>

                {/* <div className=''>
                    {currentText }

                </div> */}



                {/* Layer 4: Background water effect - Responsive positioning
                absolute bottom-0 z-10 w-full h-[30%] md:h-[35%] lg:h-[40%] mx-auto */}

                <div id='vector1' className='absolute bottom-0 z-10 w-full h-[30%] md:h-[35%] lg:h-[40%] mx-auto'>

                    <svg width="0" height="0">
                        <defs>
                            <filter id="filter0_f_3_15" x="-902.2" y="0.250635" width="3404.4" height="315.025" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="7.95" result="effect1_foregroundBlur_3_15" />
                            </filter>

                            <clipPath id="vector1-clip" clipPathUnits="userSpaceOnUse">

                                <path d="M-1009.2 204.085L-951.5 182.909C-893.8 161.734 -775.5 119.382 -660.3 87.6187C-545.1 55.8551 -426.7 34.6794 -311.5 24.0915C-193.1 13.5037 -77.9 13.5037 37.3 24.0915C155.7 34.6794 270.9 55.8551 386.1 82.3248C504.5 108.794 619.7 140.558 734.9 172.322C853.3 204.085 968.5 235.849 1086.9 209.379C1202.1 182.909 1317.3 98.2066 1435.7 55.8551C1550.9 13.5037 1666.1 13.5037 1784.5 34.6794C1899.7 55.8551 2014.9 98.2066 2133.3 119.382C2248.5 140.558 2366.9 140.558 2482.1 135.264C2597.3 129.97 2715.7 119.382 2773.4 114.088L2831.1 108.794V299.376H2773.4C2715.7 299.376 2597.3 299.376 2482.1 299.376C2366.9 299.376 2248.5 299.376 2133.3 299.376C2014.9 299.376 1899.7 299.376 1784.5 299.376C1666.1 299.376 1550.9 299.376 1435.7 299.376C1317.3 299.376 1202.1 299.376 1086.9 299.376C968.5 299.376 853.3 299.376 734.9 299.376C619.7 299.376 504.5 299.376 386.1 299.376C270.9 299.376 155.7 299.376 37.3 299.376C-77.9 299.376 -193.1 299.376 -311.5 299.376C-426.7 299.376 -545.1 299.376 -660.3 299.376C-775.5 299.376 -893.8 299.376 -951.5 299.376H-1009.2V204.085Z" />

                            </clipPath>
                        </defs>
                    </svg>

                    <div className="relative w-full h-full">
                        <video
                            src="/videos/videoHD.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            style={{
                                clipPath: 'url(#vector1-clip)',
                                filter: 'blur(7.95px)'
                            }}
                        />

                        {/* Unfiltered video layer for better blur control - Made responsive */}
                        <video
                            src="/videos/videoHD.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            style={{
                                clipPath: 'url(#vector1-clip)',
                                opacity: 0.25
                            }}
                        />
                    </div>
                </div>

                {/* Tercera capa: agua más brillante */}
                <div id='vector2' className='absolute bottom-0 z-20 w-full h-[225.499px] mx-auto'>
                    <svg width="0" height="0">
                        <defs>
                            <clipPath id="video-clip" clipPathUnits="userSpaceOnUse">

                                <path d="M-17.91 150.507L39.68 133.648C97.27 116.788 215.65 83.0684 330.88 57.7788C446.11 32.4893 564.5 15.6296 679.7 7.19971C798.09 -1.23014 913.29 -1.23014 1028.5 7.19971C1146.9 15.6296 1262.1 32.4893 1377.3 53.5639C1495.7 74.6385 1610.9 99.9281 1726.1 125.218C1844.5 150.507 1959.7 175.797 2078.1 154.722C2193.3 133.648 2308.5 66.2087 2426.9 32.4893C2542.1 -1.23014 2657.3 -1.23015 2775.7 15.6296C2890.9 32.4893 3006.1 66.2087 3124.5 83.0684C3239.7 99.9281 3358.1 99.9281 3473.3 95.7132C3588.5 91.4982 3706.9 83.0684 3764.5 78.8535L3822.1 74.6385V226.376H3137.1C3706.9 226.376 3588.5 226.376 3473.3 226.376C3358.1 226.376 3239.7 226.376 3124.5 226.376C3006.1 226.376 2890.9 226.376 2775.7 226.376C2657.3 226.376 2542.1 226.376 2426.9 226.376C2308.5 226.376 2193.3 226.376 2078.1 226.376C1959.7 226.376 1844.5 226.376 1726.1 226.376C1610.9 226.376 1495.7 226.376 1377.3 226.376C1262.1 226.376 1146.9 226.376 1028.5 226.376C913.29 226.376 798.09 226.376 679.7 226.376C564.5 226.376 446.11 226.376 330.88 226.376C215.65 226.376 97.27 226.376 39.68 226.376H-14.93L-17.91 150.507Z" />

                            </clipPath>
                        </defs>
                    </svg>

                    <video
                        src="/videos/videoHD.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ clipPath: 'url(#video-clip)' }}
                    />
                </div>

                {/* Segunda capa: video en pantalla */}
                <div id='image' className='absolute bottom-0 inset-0 z-30 flex justify-center items-center'>
                    <div className='w-[354.463px] h-[437px] rounded-t-[30px] overflow-hidden'>
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            className='w-full h-full object-cover scale-109 bg-[#0F172A]'>
                            <source src='videos/videopool.mp4' type='video/mp4' />
                        </video>
                    </div>
                </div>

                {/* Primer plano: ola encima del video - ahora posicionada para alinearse con la parte inferior del video */}

                <div id='vector4' className='absolute h-[33px] z-40 flex justify-center w-full' style={{
                    bottom: 'calc(50% - (437px/2) - 7px )',
                }}>
                    <div className="relative" style={{ width: '395px', height: '32px' }}>
                        {/* Definiciones SVG para clipPath */}
                        <svg width="0" height="0">
                            <defs>
                                <clipPath id="vector4-clip-1" clipPathUnits="userSpaceOnUse">
                                    <path d="M322.566 7.36448C247.919 -6.13106 211.013 23.0371 162.814 27.9589H384.35C395.731 26.875 399.308 21.2386 322.566 7.36448Z" />
                                </clipPath>
                                <clipPath id="vector4-clip-2" clipPathUnits="userSpaceOnUse">
                                    <path d="M117.706 24.7071C57.4402 9.96586 16.7213 18.5649 3.89502 24.7071L29.367 27.9589H136.231C130.319 27.3414 124.166 26.2873 117.706 24.7071Z" />
                                </clipPath>
                                <filter id="filter0_f_3_59" x="0.0950196" y="0.0312989" width="394.233" height="31.7276" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="1.9" result="effect1_foregroundBlur_3_59" />
                                </filter>
                            </defs>
                        </svg>

                        {/* Primera forma con video */}
                        <div className="absolute right-0 top-0" style={{ width: '222px', height: '28px' }}>
                            <video
                                src="/videos/videoHD.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                style={{
                                    clipPath: 'url(#vector4-clip-1)',
                                    filter: 'blur(1.9px)'
                                }}
                            />
                        </div>

                        {/* Segunda forma con video */}
                        <div className="absolute left-0 top-0" style={{ width: '133px', height: '28px' }}>
                            <video
                                src="/videos/videoHD.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                style={{
                                    clipPath: 'url(#vector4-clip-2)',
                                    filter: 'blur(2.5px)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Section1