import React from "react";
import Image from "next/image";
import SubscriptionCalculatorCard from '@/components/Mobile/SubscriptionCalculatorCard';
import MobileFooter from '@/components/Mobile/MobileFooter';
import ContactFormSection from '@/components/Mobile/ContactFormSection';


const MobileFormContent = () => {
  return (
  <main>
<section className="relative w-full bg-[#F7FAFE] px-4 pt-6 pb-[120px] text-center text-[#0F172A] overflow-hidden">
  {/* Título principal */}
  <h2 className="text-2xl font-bold mb-2 z-10 relative">Let's work together!</h2>

  {/* Subtítulo */}
  <p className="text-sm leading-6 max-w-xs mx-auto mb-3 z-10 relative">
    We're here to help you enjoy your pool again. Complete the form and we’ll be in touch within the next 24 hours.
  </p>

  {/* Fondo curvo azul encima de la imagen */}
  <div className="absolute bottom-0 left-0 w-full z-20">
    <img
      src="/images/contact_blue.png"
      alt="Blue Background Curve"
      className="w-full h-[160px] object-cover"
    />
  </div>

  {/* Imagen de la chica detrás del azul */}
  <div className="w-full flex justify-center z-10 relative -mt-28">
    <img
      src="/images/contact_image.png"
      alt="Person Contact"
      className="w-[200px] h-auto object-contain"
    />
  </div>
</section>


{/* Sección Contact us */}
<section className="w-full bg-white px-4 py-16">
  <div className="w-full max-w-[480px] mx-auto">
    <div className="w-full text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact us</h2>
      <p className="text-sm text-gray-500">Enter Your Pool Details Below</p>
    </div>

    <ContactFormSection />
  </div>
</section>


<section className="w-full px-4 py-12 bg-[#F7FAFE]">
  <div className="w-full max-w-xs mx-auto space-y-4">
    {/* Teléfono */}
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
      <svg
        className="w-6 h-6 mb-2 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M2 3h3l2 5a16 16 0 0 0 7 7l5-2v3a2 2 0 0 1-2 2h-.5C9 21 3 15 3 8.5V8a2 2 0 0 1 2-2z" />
      </svg>
      <span className="text-sm font-medium text-gray-700">+1 (239) 380-0766</span>
    </div>

    {/* Dirección */}
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
      <svg
        className="w-6 h-6 mb-2 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M12 13c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z" />
      </svg>
      <span className="text-sm font-medium text-gray-700">Av. Sunset</span>
    </div>

    {/* Email */}
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
      <svg
        className="w-6 h-6 mb-2 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M4 4l8 8 8-8" />
      </svg>
      <span className="text-sm font-medium text-gray-700">email@hosting.com</span>
    </div>
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
    <h2 className="text-black text-xl font-semibold tracking-widest leading-tight">
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
