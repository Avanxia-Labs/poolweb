import React from "react";
import Link from 'next/link';
import Image from "next/image";
// Reemplazar la importación del componente que causa el error
import { SubscriptionCalculator } from '@/components/shared/SubscriptionCalculator';
import MobileFooter from '@/components/Mobile/MobileFooter';
import ContactFormSection from '@/components/Mobile/ContactFormSection';


const MobileFormContent = () => {
  return (
  <main>
<section className="w-full min-h-screen bg-[#F7FAFE] flex flex-col items-center justify-center px-0 text-center">
  {/* Imagen de error */}
  <div className="w-full flex justify-center mb-6 mt-[-200px]">
  <img
    src="/images/error404.png"
    alt="404 Cables"
    className="w-full h-auto max-w-none"
  />
  </div>

  {/* Texto de error */}
  <h1
    className="mt-6 font-[700] text-[48px] leading-none text-[#1B2D59] font-[Literata] capitalize"
  >
    404 Error
  </h1>

  {/* Subtexto */}
 <p className="mt-2 text-[14px] leading-[26px] text-[#0B0858] font-[400] font-[Literata] text-center">
  Sorry, this page doesn’t exist.
</p>

 {/* Botón */} 
 <div className="flex justify-center mt-6">
  <Link href="/">
    <button className="inline-flex flex-col justify-center items-center gap-2 px-5 py-4 bg-[#485AFF] text-white text-xs font-bold rounded-lg">
      HOME PAGE
    </button>
  </Link>
</div>

</section>



    <section className="w-full bg-slate-900 px-4 py-10">
        <MobileFooter />
        </section>


  </main>

  );
};

export default MobileFormContent;
