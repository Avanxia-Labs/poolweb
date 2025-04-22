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
<section className="relative w-full bg-[#F7FAFE] px-4 pt-6 pb-20 text-center text-[#0F172A] overflow-hidden">
  {/* Título principal */}
  <h2 className="text-[clamp(22px,6vw,28px)] font-bold mb-2 leading-tight">
    Let's work together!
  </h2>

  {/* Subtítulo */}
  <p className="text-[clamp(12px,3.5vw,16px)] leading-[1.6] max-w-[clamp(280px,90vw,420px)] mx-auto mb-[clamp(30px,6vw,50px)] font-inter">
    We're here to help you enjoy your pool again. Complete the form and we’ll be in touch within the <br /> next <strong>24 hours</strong>.
  </p>

  {/* Imagen del personaje (ya no absolute) */}
<div className="flex justify-center bottom-[40px] z-0 relative">
  <img
    src="/images/contact_image.png"
    alt="Person Contact"
    className="w-[clamp(260px,70vw,340px)] h-auto object-contain"
  />
</div>

{/* Fondo azul curvo */}
<div className="absolute bottom-0 left-0 w-full z-10">
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
        <a href="tel:+12393800766">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[clamp(22px,6vw,28px)] h-[clamp(22px,6vw,28px)] text-[#667085] cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
        </a>
      ),
      label: (
        <a
          href="tel:+12393800766"
          className="text-[clamp(12px,4vw,14px)] font-semibold text-[#667085] underline hover:text-[#485AFF] transition-colors"
        >
          +1 (239) 380-0766
        </a>
      )
    },    
    {
      icon: (
        <a
          href="https://www.google.com/maps/search/?api=1&query=1743+Jung+Blvd+E+Naples,+FL+34120"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[clamp(22px,6vw,28px)] h-[clamp(22px,6vw,28px)] text-[#667085] cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </a>
      ),
      label: (
        <a
          href="https://www.google.com/maps/search/?api=1&query=1743+Jung+Blvd+E+Naples,+FL+34120"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[clamp(12px,4vw,14px)] font-semibold text-[#667085] underline hover:text-[#485AFF] transition-colors"
        >
          1743 Jung Blvd E Naples, Fl 34120
        </a>
      )
    },    
    {
      icon: (
        <a
          href="mailto:poolqualitysolutions@hotmail.com"
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[clamp(22px,6vw,28px)] h-[clamp(22px,6vw,28px)] text-[#667085]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      ),
      label: (
        <a
          href="mailto:poolqualitysolutions@hotmail.com"
          className="text-[clamp(12px,4vw,14px)] font-semibold text-[#667085] underline hover:text-[#485AFF] transition-colors"
        >
          poolqualitysolutions@hotmail.com
        </a>
      )
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
