// import React from 'react'
// import Image from 'next/image'
// import BeforeAfterAnimation from './BeforeAfterAnimation'
// import Card from './Card'
// import InputDesign from './Frame66Card'
// import CardReview from './CardReview'
// import Form from './ContactForm/Form'
// import FooterSection from './FooterSection'

// function Body() {
//     return (
//         <div className='flex w-full max-w-[1920px] mx-auto h-full flex-col items-start shrink-0'>
            
//             {/* Section 1 */}
//             <section id='Frame25' className='w-full max-w-[1920px] flex flex-col items-center gap-2.5 self-stretch'>
//                 <div id='Group24' className='w-full  max-w-[1920px] mx-auto h-[1051.376px]'>

//                     <div id='Content' className='relative w-full max-w-[650px] mx-auto h-[405px] flex-shrink-0'>
//                         <div id='Frame5' className='relative flex flex-col items-center gap-[23px] w-full max-w-[650px] mx-auto'>
//                             <p className='text-[#0F172A] text-center font-inter text-[80px] font-bold leading-[86px] tracking-[-4px] self-stretch'>Transform Your Pool Experience</p>
//                             <p className='text-[#212939] text-center font-inter text-[24px] font-normal leading-[40px] w-[594px]'>We combine expertise with dedication to deliver exceptional pool services that exceed expectations.</p>
//                             <button id='button' className='flex flex-col justify-center items-center gap-[10px] p-4 px-5 rounded-[8px] bg-[#485AFF]'>
//                                 <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
//                                     <p className='text-white text-center font-inter text-[18px] font-semibold leading-[28px]'>GET YOUR FREE ESTIMATE</p>

//                                     {/* NO ESTA EN EL DISEÑO */}
//                                     <div id='icon'></div>
//                                 </div>
//                             </button>
//                             <div id='info' className='w-[5px] h-[24px]'>
//                                 <p className='text-[#9EA4B2] text-center font-poppins text-[16px] font-bold leading-none'>.</p>
//                             </div>

//                         </div>
//                     </div>

//                     {/* BeforeAfterAnimation ahora está colocado con top-0 para alinearse con el borde superior del padre */}
//                     <div className="absolute z-5 top-[429px] left-0 right-0">
//                         <BeforeAfterAnimation />
//                     </div>

//                     <div id='Group23' className='bg-indigo-200 overflow-hidden relative w-full max-w-[1920px] mx-auto h-[877.731px] flex-shrink-0'>


//                         <div id='Group22' className=' overflow-hidden relative w-full max-w-[1920px] mx-auto h-[646.376px] flex-shrink-0'>


//                             {/* Cuarta capa: Fondo */}
//                             <div id='vector1' className='absolute bottom-0 z-10 w-full max-w-[1920px] h-[324px] mx-auto'>
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

//                                     {/* Capa de video sin filtro encima para tener mejor control sobre el desenfoque */}
//                                     <video
//                                         src="/videos/videoHD.mp4"
//                                         autoPlay
//                                         loop
//                                         muted
//                                         playsInline
//                                         className="absolute top-0 left-0 w-full h-full object-cover"
//                                         style={{
//                                             clipPath: 'url(#vector1-clip)',
//                                             opacity: 0.25  // Ajusta la opacidad para controlar la intensidad del desenfoque
//                                         }}
//                                     />
//                                 </div>
//                             </div>
    

