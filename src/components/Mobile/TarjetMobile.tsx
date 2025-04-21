'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const TarjetaMobile: React.FC = () => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 1.0);
      },
      {
        root: null,
        threshold: 1.0,
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="w-full flex justify-center pt-10 pb-16 px-6">
      <div
        ref={cardRef}
        className="mt-6 bg-white p-6 rounded-3xl shadow-lg relative overflow-hidden z-10 w-full max-w-[clamp(320px,95vw,768px)] mx-auto"
      >
        {/* Blob superior izquierdo */}
        <div
          className={`absolute w-[300px] h-[300px] left-[-170px] top-[-170px] rounded-full blur-[20px] transition-all duration-700 ease-out z-0 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: 'linear-gradient(205deg, rgba(255, 227, 174, 1) 7.53%, rgba(175, 239, 239, 1) 84.19%)',
          }}
        />
        {/* Blob inferior derecho */}
        <div
          className={`absolute w-[300px] h-[300px] right-[-120px] bottom-[-120px] rounded-full blur-[20px] transition-all duration-700 ease-out z-0 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: 'linear-gradient(205deg, rgba(255, 227, 174, 1) 7.53%, rgba(175, 239, 239, 1) 84.19%)',
          }}
        />

        {/* Contenido principal */}
        <div className="relative z-20 flex flex-col gap-4 w-full text-left">
          <h2 className="self-stretch text-[35.041px] leading-[43.802px] font-bold text-[#051535] text-center font-['Plus_Jakarta_Sans']">
          Explore Additional Pool Services
          </h2>

          <p className="text-[#051535] font-inter text-[17.521px] font-bold leading-[43.802px]">
            Need a custom service or have specific questions?
          </p>

          <p className="text-[#051535] font-inter text-[14px] font-normal leading-[24px]">
            Fill out the form and our team will contact you with a personalized quote and assistance tailored to your needs.
          </p>

          <hr className="my-4 border-t border-gray-300" />

          <button
            className="flex w-[170px] h-[44px] px-[20px] py-[16px] justify-center items-center gap-[10px] text-white text-[14px] font-semibold bg-[#485AFF] rounded-[8px]"
            onClick={() => router.push('/form')}
          >
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default TarjetaMobile;
