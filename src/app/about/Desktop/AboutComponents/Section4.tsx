// import React from 'react'
// import { useAnimatedBlobs } from '@/hooks/useAnimatedBlobs'
// import { AnimatedBlobs } from './AnimatedBlobs'

// function Section4() {

//     const {ref, showBlobs, handlers} = useAnimatedBlobs();

//     return (
//         <section className='bg-[#0F172A] w-full'>
//             <div className='max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[212px] py-12 md:py-[102px] flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-[35px]'>
//                 {/* Left column with three cards */}
//                 <div id='col1' className='flex flex-col gap-5 sm:gap-[20px] w-full xl:w-[612px]'>
                    
//                     {/* Vision Card */}
//                     <div className='w-full h-auto sm:h-[185px] pt-[5px] px-[10px] flex flex-col gap-[10px] rounded-[15px] bg-white'>

//                         <div className='bg-[#485AFF] rounded-[5px] flex h-[30px] w-[117px] px-4 flex-col justify-center items-center gap-[10px] shrink-0'>
//                             <p className='text-white font-inter text-[16px] not-italic font-bold leading-none'>Our Vision</p>
//                         </div>

//                         <p className='text-[#0F172A] font-inter text-base sm:text-[20px] not-italic font-normal leading-normal sm:leading-[24px] self-stretch pb-4 sm:pb-0'>
//                             To become the most trusted pool maintenance company in the region, known for our commitment to excellence, innovation, and outstanding customer care.
//                         </p>
//                     </div>

//                     {/* Mission Card */}
//                     <div className='w-full h-auto sm:h-[185px] pt-[5px] px-[10px] flex flex-col gap-[10px] rounded-[15px] bg-white'>
//                         <div className='bg-[#485AFF] rounded-[5px] flex h-[30px] w-[117px] px-3 flex-col justify-center items-center gap-[10px] shrink-0'>
//                             <p className='text-white font-inter text-[16px] not-italic font-bold leading-none'>Our Mission</p>
//                         </div>

//                         <p className='text-[#0F172A] font-inter text-base sm:text-[20px] not-italic font-normal leading-normal sm:leading-[24px] self-stretch pb-4 sm:pb-0'>
//                             Provide reliable, high-quality pool maintenance services that ensure clean, safe, and enjoyable swimming environments for all our clients.
//                         </p>
//                     </div>

//                     {/* History Card */}
//                     <div className='w-full h-auto sm:h-[185px] pt-[5px] px-[10px] flex flex-col gap-[10px] rounded-[15px] bg-white'>
//                         <div className='bg-[#485AFF] rounded-[5px] flex h-[30px] w-[117px] px-3 flex-col justify-center items-center gap-[10px] shrink-0'>
//                             <p className='text-white font-inter text-[16px] not-italic font-bold leading-none'>Our History</p>
//                         </div>

//                         <p className='text-[#0F172A] font-inter text-base sm:text-[20px] not-italic font-normal leading-normal sm:leading-[24px] self-stretch pb-4 sm:pb-0'>
//                             Founded by Chemical Engineer Yosbani Martinez, Pool Quality Solutions brings scientific precision and certified experience to pool care, ensuring safe, reliable, and high-quality service.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Right column with image background and text */}
//                 <div id='col2' 
//                     className='flex flex-col p-4 sm:p-6 md:p-[0.88rem] gap-4 sm:gap-6 md:gap-[2rem] relative w-full xl:w-[529px] h-[400px] md:h-[500px] xl:h-[595px] rounded-[15px] justify-start'
//                     style={{
//                         backgroundImage: 'url(/svgs/aboutSection4.svg)',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center'
//                     }}
//                 > 
//                     <p className='text-white font-inter text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] not-italic font-bold leading-tight md:leading-[2.6875rem] self-stretch'>
//                         Let's get started together
//                     </p>

//                     <p className='text-white font-inter 2xl:text-2xl 2xl:leading-[2.5rem] text-sm sm:text-base not-italic font-medium leading-normal sm:leading-relaxed md:leading-[1.9375rem] self-stretch'>
//                         We offer reliable and professional pool maintenance to keep your water clean, safe, and crystal clear. Whether for homes or businesses, we take care of your pool—so you can just enjoy it.
//                     </p>
//                 </div> 
//             </div>
//         </section>
//     )
// }

// export default Section4



import React from 'react'
import { useAnimatedBlobs } from '@/hooks/useAnimatedBlobs'
import { AnimatedBlobs } from './AnimatedBlobs'