//                             {/* Tercera capa: agua más brillante */}
//                             <div id='vector2' className='absolute bottom-0 z-20 w-full max-w-[1920px] h-[225.499px] mx-auto'>
//                                 <svg width="0" height="0">
//                                     <defs>
//                                         <clipPath id="video-clip" clipPathUnits="userSpaceOnUse">
//                                             <path d="M-7.53723 150.507L16.6889 133.648C40.915 116.788 90.7131 83.0684 139.165 57.7788C187.618 32.4893 237.416 15.6296 285.868 7.19971C335.666 -1.23014 384.118 -1.23014 432.571 7.19971C482.369 15.6296 530.821 32.4893 579.273 53.5639C629.071 74.6385 677.524 99.9281 725.976 125.218C775.774 150.507 824.226 175.797 874.024 154.722C922.477 133.648 970.929 66.2087 1020.73 32.4893C1069.18 -1.23014 1117.63 -1.23015 1167.43 15.6296C1215.88 32.4893 1264.33 66.2087 1314.13 83.0684C1362.58 99.9281 1412.38 99.9281 1460.83 95.7132C1509.29 91.4982 1559.09 83.0684 1583.31 78.8535L1607.54 74.6385V226.376H1583.31C1559.09 226.376 1509.29 226.376 1460.83 226.376C1412.38 226.376 1362.58 226.376 1314.13 226.376C1264.33 226.376 1215.88 226.376 1167.43 226.376C1117.63 226.376 1069.18 226.376 1020.73 226.376C970.929 226.376 922.477 226.376 874.024 226.376C824.226 226.376 775.774 226.376 725.976 226.376C677.524 226.376 629.071 226.376 579.273 226.376C530.821 226.376 482.369 226.376 432.571 226.376C384.118 226.376 335.666 226.376 285.868 226.376C237.416 226.376 187.618 226.376 139.165 226.376C90.7131 226.376 40.915 226.376 16.6889 226.376H-7.53723L-7.53723 150.507Z" />
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

//                             {/* Segunda capa: video en pantalla */}
//                             <div id='image' className='absolute bottom-0 inset-0 z-30 flex justify-center items-center'>
//                                 <div className='w-[354.463px] h-[437px] rounded-t-[30px] overflow-hidden'>
//                                     <video
//                                         autoPlay
//                                         loop
//                                         muted
//                                         className='w-full h-full object-cover scale-109 bg-[#0F172A]'>
//                                         <source src='videos/videopool.mp4' type='video/mp4' />
//                                     </video>
//                                 </div>
//                             </div>

//                             {/* Primer plano: ola encima del video - ahora posicionada para alinearse con la parte inferior del video */}

//                             <div id='vector4' className='absolute h-[33px] z-40 flex justify-center w-full' style={{
//                                 bottom: 'calc(50% - (437px/2) - 7px )',
//                             }}>
//                                 <div className="relative" style={{ width: '395px', height: '32px' }}>
//                                     {/* Definiciones SVG para clipPath */}
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

//                                     {/* Primera forma con video */}
//                                     <div className="absolute right-0 top-0" style={{ width: '222px', height: '28px' }}>
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

//                                     {/* Segunda forma con video */}
//                                     <div className="absolute left-0 top-0" style={{ width: '133px', height: '28px' }}>
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

//             {/* Section 2 */}
//             <section id='Frame4' className='overflow-hidden flex flex-col items-center gap-[64.829px] self-stretch px-[77px] pb-[28.165px] pt-0 bg-gradient-to-b from-[#4CF7FB] to-[#206680]'>

//                 <div id='image' className='mb-[64px] w-[354.463px] h-[170.171px] blur-[19.5px]'>
//                     <div id='video' className='py-15 flex w-[354.463px] h-[170.171px] justify-center items-center gap-[10px] flex-shrink-0 rounded-t-[30px] bg-[#0F172A]'></div>
//                 </div>

//                 <div id='Frame10' className='flex w-full max-w-[1428px] flex-col items-center gap-[50px]'>

//                     <div id='Frame7' className='mb-[50px] flex w-full max-w-[858.176px] flex-col items-center gap-[23px]'>
//                         <div id='Group2' className='mb-[23px] w-full max-w-[858.176px] h-[287.835px]'>
//                             <div id='Deep' className='mx-auto mb-[30px] w-full max-w-[364px] max-h-[154px]'>
//                                 <Image src={'/svgs/Deep.svg'} alt={'Deep'} width={364} height={154} />
//                             </div>
//                             <p className='text-[#0F172A] text-center font-inter text-[80px] font-bold leading-[86px] tracking-[-4px]'>
//                                 Into our Services
//                             </p>
//                         </div>

//                         <div id='Button' className='rounded-[8px] bg-[#485AFF] flex flex-col justify-center items-center px-[20px] py-[16px] gap-[10px]'>
//                             <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
//                                 <p className='text-white text-center font-inter text-[18px] font-semibold leading-[28px]'>GET YOUR FREE ESTIMATE</p>

