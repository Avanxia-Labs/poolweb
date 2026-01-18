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
  textSize?: string;
  variant?: 'default' | 'luxury';
};

const FancyButton: React.FC<FancyButtonProps> = ({
  text,
  width = "13.375rem",
  height = "3.75rem",
  className = "",
  onClick = () => { },
  textSize = "1rem",
  variant = 'default',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default colors
  const defaultBackground = "#485AFF";
  const hoverBackground =
    "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #485AFF";

  // Luxury colors
  const luxuryBackground = "linear-gradient(135deg, #485AFF 0%, #3A4DE0 100%)";
  const luxuryHoverBackground = "linear-gradient(135deg, #3A4DE0 0%, #2B3CC0 100%)";

  const getBackground = () => {
    if (variant === 'luxury') {
      return isHovered ? luxuryHoverBackground : luxuryBackground;
    }
    return isHovered ? hoverBackground : defaultBackground;
  };

  const getBoxShadow = () => {
    if (variant === 'luxury') {
      return isHovered
        ? "0 10px 25px -5px rgba(72, 90, 255, 0.6), 0 8px 10px -6px rgba(72, 90, 255, 0.3)"
        : "0 4px 15px -3px rgba(72, 90, 255, 0.4), 0 2px 4px -2px rgba(72, 90, 255, 0.2)";
    }
    return "none";
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative flex justify-center items-center gap-[0.625rem]
        px-[0.625rem] shrink-0 rounded-[0.5rem]
        text-white font-semibold
        transition-all duration-300 ease-out
        ${variant === 'luxury' && isHovered ? 'scale-105' : ''}
        ${className}
      `}
      style={{
        width,
        height,
        background: getBackground(),
        boxShadow: getBoxShadow(),
        fontSize: textSize,
      }}
    >
      {/* Fondo de botón que se ajusta al contenedor */}
      <div className="absolute inset-0 rounded-[0.5rem] bg-transparent"></div>

      {text}
    </button>
  );
};

export default FancyButton;
