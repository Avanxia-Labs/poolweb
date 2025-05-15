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
      className="mt-6 bg-white p-6 rounded-3xl shadow-lg relative overflow-hidden z-10"
    >
      {/* Blobs con tamaño reducido y visibilidad suave */}
      <div
        className={`absolute w-[250px] h-[250px] left-[-150px] top-[-150px] rounded-full blur-[50px] transition-opacity duration-500 z-10 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(159deg, rgba(177, 175, 239, 0.75), rgba(174, 255, 239, 0.75))',
        }}
      />
      <div
        className={`absolute w-[250px] h-[250px] right-[-100px] bottom-[-100px] rounded-full blur-[50px] transition-opacity duration-500 z-10 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(205deg, rgba(255, 227, 174, 0.75), rgba(175, 239, 239, 0.75))',
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-20">
        <h2 className="text-lg font-bold text-center text-slate-900 mb-4">
          Calculate your <br /> subscription price
        </h2>

        {/* Campo de entrada */}
        <div className="mb-4">
          <label htmlFor="gallons" className="block text-xs font-bold text-slate-900">
            How many gallons is your pool?
          </label>
          <input
            id="gallons"
            type="text"
            value={gallons}
            onChange={(e) => setGallons(e.target.value)}
            className="w-full px-4 py-2 mt-2 text-sm border border-gray-300 rounded-md"
          />
          <button className="text-indigo-500 text-xs mt-1">Don't know?</button>
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
          <p className="text-xl font-black text-sky-950 mt-1">
            ${calculatePrice()} / MONTH
          </p>
        </div>

        {/* Botón de acción */}
        <button className="w-full mt-4 px-4 py-2 text-xs font-extrabold text-white bg-indigo-500 rounded">
          Request Subscription
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCalculatorCard;
