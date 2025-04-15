'use client';
import React, { useEffect, useRef, useState } from 'react';

const SubscriptionCalculatorCard: React.FC = () => {
  const [gallons, setGallons] = useState<string>('15.000');
  const [additionalServices, setAdditionalServices] = useState({
    vacuuming: false,
    filterWash: false,
  });

  const calculatePrice = (): number => {
    let basePrice = 200;
    if (additionalServices.vacuuming) basePrice += 5;
    if (additionalServices.filterWash) basePrice += 5;
    return basePrice;
  };

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Solo activamos si el componente está 100% visible
        setIsVisible(entry.intersectionRatio >= 1.0);
      },
      {
        root: null,
        threshold: 1.0, // 👈 se activa solo si el 100% del componente es visible
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
    ref={cardRef}
    className="mt-6 bg-white p-6 rounded-3xl shadow-lg relative overflow-hidden z-10 w-full max-w-[290px] mx-auto"
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
    <div className="relative z-20 flex flex-col gap-4 w-full">
      {/* Título */}
      <h2 className="text-[20px] leading-[25.416px] font-bold text-left text-[#052F52] font-['Plus_Jakarta_Sans']">
        Calculate Your <br /> Subscription Price
      </h2>
  
      {/* Campo de entrada */}
      <div className="text-left">
        <div className="flex items-center justify-between">
          <label
            htmlFor="gallons"
            className="text-[10px] font-bold leading-[25.416px] text-[#051535] font-inter"
          >
            How many gallons is your pool?
          </label>
          <button
            type="button"
            className="text-[10px] font-bold leading-[25.416px] text-[#485AFF] font-inter"
          >
            Don't know?
          </button>
        </div>
  
        <input
          id="gallons"
          type="text"
          value={gallons}
          onChange={(e) => setGallons(e.target.value)}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md bg-white text-[13.555px] leading-[16.097px] font-normal text-black font-inter"
        />
      </div>
  
      {/* Servicios adicionales */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="flex items-center text-xs font-bold text-slate-900 cursor-pointer">
            <input
              type="checkbox"
              checked={additionalServices.vacuuming}
              onChange={(e) =>
                setAdditionalServices((prev) => ({
                  ...prev,
                  vacuuming: e.target.checked,
                }))
              }
              className="mr-2 w-4 h-4 accent-blue-600"
            />
            Additional vacuuming
          </label>
          <span className="text-xs font-bold text-slate-900">+5</span>
        </div>
  
        <div className="flex justify-between items-center">
          <label className="flex items-center text-xs font-bold text-slate-900 cursor-pointer">
            <input
              type="checkbox"
              checked={additionalServices.filterWash}
              onChange={(e) =>
                setAdditionalServices((prev) => ({
                  ...prev,
                  filterWash: e.target.checked,
                }))
              }
              className="mr-2 w-4 h-4 accent-blue-600"
            />
            Extra filter wash
          </label>
          <span className="text-xs font-bold text-slate-900">+5</span>
        </div>
      </div>
  
      {/* Separador visual */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28b5e33c3932e21a2282a031f0ecda738dcd6f28?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
        alt="Divider"
        className="my-4 w-full"
      />
  
      {/* Precio estimado */}
      <div className="text-left">
        <h3 className="text-xs font-medium text-slate-500">ESTIMATED PRICE:</h3>
        <p className="text-[21.113px] leading-[52.783px] font-black text-[#052F52] font-inter mt-1">
          ${calculatePrice()} / MONTH
        </p>
      </div>
  
      {/* Botón de acción */}
      <button
        className="mt-4 flex flex-col justify-center items-center gap-[4.236px] px-[8.472px] py-[6.778px] text-[12px] font-extrabold text-white bg-[#485AFF] rounded-[3.389px] text-left w-fit"
      >
        Request Subscription
      </button>
    </div>
  </div>
  
  );
};

export default SubscriptionCalculatorCard;
