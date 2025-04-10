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
        
        <div className='bg-sky-500'>Separador</div>

        <section className="w-full w-max-[1600px] h-full h-max-[868px] bg-indigo-300 inline-flex justify-start items-start gap-28">
            
            <img className="w-[818] h-[818px]" src="/svgs/AboutHome.svg" />
            
            <div className="w-full inline-flex flex-col justify-start items-start gap-40">
                
                <div className="flex flex-col justify-start items-start gap-8">
                    <div className="w-80 h-96 flex flex-col justify-start items-start gap-7">
                        <div className="self-stretch justify-start text-slate-900 text-6xl font-bold font-inter leading-[69px]">Let's work
                            <br />together!</div>
                        <div className="w-80 flex-1 justify-start text-indigo-600 text-xl font-bold font-inter capitalize">The Pool Quality Cleaning Difference</div>
                        <div className="self-stretch justify-start text-gray-800 text-2xl font-normal font-inter leading-9">We're here to help you enjoy your pool again.<br />Complete the form and we'll be in touch within the next 24 hours.</div>
                    </div>
                    <div className="px-5 py-4 bg-indigo-500 rounded-lg flex flex-col justify-center items-center gap-2.5">
                        <div className="inline-flex justify-center items-center gap-2">
                            <div className="text-center justify-center text-white text-lg font-semibold font-inter leading-7">GET YOUR FREE ESTIMATE</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-16">
                    <div className="w-52 inline-flex flex-col justify-start items-start">
                        <div className="w-16 justify-start text-sky-500 text-4xl font-semibold font-['Montserrat']">30+</div>
                        <div className="self-stretch opacity-70 justify-start text-stone-950 text-lg font-medium font-['Montserrat']">Years Providing Quality Pool Services</div>
                    </div>
                    <div className="w-52 inline-flex flex-col justify-start items-start">
                        <div className="w-20 justify-start text-sky-500 text-4xl font-semibold font-['Montserrat']">750+</div>
                        <div className="self-stretch opacity-70 justify-start text-stone-950 text-lg font-medium font-['Montserrat']">High-Quality Pools Constructed</div>
                    </div>
                </div>
            </div>
        </section>
        
        
        </div>
        
    )
}

export default Section1