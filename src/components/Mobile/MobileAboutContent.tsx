import React from "react";
import Image from "next/image";
import SubscriptionCalculatorCard from '@/components/Mobile/SubscriptionCalculatorCard';
import MobileFooter from '@/components/Mobile/MobileFooter';

const MobileAboutContent = () => {
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

  {/* Título grande */}
  <h2 className="text-2xl font-bold leading-7 mb-2">
    Let's work <br /> together!
  </h2>

  {/* Subtítulo azul */}
  <h3 className="text-[16px] font-bold text-[#485AFF] leading-snug mb-4">
    The Pool Quality Cleaning <br /> Difference
  </h3>

  {/* Párrafo descriptivo */}
  <p className="text-xs text-[#0F172A] mb-6">
    We’re here to help you enjoy your pool again. Complete the form and we’ll be in touch within
    the next <strong>24 hours</strong>.
  </p>

  {/* Métricas */}
  <div className="flex justify-between text-left mb-8">
    <div>
      <p className="text-xl font-bold text-[#0F172A]">30+</p>
      <p className="text-[11px]">Years Providing <br /> Quality Pool Services</p>
    </div>
    <div>
      <p className="text-xl font-bold text-[#0F172A]">750+</p>
      <p className="text-[11px]">High-Quality <br /> Pools Constructed</p>
    </div>
  </div>

  {/* Botón */}
  <div className="w-full flex justify-center">
    <button className="bg-[#485AFF] text-white font-semibold text-xs rounded-md px-6 py-3">
      GET YOUR FREE ESTIMATE
    </button>
  </div>
</section>





<section className="bg-[#0F172A] w-full px-4 py-10 text-white text-[13px] leading-[20px] flex flex-col gap-6">
  {/* Título y Subtítulo */}
  <div>
    <h2 className="text-lg font-bold">Yosbani Martinez</h2>
    <p className="text-xs text-[#6F91FF] font-semibold">Founder & Chemical Engineer</p>
  </div>

  {/* Descripción principal */}
  <div className="space-y-4">
    <p>
      I founded Pool Quality Solutions to deliver pool care with true scientific rigor. As a Chemical Engineer, with a U.S.-equivalent degree evaluated by Josef Silny & Associates, I know water chemistry is not a guess — it’s a science. A clean-looking pool isn’t enough.
    </p>
    <p>
      It must be chemically balanced, safe, and healthy for everyone who uses it. My background in industrial process control, quality assurance, and field certifications allows me to apply this knowledge consistently, offering services that are precise, trustworthy, and grounded in real expertise.
    </p>
  </div>

  {/* Imagen */}
  <div className="w-full">
    <img
      src="/images/yosbani.png"
      alt="Yosbani Martinez"
      className="w-full rounded-md object-cover"
    />
  </div>

  {/* Texto complementario */}
  <p className="text-white">
    With a background in water treatment and chemical safety, I founded Pool Quality Solutions to bring scientific precision to pool care. As a Chemical Engineer with a U.S.-equivalent degree, I understand the risks of water chemistry gone by potential—it’s essential for the health and safety of your loved ones. My mission is to create industry standards through data-backed practices and real relationships. I personally follow up on your results, not because trust is built with flashy suits, but with consistency and care.
  </p>

  {/* Credenciales */}
  <div className="bg-[#485AFF] text-white text-center rounded-xl px-4 py-4 text-xs font-medium">
    <p className="font-semibold mb-2">Professional Credentials</p>
    <p className="underline underline-offset-2">Yosbani Martinez – Chemical Engineer</p>
    <p>Bachelor of Science in Chemical Engineering (U.S.-equivalent)</p>
  </div>
</section>

<section className="w-full bg-[#0F172A] px-4 py-10 flex flex-col gap-6 text-white text-[13px] leading-[20px]">
  {/* Imagen con título */}
  <div className="w-full rounded-xl overflow-hidden">
    <img
      src="/images/about_image2.png"
      alt="About Start"
      className="w-full object-cover"
    />
  </div>

  {/* Texto principal */}
  <div>
    <h2 className="text-lg font-bold mb-2">Let’s get started together</h2>
    <p className="text-white">
      We offer reliable and professional pool maintenance to keep your water clean, safe, and
      crystal clear. Whether for homes or businesses, we take care of your pool — so you can just enjoy it.
    </p>
  </div>

  {/* Tarjeta 1: Our Vision */}
  <div className="bg-white rounded-xl p-4 text-[#0F172A]">
    <span className="inline-block bg-[#485AFF] text-white text-[12px] font-bold px-3 py-1 rounded mb-3">
      Our Vision
    </span>
    <p>
      To become the most trusted pool maintenance company in the region, known for our commitment to excellence, innovation, and outstanding customer care.
    </p>
  </div>

  {/* Tarjeta 2: Our Mission */}
  <div className="bg-white rounded-xl p-4 text-[#0F172A]">
    <span className="inline-block bg-[#485AFF] text-white text-[12px] font-bold px-3 py-1 rounded mb-3">
      Our Mission
    </span>
    <p>
      Provide reliable, high-quality pool maintenance services that ensure clean, safe, and enjoyable swimming environments for all our clients.
    </p>
  </div>

  {/* Tarjeta 3: Our History */}
  <div className="bg-white rounded-xl p-4 text-[#0F172A]">
    <span className="inline-block bg-[#485AFF] text-white text-[12px] font-bold px-3 py-1 rounded mb-3">
      Our History
    </span>
    <p>
      Founded by Chemical Engineer Yosbani Martinez, Pool Quality Solutions brings scientific precision and certified experience to pool care, ensuring safe, reliable, and high-quality service.
    </p>
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

  {/* Imágenes comparativas */}
  <div className="flex justify-between gap-2">
    <img
      src="/images/about_image3.png"
      alt="Pool Before"
      className="w-1/2 rounded-lg object-cover"
    />
    <img
      src="/images/about_image4.png"
      alt="Pool After"
      className="w-1/2 rounded-lg object-cover"
    />
  </div>

  {/* Destacado */}
  <div className="bg-[#485AFF] text-white text-center font-bold text-[13px] rounded-xl px-4 py-2 w-fit self-center">
    30+ <br /> <span className="font-medium text-xs">Years of experience</span>
  </div>
</section>





    <section className="w-full bg-slate-900 px-4 py-10">
        <MobileFooter />
        </section>


  </main>

  );
};

export default MobileAboutContent;
