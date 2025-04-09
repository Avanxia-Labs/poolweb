"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Frame } from "@/components/Mobile/Frame";
import { Box } from "./Box";
import MobileCard from "./MobileCard";
import { Facebook, Instagram, Music2 } from "lucide-react";

  const MobileBody = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollLeft = containerRef.current.scrollLeft;
      const width = containerRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };
  
    const scrollToIndex = (index: number) => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: index * containerRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    };
  
    useEffect(() => {
      const container = containerRef.current;
      container?.addEventListener("scroll", handleScroll);
      return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

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

    const handleCredentialsClick = () => {
        // Handle credentials view interaction
        console.log("Viewing credentials");
      };

  return (
<main className="w-full bg-[#f7fafe]">      
    {/* Sección del título y estimación */}
      <Frame />
      <Box />
      <section className="relative w-full px-4 pt-10 pb-16 overflow-hidden min-h-[750px]">
  {/* Imagen de fondo */}
  <img
    src="/images/deep.jpg"
    alt="Deep background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Contenido sobre la imagen */}
  <div className="relative z-20 w-full max-w-screen-sm mx-auto flex flex-col items-center text-center px-4">
    {/* Título como SVG */}
    <img
      src="/svgs/deep_text.svg"
      alt="Deep Into our Services"
      className="w-full max-w-[280px] mb-6"
    />

    {/* Botón */}
    <button className="bg-[#485AFF] text-white text-xs sm:text-sm px-4 py-2 rounded mb-6 font-semibold">
      View All Services
    </button>

    {/* Texto descriptivo */}
    <p className="text-white text-xs sm:text-sm mb-10 max-w-xs">
      We combine expertise with dedication to deliver exceptional pool
      services that exceed expectations.
    </p>

    {/* Carrusel de tarjetas */}
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {[ 
          {
            icon: "/svgs/headphones.svg",
            title: "Support",
            description:
              "Expert support to ensure your pool is always in top shape, with personalized attention.",
          },
          {
            icon: "/svgs/charbar.svg",
            title: "Sales",
            description:
              "Customized pool packages tailored to your needs, from equipment to full service.",
          },
          {
            icon: "/svgs/headphones.svg",
            title: "Maintenance",
            description:
              "Consistent care plans to keep your water chemistry balanced and your pool clean.",
          },
          {
            icon: "/svgs/charbar.svg",
            title: "Installation",
            description:
              "Professional installation of pool automation systems, heaters, pumps, and filters.",
          },
          {
            icon: "/svgs/headphones.svg",
            title: "Diagnostics",
            description:
              "Accurate troubleshooting and diagnostics to fix issues before they become problems.",
          },
          {
            icon: "/svgs/charbar.svg",
            title: "Custom Design",
            description:
              "Coming soon: Dream your pool—we'll build it. Unique layouts and custom features.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center px-3 w-full sm:w-[280px]"
          >
            <div className="bg-[#CFF2FC] text-[#0F172A] rounded-2xl px-4 py-6 shadow-md min-h-[300px] flex flex-col justify-start items-center text-center space-y-4">
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
      <div className="flex justify-center gap-2 mt-6">
        {[...Array(6)].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-[#6D5DFB]" : "bg-[#ccc]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  </div>
</section>


<section className="relative w-full flex justify-center pt-10 pb-16 overflow-hidden">
  {/* Imagen de fondo */}
  <img
    src="/images/cotiza.png"
    alt="Cotiza Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

<div className="w-full max-w-screen-sm relative flex flex-col items-center rounded-none px-0 py-10 z-10">
    <div className="relative w-full max-w-[250px] px-4">
      <header className="text-center">
        <h1 className="text-2xl font-bold leading-10 text-slate-900">
          Get Your Instant Pool Service Estimate
        </h1>
        <p className="mt-3 text-xs font-extrabold leading-7 text-indigo-500">
          Enter Your Pool Details Below
        </p>
      </header>

      <div className="mt-6 bg-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-lg font-bold text-center text-slate-900 mb-4">
          Calculate Your Subscription Price
        </h2>

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

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="flex items-center text-xs font-bold text-slate-900">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9d822ca79ee490d9a78474d45bc5baa4b7e7c8c?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
                className="w-4 h-4 mr-2"
                alt="Vacuuming"
              />
              Additional vacuuming
            </label>
            <span className="text-xs font-bold text-slate-900">+5</span>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center text-xs font-bold text-slate-900">
              <div className="w-4 h-4 border border-blue-600 mr-2" />
              Extra filter wash
            </label>
            <span className="text-xs font-bold text-slate-900">+5</span>
          </div>
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28b5e33c3932e21a2282a031f0ecda738dcd6f28?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
          alt="Divider"
          className="my-4 w-full"
        />

        <div className="text-left">
          <h3 className="text-xs font-medium text-slate-500">ESTIMATED PRICE:</h3>
          <p className="text-xl font-black text-sky-950 mt-1">${calculatePrice()} / MONTH</p>
        </div>

        <button className="w-full mt-4 px-4 py-2 text-xs font-extrabold text-white bg-indigo-500 rounded">
          Request Subscription
        </button>
      </div>
    </div>
  </div>
</section>


<section className="relative w-full px-0 overflow-hidden min-h-[1100px]">
  {/* Imagen de fondo */}
  <img
    src="/images/women_mobil.png"
    alt="Yosbani Martinez background"
    className="absolute inset-0 w-full h-full object-cover object-top z-0"
  />

  {/* Contenedor del texto en la parte inferior más abajo */}
  <div className="absolute bottom-[-10px] left-0 right-0 z-10 px-4 pb-10 text-white max-w-[380px] mx-auto">
    <h1 className="text-xl font-semibold leading-none">Yosbani Martinez</h1>
    <p className="text-sm font-medium leading-7 text-white">
      Founder & Chemical Engineer
    </p>

    <article className="mt-4 text-xs font-normal leading-5 text-white">
      <p>
        I founded Pool Quality Solutions to bring a higher level of
        scientific precision to pool care. As a Chemical Engineer, with a
        degree evaluated as equivalent to a U.S.
      </p>
      <br />
      <p>
        Bachelor of Science, I understand that water chemistry is crucial.
        It's not just about having a pool that looks clean – it's about
        ensuring a safe, balanced, and healthy swimming environment for
        your family and friends. Our commitment is to apply this expertise
        accurately and consistently, delivering quality service you can
        trust.
      </p>
    </article>

    <button
      onClick={handleCredentialsClick}
      className="text-white text-[12px] font-semibold underline mt-4 hover:text-indigo-300 transition-colors"
    >
      View Verified Credentials
    </button>
  </div>
</section>

<section className="relative w-full px-0 pb-10 text-xs overflow-hidden min-h-[850px]">
  {/* Imagen de fondo que reemplaza color e ilustraciones */}
  <img
    src="/images/pool_mobile.png"
    alt="Pool Mobile Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Contenido sobre la imagen */}
  <div className="relative z-10 max-w-screen-sm mx-auto px-4 flex flex-col justify-end min-h-[500px] pb-10">
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
        className="self-start px-4 py-2 mt-4 font-semibold text-indigo-500 text-xs bg-white rounded-lg"
        onClick={() => console.log("CTA clicked")}
      >
        GET YOUR FREE ESTIMATE
      </button>
    </article>
  </div>
</section>






<section className="w-full bg-indigo-900 pt-10 pb-28">
  <div className="w-full max-w-screen-sm mx-auto flex flex-col items-center gap-8 rounded-2xl">
    <header className="text-left text-white w-full px-2">
      <h1 className="mb-4 text-2xl sm:text-3xl font-bold leading-tight">
        Customers say<br />About Us
      </h1>
      <p className="mb-10 text-xs leading-5">
        Trust is built through results. Here you can read what our clients say about their experience with our service. Their words reflect our commitment to quality and excellence.
      </p>
    </header>

    {/* Testimonial Wrapper with Overlap */}
    <div className="relative w-full h-[500px] flex justify-center items-start overflow-hidden">
    {/* First Testimonial */}
      <article
        className="p-6 bg-white rounded-xl shadow-md w-[260px] absolute z-10"
        style={{ top: "20px", left: "calc(50% - 180px)", transform: "rotate(8deg)" }}
      >
        <header className="flex gap-3 items-center mb-4">
          <div className="flex items-center justify-center w-10 h-10 font-bold bg-green-500 rounded-full text-white">
            O
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-zinc-800">Marvin McKinney</h2>
            <p className="text-sm text-stone-500">Project Manager</p>
          </div>
        </header>
        <blockquote className="text-sm leading-relaxed text-zinc-800">
          "Great service! My pool looks fantastic, and I trust the water is safe thanks to their expertise. Highly recommend!"
        </blockquote>
      </article>

      {/* Second Testimonial */}
<article
  className="p-6 bg-white rounded-xl shadow-md w-[300px] absolute z-0"
  style={{ top: "200px", left: "calc(100% - 300px)", transform: "rotate(-8deg)" }}
>
  <header className="flex gap-3 items-center mb-4">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/59d028035c64030c072b1d18f07438853103c7cb"
      className="object-cover w-10 h-10 rounded-full"
      alt="Profile"
    />
    <div className="flex flex-col">
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
      <h2 className="text-4xl font-bold tracking-tight leading-[48px] text-slate-900">
        Let’s level up your brand,<br />together
      </h2>
      <p className="mt-4 text-base leading-6 text-gray-500">
        You can reach us anytime via <span className="font-medium text-[#6941C6]">hi@untitledui.com</span>
      </p>
    </div>

    <form className="mt-10 w-full space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-3 text-sm border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
        />
      </div>

      {/* Experience */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Do you have previous experience in pool maintenance?
        </label>
        <div className="flex items-center px-4 py-3 border border-[#D0D5DD] rounded-lg shadow-sm bg-white">
          <input
            type="text"
            placeholder="Type"
            className="w-full text-sm outline-none bg-transparent"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4955cbd56d3ae8e38d75b0cf00fec870501a07a2?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
            className="w-4 h-4 ml-2"
            alt=""
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
        <input
          type="text"
          placeholder="Your Company"
          className="w-full px-4 py-3 text-sm border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="email@hosting.com"
          className="w-full px-4 py-3 text-sm border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Phone number</label>
        <div className="flex items-center px-4 py-3 border border-[#D0D5DD] rounded-lg shadow-sm bg-white">
          <span className="text-sm text-gray-900">US</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19a05e667b0aed46d40248ea2d71c3cd3611d63d?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
            className="w-5 h-5 mx-2"
            alt=""
          />
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="flex-1 text-sm text-gray-500 outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
        <textarea
          rows={4}
          placeholder="Write your message..."
          className="w-full px-4 py-3 text-sm border border-[#D0D5DD] rounded-lg shadow-sm outline-none resize-none"
        ></textarea>
      </div>

      {/* Services */}
      <div className="bg-slate-50 px-4 py-4 rounded-xl">
        <h3 className="text-sm font-bold text-slate-700 mb-4">Services</h3>
        <div className="flex flex-col space-y-3">
          {["Regular Maintenance", "Deep and Routine Cleaning", "Repair and Installation", "Content creation", "Pool System Automation", "Other"].map((service) => (
            <label key={service} className="flex items-center gap-3 text-xs font-bold text-slate-700">
              <input type="checkbox" className="w-4 h-4 rounded border border-[#D0D5DD]" />
              {service}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="w-full bg-[#6941C6] text-white text-sm font-semibold py-3 rounded-lg"
        >
          Get started
        </button>
      </div>
    </form>
  </div>
</section>


<section className="w-full bg-slate-900 px-4 py-10">
  <div className="w-full max-w-screen-sm mx-auto flex flex-col gap-8 rounded-2xl">

    <header className="text-white text-3xl font-bold leading-10">
      POOL QUALITY SOLUTION INC
    </header>

    <div className="flex flex-col gap-2.5 w-full">
      <div className="flex flex-col gap-2 w-full items-center">
        {/* Email */}
        <div className="flex gap-2 items-center">
          <svg className="w-5 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>
          <span className="text-xs leading-7 text-white">correo@hosting.com</span>
        </div>

        {/* Phone */}
        <div className="flex gap-2 items-center">
          <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.09 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75 12.05 12.05 0 0 0 .56 1.59 1 1 0 0 1-.23 1.09L7.21 7.21a16 16 0 0 0 6.58 6.58l1.78-1.78a1 1 0 0 1 1.09-.23 12.05 12.05 0 0 0 1.59.56 1 1 0 0 1 .75 1V21z" />
          </svg>
          <span className="text-xs leading-7 text-white">+1 (239) 380-0766</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-12 py-5">
        <Music2 className="text-white w-6 h-6" aria-label="TikTok" />
        <Facebook className="text-white w-6 h-6" aria-label="Facebook" />
        <Instagram className="text-white w-6 h-6" aria-label="Instagram" />
    </div>

      <hr className="w-full h-px bg-zinc-600" />

      <nav className="flex flex-wrap gap-6 justify-center">
        <span className="text-xs font-medium leading-6 text-white">Home</span>
        <span className="text-xs font-medium leading-6 text-white">Services</span>
        <span className="text-xs font-medium leading-6 text-white">About Us</span>
        <span className="text-xs font-medium leading-6 text-white">Contact</span>
      </nav>

      <div className="mt-5 text-sm leading-6 text-white">
        © Copyright 2025, All Rights Reserved
      </div>
    </div>
  </div>
</section>

</main>
  );
};

export default MobileBody;
