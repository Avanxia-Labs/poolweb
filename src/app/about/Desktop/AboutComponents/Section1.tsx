import React from 'react';
import Link from 'next/link';

function Section1() {
  return (
    <section className="w-full max-w-[1920px] mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* Imagen principal - Tocando borde izquierdo e inferior */}
        <div className="w-full lg:w-1/2">
          <img
            // className="w-full h-auto object-contain" 
            className='w-full h-full object-cover lg:object-contain'
            src="/svgs/AboutHome.svg"
            alt="Pool Quality Solutions Inc"
          />
        </div>

        {/* Contenido derecho con espacio adecuado */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-8 sm:gap-12 lg:gap-[85px] p-6 lg:p-0 lg:pl-28 lg:py-16">
          {/* Texto principal y botón */}
          <div className="flex flex-col items-start gap-6 sm:gap-8 w-full xl:max-w-[25rem] 2xl:max-w-[40rem]">
            <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-[27px] w-full">
              <h1 className="text-[#0F172A] font-inter text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-tight lg:leading-[69px]">
                Let's work<br />together!
              </h1>
              <p className="text-[#3E57DA] font-inter text-lg sm:text-xl md:text-[22px] font-bold leading-tight capitalize">
                The Pool Quality Cleaning Difference
              </p>
              <p className="text-[#212939] font-inter text-base sm:text-xl md:text-2xl font-normal leading-relaxed md:leading-[38px]">
                We're here to help you enjoy your pool again.<br />
                Complete the form and we'll be in touch within the next 24 hours.
              </p>
            </div>

            {/* Botón CTA */}

            <Link href='/form'>
              <button className="py-4 px-6 flex justify-center items-center rounded-lg bg-[#485AFF] hover:bg-[#3A4AD9] transition-colors">
                <p className="text-white text-center font-inter text-base sm:text-lg font-semibold leading-tight">
                  GET YOUR FREE ESTIMATE
                </p>
              </button>
            </Link>
          </div>

          {/* Estadísticas */}
          <div className="w-full flex flex-row sm:flex-row items-start gap-8 sm:gap-[145px]">
            {/* Primera estadística */}
            <div className="flex flex-col items-start">
              <p className="text-[#0082F8] font-montserrat text-3xl md:text-[36px] font-semibold leading-tight">
                10<br />+
              </p>
              <p className="text-[#0E0E0E] font-montserrat text-base md:text-lg font-medium leading-normal opacity-70 max-w-[212px]">
                Years Providing Quality Pool Services
              </p>
            </div>

            {/* Segunda estadística */}
            {/* <div className="flex flex-col items-start">
              <p className="text-[#0082F8] font-montserrat text-3xl md:text-[36px] font-semibold leading-tight">
                750<br />+
              </p>
              <p className="text-[#0E0E0E] font-montserrat text-base md:text-lg font-medium leading-normal opacity-70 max-w-[212px]">
                High-Quality Pools Constructed
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;