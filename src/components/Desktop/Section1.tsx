// import FancyButton from "./FancyButton";

// // Main container - Ensures content is centered and responsive with max-width
// const ResponsiveComponent = () => {
//     return (
//         <div className='flex w-full max-w-[1920px] mx-auto h-full flex-col items-start shrink-0'>

//             {/* Section 1 - Hero section with call-to-action */}
//             <section id='Frame25' className='w-full max-w-[1920px] flex flex-col items-center gap-2.5 self-stretch'>
//                 <div id='Group24' className='w-full max-w-[1920px] mx-auto relative'>
//                     {/* Content area - Adjusted for responsive scaling */}
//                     <div id='Content' className='relative w-full max-w-[650px] mx-auto py-8 md:py-12 lg:py-16'>
//                         <div id='Frame5' className='relative flex flex-col items-center gap-4 md:gap-5 lg:gap-[23px] w-full max-w-[650px] mx-auto'>
//                             {/* Main heading - Responsive text scaling */}
//                             <p className='text-[#0F172A] text-center font-inter text-4xl md:text-5xl lg:text-[80px] font-bold leading-tight md:leading-tight lg:leading-[86px] tracking-tight md:tracking-tighter lg:tracking-[-4px] self-stretch'>
//                                 Transform Your Pool Experience
//                             </p>

//                             {/* Subheading - Responsive width and text size */}
//                             <p className='text-[#212939] text-center font-inter text-lg md:text-xl lg:text-[24px] font-normal leading-relaxed md:leading-relaxed lg:leading-[40px] w-full max-w-[594px] px-4 md:px-6 lg:px-0'>
//                                 We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
//                             </p>

//                             {/* CTA Button - Maintained proportions while being responsive */}
//                             <button id='button' className='flex flex-col justify-center items-center gap-[10px] p-3 md:p-4 px-4 md:px-5 rounded-[8px]'>
//                                 <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
//                                     {/* <p className='text-white text-center font-inter text-base md:text-lg lg:text-[18px] font-semibold leading-tight md:leading-[28px]'>
//                                         GET YOUR FREE ESTIMATE
//                                     </p> */}
//                                     <FancyButton text={"GET YOUR FREE ESTIMATE"} width="17.18rem" height="3.75rem" textSize="1.125rem"/>
//                                     {/* Icon placeholder */}
//                                     <div id='icon'></div>
//                                 </div>
//                             </button>

//                             {/* Info dot/separator - Maintained for design consistency */}
//                             <div id='info' className='w-[5px] h-[24px]'>
//                                 <p className='text-[#9EA4B2] text-center font-poppins text-base lg:text-[16px] font-bold leading-none'>.</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Before/After Animation - Positioned relatively for responsive layout */}
//                     <div className="relative z-5 w-full">
//                         {/* <BeforeAfterAnimation /> */}
//                     </div>

//                     {/* Background container - Made responsive with percentage-based heights */}
//                     <div id='Group23' className='bg-indigo-200 overflow-hidden relative w-full max-w-[1920px] mx-auto h-auto aspect-[1920/877] flex-shrink-0'>
//                         {/* Inner container - Using aspect ratio for responsive height */}
//                         <div id='Group22' className='overflow-hidden relative w-full max-w-[1920px] mx-auto h-full flex-shrink-0'>

//                             {/* Layer 4: Background water effect - Responsive positioning */}
//                             <div id='vector1' className='absolute bottom-[-50px] z-10 w-full h-[30%] md:h-[35%] lg:h-[40%] mx-auto'>
//                                 <svg width="0" height="0">
//                                     <defs>
//                                         <filter id="filter0_f_3_15" x="-902.2" y="0.250635" width="3404.4" height="315.025" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                                             <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                                             <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//                                             <feGaussianBlur stdDeviation="7.95" result="effect1_foregroundBlur_3_15" />
//                                         </filter>

