"use client";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import FancyButton from "./FancyButton";
import Link from "next/link";

interface Service {
  id: string;
  name: string;
  price: number;
  checked: boolean;
}

const DEFAULT_GALLONS = 10000;
const BASE_PRICE = 50;

const DEFAULT_SERVICES: Service[] = [
  {
    id: "vacuuming",
    name: "Additional vacuuming",
    price: 5,
    checked: false,
  },
  {
    id: "filter",
    name: "Extra filter wash",
    price: 5,
    checked: false,
  },
];

interface InputDesignProps {
  onSubscribe?: (data: {
    gallons: number;
    services: Service[];
    total: number;
  }) => void;
}

function InputDesign({ onSubscribe }: InputDesignProps) {
  const [poolGallons, setPoolGallons] = useState(DEFAULT_GALLONS);
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const toggleService = (index: number) => {
    const newServices = [...services];
    newServices[index].checked = !newServices[index].checked;
    setServices(newServices);
  };

  const calculateTotal = () => {
    const additionalCost = services
      .filter((service) => service.checked)
      .reduce((sum, service) => sum + service.price, 0);
    return poolGallons * 0.013 + additionalCost;
  };

  const handleSubmit = () => {
    onSubscribe?.({
      gallons: poolGallons,
      services: services,
      total: calculateTotal(),
    });
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&family=Inter:wght@400;500;700;800;900&display=swap"
        rel="stylesheet"
      />
      <main
        ref={cardRef}
        className="box-border px-12 py-12 rounded-3xl shadow-lg max-md:p-8 max-md:max-w-full max-sm:p-6 max-sm:rounded-3xl relative overflow-hidden z-10 bg-white w-full max-w-xl mx-auto"
        style={{
          width: "30rem",
          height: "auto",
          transition: "background 700ms ease-out",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Blob superior izquierdo */}
        <div
          className={`absolute w-80 h-80 left-[-170px] top-[-170px] rounded-full blur-lg transition-all duration-700 ease-out z-0 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: 'linear-gradient(205deg, rgba(255, 227, 174, 1) 7.53%, rgba(175, 239, 239, 1) 84.19%)',
          }}
        />
        
        {/* Blob inferior derecho */}
        <div
          className={`absolute w-80 h-80 right-[-120px] bottom-[-120px] rounded-full blur-lg transition-all duration-700 ease-out z-0 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: 'linear-gradient(205deg, rgba(255, 227, 174, 1) 7.53%, rgba(175, 239, 239, 1) 84.19%)',
          }}
        />

        {/* Contenido principal */}
        <div className="relative z-20 flex flex-col gap-4 w-full">
          <h1 className="text-2xl font-bold leading-8 text-[#052F52] font-['Plus_Jakarta_Sans'] mb-6 md:text-4xl">
            Calculate Your <br className="md:hidden" /> Subscription Price
          </h1>

          <div className="text-left">
            <div className="flex items-center justify-between">
              <label
                htmlFor="gallons"
                className="text-sm font-bold text-[#051535] font-inter md:text-lg"
              >
                How many gallons is your pool?
              </label>
              <button
                type="button"
                className="text-sm font-bold text-[#485AFF] font-inter md:text-lg"
              >
                Don't know?
              </button>
            </div>

            <input
              id="gallons"
              type="number"
              value={poolGallons}
              onChange={(e) => setPoolGallons(Number(e.target.value))}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md bg-white text-black font-inter md:text-xl md:py-4"
              min="0"
            />
          </div>

          <div className="space-y-3 mt-2">
            {services.map((service, index) => (
              <div key={service.id} className="flex justify-between items-center">
                <label className="flex items-center text-sm font-bold text-slate-900 cursor-pointer md:text-lg">
                  <input
                    type="checkbox"
                    checked={service.checked}
                    onChange={() => toggleService(index)}
                    className="mr-2 w-5 h-5 accent-blue-600"
                  />
                  {service.name}
                </label>
                <span className="text-sm font-bold text-slate-900 md:text-lg">+{service.price}</span>
              </div>
            ))}
          </div>

          <hr className="my-5 h-px bg-slate-300" />

          <div className="text-left">
            <h3 className="text-sm font-medium text-slate-500 md:text-lg">ESTIMATED PRICE:</h3>
            <p className="text-2xl font-black text-[#052F52] font-inter mt-1 md:text-4xl">
              ${calculateTotal()} / MONTH
            </p>
          </div>

          <div className="mt-4">
          <Link href="/contact">
            <FancyButton text={"Request Subscription"} onClick={handleSubmit} />
          </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InputDesign;