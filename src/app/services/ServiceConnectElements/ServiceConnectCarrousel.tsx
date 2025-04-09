import { useState, useEffect, useRef } from "react";

export default function ServiceConnectCarrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Array con URLs de imágenes
  const imagenes = [
    "/images/serviceImage1.png",
    "/images/serviceImage1.png",
    "/images/serviceImage1.png"
  ];
  
  // Manejo de eventos táctiles
  const handleTouchStart = (e: React.TouchEvent): void => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent): void => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = (): void => {
    const difference = touchStartX.current - touchEndX.current;
    
    // Si la diferencia es positiva, el usuario deslizó hacia la izquierda (siguiente)
    // Si la diferencia es negativa, el usuario deslizó hacia la derecha (anterior)
    if (difference > 50) {
      goToNext();
    } else if (difference < -50) {
      goToPrev();
    }
  };
  
  const goToNext = (): void => {
    setCurrentIndex(prevIndex => 
      prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrev = (): void => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };
  
  // Cambio automático de slides cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[1267px] bg-black mt-20 relative">
      <div 
        className="w-full overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out h-96"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imagenes.map((imagen: string, index: number) => (
            <div key={index} className="min-w-full">
              <img 
                src={imagen} 
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Paginación */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {imagenes.map((_: string, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index 
                  ? "bg-blue-600 w-4 h-4" 
                  : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}