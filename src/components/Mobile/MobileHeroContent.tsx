import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SubscriptionCalculatorCard from '@/components/Mobile/SubscriptionCalculatorCard';
import MobileFooter from '@/components/Mobile/MobileFooter';
import { RefCallback } from 'react';

const services = [
  { title: 'Diagnostics & Troubleshooting', description: 'Identify and solve pool issues with our expert diagnostic services.' },
  { title: 'Pool Maintenance', description: 'Keep your pool pristine with regular chemical checks and debris removal.' },
  { title: 'Pool Cleaning', description: "Restore your pool's sparkle. We provide thorough one-time or regular cleaning, including brushing, vacuuming, and stain/algae treatment." },
  { title: 'Equipment Repair & Installation', description: 'We fix or install filters, pumps, heaters and more to keep your system efficient.' },
  { title: 'Pool Automation', description: 'Control your pool systems remotely with modern automation solutions.' },
  { title: 'Other', description: 'Have a special request? Let us tailor a solution just for you.' },
];

const videoSources = ['REEL1.mp4', 'REEL2.mp4', 'REEL3.mp4'];

const MobileHeroContent = () => {
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
            setActiveVideoIndex(index);
            videoRefs.current.forEach((video, i) => {
              if (video) {
                if (i === index) video.play();
                else video.pause();
              }
            });
          }
        });
      },
      {
        root: containerRef.current,
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

  return (
    <main>
      <section className="relative w-full min-h-[390px] bg-cover bg-center" style={{ backgroundImage: "url('/images/servicesHero.png')" }}>
        <div className="absolute top-0 w-full h-[127px] z-10">
          <img src="/svgs/vectorHeroServices.svg" alt="Decorative vector" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-20 pt-[110px] flex flex-col items-center">
          <div className="flex flex-col items-center gap-6 w-[288px] mx-auto text-center">
            <h1 className="text-[32px] font-bold text-black leading-[38px] tracking-[-1.127px] font-inter">
              {services[activeServiceIndex].title}
            </h1>
            <p className="text-[12px] font-semibold leading-[16.901px] text-[#2A2FA4] font-inter">
              {services[activeServiceIndex].description}
            </p>
            <div className="flex items-center justify-center gap-4">
              <button onClick={() => setActiveServiceIndex((prev) => (prev - 1 + services.length) % services.length)} className="bg-black/30 text-white w-8 h-8 rounded-full flex items-center justify-center">
                ←
              </button>
              <div className="bg-[#485AFF] rounded-3xl px-4 py-2 flex gap-2 justify-center">
                {services.map((_, index) => (
                  <button key={index} onClick={() => setActiveServiceIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === activeServiceIndex ? 'bg-white shadow-md' : 'bg-[#5000F3]'}`}></button>
                ))}
              </div>
              <button onClick={() => setActiveServiceIndex((prev) => (prev + 1) % services.length)} className="bg-black/30 text-white w-8 h-8 rounded-full flex items-center justify-center">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full overflow-x-auto scrollbar-none">
          <div className="flex gap-2 px-4 py-3 min-w-fit w-max">
            {services.map((service, index) => (
              <button key={index} ref={setTabRef(index)} onClick={() => setActiveServiceIndex(index)} className={`shrink-0 px-4 py-2 text-[10px] font-medium whitespace-nowrap transition-colors ${activeServiceIndex === index ? 'text-white bg-[#485AFF] rounded-md' : 'text-black'}`}>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 pt-10 pb-8 bg-[#F7FAFE] text-[#212939] text-[12px] leading-[20px]">
        <h2 className="text-[22px] font-bold text-[#3E57DA] text-center capitalize font-inter">The Pool Quality Cleaning Difference</h2>
        <div className="w-full mt-4">
          <Image src="/images/services_comparative.png" alt="Before" width={160} height={160} className="w-full rounded-md" />
        </div>
        <p className={`text-justify mb-4 text-[14px] text-[#0B0858] leading-[30px] font-[400] font-inter capitalize overflow-hidden text-ellipsis ${showFullText ? '' : 'line-clamp-[12]'}`}>
          Keeping your pool visually appealing is just the start. Our professional Pool Cleaning service ensures your water is not only sparkling clear but also healthy and safe for swimming, reflecting our commitment to meticulous care backed by scientific understanding. We go beyond a simple surface skim. Our comprehensive cleaning includes thoroughly brushing pool walls, steps, and waterlines to dislodge algae and buildup, meticulous vacuuming of the pool floor to remove settled debris, emptying skimmer and pump baskets to maintain proper flow, and ensuring overall cleanliness. <br /> <br />

Whether you need a one-time deep clean after a party or storm, require seasonal opening or closing services, or are dealing with the challenge of recovering a green pool, Pool Quality Solutions has the specialized tools and expertise required. Even during routine cleaning, our knowledge of water chemistry – driven by our founder's Chemical Engineering background – ensures we help maintain the delicate water balance, protecting both swimmers and your valuable pool equipment from potential issues caused by neglect. Let us handle the hard work with precision and care, so you can simply relax and enjoy your pristine, healthy pool environment...
        </p>
        <div className="flex justify-start mb-4">
          <button onClick={toggleText} className="w-[136px] px-[10px] py-[8px] bg-[#485AFF] text-white text-[12px] font-medium rounded-[8px] shadow-sm flex flex-col items-center justify-center gap-[10px]">
            {showFullText ? 'See less...' : 'See more...'}
          </button>
        </div>
        <div className="w-full mt-4">
          <Image src="/images/Services_comparative2.png" alt="Additional comparison" width={320} height={180} className="w-full rounded-md" />
        </div>
      </section>

      <section className="relative w-full flex justify-center pt-10 pb-16 overflow-hidden bg-[#f7fafe]">
        <SubscriptionCalculatorCard />
      </section>

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

        <div className="relative z-10 px-6">
          <div ref={containerRef} className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar gap-4 pb-4">
            {videoSources.map((src, index) => (
              <div key={index} className={`flex-shrink-0 snap-center transition-all duration-500 ${index === activeVideoIndex ? 'w-[220px] h-[400px] rounded-[32px]' : 'w-[180px] h-[340px] rounded-2xl opacity-70'} overflow-hidden bg-black`}>
               <video
                ref={(el: HTMLVideoElement | null) => {
                  videoRefs.current[index] = el;
                }}
                data-index={index}
                src={`/videos/${src}`}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                controls={false}
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
          <div className="flex justify-center mt-2 mb-12"> {/* <-- más espacio abajo con mb-6 */}
            <div className="flex items-center justify-center gap-[19.545px] w-[164px] px-[13.03px] py-[13.03px] rounded-[20px] bg-[#485AFF] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
              {videoSources.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveVideoIndex(i); // 🔁 actualiza el punto blanco
                    const video = videoRefs.current[i];
                    if (video) {
                      video.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                      setTimeout(() => {
                        video.muted = false;
                        video.play().catch(() => {}); // silencioso si no hay interacción previa
                      }, 300);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${i === activeVideoIndex ? 'bg-white' : 'bg-[#5000F3]'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-900 px-4 py-10">
        <MobileFooter />
      </section>
    </main>
  );
};

export default MobileHeroContent;