//                                 {/* NO ESTA EN EL DISEÑO */}
//                                 <div id='icon'>

//                                 </div>
//                             </div>
//                         </div>

//                         <p className='max-w-[594px] text-[#212939] text-center font-inter text-[24px] font-normal leading-[40px]'>
//                             We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
//                         </p>


//                     </div>

//                     <div id='Frame9' className='flex h-[649px] p-[30px_10px] flex-col items-start gap-[10px] self-stretch rounded-[20px] bg-white/50 backdrop-blur-[2px]'>
//                         <div id='Frame8' className='flex flex-col items-center gap-[40px] self-stretch'>

//                             <div id='List' className="relative w-full max-w-[1296px] h-[573px] mx-auto">
//                                 {/* Línea horizontal entre filas */}
//                                 <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#E4E4E7]" />

//                                 {/* Líneas verticales entre columnas */}
//                                 <div className="absolute top-0 left-1/3 w-[1px] h-full bg-[#E4E4E7]" />
//                                 <div className="absolute top-0 left-2/3 w-[1px] h-full bg-[#E4E4E7]" />

//                                 {/* Grid de 2 filas x 3 columnas */}
//                                 <div className="grid grid-cols-3 grid-rows-2 w-full h-full place-items-center">
//                                     <Card
//                                         icon="/svgs/headphones.svg"
//                                         title="Support"
//                                         description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
//                                     />
//                                     <Card
//                                         icon="/svgs/charbar.svg"
//                                         title="Sales"
//                                         description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
//                                     />
//                                     <Card
//                                         icon="/svgs/headphones.svg"
//                                         title="Support"
//                                         description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
//                                     />
//                                     <Card
//                                         icon="/svgs/charbar.svg"
//                                         title="Sales"
//                                         description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
//                                     />
//                                     <Card
//                                         icon="/svgs/headphones.svg"
//                                         title="Support"
//                                         description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
//                                     />
//                                     <Card
//                                         icon="/svgs/charbar.svg"
//                                         title="Sales"
//                                         description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
//                                     />
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//             </section>

//             {/* Section 3 */}
//             <section id='Frame64' className='overflow-hidden flex max-h-[1127px] w-full max-w-[1622px] py-[120px] flex-col items-center gap-[41px]'>

//                 <div id='Frame65' className='flex px-[320px] flex-col items-center gap-5 self-stretch'>
//                     <p className='text-[#0F172A] text-center font-plus_jakarta_sans text-4xl font-bold leading-[60px] w-[726.25px]'>
//                         Get Your Instant Pool Service <br /> Estimate
//                     </p>
//                     <button className='flex px-5 py-4 flex-col justify-center items-center gap-2 rounded-lg bg-[#F5F9FF]'>
//                         <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
//                             <p className='text-[#485AFF] text-center font-inter text-lg font-extrabold leading-[28px]'>
//                                 Enter Your Pool Details Below
//                             </p>
//                             {/* NO ESTA EN EL DISEÑO */}
//                             <div id='icon'></div>
//                         </div>
//                     </button>
//                 </div>

//                 <div id='Frame67' className='relative flex w-full max-w-[1622px] justify-center items-start gap-[76px]'>
//                     <div id='Vector12' className='top-[50%] w-full max-w-[1622px] max-h-[1127px] absolute  fill-[#007FBE]'>
//                         <Image src={'/svgs/vector12.svg'} alt={'vector'} width={1622} height={514} />
//                     </div>
//                     <div id='Frame66' className='z-5 w-[485px] h-[643.805px] flex-shrink-0 rounded-[39.422px] bg-[#F6FEFF] shadow-[0px_2.92px_7.884px_0px_rgba(0,0,0,0.25)]'>
//                         <InputDesign />
//                     </div>
//                     <div id='Image' className='overflow-hidden relative z-5 w-[485px] h-[643px] flex-shrink-0 rounded-[39.422px] bg-[#F6FEFF]'>
//                         <Image
//                             src={'/images/pool.png'}
//                             alt={'pool'}
//                             fill
//                             className='w-full h-full object-cover scale-110' />
//                     </div>
//                 </div>
//             </section>

