import React, { useState } from "react";
import Image from "next/image";
import SubscriptionCalculatorCard from '@/components/Mobile/SubscriptionCalculatorCard';
import MobileFooter from '@/components/Mobile/MobileFooter';

const MobileHeroContent = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  
  return (
  <main>
    <section
      className="relative w-full min-h-[667px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/servicesHero.png')" }}
    >
      {/* Vector decorativo SVG */}
      <div className="absolute top-0 w-full h-[127px] z-10">
        <img
          src="/svgs/vectorHeroServices.svg"
          alt="Decorative vector"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-20 flex flex-col items-center justify-start text-center px-4 pt-[88px]">
        <h1 className="text-[32px] font-bold leading-none tracking-tighter text-slate-900">
          Pool Cleaning
        </h1>
        <p className="mt-6 text-sm font-medium leading-6 text-zinc-600 max-w-xs">
          Restore your pool's sparkle. We provide thorough one-time or regular
          cleaning, including brushing, vacuuming, and stain/algae treatment.
        </p>

        {/* Puntos del carrusel */}
        <div className="mt-10 bg-indigo-500 rounded-3xl px-4 py-2 flex gap-2 justify-center">
          {[...Array(6)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === 2 ? "bg-white" : "bg-[#5000f3]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>


    <section className="w-full px-4 pt-10 pb-8 bg-[#F7FAFE] text-[#212939] text-[12px] leading-[20px]">
      {/* Título */}
      <h2 className="text-center text-[14px] font-bold text-[#485AFF] leading-[20px] mb-4">
        The Pool Quality Cleaning Difference
      </h2>

      {/* Imagen comparativa */}
      <div className="w-full mt-4">
        <Image
          src="/images/services_comparative.png"
          alt="Before"
          width={160}
          height={160}
          className="w-full rounded-md"
        />
      </div>

      {/* Descripción */}
      <p
        className={`text-justify mb-4 text-[14px] text-[#0B0858] leading-[30px] font-[400] font-inter capitalize 
        overflow-hidden text-ellipsis ${showFullText ? '' : 'line-clamp-[12]'}`}
      >
        Keeping your pool visually appealing is just the start. Our professional Pool Cleaning service ensures your water is not only sparkling clear but also healthy and safe for swimming, reflecting our commitment to meticulous care backed by scientific understanding. We go beyond a simple surface skim. Our comprehensive cleaning includes thoroughly brushing pool walls, steps, and waterlines to dislodge algae and buildup, meticulous vacuuming of the pool floor to remove settled debris, emptying skimmer and pump baskets to maintain proper flow, and ensuring overall cleanliness.

        Whether you need a one-time deep clean after a party or storm, require seasonal opening or closing services, or are dealing with the challenge of recovering a green pool, Pool Quality Solutions has the specialized tools and expertise required. Even during routine cleaning, our knowledge of water chemistry – driven by our founder's Chemical Engineering background – ensures we help maintain the delicate water balance, protecting both swimmers and your valuable pool equipment from potential issues caused by neglect. Let us handle the hard work with precision and care, so you can simply relax and enjoy your pristine, healthy pool environment.

      </p>

      {/* Botón */}
      <div className="flex justify-start mb-4">
  <button
    onClick={toggleText}
    className="w-[136px] px-[10px] py-[8px] bg-[#485AFF] text-white text-[12px] font-medium rounded-[8px] shadow-sm flex flex-col items-center justify-center gap-[10px]"
  >
    {showFullText ? 'See less...' : 'See more...'}
  </button>
</div>

      {/* Imagen adicional */}
      <div className="w-full mt-4">
        <Image
          src="/images/Services_comparative2.png"
          alt="Additional comparison"
          width={320}
          height={180}
          className="w-full rounded-md"
        />
      </div>
    </section>
    
    <section className="relative w-full flex justify-center pt-10 pb-16 overflow-hidden bg-[#f7fafe]">
      {/* Tarjeta reutilizable */}
      <SubscriptionCalculatorCard />
    </section>

    <section className="relative w-full min-h-[820px] overflow-hidden">
  {/* Imagen de fondo */}
  <Image
    src="/images/connect.png"
    alt="Connect background"
    fill
    priority
    className="object-cover w-full h-full"
  />

  {/* Contenido principal */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-6">
    <h2 className="text-white font-bold text-[28px] leading-tight mb-4">
      Connect With <br /> Us Online
    </h2>

    <p className="text-white text-[14px] leading-relaxed max-w-xs mb-6">
      Check out our latest videos showcasing pristine pools, helpful advice, and the science behind sparkling water. Connect with us!
    </p>

    {/* Botones */}
    <div className="flex w-full justify-between gap-2 max-w-[320px] mb-10">
      <button className="flex-1 bg-white text-[#0F172A] font-semibold text-sm rounded-md px-2 py-2 flex items-center justify-center gap-1">
        <Image src="/svgs/tiktok.svg" alt="TikTok" width={16} height={16} />
        TikTok
      </button>
      <button className="flex-1 bg-white text-[#0F172A] font-semibold text-sm rounded-md px-2 py-2 flex items-center justify-center gap-1">
        <Image src="/svgs/instagram1.svg" alt="Instagram" width={16} height={16} />
        Instagram
      </button>
      <button className="flex-1 bg-white text-[#0F172A] font-semibold text-sm rounded-md px-2 py-2 flex items-center justify-center gap-1">
        <Image src="/svgs/facebook.svg" alt="Facebook" width={16} height={16} />
        Facebook
      </button>
    </div>
  </div>

  {/* Carrusel de videos */}
  <div className="relative z-10 px-6">
    <div className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar gap-4 pb-4">
      {["REEL1.mp4", "REEL2.mp4", "REEL3.mp4"].map((src, index) => (
        <div
        key={index}
        className="flex-shrink-0 w-[200px] h-[356px] rounded-2xl overflow-hidden snap-center bg-black"
      >
        <video
          src={`/videos/${src}`}
          className="w-full h-full object-cover rounded-2xl"
          controls
          muted
        />
      </div>
      ))}
    </div>

    {/* Paginación */}
    <div className="flex justify-center mt-4">
      <div className="bg-indigo-500 px-4 py-2 rounded-3xl flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === 1 ? "bg-white" : "bg-[#5000f3]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  </div>
    </section>

    <section className="w-full bg-slate-900 px-4 py-10">
        <MobileFooter />
        </section>

 


  </main>






  );
};

export default MobileHeroContent;
