// "use client";
// import React, { useState, useRef, useEffect } from 'react';

// const Section3 = () => {
//     const [currentSlide, setCurrentSlide] = useState(1);
//     const [isMuted, setIsMuted] = useState(true);
//     //const videoRefs = useRef([]);
//     const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);


//     // Videos de ejemplo
//     const videos = [
//         "/videos/REEL1.mp4",
//         "/videos/REEL2.mp4",
//         "/videos/REEL3.mp4"
//     ];

//     useEffect(() => {
//         // Pausa todos los videos
//         videoRefs.current.forEach((video, index) => {
//             if (video) {
//                 if (index === currentSlide) {
//                     video.play().catch(err => console.log("Reproducción automática bloqueada"));
//                 } else {
//                     video.pause();
//                 }
//             }
//         });
//     }, [currentSlide]);

//     const handleDotClick = (index: React.SetStateAction<number>) => {
//         setCurrentSlide(index);
//     };

//     const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.stopPropagation();
//         setIsMuted(!isMuted);
//         videoRefs.current.forEach(video => {
//           if (video) {
//             video.muted = !isMuted;
//           }
//         });
//       };
      

//     const getVisibleVideos = () => {
//         const prev = (currentSlide - 1 + videos.length) % videos.length;
//         const current = currentSlide;
//         const next = (currentSlide + 1) % videos.length;
//         return [prev, current, next];
//     };

//     return (
//         <section className="flex flex-col items-center w-full max-w-[1920px] mx-auto bg-[url(/images/backgroundServicess.png)] bg-cover bg-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[166px] pt-16 sm:pt-20 lg:pt-[119px] pb-16 sm:pb-20 lg:pb-[119px]">
//             {/* Texto superior */}
//             <div className="relative w-full flex flex-col items-center mb-8 sm:mb-12 md:mb-16 lg:mb-[79px]">
//                 <h1 className="text-[#F5F9FF] text-center font-inter text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[86px] tracking-tight md:tracking-[-2px] lg:tracking-[-4px]">
//                     Connect With Us Online
//                 </h1>
//                 <p className="w-full max-w-[594px] text-center text-white font-inter text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-normal md:leading-[32px] lg:leading-[40px] mt-4 md:mt-6">
//                     Check out our latest videos showcasing pristine pools, helpful advice, and the science behind sparkling water. Connect with us!
//                 </p>
//             </div>

//             {/* Botones de redes sociales */}
//             <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-[24px] w-full max-w-[414px] mb-8 sm:mb-12 md:mb-16 lg:mb-[79px]">
//                 <SocialMediaButton icon="/svgs/tiktok.svg" name="TikTok" />
//                 <SocialMediaButton icon="/svgs/instagram1.svg" name="Instagram" />
//                 <SocialMediaButton icon="/svgs/facebook.svg" name="Facebook" />
//             </div>

//             {/* Carrusel de videos */}
//             <div className="w-full">
//                 <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-[20px]">
//                     {getVisibleVideos().map((videoIndex, index) => {
//                         const isCurrent = index === 1;
//                         const isSide = !isCurrent;

//                         return (
//                             <div
//                                 key={videoIndex}
//                                 className={`
//                   relative overflow-hidden rounded-2xl transition-all duration-300 
//                   ${isCurrent ? 'w-full sm:w-[350px] md:w-[380px] lg:w-[414px] h-[350px] sm:h-[400px] md:h-[500px] lg:h-[621px]' : 'hidden sm:block w-[150px] sm:w-[200px] md:w-[260px] lg:w-[311px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[466px]'}
//                 `}
//                             >
//                                 <video
//                                     //ref={el => videoRefs.current[videoIndex] = el}
//                                     ref={el => { videoRefs.current[videoIndex] = el; }}
//                                     className="w-full h-full object-cover"
//                                     src={videos[videoIndex]}
//                                     loop
//                                     muted={isMuted}
//                                     playsInline
//                                 />
//                                 <button
//                                     onClick={toggleMute}
//                                     className="absolute bottom-4 right-4 bg-black bg-opacity-60 rounded-full p-2 text-white"
//                                     aria-label={isMuted ? "Unmute video" : "Mute video"}
//                                 >
//                                     {isMuted ? (
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
//                                             <line x1="23" y1="9" x2="17" y2="15"></line>
//                                             <line x1="17" y1="9" x2="23" y2="15"></line>
//                                         </svg>
//                                     ) : (
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
//                                             <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
//                                             <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
//                                         </svg>
//                                     )}
//                                 </button>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Puntos de navegación */}
//                 <div className="flex justify-center mt-8 sm:mt-10">
//                     <div className="flex gap-4 bg-indigo-500 bg-opacity-90 p-3 rounded-full shadow-lg">
//                         {videos.map((_, index) => (
//                             <button
//                                 key={index}
//                                 className={`rounded-full w-2 h-2 md:w-2.5 md:h-2.5 transition-all duration-200 ${index === currentSlide ? 'bg-white' : 'bg-[#5000F3]'
//                                     }`}
//                                 onClick={() => handleDotClick(index)}
//                                 aria-label={`Go to slide ${index + 1}`}
//                                 aria-current={index === currentSlide ? "true" : "false"}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // Componente para los botones de redes sociales

// type SocialMediaButtonProps = {
//   icon: string;
//   name: string;
// };

