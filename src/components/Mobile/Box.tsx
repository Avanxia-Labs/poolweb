import React from "react";

export const Box = () => {
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
      className: "absolute top-2 left-0 w-80 h-7 z-10 overflow-hidden",
      transform: "scale(1)",
    },
  ];

  return (
    <div className="w-full max-w-screen-sm mx-auto px-4">
    <div className="relative w-full aspect-[280/191] rounded-t-[24px] overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-t-[24px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{
          transform: 'scaleX(1.8)', // estira horizontalmente sin cortar esquinas
          objectPosition: 'center',
        }}
      >
        <source src="/videos/videopool.mp4" type="video/mp4" />
      </video>
    </div>


  
      {/* Texto centrado */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <span className="font-bold text-white text-[70px] sm:text-[50px] blur-[2px] leading-none tracking-wider">
          BEFORE
        </span>
      </div>
  
      {/* Capas de vectores */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] z-30 pointer-events-none">
        {vectorLayers.map((layer, index) => (
          <div className={layer.className} key={index}>
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
  
            <img
              src="/svgs/vector1.svg"
              alt={`Vector Layer ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover z-40 pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Box;