//             {/* Section 4 */}
//             <section id='Frame29' className='overflow-hidden flex flex-col items-center gap-[10px] self-stretch bg-white'>

//                 <div id='Group26' className='relative w-full max-w-[3284.265px] max-h-[664.377px]'>
//                     <div id='vector6' className='w-full max-w-[3284.265px] h-full max-h-[653.18px] flex-shrink-0 fill-[#F5F9FF]'>
//                         <Image src={'/svgs/vector6.svg'} alt={'vector'} width={3372} height={283} />
//                     </div>

//                     <div id='Group9' className='absolute top-0 left-0 w-full max-w-[1254.483px] h-full max-h-[651.141px] flex-shrink-0'>
//                         <div id='Content' className='absolute top-[20%] left-[67.5%] w-full max-w-[560.575px] h-full max-h-[470.658px] flex-shrink-0'>

//                             <div id='Frame61' className='w-[550px] h-[109.622px] flex-shrink-0'>
//                                 <p className='mb-5 w-[545px] h-[36.821px] flex-shrink-0 text-[#0F172A] font-inter text-[64px] not-italic font-semibold leading-[28px]'>
//                                     Yosbani Martinez
//                                 </p>
//                                 <p className='w-[545px] h-[46.801px] flex-shrink-0 text-[#485AFF] font-inter text-[24px] not-italic font-medium leading-[28px]'>
//                                     Founder & Chemical Engineer
//                                 </p>
//                             </div>

//                             <div id='Frame11' className='flex w-full max-w-[366.575px] h-full max-h-[249.658px] flex-col items-start gap-[18.461px] flex-shrink-0'>
//                                 <p className='w-[345.477px] text-[#18181B] font-inter text-[15.823px] not-italic font-normal leading-[24.614px]'>
//                                     I founded Pool Quality Solutions to bring a higher level of scientific precision to pool care. As a Chemical Engineer, with a degree evaluated as equivalent to a U.S.
//                                     <br />
//                                     <br />
//                                     Bachelor of Science, I understand that water chemistry is crucial. It's not just about having a pool that looks clean - it's about ensuring a safe, balanced, and healthy swimming environment for your family and friends. Our commitment is to apply this expertise accurately and consistently, delivering quality service you can trust.
//                                 </p>
//                                 <p className='text-[#A1A1AA] font-plusjakartasans text-[14.065px] italic font-extrabold leading-[24.614px] underline self-stretch'>
//                                     View Verified Credentials
//                                 </p>
//                             </div>
//                         </div>

//                         <div id='vector7' className='-translate-y-[-58px] absolute bottom-0 left-0 w-[893.011px] h-[513.664px] shrink-0 fill-[#0F172A]'>
//                             <Image src={'/svgs/vector7.svg'} alt={'vector'} width={832} height={514} />
//                         </div>



//                         <div id='Image' className='relative left-[40%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[454.482px] h-full shrink-0 rounded-full overflow-hidden'>
//                             <div id='BG' className='transform absolute inset-0 w-full h-full shrink-0 rounded-full bg-[#0B0B0B]'></div>
//                             <div id='Shadow' className='absolute bottom-0 w-[455.433px] h-[253.43px] flex-shrink-0 opacity-60 blur-[51.133px] bg-[linear-gradient(135deg,_#44BCFF_-0.55%,_#44B0FF_22.86%,_#485AFF_48.36%,_#485AFF_73.33%,_#000_99.34%)]'></div>
//                             <div id='image' className="transform absolute inset-0 w-full h-full flex-shrink-0 bg-[url('/images/woman.png')] h-full bg-cover bg-center bg-no-repeat"></div>
//                         </div>
//                     </div>
//                 </div>


//             </section>