//                                         <clipPath id="vector1-clip" clipPathUnits="userSpaceOnUse">
//                                             <path d="M-886.3 204.085L-835.711 182.909C-785.122 161.734 -681.133 119.382 -579.955 87.6187C-478.777 55.8551 -374.789 34.6794 -273.611 24.0915C-169.622 13.5037 -68.4443 13.5037 32.7336 24.0915C136.722 34.6794 237.9 55.8551 339.078 82.3248C443.066 108.794 544.245 140.558 645.422 172.322C749.411 204.085 850.589 235.849 954.577 209.379C1055.76 182.909 1156.93 98.2066 1260.92 55.8551C1362.1 13.5037 1463.28 13.5037 1567.27 34.6794C1668.44 55.8551 1769.62 98.2066 1873.61 119.382C1974.79 140.558 2078.78 140.558 2179.96 135.264C2281.13 129.97 2385.12 119.382 2435.71 114.088L2486.3 108.794V299.376H2435.71C2385.12 299.376 2281.13 299.376 2179.96 299.376C2078.78 299.376 1974.79 299.376 1873.61 299.376C1769.62 299.376 1668.44 299.376 1567.27 299.376C1463.28 299.376 1362.1 299.376 1260.92 299.376C1156.93 299.376 1055.76 299.376 954.577 299.376C850.589 299.376 749.411 299.376 645.422 299.376C544.245 299.376 443.066 299.376 339.078 299.376C237.9 299.376 136.722 299.376 32.7336 299.376C-68.4443 299.376 -169.622 299.376 -273.611 299.376C-374.789 299.376 -478.777 299.376 -579.955 299.376C-681.133 299.376 -785.122 299.376 -835.711 299.376H-886.3V204.085Z" />
//                                         </clipPath>
//                                     </defs>
//                                 </svg>

//                                 <div className="relative w-full h-full">
//                                     <video
//                                         src="/videos/videoHD.mp4"
//                                         autoPlay
//                                         loop
//                                         muted
//                                         playsInline
//                                         className="w-full h-full object-cover"
//                                         style={{
//                                             clipPath: 'url(#vector1-clip)',
//                                             filter: 'blur(7.95px)'
//                                         }}
//                                     />

//                                     {/* Unfiltered video layer for better blur control - Made responsive */}
//                                     <video
//                                         src="/videos/videoHD.mp4"
//                                         autoPlay
//                                         loop
//                                         muted
//                                         playsInline
//                                         className="absolute top-0 left-0 w-full h-full object-cover"
//                                         style={{
//                                             clipPath: 'url(#vector1-clip)',
//                                             opacity: 0.25
//                                         }}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Layer 3: Brighter water - Responsive height */}
//                             <div id='vector2' className='absolute bottom-[-50px] z-20 w-full h-[20%] md:h-[25%] lg:h-[30%] mx-auto'>
//                                 <svg width="0" height="0">
//                                     <defs>
//                                         <clipPath id="video-clip" clipPathUnits="userSpaceOnUse">
//                                             {/* Path escalado a 1920px de ancho */}
//                                             <path d="M-8.966 150.507L19.8519 133.648C48.6698 116.788 107.9517 83.0684 165.6053 57.7788C223.2589 32.4893 282.5408 15.6296 340.1944 7.19971C399.4763 -1.23014 457.1299 -1.23014 514.7835 7.19971C574.0654 15.6296 631.719 32.4893 689.3726 53.5639C748.6545 74.6385 806.3081 99.9281 863.9617 125.218C923.2436 150.507 980.8972 175.797 1040.1791 154.722C1097.8327 133.648 1155.4863 66.2087 1214.7682 32.4893C1272.4218 -1.23014 1330.0754 -1.23015 1389.3573 15.6296C1447.0109 32.4893 1504.6645 66.2087 1563.9464 83.0684C1621.6 99.9281 1680.8819 99.9281 1738.5355 95.7132C1796.1891 91.4982 1855.471 83.0684 1884.289 78.8535L1920.107 74.6385V226.376H1884.289C1855.471 226.376 1796.1891 226.376 1738.5355 226.376C1680.8819 226.376 1621.6 226.376 1563.9464 226.376C1504.6645 226.376 1447.0109 226.376 1389.3573 226.376C1330.0754 226.376 1272.4218 226.376 1214.7682 226.376C1155.4863 226.376 1097.8327 226.376 1040.1791 226.376C980.8972 226.376 923.2436 226.376 863.9617 226.376C806.3081 226.376 748.6545 226.376 689.3726 226.376C631.719 226.376 574.0654 226.376 514.7835 226.376C457.1299 226.376 399.4763 226.376 340.1944 226.376C282.5408 226.376 223.2589 226.376 165.6053 226.376C107.9517 226.376 48.6698 226.376 19.8519 226.376H-8.966L-8.966 150.507Z" />
//                                         </clipPath>
//                                     </defs>
//                                 </svg>

