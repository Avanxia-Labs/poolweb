// import React, { useState } from "react";

// type FancyButtonProps = {
//   text: string;
//   width?: string;
//   height?: string;
//   className?: string;
//   onClick?: () => void;
// };

// const FancyButton: React.FC<FancyButtonProps> = ({
//   text,
//   width = "13.375rem",
//   height = "3.75rem",
//   className = "",
//   onClick = () => {},
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const defaultBackground = "#485AFF";
//   const hoverBackground =
//     "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #485AFF";

//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`
//         flex justify-center items-center gap-[0.625rem]
//         px-[0.625rem] shrink-0 rounded-[0.5rem]
//         text-white text-base font-semibold
//         transition-all duration-700 ease-in-out
//         ${className}
//       `}
//       style={{
//         width,
//         height,
//         background: isHovered ? hoverBackground : defaultBackground,
//       }}
//     >
//       {text}
//     </button>
//   );
// };

// export default FancyButton;

import React, { useState } from "react";

type FancyButtonProps = {
  text: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
  textSize?: string;  // Nueva propiedad para el tamaño del texto
};

const FancyButton: React.FC<FancyButtonProps> = ({
  text,
  width = "13.375rem",
  height = "3.75rem",
  className = "",
  onClick = () => {},
  textSize = "1rem",  // Tamaño de texto por defecto
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultBackground = "#485AFF";
  const hoverBackground =
    "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #485AFF";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative flex justify-center items-center gap-[0.625rem]
        px-[0.625rem] shrink-0 rounded-[0.5rem]
        text-white font-semibold
        transition-all duration-700 ease-in-out
        ${className}
      `}
      style={{
        width,
        height,
        background: isHovered ? hoverBackground : defaultBackground,
        fontSize: textSize,  // Establecer el tamaño del texto según la propiedad
      }}
    >
      {/* Fondo de botón que se ajusta al contenedor */}
      <div className="absolute inset-0 rounded-[0.5rem] bg-transparent"></div>

      {text}
    </button>
  );
};

export default FancyButton;
