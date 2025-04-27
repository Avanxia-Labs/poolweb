import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MobileFooter from '@/components/Mobile/MobileFooter';
import { RefCallback } from 'react';
import TarjetaMobile from "./TarjetMobile";
import { SubscriptionCalculator } from '@/components/shared/SubscriptionCalculator';

const services = [
  { title: 'Diagnostics & Troubleshooting', 
    description: 'Persistent pool problems? Our expert diagnostics pinpoint the root cause of water quality issues, leaks, or equipment malfunctions for targeted, effective solutions.',
    longText: ' Discover ultimate convenience with Pool Quality automation services. We integrate smart systems that allow you to control all aspects of your pool with just a button press. From water temperature to lighting, filtration scheduling, and special features, automation completely transforms how you interact with your pool.Our automation specialists assess your current setup and identify the best options to modernize your system. We install cutting-edge controllers compatible with smartphones and voice assistants, allowing you to manage your pool from anywhere. Smart programming optimizes filtration cycles and chemical treatments, improving energy efficiency and reducing operating costs.  Automation not only adds convenience but also value to your property. Our solutions include remote monitoring, maintenance alerts, and automatic adjustments based on weather conditions. We provide comprehensive training on your new system and ongoing technical support to ensure you get the most out of your automated pool. Let us elevate your aquatic experience with technology that makes pool maintenance simple, efficient, and truly enjoyable.',
    image1: '/images/diagnostic_comparative@2x.png',
    image2: '/images/diagnostic_comparative2@2x.png'
  },
    
  { title: 'Pool Maintenance',
    description: 'Proactive weekly care ensuring balanced chemistry, pristine cleanliness, and optimal equipment function. Enjoy a worry-free, swim-ready pool year-round.',
    longText: 'Choosing Pool Quality Maintenance changes everything. Our professional maintenance service ensures your investment is protected and your pool is always ready to enjoy. Following our maintenance schedule, we make sure all systems function correctly, extending the lifespan of your equipment and keeping the water crystal clear.Our certified technicians perform comprehensive inspections of the filtration system, pumps, heaters, and automation systems. We check and adjust chemical levels to prevent problems like algae, cloudy water, or skin irritation. Regular maintenance eliminates debris buildup, reduces the chances of costly repairs, and allows you to enjoy your pool without worries.Whether you need weekly, bi-weekly, or monthly service, our customized plans adapt to your specific needs. Equipped with the necessary tools and expertise, we perform preventive maintenance that saves time and money in the long run. Our knowledge of water chemistry and filtration systems ensures superior results. Let us handle the technical aspects while you simply enjoy your crystal-clear water and perfectly maintained pool environment.',
    image1: '/images/matience_comparative@2x.png',
    image2: '/images/matience_comparative2@2x.png'
 },
  { title: 'Pool Cleaning', 
    description: "Restore your pool's sparkle. We provide thorough one-time or regular cleaning, including brushing, vacuuming, and stain/algae treatment.",
    longText: 'Keeping your pool visually appealing is just the start. Our professional Pool Cleaning service ensures your water is not only sparkling clear but also healthy and safe for swimming, reflecting our commitment to meticulous care backed by scientific understanding. We go beyond a simple surface skim. Our comprehensive cleaning includes thoroughly brushing pool walls, steps, and waterlines to dislodge algae and buildup, meticulous vacuuming of the pool floor to remove settled debris, emptying skimmer and pump baskets to maintain proper flow, and ensuring overall cleanliness.Whether you need a one-time deep clean after a party or storm, require seasonal opening or closing services, or are dealing with the challenge of recovering a green pool, Pool Quality Solutions has the specialized tools and expertise required. Even during routine cleaning, our knowledge of water chemistry – driven by our founders Chemical Engineering background – ensures we help maintain the delicate water balance, protecting both swimmers and your valuable pool equipment from potential issues caused by neglect. Let us handle the hard work with precision and care, so you can simply relax and enjoy your pristine, healthy pool environment.',
    image1: '/images/services_comparative@2x.png',
    image2: '/images/services_comparative2@2x.png'
 },
  { title: 'Equipment Repair & Installation', 
    description: 'Fast, expert repairs for pumps, filters, heaters, and more. We also install high-quality, energy-efficient new equipment for lasting performance.',
    longText: 'Trust Pool Quality for all your pool equipment needs. Our certified technicians have experience with all major brands and equipment models, ensuring your system operates at maximum efficiency. When something fails in your pool, we respond quickly to diagnose and fix the problem, minimizing downtime.Our comprehensive repair service includes pumps, filters, heaters, chlorination systems, automatic controllers, and cleaning systems. We use quality replacement parts and offer warranty on our repairs. For new installations, we ensure each component is properly sized and configured for optimal performance, energy savings, and ease of maintenance.We stay updated with the latest technologies in pool equipment, offering you options that can reduce your operating costs and enhance your pool experience. Whether its a simple repair or a complete system renovation, our team provides expert advice, professional installation, and ongoing support. Count on us to keep your equipment running smoothly season after season.',
    image1: '/images/equipament_comparative@2x.png',
    image2: '/images/equipament_comparative2@2x.png'
 },
  { title: 'Pool Automation', 
    description: 'Simplify pool ownership with smart automation. Control pumps, heating, lights, and cleaning easily from anywhere via your smartphone or tablet.',
    longText: ' Discover ultimate convenience with Pool Quality automation services. We integrate smart systems that allow you to control all aspects of your pool with just a button press. From water temperature to lighting, filtration scheduling, and special features, automation completely transforms how you interact with your pool.Our automation specialists assess your current setup and identify the best options to modernize your system. We install cutting-edge controllers compatible with smartphones and voice assistants, allowing you to manage your pool from anywhere. Smart programming optimizes filtration cycles and chemical treatments, improving energy efficiency and reducing operating costs.Automation not only adds convenience but also value to your property. Our solutions include remote monitoring, maintenance alerts, and automatic adjustments based on weather conditions. We provide comprehensive training on your new system and ongoing technical support to ensure you get the most out of your automated pool. Let us elevate your aquatic experience with technology that makes pool maintenance simple, efficient, and truly enjoyable.',
    image1: '/images/automation_comparative@2x.png',
    image2: '/images/automation_comparative2@2x.png'
 },
  { title: 'Custom Pool Design & Construction', 
    description: 'Transform your outdoor space with a custom-designed pool tailored to your style, needs, and landscape. Our team handles every detail—from concept to construction—for a seamless, high-quality result.' ,
    longText: 'At Pool Quality, we transform visions into stunning aquatic realities. Our custom design and construction process begins with a detailed consultation to fully understand your desires, needs, and the environment where your new pool will be located. Our expert designers create concepts that maximize your space, complement existing architecture, and reflect your personal style.From infinity pools with panoramic views to intimate tropical oases or elegant minimalist designs, our construction team has the expertise to execute projects of any scale and complexity. We use the highest quality materials and advanced construction techniques that ensure durability, energy efficiency, and ease of maintenance. Every detail, from finish selection to the integration of special water features, is meticulously planned.Throughout the construction process, we maintain transparent communication and constant supervision to ensure that every aspect meets our rigorous standards. Our commitment to excellence extends beyond project completion, offering comprehensive guidance on the maintenance and operation of your new pool. Let us create a custom aquatic space that not only beautifies your property but also enriches your lifestyle for many years to come.',
    image1: '/images/custom_comparative@2x.png',
    image2: '/images/custom_comparative2@2x.png',
    },
];

