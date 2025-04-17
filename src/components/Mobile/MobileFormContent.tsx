'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import React from "react";
import SubscriptionCalculatorCard from '@/components/Mobile/SubscriptionCalculatorCard';
import MobileFooter from '@/components/Mobile/MobileFooter';
import ContactFormSection from '@/components/Mobile/ContactFormSection';


const MobileFormContent = () => {

  const searchParams = useSearchParams();

  useEffect(() => {
    const gallons = searchParams.get('gallons');
    const vacuuming = searchParams.get('vacuuming');
    const filterWash = searchParams.get('filterWash');
    const total = searchParams.get('total');

    console.log('Datos desde calculadora:', { gallons, vacuuming, filterWash, total });
  }, [searchParams]);


  useEffect(() => {
    const fromCalc = searchParams.get('gallons');
    if (fromCalc) {
      const target = document.getElementById('subscription-form');
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // Pequeña pausa para asegurar que todo cargue
      }
    }
  }, [searchParams]);

  

  return (
  <main>
<section className="relative w-full bg-[#F7FAFE] px-4 pt-6 pb-[460px] text-center text-[#0F172A] overflow-hidden">
  {/* Título principal */}
  <h2 className="text-[clamp(22px,6vw,28px)] font-bold mb-2 z-10 relative leading-tight">
    Let's work together!
  </h2>

  {/* Subtítulo */}
  <p className="text-[clamp(12px,3.5vw,16px)] leading-[1.6] max-w-[clamp(280px,90vw,420px)] mx-auto mb-[clamp(30px,6vw,50px)] z-10 relative font-inter">
    We're here to help you enjoy your pool again. Complete the form and we’ll be in touch within the <br /> next <strong>24 hours</strong>.
  </p>

  {/* Imagen del personaje centrada y más abajo */}
  <div className="absolute bottom-[130px] left-1/2 transform -translate-x-1/2 z-10">
    <img
      src="/images/contact_image.png"
      alt="Person Contact"
      className="w-[clamp(220px,60vw,280px)] h-auto object-contain"
    />
  </div>

  {/* Fondo azul curvo */}
  <div className="absolute bottom-0 left-0 w-full z-20">
    <img
      src="/images/contact_blue.png"
      alt="Blue Background Curve"
      className="w-full h-[160px] object-cover"
    />
  </div>
</section>


{/* Sección Contact us */}
<section id="subscription-form" className="w-full px-4">
  <div className="w-full max-w-[480px] mx-auto">
    <div className="bg-white rounded-2xl shadow-md px-6 py-[clamp(24px,6vw,40px)] w-full">
      
      <div className="w-full text-center mb-6">
        <h2 className="text-[clamp(22px,6vw,28px)] font-bold text-slate-900 mb-2 leading-tight">
          Contact us
        </h2>
        <p className="text-[clamp(12px,3.5vw,16px)] text-gray-500 leading-snug">
          Enter Your Pool Details Below
        </p>
      </div>

      <ContactFormSection />
    </div>
  </div>
</section>

<section className="w-full px-4 py-[clamp(40px,8vw,60px)] bg-[#F7FAFE]">
  <div className="w-full max-w-xs mx-auto space-y-6">
    {/* Card Template */}
    {[
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[clamp(22px,6vw,28px)] h-[clamp(22px,6vw,28px)] text-[#667085]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 3h3l2 5a16 16 0 0 0 7 7l5-2v3a2 2 0 0 1-2 2h-.5C9 21 3 15 3 8.5V8a2 2 0 0 1 2-2z"
            />
          </svg>
        ),
        label: "+1 (239) 380-0766",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[clamp(22px,6vw,28px)] h-[clamp(22px,6vw,28px)] text-[#667085]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 13c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z"
            />
          </svg>
        ),
        label: "Av. Sunset",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[clamp(22px,6vw,28px)] h-[clamp(22px,6vw,28px)] text-[#667085]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8 8-8" />
          </svg>
        ),
        label: "email@hosting.com",
      },
    ].map(({ icon, label }, idx) => (
      <div
        key={idx}
        className="flex flex-col justify-center items-center text-center bg-white rounded-xl shadow-lg py-6 h-[clamp(140px,20vw,180px)]"
      >
        {icon}
        <span className="mt-2 text-[clamp(13px,3.5vw,16px)] font-medium text-[#344054]">
          {label}
        </span>
      </div>
    ))}
  </div>
</section>


<section className="relative w-full h-[300px] overflow-hidden text-center flex items-center justify-center">
  {/* Video de fondo */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    src="/videos/videoHD.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Texto superpuesto */}
<div className="relative z-10 px-4">
  <h2 className="text-[#0F172A] text-[24px] leading-[22px] font-bold tracking-[6px] text-center font-inter">
    Transform YourPool <br /> Experience
  </h2>
</div>

</section>




    <section className="w-full bg-slate-900 px-4 py-10">
        <MobileFooter />
        </section>


  </main>

  );
};

export default MobileFormContent;
