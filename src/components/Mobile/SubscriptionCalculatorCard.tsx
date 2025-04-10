'use client';
import React, { useState } from "react";

const SubscriptionCalculatorCard: React.FC = () => {
  const [gallons, setGallons] = useState<string>("15.000");
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

  return (
    <div className="mt-6 bg-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-lg font-bold text-center text-slate-900 mb-4">
        Calculate Your <br /> Subscription Price
      </h2>

      {/* Campo de entrada de galones */}
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

      {/* Opciones de servicios adicionales */}
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
  );
};

export default SubscriptionCalculatorCard;
