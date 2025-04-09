import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const Box = () => {
  // Configuración para cada vector animado con video
  const vectorLayers = [
    {
      className:
        "absolute top-0 left-[86px] w-[234px] h-8 blur-[1.9px] z-30 overflow-hidden",
      transform: "translateX(-10px) scale(1.05)",
    },
    {
      className:
        "absolute top-[5px] left-0 w-80 h-[35px] blur-[1.59px] z-20 overflow-hidden",
      transform: "translateX(10px) scale(1.1)",
    },
    {
      className:
        "absolute top-2 left-0 w-80 h-7 z-10 overflow-hidden",
      transform: "scale(1)",
    },
  ];

  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
      <Card className="w-full h-auto bg-transparent shadow-none">
        <CardContent className="p-0">
          <div className="relative w-full aspect-[280/191] rounded-t-[24px] overflow-hidden">
            {/* Video como fondo */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover bg-[#0F172A]"
            >
              <source src="/videos/videopool.mp4" type="video/mp4" />
            </video>

            {/* Texto centrado */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="font-bold text-white text-[40px] sm:text-[50px] blur-[2px] leading-none tracking-wider">
                BEFORE
              </span>
            </div>

            {/* Capas de vectores con el video detrás */}
            <div className="absolute bottom-0 left-0 w-full h-[60px] z-30 pointer-events-none">
              {vectorLayers.map((layer, index) => (
                <div className={layer.className} key={index}>
                  {/* Video de agua con efecto */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ transform: layer.transform }}
                  >
                    <source src="/videos/videovector1.mp4" type="video/mp4" />
                  </video>

                  {/* Vector encima del video */}
                  <img
                    src="/vector1.png"
                    alt={`Vector Layer ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover z-40 pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Box;