function Section4() {
    // Crear instancias separadas del hook para cada tarjeta
    const visionBlobsData = useAnimatedBlobs();
    const missionBlobsData = useAnimatedBlobs();
    const historyBlobsData = useAnimatedBlobs();

    return (
        <section className='bg-[#0F172A] w-full'>
            <div className='w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[212px] py-12 md:py-[102px] flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-[35px]'>
                {/* Left column with three cards */}
                <div id='col1' className='flex flex-col gap-5 sm:gap-[20px] w-full xl:w-[612px]'>
                    
                    {/* Vision Card */}
                    <div 
                        ref={visionBlobsData.ref}
                        className='w-full h-auto sm:h-[185px] pt-[5px] px-[10px] flex flex-col gap-[10px] rounded-[15px] bg-white relative overflow-hidden'
                        {...visionBlobsData.handlers}
                    >
                        {/* Blobs para la tarjeta Vision */}
                        <AnimatedBlobs 
                            showBlobs={visionBlobsData.showBlobs}
                            size="sm"
                            topLeftPosition="left-[-50px] top-[-50px]"
                            bottomRightPosition="right-[-50px] bottom-[-50px]"
                        />

                        {/* Contenido de la tarjeta Vision con z-index */}
                        <div className="relative z-10 flex flex-col gap-[10px]">
                            <div className='bg-[#485AFF] rounded-[5px] flex h-[30px] w-[117px] px-4 flex-col justify-center items-center gap-[10px] shrink-0'>
                                <p className='text-white font-inter text-[16px] not-italic font-bold leading-none'>Our Vision</p>
                            </div>

                            <p className='text-[#0F172A] font-inter text-base sm:text-[20px] not-italic font-normal leading-normal sm:leading-[24px] self-stretch pb-4 sm:pb-0'>
                                To become the most trusted pool maintenance company in the region, known for our commitment to excellence, innovation, and outstanding customer care.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div 
                        ref={missionBlobsData.ref}
                        className='w-full h-auto sm:h-[185px] pt-[5px] px-[10px] flex flex-col gap-[10px] rounded-[15px] bg-white relative overflow-hidden'
                        {...missionBlobsData.handlers}
                    >
                        {/* Blobs para la tarjeta Mission */}
                        <AnimatedBlobs 
                            showBlobs={missionBlobsData.showBlobs}
                            size="sm"
                            topLeftPosition="left-[-50px] top-[-50px]"
                            bottomRightPosition="right-[-50px] bottom-[-50px]"
                        />

                        {/* Contenido de la tarjeta Mission con z-index */}
                        <div className="relative z-10 flex flex-col gap-[10px]">
                            <div className='bg-[#485AFF] rounded-[5px] flex h-[30px] w-[117px] px-3 flex-col justify-center items-center gap-[10px] shrink-0'>
                                <p className='text-white font-inter text-[16px] not-italic font-bold leading-none'>Our Mission</p>
                            </div>

                            <p className='text-[#0F172A] font-inter text-base sm:text-[20px] not-italic font-normal leading-normal sm:leading-[24px] self-stretch pb-4 sm:pb-0'>
                                Provide reliable, high-quality pool maintenance services that ensure clean, safe, and enjoyable swimming environments for all our clients.
                            </p>
                        </div>
                    </div>

                    {/* History Card */}
                    <div 
                        ref={historyBlobsData.ref}
                        className='w-full h-auto sm:h-[185px] pt-[5px] px-[10px] flex flex-col gap-[10px] rounded-[15px] bg-white relative overflow-hidden'
                        {...historyBlobsData.handlers}
                    >
                        {/* Blobs para la tarjeta History */}
                        <AnimatedBlobs 
                            showBlobs={historyBlobsData.showBlobs}
                            size="sm"
                            topLeftPosition="left-[-50px] top-[-50px]"
                            bottomRightPosition="right-[-50px] bottom-[-50px]"
                        />

                        {/* Contenido de la tarjeta History con z-index */}
                        <div className="relative z-10 flex flex-col gap-[10px]">
                            <div className='bg-[#485AFF] rounded-[5px] flex h-[30px] w-[117px] px-3 flex-col justify-center items-center gap-[10px] shrink-0'>
                                <p className='text-white font-inter text-[16px] not-italic font-bold leading-none'>Our History</p>
                            </div>

                            <p className='text-[#0F172A] font-inter text-base sm:text-[20px] not-italic font-normal leading-normal sm:leading-[24px] self-stretch pb-4 sm:pb-0'>
                                Founded by Chemical Engineer Yosbani Martinez, Pool Quality Solutions brings scientific precision and certified experience to pool care, ensuring safe, reliable, and high-quality service.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right column with image background and text */}
                <div id='col2' 
                    className='flex flex-col p-4 sm:p-6 md:p-[0.88rem] gap-4 sm:gap-6 md:gap-[2rem] relative w-full xl:w-[529px] h-[400px] md:h-[500px] xl:h-[595px] rounded-[15px] justify-start'
                    style={{
                        backgroundImage: 'url(/svgs/aboutSection4.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                > 
                    <p className='text-white font-inter text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] not-italic font-bold leading-tight md:leading-[2.6875rem] self-stretch'>
                        Let's get started together
                    </p>

                    <p className='text-white font-inter 2xl:text-2xl 2xl:leading-[2.5rem] text-sm sm:text-base not-italic font-medium leading-normal sm:leading-relaxed md:leading-[1.9375rem] self-stretch'>
                        We offer reliable and professional pool maintenance to keep your water clean, safe, and crystal clear. Whether for homes or businesses, we take care of your pool—so you can just enjoy it.
                    </p>
                </div> 
            </div>
        </section>
    )
}

export default Section4