//             {/* Section 5 */}
//             <section id='Frame8' style={{ backgroundImage: "url('/svgs/Group_28.svg')" }}
//                 className='overflow-hidden w-full max-w-[1600px] h-[1415px] flex flex-col items-center gap-[10px] self-stretch'>
//                 <div id='Content' className='ml-[-300px] mt-[113px]  w-[966px] h-[682px] shrink-0'>
//                     <div id='Frame5' className='flex w-[966px] flex-col items-start gap-[38px]'>
//                         <p className='text-[#F5F9FF] font-inter text-[80px] font-bold leading-[86px] tracking-[-4px] self-stretch'>Transform Your Pool Experience</p>
//                         <p className='text-[#FFF] font-inter text-[24px] font-normal leading-[40px] self-stretch'>We combine expertise with dedication to deliver exceptional pool services that exceed expectations. We combine expertise with dedication to deliver exceptional pool services that exceed expectations. We combine expertise with dedication to deliver exceptional pool services that exceed expectations. We combine expertise with dedication to deliver exceptional pool services that exceed expectations.  </p>
//                         <button className='flex p-[16px_20px] flex-col justify-center items-center gap-[10px] rounded-[8px] bg-[#F5F9FF]'>
//                             <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
//                                 <p className='text-[#485AFF] text-center font-inter text-[18px] font-extrabold leading-[28px]'>Start with a Free Estimate</p>
//                             </div>
//                         </button>
//                     </div>

//                 </div>
//             </section>

//             {/* Section 6 */}
//             <section id='6' className='w-full bg-[#161F7B] max-w-[1600px] h-[644px] flex-shrink-0 relative'>
//                 {/* Sección de texto */}
//                 <div id='Customers' className='ml-[110px] mt-[160px] flex w-[471px] flex-col items-start gap-[40px] z-10'>
//                     <p className='text-[#F5F9FF] font-inter text-[64px] font-extrabold leading-[76px]'>Customers say About Us</p>
//                     <p className='text-[#F5F9FF] font-inter text-[24px] font-normal self-stretch leading-[38px]'>
//                         Trust is built through results. Here you can read what our clients say about their experience with our service. Their words reflect our commitment to quality and excellence.
//                     </p>
//                 </div>

//                 {/* Contenedor relativo para posicionar los comentarios */}
//                 <div className='absolute top-[100px] left-0 w-full h-full'>

//                     <div id='Comentario1' className='mt-[58px] rounded-2xl absolute left-[694px] z-20 flex bg-black h-[348px] w-[400px] rotate-[-1.97deg] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
//                         <CardReview
//                             name={'Rick'}
//                             profession={'Consultant'}
//                             avatar={'/images/avatar.png'}
//                             description={'Geo and his team are awesome. They handle everything in a timely manner and are always a great price! No matter where I move in Naples, they are coming with me! Highly recommend!'} />
//                     </div>

//                     <div id='Comentario2' className='rounded-2xl absolute mt-[159.57px] left-[1091px] z-10 flex bg-black h-[318.575px] w-[396.277px] rotate-[6.036deg] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
//                         <CardReview
//                             name={'Joe'}
//                             profession={'Profesional Manager'}
//                             avatar={'/images/avatar.png'}
//                             description={'“Great service! My pool looks fantastic, and I trust the water is safe thanks to their expertise. Highly recommend!”'} />
//                     </div>

//                 </div>
//             </section>

            
//             {/* Section 7 */}
//             <section id='contact' className='flex flex-row h-[1200px] mx-auto overflow-hidden w-full w-max-[1600px]'>

//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     className='h-full w-1/2 object-cover'>
//                     <source src='/videos/videoHD.mp4' type='video/mp4' />
//                 </video>

//                 <div id='form' className='h-full w-1/2'>
//                     <div id='section' className='py-96 flex py-[96px] items-center gap-[64px] self-stretch'>
//                         <div id='container' className='flex px-[32px] h-full w-full justify-center items-start flex-[1_0_0]'>
//                             <div id='content' className='flex w-[512px] flex-col items-start gap-[48px]'>

//                                 <div id='heading' className='flex flex-col items-start gap-[24px] self-stretch'>
//                                     <p className='self-stretch text-[#101828] font-inter text-[48px] font-semibold leading-[60px] tracking-[-0.96px]'>"Let's elevate your pool care, together."</p>
//                                     <p className='text-[#667085] font-inter text-[20px] font-normal leading-[30px]'>You can reach us anytime via email@hosting.com</p>
//                                 </div>

//                                 <Form />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>





//         </div>


//     )
// }

// export default Body