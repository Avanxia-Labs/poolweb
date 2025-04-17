import React, { useEffect, useState } from "react";

export const Box = () => {
  const [label, setLabel] = useState("BEFORE");

  useEffect(() => {
    const video = document.getElementById("beforeAfterVideo") as HTMLVideoElement | null;
    if (!video) return;
  
    const switchLabels = () => {
      const time = video.currentTime;
  
      // Ajusta estos valores según la duración del video 9 video letra y 2letr avideo
      if (time >= 0 && time < 2.41) {
        setLabel("BEFORE");
      } else if (time >= 2.41 && time < 8) {
        setLabel("AFTER");
      }
    };
  
    video.addEventListener("timeupdate", switchLabels);
  
    return () => {
      video.removeEventListener("timeupdate", switchLabels);
    };
  }, []);
    return (
    <section className="relative w-full overflow-hidden">
      {/* Contenedor centrado del video */}
      <div className="relative w-full max-w-screen-sm mx-auto px-8 sm:px-16 z-10">
        <div className="relative w-full aspect-[280/191] rounded-t-[24px] overflow-hidden">
          {/* Video de fondo */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-t-[24px]">
            <video
              id="beforeAfterVideo"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                transform: "scaleX(1.8)",
                objectPosition: "center",
              }}
            >
              <source src="/videos/videopool.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="text-white text-center font-inter font-semibold leading-[40px] tracking-wider text-[clamp(28px,13vw,90px)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] blur-[2.0125px]">
              {label}
            </span>
          </div>
        </div>
      </div>

      {/* Ola superior nítida (fuera del contenedor) */}
      <div className="absolute bottom-0 left-0 w-screen h-[80px] z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-full object-cover"
          style={{
            transform: "scale(1.05)",
            clipPath: "path('M0,60 C150,0 180,100 256,60 C350,20 500,100 1500,60 L600,100 L0,100 Z')"
          }}
        >
          <source src="/videos/videovector1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Ola desenfocada */}
      <div
        className="absolute bottom-0 left-0 w-screen h-[100px] z-10 overflow-hidden blur-[2px]"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black 100%, transparent 100%)",
          maskImage: "linear-gradient(to top, black 100%, transparent 100%)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-full object-cover"
          style={{
            transform: "scale(1.05)",
            clipPath:
              "path('M0,55 C80,30 220,90 256,60 C384,10 384,110 1500,60 L512,100 L0,100 Z')",
          }}
        >
          <source src="/videos/videovector1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Box;
