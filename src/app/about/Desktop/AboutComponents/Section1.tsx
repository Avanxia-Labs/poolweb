// import React from 'react';

// const Section1 = () => {
//   return (
//     <div>
//       {/* HERO SECTION */}
//       <section className="bg-gray-100">
//         <div className="container mx-auto px-4 md:py-8">
//           {/* Hero Content */}
//           <div className="flex flex-col md:flex-row items-center md:justify-between md:gap-8">
//             {/* Logo/Image Side */}
//             <div className="bg-black w-1/2 md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
//               <div className="w-full max-w-md ">
//                 <img 
//                   src="/svgs/AboutHome.svg" 
//                   alt="Pool Quality Solutions Inc Logo" 
//                   className="w-full"
//                 />
//               </div>
//             </div>

//             {/* Text Side */}
//             <div className="w-full md:w-1/2 text-center md:text-left">
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Let's work together!</h1>
//               <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">The Pool Quality Cleaning Difference</h3>
//               <p className="text-gray-700 mb-6">
//                 We're here to help you enjoy your pool again. Complete the form and we'll be in touch within the next 24 hours.
//               </p>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
//                 GET YOUR FREE ESTIMATE
//               </button>
//             </div>


//           </div>

//           {/* Stats Container */}
//           <div className="flex flex-col md:flex-row justify-center md:justify-around mt-12 md:mt-16 gap-8 md:gap-4">
//             {/* Stat Item 1 */}
//             <div className="text-center">
//               <div className="flex justify-center items-baseline">
//                 <span className="text-4xl md:text-5xl font-bold text-blue-600">30</span>
//                 <span className="text-2xl md:text-3xl font-bold text-blue-600">+</span>
//               </div>
//               <p className="mt-2 text-gray-700">Years Providing Quality Pool Services</p>
//             </div>

//             {/* Stat Item 2 */}
//             <div className="text-center">
//               <div className="flex justify-center items-baseline">
//                 <span className="text-4xl md:text-5xl font-bold text-blue-600">750</span>
//                 <span className="text-2xl md:text-3xl font-bold text-blue-600">+</span>
//               </div>
//               <p className="mt-2 text-gray-700">High-Quality Pools Constructed</p>
//             </div>
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// };

// export default Section1;


import React from 'react'

function Section1() {
    return (
        <div>

            <section className="w-full w-max-[1600px] h-max-[818px] inline-flex justify-start items-start gap-28">

                <img className="w-[818px] h-full" src="/svgs/AboutHome.svg" />

                <div className="flex flex-col items-start gap-[85px] h-full w-[459.26px]">

                    <div className="flex flex-col items-start gap-8">

                        <div className="flex flex-col items-start gap-[27px] w-[343.44px] h-[436px]">
                            <p className="text-[#0F172A] font-inter text-[64px] not-italic font-bold leading-[69px] self-stretch">Let's work
                                <br />together!</p>
                            <p className="w-[336.438px] flex-[1_0_0] text-[#3E57DA] font-inter text-[22px] not-italic font-bold leading-none capitalize">The Pool Quality Cleaning Difference</p>
                            <p className="self-stretch text-[#212939] font-inter text-[24px] not-italic font-normal leading-[38px]">We're here to help you enjoy your pool again.<br />Complete the form and we'll be in touch within the next 24 hours.</p>
                        </div>

                        <div className="flex p-[16px_20px] flex-col justify-center items-center gap-2 rounded-[8px] bg-[#485AFF]">
                            <div className="flex justify-center items-center gap-[9px]">
                                <p className="text-white text-center font-inter text-[18px] not-italic font-semibold leading-[28px]">GET YOUR FREE ESTIMATE</p>
                            </div>
                        </div>
                    </div>




                    <div className="w-full inline-flex flex-row justify-start items-start gap-[145px]">

                        <div className="flex flex-col items-start" style={{ width: '212.115px' }}>
                            <p className="text-[36px] font-semibold text-[#0082F8]"
                                style={{ width: '62.884px', fontFamily: 'Montserrat' }}>30<br/>+
                            </p>
                            <p className="text-[18px] font-medium text-[#0E0E0E] opacity-70 self-stretch"
                                style={{ fontFamily: 'Montserrat' }}>Years Providing Quality Pool Services
                            </p>
                        </div>

                        <div className='flex w-[212.115px] flex-col items-start'>
                            <p className='text-[#0082F8] font-montserrat text-[36px] not-italic font-semibold leading-normal w-[82.593px]'>750<br/>+</p>
                            <p className='text-[#0E0E0E] font-montserrat text-[18px] not-italic font-medium leading-normal self-stretch opacity-70'>High-Quality Pools Constructed</p>
                        </div>



                    </div>

                </div>
            </section>



        </div>

    )
}

export default Section1