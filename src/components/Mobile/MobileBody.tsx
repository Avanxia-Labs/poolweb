"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Frame } from "@/components/Mobile/Frame";
import { Box } from "./Box";
import MobileCard from "./MobileCard";

const services = [
    {
      icon: "/svgs/headphones.svg",
      title: "Support",
      description:
        "Scheduled service to keep your pool in top condition, anticipating and correcting issues before they become costly.",
    },
    {
      icon: "/svgs/charbar.svg",
      title: "Sales",
      description:
        "Our experts will guide you in choosing the right pool products and services tailored to your needs.",
    },
    {
      icon: "/svgs/headphones.svg",
      title: "Maintenance",
      description:
        "Regular checks and clean-ups to ensure your pool remains pristine and operates smoothly.",
    },
    {
      icon: "/svgs/charbar.svg",
      title: "Installation",
      description:
        "Professional setup of pool systems with precision and care to start you off right.",
    },
  ];
  
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
    <main className="flex flex-col w-full items-center gap-8 px-4 py-6 bg-[#f7fafe]">
      {/* Sección del título y estimación */}
      <Frame />
      <Box />
      <section className="w-full flex justify-center px-4 pt-10 pb-16">
  <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center text-center rounded-2xl bg-gradient-to-b from-[#4CF7FB] to-[#206680] px-4 pt-10 pb-16">
    <h1 className="text-[28px] sm:text-[32px] text-[#0F172A] font-foster leading-[40px] sm:leading-[48px] mb-2">
      DEEP
    </h1>
    <h2 className="text-[20px] sm:text-[24px] text-[#0F172A] font-bold leading-[26px] sm:leading-[32px] mb-6">
      Into our Services
    </h2>
    <button className="bg-[#485AFF] text-white text-xs sm:text-sm px-4 py-2 rounded mb-6 font-semibold">
      View All Services
    </button>
    <p className="text-white text-xs sm:text-sm mb-10 max-w-xs">
      We combine expertise with dedication to deliver exceptional pool
      services that exceed expectations.
    </p>

    {/* Carrusel de tarjetas */}
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory overflow-x-scroll no-scrollbar scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center px-2"
          >
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md">
              <MobileCard {...service} />
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
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

<section className="flex flex-col items-end px-16 max-w-[417px]">
      <div className="flex overflow-hidden relative gap-2.5 justify-center items-start px-2.5 py-24 bg-slate-50 min-h-[696px] shadow-[0px_3px_8px_rgba(0,0,0,0.25)]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8f4312c3839b331744b3618aa314ccfdc5d84e6?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
          alt="Pool background"
          className="object-contain absolute bottom-0 z-0 self-start aspect-[1.72] h-[547px] min-w-60 right-[-347px] w-[764px]"
        />
        <div className="flex z-0 flex-col my-auto min-w-60 w-[248px]">
          <header className="flex flex-col w-full text-center">
            <h1 className="text-2xl font-bold leading-10 text-slate-900">
              Get Your Instant Pool Service Estimate
            </h1>
            <p className="self-center mt-3 text-xs font-extrabold leading-7 text-indigo-500">
              Enter Your Pool Details Below
            </p>
          </header>

          <div className="flex overflow-hidden flex-col justify-center self-center py-8 mt-5 max-w-full rounded-3xl bg-slate-50 shadow-[0px_2px_5px_rgba(0,0,0,0.25)] w-[250px]">
            <div className="flex flex-col px-4">
              <h2 className="self-center text-xl font-bold leading-6 text-slate-900">
                Calculate Your Subscription Price
              </h2>
              <div className="mt-3 w-full min-h-[130px]">
                <div className="flex gap-2 items-center w-full text-xs font-bold leading-6 text-center">
                  <label
                    htmlFor="gallons"
                    className="self-stretch my-auto text-slate-900"
                  >
                    How many gallons is your pool?
                  </label>
                  <button className="self-stretch my-auto text-indigo-500">
                    Don't know?
                  </button>
                </div>
                <input
                  id="gallons"
                  type="text"
                  value={gallons}
                  onChange={(e) => setGallons(e.target.value)}
                  className="overflow-hidden gap-1 self-stretch px-4 py-2.5 mt-2.5 max-w-full text-sm leading-none text-black whitespace-nowrap bg-white rounded-md border border-gray-300 border-solid w-[223px]"
                />

                <div className="flex-1 mt-2.5 w-full">
                  <div className="flex-1 w-full">
                    <div className="flex flex-1 gap-10 items-center size-full">
                      <label className="flex gap-2 items-center self-stretch my-auto cursor-pointer">
                        <div className="self-stretch my-auto w-[15px]">
                          <div className="w-full">
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9d822ca79ee490d9a78474d45bc5baa4b7e7c8c?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
                              alt="Vacuuming icon"
                              className="object-contain rounded aspect-square w-[15px]"
                            />
                          </div>
                        </div>
                        <span className="self-stretch my-auto text-xs font-bold leading-6 text-slate-900">
                          Additional vacuuming
                        </span>
                      </label>
                      <span className="self-stretch my-auto text-xs font-bold leading-6 text-slate-900">
                        +5
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-10 items-center w-full">
                    <label className="flex gap-2 items-center self-stretch my-auto cursor-pointer">
                      <div className="self-stretch my-auto w-[15px]">
                        <div className="flex w-full rounded border border-blue-600 border-solid min-h-[15px]" />
                      </div>
                      <span className="self-stretch my-auto text-xs font-bold leading-6 text-slate-900">
                        Extra filter wash
                      </span>
                    </label>
                    <span className="self-stretch my-auto text-xs font-bold leading-6 text-slate-900">
                      +5
                    </span>
                  </div>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/28b5e33c3932e21a2282a031f0ecda738dcd6f28?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
                  alt="Divider"
                  className="object-contain mt-2.5 max-w-full aspect-[250] w-[226px]"
                />
              </div>

              <div className="flex flex-col items-start mt-3 w-full">
                <div className="flex flex-col max-w-full rounded-none w-[158px]">
                  <h3 className="self-start text-xs font-medium leading-6 text-slate-500">
                    ESTIMATED PRICE:
                    <br />
                  </h3>
                  <p className="mt-2 text-xl font-black leading-[53px] text-sky-950">
                    ${calculatePrice()} / MONTH
                  </p>
                </div>
                <button className="flex flex-col justify-center items-center px-2 py-2 mt-3.5 w-full text-xs font-extrabold leading-loose text-center bg-indigo-500 rounded text-slate-50">
                  Request Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative w-full max-w-xs mx-auto mt-16">
      {/* Fondo azul con corte diagonal */}
      <div className="absolute bottom-0 left-0 w-full h-3/5 bg-[#0F172A] -z-10 clip-diagonal" />

      {/* Imagen */}
      <div className="w-full flex justify-center mb-4">
        <Image
          src="/images/woman.png" // cambia por la ruta correcta
          alt="Yosbani Martinez"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Contenido textual sobre fondo */}
      <div className="px-6 pb-10 text-white bg-[#0F172A] rounded-t-[30px] z-10 relative">
        <h1 className="text-xl font-semibold leading-none">
          Yosbani Martinez
        </h1>
        <p className="text-sm font-medium leading-7 text-indigo-400">
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
          className="text-white font-extrabold underline mt-4 hover:text-indigo-300 transition-colors"
        >
          View Verified Credentials
        </button>
      </div>
    </section>

    <section className="flex flex-col pt-11 max-w-xs text-xs bg-indigo-500">
      <article className="flex flex-col self-start ml-5 min-h-[399px]">
        <h1 className="flex-1 text-3xl font-bold tracking-tighter leading-10 text-slate-50">
          Transform Your Pool Experience
        </h1>
        <p className="flex-1 mt-24 leading-5 text-white">
          We combine expertise with dedication to deliver exceptional pool services
          that exceed expectations. We combine expertise with dedication to deliver
          exceptional pool services that exceed expectations.
          <br />
          <br />
          exceptional pool services that exceed expectations. We combine expertise
          with dedication to deliver exceptional pool services that exceed
          expectations.
        </p>
        <button
          className="flex flex-col justify-center items-center self-start px-2.5 py-2 mt-24 font-semibold leading-7 text-center text-indigo-500 rounded-lg bg-slate-50"
          onClick={() => {
            // Handle click event
            console.log("CTA clicked");
          }}
        >
          <span className="gap-2.5 self-stretch">
            GET YOUR FREE ESTIMATE
          </span>
        </button>
      </article>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/151d8eb00f6c0d328591fd2b0f8df155a97cdd32?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
        alt="Pool experience showcase"
        className="object-contain z-10 w-full aspect-[0.79]"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6fbb42408f21620f27257d5e801fecc395c5ac?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
        alt="Pool services highlight"
        className="object-contain w-full aspect-[1.93]"
      />
    </section>


    <section className="w-full flex justify-center px-4 py-10">
  <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-8 rounded-2xl bg-indigo-900 px-4 py-10">
    <header className="text-center">
      <h1 className="mb-5 text-2xl sm:text-3xl font-bold leading-tight text-slate-50">
        Customers say
        <br />
        About Us
      </h1>
      <p className="mb-10 text-xs leading-5 text-slate-50">
        Trust is built through results. Here you can read what our clients say
        about their experience with our service. Their words reflect our
        commitment to quality and excellence.
      </p>
    </header>

    {/* First Testimonial */}
    <article
      className="p-6 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-white"
      style={{ transform: "rotate(-2.578deg)" }}
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
        "Great service! My pool looks fantastic, and I trust the water is
        safe thanks to their expertise. Highly recommend!"
      </blockquote>
    </article>

    {/* Second Testimonial */}
    <article
      className="p-6 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-white"
      style={{ transform: "rotate(5.869deg)" }}
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
        Geo and his team are awesome. They handle everything in a timely
        manner and are always a great price! No matter where I move in
        Naples, they're coming with me! Highly recommend!
      </blockquote>
    </article>
  </div>