const videoSources = ['REEL1.mp4', 'REEL2.mp4', 'REEL3.mp4'];

const MobileHeroContent = () => {
  
const [currentServiceTitle, setCurrentServiceTitle] = useState('Pool Maintenance');

const selectedService = services.find(s => s.title === currentServiceTitle);
const subscriptionTitles = ['Pool Maintenance', 'Pool Cleaning'];
const showSubscriptionCard = subscriptionTitles.includes(selectedService?.title ?? '');
  const [showFullText, setShowFullText] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(2);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(1);

  const toggleText = () => setShowFullText(!showFullText);

  const setTabRef = (index: number): RefCallback<HTMLButtonElement> => {
    return (el) => {
      tabsRef.current[index] = el;
    };
  };

  useEffect(() => {
    const current = tabsRef.current[activeServiceIndex];
    if (current) {
      current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeServiceIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          const video = videoRefs.current[index];
  
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9 && video) {
            setActiveVideoIndex(index);
            
            // Pausar todos los videos primero
            videoRefs.current.forEach((v, i) => {
              if (v && i !== index) {
                v.pause();
                v.muted = true;
              }
            });
  
            // Reproducir el actual desde el inicio
            video.muted = true; // <-- esto lo mantiene muteado
            video.currentTime = 0;
            video
              .play()
              .catch((err) => console.warn("Auto play error:", err));
          }
        });
      },
      {
        root: container,
        threshold: 0.9,
      }
    );
  
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);
  
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  useEffect(() => {
    const foundIndex = services.findIndex(s => s.title === currentServiceTitle);
    if (foundIndex !== -1) {
      setIndex(foundIndex);
      setActiveServiceIndex(foundIndex);
    }
  }, [currentServiceTitle]);
  
  
  return (
    <main>
<section className="relative w-full min-h-[500px] overflow-hidden">
  {/* Video de fondo */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/videos/pool-background.mp4" type="video/mp4" />
    </video>
  </div>

  {/* Vector decorativo */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-full h-[65px] overflow-hidden -mt-[5px]">
    <img
      src="/svgs/vectorHeroServices.svg"
      alt="Decorative vector"
      className="w-full h-full object-cover"
    />
  </div>

{/* Contenido principal que cambia */}
<div className="relative z-20 pt-[100px] flex flex-col items-center">
  <div
    className="flex flex-col items-center gap-4 w-[288px] mx-auto text-center h-[130px] transition-all duration-500"
  >
    <h1 className="text-[32px] text-black text-center font-inter font-bold leading-[38px] tracking-[-1.127px]">
      {services[index].title}
    </h1>
    <p className="text-[12px] font-semibold text-[#212939] text-center leading-[16.901px] font-inter">
      {services[index].description}
    </p>
  </div>
</div>


{/* Controles FIJOS (no cambian ni se mueven) */}
<div className="relative z-20 flex items-center justify-center gap-4 mt-20">
  {/* Flecha izquierda */}
  <button
    onClick={prev}
    className="bg-black/30 text-white w-8 h-8 rounded-full flex items-center justify-center"
  >
    ←
  </button>

  {/* Puntitos de posición */}
  <div className="bg-[#485AFF] rounded-3xl px-4 py-2 flex gap-2 justify-center">
    {services.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`w-3 h-3 rounded-full transition-colors ${
          i === index ? "bg-white shadow-md" : "bg-[#5000F3]"
        }`}
      />
    ))}
  </div>

  {/* Flecha derecha */}
  <button
    onClick={next}
    className="bg-black/30 text-white w-8 h-8 rounded-full flex items-center justify-center"
  >
    →
  </button>