// const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ icon, name }) => {
//     return (
//         <button
//             className="flex gap-2 justify-center items-center py-2 px-3 sm:py-3 sm:px-4 rounded-md bg-slate-50 text-indigo-600 font-extrabold text-xs sm:text-sm flex-1 whitespace-nowrap"
//             aria-label={`Connect with ${name}`}
//         >
//             <img src={icon} alt="" className="h-4 w-4 object-contain" />
//             <span>{name}</span>
//         </button>
//     );
// };

// export default Section3;


"use client";
import React, { useState, useRef, useEffect } from 'react';

const Section3 = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isMuted, setIsMuted] = useState(true);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Videos de ejemplo
    const videos = [
        "/videos/REEL1.mp4",
        "/videos/REEL2.mp4",
        "/videos/REEL3.mp4"
    ];

    useEffect(() => {
        // Pausa todos los videos
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentSlide) {
                    video.play().catch(err => console.log("Reproducción automática bloqueada"));
                } else {
                    video.pause();
                }
            }
        });
    }, [currentSlide]);

    const handleDotClick = (index: React.SetStateAction<number>) => {
        setCurrentSlide(index);
    };

    const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
        videoRefs.current.forEach(video => {
          if (video) {
            video.muted = !isMuted;
          }
        });
    };
      
    const getVisibleVideos = () => {
        const prev = (currentSlide - 1 + videos.length) % videos.length;
        const current = currentSlide;
        const next = (currentSlide + 1) % videos.length;
        return [prev, current, next];
    };

    return (
        <section className="flex flex-col items-center w-full max-w-[1920px] mx-auto bg-[url(/images/backgroundServicess.png)] bg-cover bg-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[166px] pt-16 sm:pt-20 lg:pt-[119px] pb-16 sm:pb-20 lg:pb-[119px]">
            {/* Texto superior */}
            <div className="relative w-full flex flex-col items-center mb-8 sm:mb-12 md:mb-16 lg:mb-[79px]">
                <h1 className="text-[#F5F9FF] text-center font-inter text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[86px] tracking-tight md:tracking-[-2px] lg:tracking-[-4px]">
                    Connect With Us Online
                </h1>
                <p className="w-full max-w-[594px] text-center text-white font-inter text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-normal md:leading-[32px] lg:leading-[40px] mt-4 md:mt-6">
                    Check out our latest videos showcasing pristine pools, helpful advice, and the science behind sparkling water. Connect with us!
                </p>
            </div>

            {/* Botones de redes sociales */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-[24px] w-full max-w-[414px] mb-8 sm:mb-12 md:mb-16 lg:mb-[79px]">
                <SocialMediaButton icon="/svgs/tiktok.svg" name="TikTok" />
                <SocialMediaButton icon="/svgs/instagram1.svg" name="Instagram" />
                <SocialMediaButton icon="/svgs/facebook.svg" name="Facebook" />
            </div>

            {/* Carrusel de videos */}
            <div className="w-full">
                <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-[20px]">
                    {getVisibleVideos().map((videoIndex, index) => {
                        const isCurrent = index === 1;
                        const isSide = !isCurrent;

                        // Calculate widths based on 9:16 aspect ratio
                        // For current (center) video
                        const currentWidth = "w-full sm:w-[278px] md:w-[337px] lg:w-[349px]";
                        const currentHeight = "h-[494px] sm:h-[494px] md:h-[600px] lg:h-[621px]";
                        
                        // For side videos
                        const sideWidth = "hidden sm:block w-[169px] md:w-[225px] lg:w-[262px]";
                        const sideHeight = "sm:h-[300px] md:h-[400px] lg:h-[466px]";

                        return (
                            <div
                                key={videoIndex}
                                className={`
                                    relative overflow-hidden rounded-2xl transition-all duration-300 
                                    ${isCurrent ? `${currentWidth} ${currentHeight}` : `${sideWidth} ${sideHeight}`}
                                `}
                            >
                                <div className={`relative w-full h-full`}>
                                    <video
                                        ref={el => { videoRefs.current[videoIndex] = el; }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        src={videos[videoIndex]}
                                        loop
                                        muted={isMuted}
                                        playsInline
                                    />
                                </div>
                                
                                {isCurrent && (
                                    <button
                                        onClick={toggleMute}
                                        className="absolute bottom-4 right-4 bg-black bg-opacity-60 rounded-full p-2 text-white"
                                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                                    >
                                        {isMuted ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                                <line x1="17" y1="9" x2="23" y2="15"></line>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                            </svg>
                                        )}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Puntos de navegación */}
                <div className="flex justify-center mt-8 sm:mt-10">
                    <div className="flex gap-4 bg-indigo-500 bg-opacity-90 p-3 rounded-full shadow-lg">
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                className={`rounded-full w-2 h-2 md:w-2.5 md:h-2.5 transition-all duration-200 ${index === currentSlide ? 'bg-white' : 'bg-[#5000F3]'
                                    }`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === currentSlide ? "true" : "false"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Componente para los botones de redes sociales
type SocialMediaButtonProps = {
  icon: string;
  name: string;
};

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ icon, name }) => {
    return (
        <button
            className="flex gap-2 justify-center items-center py-2 px-3 sm:py-3 sm:px-4 rounded-md bg-slate-50 text-indigo-600 font-extrabold text-xs sm:text-sm flex-1 whitespace-nowrap"
            aria-label={`Connect with ${name}`}
        >
            <img src={icon} alt="" className="h-4 w-4 object-contain" />
            <span>{name}</span>
        </button>
    );
};

export default Section3;