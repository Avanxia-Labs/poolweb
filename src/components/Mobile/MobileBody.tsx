"use client";
import React, { useRef, useState, useEffect } from "react";
import { Frame } from "@/components/Mobile/Frame";
import { Box } from "./Box";
import MobileCard from "./MobileCard";
import { Facebook, Instagram, Music2 } from "lucide-react";
import ContactFormSection from '@/components/Mobile/ContactFormSection';
import SubscriptionCalculatorCard from "./SubscriptionCalculatorCard";
import MobileFooter from "./MobileFooter";
import { useRouter } from 'next/navigation';

const MobileBody = () => {
  const router = useRouter();
  // Ref y estado para scroll horizontal (slider)
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
  
    const cards = Array.from(container.children) as HTMLElement[];
    const containerRect = container.getBoundingClientRect();
    const center = containerRect.left + containerRect.width / 2;
  
    let closestIndex = 0;
    let minDistance = Infinity;
  
    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(center - cardCenter);
  
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
  
    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    container.addEventListener("scroll", handleScroll, { passive: true });
  
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Ref y estado para animación con IntersectionObserver
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.75, // 60% en pantalla
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  const cards = [
    {
      icon: "/svgs/Clock_mobile.svg",
      title: "Regular Maintenance",
      description:
        "Scheduled service to keep your pool in top condition, anticipating and correcting issues before they become costly.",
    },
    {
      icon: "/svgs/routine_.svg",
      title: "Deep and Routine Cleaning",
      description:
        "We remove dirt, debris, and algae to ensure your pool stays clean, safe, and always ready to enjoy.",
    },
    {
      icon: "/svgs/repair.svg",
      title: "Repair and Installation",
      description:
        "We install and repair essential equipment for efficient and safe pool operation.",
    },
    {
      icon: "/svgs/pool_sistem.svg",
      title: "Pool System Automation",
      description:
        "Control your pool from your phone with smart technology that makes daily management easy.",
    },
    {
      icon: "/svgs/diagnosis.svg",
      title: "Diagnosis and Troubleshooting",
      description:
        "We quickly identify any pool issue and provide precise, effective solutions.",
    },
    {
      icon: "/svgs/custom_pool.svg",
      title: "Custom Pool Design & Construction",
      description:
        "Coming soon: custom pool construction using quality materials and exceptional finishes.",
    },
  ];
  
  return (
  <main className="w-full bg-[#f7fafe]">      
    {/* Sección del título y estimación */}
    <Frame />
    <Box />
    <section className="relative w-full pt-10 pb-16 overflow-hidden min-h-[750px]">
      {/* Imagen de fondo */}
      <img
        src="/images/deep.jpg"
        alt="Deep background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Contenido sobre la imagen */}
      <div className="relative z-20 w-full flex flex-col items-center text-center -mt-12">

        <img
        src="/svgs/deep_text.svg"
        alt="Deep Into our Services"
        className="w-full max-w-[280px] mb-3"
        />

        <a href="/services">
          <button className="bg-[#485AFF] text-white text-[12px] leading-[28px] font-semibold text-center rounded-[8px] px-[10px] py-[8px] mb-2">
            View All Services
          </button>
        </a>


        {/* Texto descriptivo */}
        <p className="text-[#F5F9FF] text-[12px] leading-[20px] font-normal text-center max-w-[268px] px-[12px] mx-auto mb-12">
          We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
        </p>

        {/* Carrusel de tarjetas */}
        <div className="relative w-full overflow-hidden mt-12">
          <div
            ref={containerRef}
            className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-smooth px-4 justify-start"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center w-[90%] max-w-[380px] px-6"
              >
                <div className="bg-[#CFF2FC] text-[#0F172A] rounded-2xl px-4 py-6 shadow-md h-full flex flex-col justify-start items-center text-center space-y-4">
                  <MobileCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-6 flex justify-center">
            <div className="bg-[#485AFF] px-4 py-2 rounded-full flex items-center gap-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-white" : "bg-[#5000F3]"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
  <div className="w-full relative flex flex-col items-center px-[clamp(1rem,4vw,2rem)] py-10 z-10">
    <div className="w-full max-w-[clamp(320px, 90vw, 768px)] mx-auto">
      <header className="text-center px-2">
        <h1 className="text-[clamp(20px,5vw,24px)] leading-[clamp(30px,6vw,40px)] font-bold text-[#0F172A] text-center font-['Plus_Jakarta_Sans'] w-full">
          Get Your Instant Pool <br /> Service Estimate
        </h1>
        <p className="mt-3 text-[12px] leading-[28px] font-extrabold text-[#485AFF] text-center font-inter">
          Enter Your Pool Details Below
        </p>
      </header>

      {/* Tarjeta reutilizable */}
      <SubscriptionCalculatorCard />
    </div>
  </div>
</section>

    <section className="relative w-full px-0 overflow-hidden min-h-screen">
      {/* Imagen de fondo Fija */}
      <img
      src="/svgs/man_mobile_svg.svg"
      alt="Yosbani Martinez background"
      className="absolute top-0 left-0 w-full h-full object-cover object-[left_top] z-0"
    />


  {/* Contenido debajo de la imagen */}
  <div className="relative z-10 px-4 pt-[95vh] pb-8 text-white max-w-[380px] mx-auto">
    <h1 className="text-[32px] leading-[28px] font-semibold text-[#F5F9FF] font-inter h-[37px] w-full">
      Yosbani Martinez
    </h1>

    <p className="text-[16px] leading-[28px] font-medium text-[#485AFF] font-inter w-full h-[29px]">
      Founder & Chemical Engineer
    </p>

    <article className="mt-4 w-full">
      <p className="text-[18.823px] leading-[25.614px] font-normal text-white font-inter">
        I founded Pool Quality Solutions to bring a higher level of scientific precision to pool care. As a Chemical Engineer, with a degree evaluated as equivalent to a U.S. Bachelor of Science, I understand that water chemistry is crucial. It's not just about having a pool that looks clean – it's about ensuring a safe, balanced, and healthy swimming environment for your family and friends. Our commitment is to apply this expertise accurately and consistently, delivering quality service you can trust.
      </p>
    </article>

    <a
      href="/docs/mobile/VerifiedCredentials.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#F5F9FF] text-[12px] leading-[24.614px] font-extrabold italic underline decoration-solid [text-decoration-skip-ink:none] font-['Plus_Jakarta_Sans'] mt-4 hover:text-indigo-300 active:text-[#485AFF] transition-colors"
    >
      View Verified Credentials
    </a>

  </div>
    </section>

    <section className="relative w-full px-0 pb-10 text-xs overflow-hidden min-h-[850px]">
      {/* Imagen de fondo */}
      <img
        src="/images/pool_mobile.png"
        alt="Pool Mobile Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Contenedor del texto alineado */}
      <div className="relative z-10 max-w-screen-sm mx-auto px-4 flex flex-col justify-end min-h-[500px] pb-10">
        <div className="w-full max-w-[260px]"> {/* ← Aquí el ajuste importante */}
          <article className="flex flex-col text-white">
            <h1 className="text-3xl font-bold tracking-tighter leading-10 text-white mb-6">
              Transform Your Pool Experience
            </h1>
            <p className="leading-5 text-white mb-6">
              We combine expertise with dedication to deliver exceptional pool services
              that exceed expectations. We combine expertise with dedication to deliver
              exceptional pool services that exceed expectations.
              <br /><br />
              Exceptional pool services that exceed expectations. We combine expertise
              with dedication to deliver exceptional pool services that exceed
              expectations.
            </p>
            <button
      onClick={() => router.push('/contact')}
      className="mt-4 flex justify-center items-center px-[10px] py-[8px] text-[12px] leading-[28px] font-semibold text-[#485AFF] text-center font-inter bg-[#F5F9FF] rounded-[8px] w-fit"
    >
      GET YOUR FREE ESTIMATE
    </button>
          </article>
        </div>
      </div>
    </section>


    <section
  ref={sectionRef}
  className="w-full bg-[#161F7B] pt-10 pb-28"
>
  <div className="w-full flex flex-col items-center gap-8 rounded-2xl">
    <header className="text-left text-white w-full px-4  mx-auto">
      <h1 className="text-[24px] sm:text-[28px] md:text-[32px] leading-[30px] sm:leading-[34px] md:leading-[36px] font-bold text-[#F5F9FF] font-inter mb-4">
        Customers say<br />About Us
      </h1>

      <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] font-normal text-[#F5F9FF] font-inter mb-10">
        Trust is built through results. Here you can read what our clients say about their experience with our service.
        Their words reflect our commitment to quality and excellence.
      </p>
    </header>

    <div className="relative w-full h-[500px] flex justify-center items-start overflow-hidden px-4">
      {/* Testimonio 1 */}
      <article
        className="p-6 bg-white rounded-xl shadow-md w-[260px] sm:w-[280px] absolute z-10 transition-transform duration-500"
        style={{
          top: "50px",
          left: "calc(50% - 160px)",
          transform: inView ? "rotate(-15deg)" : "rotate(0deg)",
        }}
      >
        <header className="flex gap-3 items-center mb-4">
          <div className="flex items-center justify-center w-10 h-10 font-bold bg-green-500 rounded-full text-white">
            O
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-800">Marvin McKinney</h2>
            <p className="text-sm text-stone-500">Project Manager</p>
          </div>
        </header>
        <blockquote className="text-sm leading-relaxed text-zinc-800">
          "Great service! My pool looks fantastic, and I trust the water is safe thanks to their expertise. Highly recommend!"
        </blockquote>
      </article>

      {/* Testimonio 2 */}
      <article
        className="p-6 bg-white rounded-xl shadow-md w-[260px] sm:w-[280px] absolute z-0 transition-transform duration-500"
        style={{
          top: "228px",
          left: "calc(50% - 100px)",
          transform: inView ? "rotate(15deg)" : "rotate(0deg)",
        }}
      >
        <header className="flex gap-3 items-center mb-4">
          <img
            src="/images/perfil_1.png"
            className="object-cover w-10 h-10 rounded-full"
            alt="Profile"
          />
          <div>
            <h2 className="text-base font-bold text-zinc-800">Mostafa Hussein</h2>
            <p className="text-sm text-stone-500">Client</p>
          </div>
        </header>
        <blockquote className="text-sm leading-relaxed text-zinc-800">
          Geo and his team are awesome. They handle everything in a timely manner and are always a great price! No matter where I move in Naples, they're coming with me! Highly recommend!
        </blockquote>
      </article>
    </div>
  </div>
</section>


    <section className="w-full bg-white px-4 py-16">
      <div className="w-full max-w-[480px] mx-auto">
        <div className="w-full">
        <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.72px] text-[#101828] font-inter">
          Let’s level up your brand,<br />together
        </h2>
        <p className="mt-4 text-[18px] leading-[28px] font-normal text-[#667085] font-inter">
          You can reach us anytime via <br />
          <a href="mailto:poolqualitysolutions@hotmail.com">
            <span className="font-medium text-[#6941C6] underline hover:text-[#7F56D9] transition-colors">
              poolqualitysolutions@hotmail.com
            </span>
          </a>        
        </p>
        </div>

        <ContactFormSection />

      </div>
    </section>


    <section className="w-full bg-slate-900 px-4 py-10">
        <MobileFooter />
      </section>
  </main>
  );
};

export default MobileBody;