</div>


  {/* Tabs inferiores (sincronizados por separado si se desea) */}
  <div className="absolute bottom-0 w-full bg-white border-y border-[#E5E7EB] z-20 overflow-x-auto scrollbar-none">
    <div className="flex gap-[17px] px-4 py-3 min-w-fit w-max">
      {services.map((service, index) => (
        <button
          key={index}
          ref={setTabRef(index)}
          onClick={() =>{ 
            setActiveServiceIndex(index);
            setCurrentServiceTitle(services[index].title);
          }}
          
          className={`flex items-center h-[46px] px-[20px] py-[14px] gap-[17px] font-inter text-[15px] font-normal transition-colors whitespace-nowrap ${
            activeServiceIndex === index
              ? 'bg-[#485AFF] text-white rounded-md'
              : 'text-black'
          }`}
        >
          {service.title}
        </button>
      ))}
    </div>
  </div>
</section>


{services[activeServiceIndex] && (
  <section
    key={activeServiceIndex}
    className="w-full px-4 pt-10 pb-8 bg-[#F7FAFE] text-[#212939] text-[12px] leading-[20px]"
  >
    <h2 className="text-[22px] font-bold text-[#3E57DA] text-center capitalize font-inter">
      The {services[activeServiceIndex].title} Difference
    </h2>

    {/* Imagen superior dinámica con <img> */}
    <div className="w-full mt-4">
      <img
        src={services[activeServiceIndex].image1 || ''}
        alt="Before"
        width="320"
        height="180"
        className="w-full rounded-md"
      />
    </div>

    {/* Texto largo dividido por párrafos */}
    <p
      className={`text-justify pt-16 mb-4 text-[14px] text-[#0B0858] leading-[30px] font-[400] font-inter capitalize overflow-hidden text-ellipsis ${
        showFullText ? '' : 'line-clamp-[12]'
      }`}
    >
      {services[activeServiceIndex].longText?.split('\n\n').map((paragraph, index) => (
        <span key={index}>
          {paragraph}
          <br />
          <br />
        </span>
      ))}
    </p>

    {/* Botón para expandir/reducir el texto */}
    <div className="flex justify-start mb-4 pb-12">
      <button
        onClick={toggleText}
        className="w-[136px] px-[10px] py-[8px]  bg-[#485AFF] text-white text-[12px] font-medium rounded-[8px] shadow-sm flex flex-col items-center justify-center gap-[10px]"
      >
        {showFullText ? 'See less...' : 'See more...'}
      </button>
    </div>

    {/* Imagen inferior dinámica con <img> */}
    <div className="w-full mt-4">
      <img
        src={services[activeServiceIndex].image2 || ''}
        alt="Additional comparison"
        width="320"
        height="180"
        className="w-full rounded-md"
      />
    </div>
  </section>
)}