</section>

    <section className="pt-16 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex items-start px-4 w-full">
        <div className="flex-1 shrink w-full basis-0 min-w-60">
          <div className="w-full">
            <h2 className="text-4xl font-semibold tracking-tighter leading-10 text-gray-900">
              Let's level up your brand, together
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-500">
              You can reach us anytime via{" "}
              <span style={{ fontWeight: 500, color: "rgba(105,65,198,1)" }}>
                hi@untitledui.com
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-12 w-full">
        <form className="w-full">
          {/* Name Input */}
          <div className="w-full">
            <label className="text-sm font-medium leading-none text-slate-700">
              Name
            </label>
            <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-xs leading-6 text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD]">
              <input
                type="text"
                placeholder="Your name"
                className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Experience Input */}
          <div className="mt-6 w-full">
            <label className="text-sm font-medium leading-loose text-slate-700">
              Do you have previous experience in pool <br />
              maintenance?
            </label>
            <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-xs leading-6 text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD]">
              <input
                type="text"
                placeholder="Type"
                className="flex-1 shrink gap-2 self-stretch my-auto basis-0 outline-none bg-transparent"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4955cbd56d3ae8e38d75b0cf00fec870501a07a2?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[2.28]"
                alt=""
              />
            </div>
          </div>

          {/* Company Input */}
          <div className="mt-6 w-full">
            <label className="text-sm font-medium leading-none text-slate-700">
              Company
            </label>
            <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-xs leading-6 text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD]">
              <input
                type="text"
                placeholder="Your Company"
                className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mt-6 w-full">
            <label className="text-sm font-medium leading-none text-slate-700">
              Email
            </label>
            <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-xs leading-6 text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD]">
              <input
                type="email"
                placeholder="email@hosting.com"
                className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Phone Input */}
          <div className="mt-6 w-full">
            <label className="text-sm font-medium leading-none text-slate-700">
              Phone number
            </label>
            <div className="flex overflow-hidden mt-1.5 w-full text-xs leading-6 bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD]">
              <div className="flex overflow-hidden justify-between items-center py-3 pr-3 pl-4 h-full text-gray-900 whitespace-nowrap">
                <span className="self-stretch my-auto">US</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/19a05e667b0aed46d40248ea2d71c3cd3611d63d?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  alt=""
                />
              </div>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="flex-1 shrink gap-2 self-start py-3 pr-4 text-gray-500 basis-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="mt-6 w-full text-sm font-medium leading-none text-slate-700">
            <label>How can we help?</label>
            <div className="flex flex-1 gap-2 py-2.5 mt-1.5 w-full bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD] min-h-32">
              <textarea className="w-full h-full px-4 outline-none resize-none" />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-8 max-w-full w-[175px]">
            <div className="max-w-full w-[113px]">
              <div className="text-sm font-bold leading-none text-slate-700">
                Services
              </div>
              <div className="flex gap-10 items-start mt-4 w-full">
                <div className="w-[189px]">
                  {[
                    "Regular Maintenance",
                    "Deep and Routine Cleaning",
                    "Repair and Installation",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex gap-3 items-center mt-4 first:mt-0 w-full"
                    >
                      <div className="flex justify-center items-center self-stretch my-auto w-[18px]">
                        <div className="flex self-stretch my-auto bg-white rounded-md border border-solid aspect-[1/1] border-[#D0D5DD] h-[18px] min-h-[18px] w-[18px]" />
                      </div>
                      <div className="self-stretch my-auto text-xs font-bold leading-6 text-slate-700">
                        {service}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 w-full">
              {["Content creation", "Pool System Automation", "Other"].map(
                (service) => (
                  <div
                    key={service}
                    className="flex gap-3 items-center mt-4 first:mt-0 w-full"
                  >
                    <div className="flex justify-center items-center self-stretch my-auto w-[18px]">
                      <div className="flex self-stretch my-auto bg-white rounded-md border border-solid aspect-[1/1] border-[#D0D5DD] h-[18px] min-h-[18px] w-[18px]" />
                    </div>
                    <div className="self-stretch my-auto text-xs font-bold leading-6 text-slate-700">
                      {service}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 w-full">
            <button
              type="submit"
              className="flex w-full rounded-lg min-h-[44px] bg-[#6941C6] text-white justify-center items-center px-4 py-2 text-sm font-semibold"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>

    <section className="w-full flex justify-center px-4 py-10">
  <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-8 rounded-2xl bg-slate-900 px-4 py-10">
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
        <span className="text-white text-2xl">TikTok</span>
        <span className="text-white text-2xl">Facebook</span>
        <span className="text-white text-2xl">Instagram</span>
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
