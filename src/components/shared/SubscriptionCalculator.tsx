'use client';
import * as React from 'react';
import { useState, useRef } from 'react';
import Link from 'next/link';
import FancyButton from '@/components/Desktop/FancyButton';
import { useRouter } from 'next/navigation';

interface Service {
  id: string;
  name: string;
  price: number;
  checked: boolean;
}

const DEFAULT_GALLONS = 10000;
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

interface SubscriptionCalculatorProps {
  isMobile?: boolean;
}

export function SubscriptionCalculator({ isMobile = false }: SubscriptionCalculatorProps) {
  const router = useRouter();
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
    const total = poolGallons * 0.013 + additionalCost;
    return Number(total.toFixed(2));
  };

  const handleGallonsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setPoolGallons(0);
      return;
    }
    const number = Number(value);
    if (!isNaN(number)) {
      setPoolGallons(number);
    }
  };

  const handleRedirect = () => {
    const queryParams = new URLSearchParams({
      gallons: String(poolGallons),
      vacuuming: String(services[0].checked),
      filterWash: String(services[1].checked),
      total: String(calculateTotal())
    }).toString();
    
    router.push(`/contact?${queryParams}`);
  };

  // Clases condicionales basadas en mobile/desktop
  const containerClass = isMobile
    ? "w-full flex justify-center pt-10 pb-16 px-6"
    : "";
  
  const cardClass = isMobile
    ? "mt-6 bg-white p-6 rounded-3xl shadow-lg relative overflow-hidden z-10 w-full max-w-[clamp(320px,95vw,768px)] mx-auto"
    : "box-border px-12 py-12 rounded-3xl shadow-lg max-md:p-8 max-md:max-w-full max-sm:p-6 max-sm:rounded-3xl relative overflow-hidden z-10 bg-white w-full max-w-xl mx-auto";

  const titleClass = isMobile
    ? "text-[clamp(18px,5vw,22px)] leading-[25.4px] font-bold text-left text-[#052F52] font-['Plus_Jakarta_Sans']"
    : "text-2xl font-bold leading-8 text-[#052F52] font-['Plus_Jakarta_Sans'] mb-6 md:text-4xl";

  const inputClass = isMobile
    ? "w-full px-4 py-2 mt-2 border border-gray-300 rounded-md bg-white text-[clamp(13px,3vw,15px)] font-normal text-black font-inter"
    : "w-full px-4 py-3 mt-2 border border-gray-300 rounded-md bg-white text-black font-inter md:text-xl md:py-4";

  const priceClass = isMobile
    ? "text-[clamp(20px,6vw,24px)] leading-[36px] font-black text-[#052F52] font-inter mt-1"
    : "text-2xl font-black text-[#052F52] font-inter mt-1 md:text-4xl";

  return (
    <section className={containerClass}>
      <div
        ref={cardRef}
        className={cardClass}
        style={!isMobile ? { width: "30rem", transition: "background 700ms ease-out" } : undefined}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
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
        <h1
          className={titleClass}
          style={{ wordSpacing: '0.75rem' }}
        >
          Calculate your<br className="md:hidden" />
          <span className="block mt-3">
            subscription price
          </span>
        </h1>

          <div className="text-left">
            <div className="flex items-center justify-between">
              <label
                htmlFor="gallons"
                className="text-sm font-bold text-[#051535] font-inter md:text-lg"
              >
                How many gallons is your pool?
              </label>
              <a
                href="#contact"
                className="text-sm font-bold text-[#485AFF] font-inter md:text-lg hover:underline"
              >
                Don't know?
              </a>         
          </div>

            <input
              id="gallons"
              type="number"
              value={poolGallons || ''}
              onChange={handleGallonsChange}
              className={inputClass}
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
            <p className={priceClass}>
              ${calculateTotal()} / MONTH
            </p>
          </div>

          <div className="mt-4">
            {isMobile ? (
              <button
                onClick={handleRedirect}
                className="mt-4 flex flex-col justify-center items-center gap-[4.236px] px-[8.472px] py-[6.778px] text-[12px] font-extrabold text-white bg-[#485AFF] rounded-[3.389px] text-left w-fit"
              >
                Request Subscription
              </button>
            ) : (
              <Link href="/contact">
                <FancyButton text="Request Subscription" onClick={handleRedirect} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}