<section className="relative w-full flex justify-center pt-10 pb-16 overflow-hidden bg-[#f7fafe]">
  {showSubscriptionCard ? <SubscriptionCalculator isMobile={true} /> : <TarjetaMobile />}
</section>


  {/* 
      <section className="relative w-full min-h-[820px] overflow-hidden">
        <Image src="/images/connect.png" alt="Connect background" fill priority className="object-cover w-full h-full" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-6">
          <h2 className="text-[#F5F9FF] text-center font-inter text-[32px] font-bold leading-[37px] tracking-[-1px] mb-4">
            Connect With <br /> Us Online
          </h2>
          <p className="text-white text-center font-inter text-[12px] font-normal leading-[22px] max-w-xs mb-6">
            Check out our latest videos showcasing <br /> pristine pools, helpful advice, and the science <br /> behind sparkling water. Connect with us!
          </p>
          <div className="flex w-full justify-between gap-2 max-w-[320px] mb-10">
            <button className="flex-1 bg-white text-[#0F172A] font-semibold text-sm rounded-md px-2 py-2 flex items-center justify-center gap-1">
              <Image src="/svgs/tiktok.svg" alt="TikTok" width={16} height={16} /> TikTok
            </button>
            <button className="flex-1 bg-white text-[#0F172A] font-semibold text-sm rounded-md px-2 py-2 flex items-center justify-center gap-1">
              <Image src="/svgs/instagram1.svg" alt="Instagram" width={16} height={16} /> Instagram
            </button>
            <button className="flex-1 bg-white text-[#0F172A] font-semibold text-sm rounded-md px-2 py-2 flex items-center justify-center gap-1">
              <Image src="/svgs/facebook.svg" alt="Facebook" width={16} height={16} /> Facebook
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full flex justify-center px-4 sm:px-6 md:px-8">
  {/* Carrusel de videos */}
  {/* <div
    ref={containerRef}
    className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar gap-4 pb-4"
  >
    {videoSources.map((src, index) => (
      <div
        key={index}
        className={`flex-shrink-0 snap-center transition-all duration-500 ${
          index === activeVideoIndex
            ? 'w-[220px] h-[400px] rounded-[32px]'
            : 'w-[180px] h-[340px] rounded-2xl opacity-70'
        } overflow-hidden bg-black`}
      >
        <video

          ref={(el: HTMLVideoElement | null) => {
            if (el) {
              videoRefs.current[index] = el;
            }

          //ref={(el) => (videoRefs.current[index] = el)}
          ref={(el) => {
            videoRefs.current[index] = el;

          }}
          data-index={index}
          src={`/videos/${src}`}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          onClick={(e) => {
            if (index === activeVideoIndex) {
              const video = e.currentTarget;
              if (video.paused) {
                video.muted = false;
                video.play();
              } else {
                video.pause();
                video.muted = true;
              }
            }
          }}
        />
      </div>
    ))}
  </div>
</div> */}

{/* ⬇️ Este bloque va fuera para que esté centrado debajo */}
{/* <div className="flex justify-center mt-4 mb-12">
  <div className="relative flex items-center justify-center gap-5 px-4 py-2 bg-[#485AFF] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
    {videoSources.map((_, i) => (
      <button
        key={i}
        onClick={() => {
          setActiveVideoIndex(i);
          const video = videoRefs.current[i];
          if (video) {
            video.scrollIntoView({
              behavior: 'smooth',
              inline: 'center',
              block: 'nearest',
            });
            setTimeout(() => {
              video.muted = false;
              video.play().catch(() => {});
            }, 300);
          }
        }}
        className={`w-3 h-3 rounded-full transition-colors ${
          i === activeVideoIndex ? 'bg-white' : 'bg-[#5000F3]'
        }`}
      ></button>
    ))}
  </div>
</div> */}


      {/* </section> */} 

      <section className="w-full bg-slate-900 px-4 py-10">
        <MobileFooter />
      </section>
    </main>
  );
};

export default MobileHeroContent;
