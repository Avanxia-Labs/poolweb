"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import MobileFooter from '@/components/Mobile/MobileFooter';
import { useRouter } from 'next/navigation';

const MobileAboutContent = () => {
  const router = useRouter();

  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(cardRefs.length).fill(false)
  );
  
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
  
    cardRefs.forEach((ref, i) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[i] = entry.isIntersecting;
              return updated;
            });
          },
          {
            threshold: 1.0,
            rootMargin: '-110px 0px -110px 0px',
          }
        );
  
        observer.observe(ref.current);
        observers.push(observer);
      }
    });
  
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const gradientStyle = {
    background:
      "linear-gradient(205deg, rgba(255, 227, 174, 1) 7.53%, rgba(175, 239, 239, 1) 84.19%)",
  };

  const cardData = [
    {
      title: "Our Vision",
      content:
        "To become the most trusted pool maintenance company in the region, known for our commitment to excellence, innovation, and outstanding customer care.",
    },
    {
      title: "Our Mission",
      content:
        "Provide reliable, high-quality pool maintenance services that ensure clean, safe, and enjoyable swimming environments for all our clients.",
    },
    {
      title: "Our History",
      content:
        "Founded by Chemical Engineer Yosbani Martinez, Pool Quality Solutions brings scientific precision and certified experience to pool care, ensuring safe, reliable, and high-quality service.",
    },
  ];
  return (
  <main>

<section className="w-full bg-white px-4 py-10 text-[#0F172A] text-sm leading-relaxed">
  {/* Imagen principal */}
  <div className="w-full mb-6">
    <img
      src="/images/about_image.png"
      alt="About Pool Quality"
      className="w-full rounded-md"
    />
  </div>

  {/* Contenedor con sombra del mismo tamaño */}
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-[640px] mx-auto">
    {/* Título grande */}
    <h3 className="text-[clamp(22px,6vw,28px)] leading-tight font-bold text-[#0F172A] font-inter mb-3">
      Let's work <br /> together!
    </h3>

    {/* Subtítulo azul */}
    <h3 className="text-[clamp(20px,5.5vw,26px)] font-bold text-[#3E57DA] capitalize leading-snug font-inter mb-3">
      The Pool Quality <br /> Cleaning Difference
    </h3>

    {/* Párrafo descriptivo */}
    <p className="text-[clamp(12px,3vw,16px)] text-[#0F172A] mb-6 leading-relaxed">
      We’re here to help you enjoy your pool again. <br />
      Complete the form and we’ll be in touch <br />
      within <br />
      the next <strong>24 hours</strong>.
    </p>

    {/* Métricas responsivas */}
    <div className="flex flex-col sm:flex-row sm:justify-between text-left gap-6 mb-8">
      {/* <div>
        <p className="text-[clamp(22px,6vw,28px)] font-bold text-[#1D7DED]">750+</p>
        <p className="text-[clamp(12px,3.5vw,15px)] text-[#344054] leading-snug font-medium">
          High-Quality <br />
          Pools <br /> Constructed
        </p>
      </div> */}
      <div>
        <p className="text-[clamp(22px,6vw,28px)] font-bold text-[#1D7DED]">10+</p>
        <p className="text-[clamp(12px,3.5vw,15px)] text-[#344054] leading-snug font-medium">
          Years Providing <br />
          Quality Pool <br /> Services
        </p>
      </div>
    </div>

    {/* Botón */}
    <div className="w-full flex justify-start">
      <button
        onClick={() => router.push('/contact')}
        className="bg-[#485AFF] text-white font-bold text-[clamp(11px,2.5vw,13px)] rounded-[8px] px-[20px] py-[12px] border border-[#7F56D9] shadow-sm"
      >
        GET YOUR FREE ESTIMATE
      </button>
    </div>
  </div>
</section>


<section className="bg-[#0F172A] w-full py-10 text-white text-[13px] leading-[20px] flex flex-col items-center">
  <div className="w-full px-4">
    <div className="w-full max-w-[640px] mx-auto">
      {/* Título y Subtítulo */}
      <div>
        <h2 className="text-[clamp(14px,4vw,16px)] font-bold">Yosbani Martinez</h2>
        <p className="text-[clamp(11px,3vw,13px)] text-[#6F91FF] font-semibold">Founder & Chemical Engineer</p>
      </div>

      {/* Descripción principal */}
      <p className="font-inter text-[clamp(14px,4vw,15.8px)] font-normal leading-[1.6] mt-4">
        I founded Pool Quality Solutions to deliver pool care with true scientific rigor. As a Chemical Engineer,
        with a U.S.-equivalent degree evaluated by Josef Silny & Associates, I know water chemistry is not a guess—
        it’s a science. A clean-looking pool isn’t enough.
      </p>

      <p className="font-inter text-[clamp(14px,4vw,15.8px)] font-normal leading-[1.6] mt-4">
        It must be chemically balanced, safe, and healthy for everyone who uses it. My background in industrial
        process control, quality assurance, and field certifications allows me to apply this knowledge consistently,
        offering services that are precise, trustworthy, and grounded in real expertise.
      </p>

      {/* Imagen centrada */}
      <div className="w-full mt-6">
        <img
          src="/images/yosbani.png"
          alt="Yosbani Martinez"
          className="w-full rounded-md object-cover"
        />
      </div>

      {/* Texto complementario */}
      <p className="font-inter text-[clamp(14px,4vw,15.8px)] font-normal leading-[1.6] mt-4">
        With a background in water treatment and chemical safety, I founded Pool Quality Solutions to bring scientific
        precision to pool care. As a Chemical Engineer with a U.S.-equivalent degree, I understand that proper water
        chemistry isn’t optional—it’s essential for the health and safety of your loved ones. My mission is to elevate
        industry standards through data-backed practices and real relationships. I personally follow up on many of our
        projects because trust is built not only with results, but with consistency and care.
      </p>

      {/* Credenciales */}
      <div className="bg-[#485AFF] text-white text-center rounded-[10px] flex flex-col justify-center items-center gap-[10px] h-[162px] px-[10px] py-[10px] w-full mt-10">
        <p className="text-[clamp(16px,5vw,20px)] font-bold leading-[1.6] font-inter">
          Professional Credentials
        </p>

        {/* Icono */}
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
          <path d="M26.246 8.98809C24.936 9.52809 23.6959 10.0281 22.476 10.5581C20.6959 11.3281 18.926 12.1181 17.156 12.9181C15.946 13.4681 14.7059 13.5981 13.466 13.0581C9.20595 11.1981 4.93595 9.32809 0.68595 7.42809C0.38595 7.28809 -0.0440499 6.83809 0.00595014 6.67809C0.11595 6.34809 0.46595 5.99809 0.80595 5.83809C3.69595 4.52809 6.59595 3.24809 9.49595 1.97809C10.726 1.43809 11.966 0.928087 13.1959 0.398087C14.3459 -0.101913 15.496 -0.151913 16.666 0.368087C20.866 2.20809 25.076 4.02809 29.266 5.87809C30.216 6.29809 30.256 7.09809 29.296 7.46809C28.026 7.94809 27.7859 8.83809 27.806 9.99809C27.826 11.4881 27.756 12.9881 27.826 14.4781C27.856 15.0881 28.1259 15.6881 28.306 16.2781C28.3659 16.4881 28.596 16.7481 28.536 16.8881C27.696 18.9081 29.306 20.5081 29.416 22.3581C29.416 22.4281 29.466 22.4981 29.486 22.5681C29.776 23.8881 29.396 24.3881 28.056 24.4081C27.426 24.4181 26.7859 24.4281 26.146 24.4081C25.006 24.3781 24.606 23.8781 24.856 22.7481C25.096 21.6581 25.3659 20.5681 25.726 19.5081C25.996 18.7081 26.436 17.9781 25.866 17.1281C25.766 16.9781 25.896 16.6181 25.986 16.3881C26.646 14.8581 26.846 10.7481 26.246 8.98809Z" fill="white"/>
          <path d="M6.4859 11.5781C8.6859 12.5181 10.5559 13.2581 12.3659 14.1181C14.1459 14.9581 15.8559 14.9581 17.6359 14.1181C19.1159 13.4181 20.6359 12.8081 22.1459 12.1681C22.5059 12.0181 22.8959 11.9081 23.3659 11.7481C23.3659 13.6281 23.5059 15.3781 23.2959 17.0881C23.2159 17.7181 22.3859 18.4881 21.7159 18.7481C20.4159 19.2581 19.0159 19.5681 17.6259 19.7581C14.8659 20.1281 12.1159 20.0081 9.4259 19.2281C7.0059 18.5281 6.4959 17.8381 6.4959 15.3381C6.4759 14.1981 6.4859 13.0481 6.4859 11.5781Z" fill="white"/>
        </svg>

        <p className="text-[clamp(11px,3vw,12px)] font-medium leading-[1.6] font-inter underline underline-offset-2">
          Yosbani Martinez – Chemical Engineer
        </p>
        <p className="text-[clamp(11px,3vw,12px)] font-medium leading-[1.6] font-inter">
          Bachelor of Science in <span className="font-bold">Chemical Engineering</span> (U.S.-equivalent)
        </p>
      </div>
    </div>
  </div>
</section>



<section className="w-full bg-[#0F172A] px-4 py-10 flex flex-col gap-6 text-white text-[13px] leading-[20px]">
  {/* Contenedor de imagen con texto encima */}
  <div className="w-full relative rounded-xl overflow-hidden">
    {/* Imagen de fondo sin altura fija */}
    <img
      src="/images/about_image2.png"
      alt="About Start"
      className="w-full object-cover"
    />

    {/* Texto encima de la imagen, alineado arriba */}
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-start px-4 py-6 rounded-xl">
      <h2 className="text-lg font-bold mb-2">Let’s get started together</h2>
      <p className="text-white text-[13px] leading-[20px]">
        We offer reliable and professional pool maintenance to keep your water clean, safe, and
        crystal clear. Whether for homes or businesses, we take care of your pool — so you can just enjoy it.
      </p>
    </div>
  </div>

  <div className="flex flex-col gap-6">
      {cardData.map((card, i) => (
        <div
          key={i}
          ref={cardRefs[i]}
          className="relative  bg-white rounded-[15px] h-[170px] p-[10px] text-[#0F172A] flex flex-col items-start gap-[10px] overflow-hidden"
        >
          {/* Blob superior izquierdo */}
          <div
            className={`absolute w-[200px] h-[200px] left-[-100px] top-[-100px] rounded-full blur-[20px] transition-all duration-700 ease-out z-0 ${
              visibleCards[i] ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={gradientStyle}
          />

          {/* Blob inferior derecho */}
          <div
            className={`absolute w-[200px] h-[200px] right-[-80px] bottom-[-80px] rounded-full blur-[20px] transition-all duration-700 ease-out z-0 ${
              visibleCards[i] ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={gradientStyle}
          />

                {/* Contenido */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-[10px] h-[30px] px-[16px] py-0 bg-[#485AFF] text-white text-[12px] font-bold rounded-[5px]">
              {card.title}
            </span>
            <p className="text-[13px] leading-[20px] mt-2">
              {card.content}
            </p>
          </div>
        </div>
      ))}
    </div>
</section>



  <section className="w-full bg-[#F7FAFE] px-4 py-10 text-[#0F172A] text-[13px] leading-[20px] flex flex-col gap-6">
    {/* Encabezado y texto introductorio */}
    <div>
      <h2 className="text-lg font-bold mb-2">Sparkling Pools, <br />Worry-Free Service</h2>
      <p>
        Our expert team takes care of every detail—so you don’t have to. From deep cleaning and precise chemical balancing to filter maintenance and equipment checks, we ensure your pool is always ready for you. Whether it’s for residential weekends with family, or impressing your guests, we make sure your pool stays sparkling and hassle-free. Relax, dive in, and leave the work to us.
      </p>
    </div>

    {/* Tarjetas de servicios */}
    <div className="flex flex-col gap-3">
      <div className="bg-white rounded-xl p-4 shadow text-[13px] leading-5">
        <ul className="list-disc list-inside space-y-1">
          <li>Weekly or one-time service</li>
          <li>Residential and commercial pools</li>
          <li>Eco-friendly cleaning products</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-4 shadow text-[13px] leading-5">
        <ul className="list-disc list-inside space-y-1">
          <li>Filter and pump maintenance</li>
          <li>Fast and professional service</li>
          <li>Personalized service</li>
        </ul>
      </div>
    </div>

    {/* Imagen única SVG alineada al centro */}
    <div className="w-full flex justify-center mt-6">
      <img
        src="/svgs/about_svg.svg"
        alt="About Illustration"
        className="w-full max-w-[320px] rounded-[20px]"
      />
    </div>

 {/* Destacado exacto según Figma con 10+ arriba y texto debajo alineados a la izquierda */}
<div className="flex flex-col items-center w-full">
  <div className="flex flex-col justify-center w-[167px] h-[48px] px-[18px] bg-[#485AFF] rounded-[10px] text-white">
    <span className="text-[20px] font-extrabold leading-none">10+</span>
    <span className="text-[12px] font-semibold leading-none -mt-[2px]">Years of experience</span>
  </div>
</div>




  </section>





  <section className="w-full bg-slate-900 px-4 py-10">
        <MobileFooter />
  </section>


  </main>

  );
};

export default MobileAboutContent;