//                                 <video
//                                     src="/videos/videoHD.mp4"
//                                     autoPlay
//                                     loop
//                                     muted
//                                     playsInline
//                                     className="w-full h-full object-cover"
//                                     style={{ clipPath: 'url(#video-clip)' }}
//                                 />
//                             </div>

//                             {/* Layer 2: Phone video display - Responsive sizing */}
//                             <div id='image' className='absolute bottom-0 inset-0 z-30 flex justify-center items-center'>
//                                 <div className='w-[30%] min-w-[280px] max-w-[354px] aspect-[354/437] rounded-t-[30px] overflow-hidden'>
//                                     <video
//                                         autoPlay
//                                         loop
//                                         muted
//                                         className='w-full h-full object-cover scale-109 bg-[#0F172A]'>
//                                         <source src='videos/videopool.mp4' type='video/mp4' />
//                                     </video>
//                                 </div>
//                             </div>

//                             {/* Layer 1: Wave overlay - Positioned relative to video */}
//                             <div id='vector4' className='absolute z-40 flex justify-center w-full'
//                                 style={{
//                                     bottom: 'calc(50% - 4vw)',
//                                 }}>
//                                 <div className="relative w-[33%] min-w-[300px] max-w-[395px] aspect-[395/32]">
//                                     {/* SVG definitions for clipPath */}
//                                     <svg width="0" height="0">
//                                         <defs>
//                                             <clipPath id="vector4-clip-1" clipPathUnits="userSpaceOnUse">
//                                                 <path d="M322.566 7.36448C247.919 -6.13106 211.013 23.0371 162.814 27.9589H384.35C395.731 26.875 399.308 21.2386 322.566 7.36448Z" />
//                                             </clipPath>
//                                             <clipPath id="vector4-clip-2" clipPathUnits="userSpaceOnUse">
//                                                 <path d="M117.706 24.7071C57.4402 9.96586 16.7213 18.5649 3.89502 24.7071L29.367 27.9589H136.231C130.319 27.3414 124.166 26.2873 117.706 24.7071Z" />
//                                             </clipPath>
//                                             <filter id="filter0_f_3_59" x="0.0950196" y="0.0312989" width="394.233" height="31.7276" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                                                 <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                                                 <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//                                                 <feGaussianBlur stdDeviation="1.9" result="effect1_foregroundBlur_3_59" />
//                                             </filter>
//                                         </defs>
//                                     </svg>

//                                     {/* First wave shape with video - Responsive */}
//                                     <div className="absolute right-0 top-0 w-[56%] h-[87%]">
//                                         <video
//                                             src="/videos/videoHD.mp4"
//                                             autoPlay
//                                             loop
//                                             muted
//                                             playsInline
//                                             className="w-full h-full object-cover"
//                                             style={{
//                                                 clipPath: 'url(#vector4-clip-1)',
//                                                 filter: 'blur(1.9px)'
//                                             }}
//                                         />
//                                     </div>

//                                     {/* Second wave shape with video - Responsive */}
//                                     <div className="absolute left-0 top-0 w-[33%] h-[87%]">
//                                         <video
//                                             src="/videos/videoHD.mp4"
//                                             autoPlay
//                                             loop
//                                             muted
//                                             playsInline
//                                             className="w-full h-full object-cover"
//                                             style={{
//                                                 clipPath: 'url(#vector4-clip-2)',
//                                                 filter: 'blur(2.5px)'
//                                             }}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>



//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ResponsiveComponent;


import React from 'react'
import FancyButton from './FancyButton'
import BeforeAfterAnimation from './BeforeAfterAnimation'

function Section1() {
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
                        {/* <p className='text-white text-center font-inter text-base md:text-lg lg:text-[18px] font-semibold leading-tight md:leading-[28px]'>
                                      GET YOUR FREE ESTIMATE
                                  </p> */}
                        <FancyButton text={"GET YOUR FREE ESTIMATE"} width="17.18rem" height="3.75rem" textSize="1.125rem" />
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
                    <BeforeAfterAnimation/>
                </div>
                

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