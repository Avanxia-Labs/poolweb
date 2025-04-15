// "use client";
// import * as React from "react";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "secondary";
//   fullWidth?: boolean;
//   children: React.ReactNode;
// }

// export const Button: React.FC<ButtonProps> = ({
//   variant = "primary",
//   fullWidth = false,
//   children,
//   className = "",
//   ...props
// }) => {
//   const baseStyles =
//     "flex items-center justify-center px-5 py-3 text-base font-medium rounded-lg shadow-sm";
//   const variantStyles = {
//     primary: "bg-[#485AFF] text-white border border-solid border-[#7F56D9]",
//     secondary: "bg-white text-gray-700 border border-solid border-gray-300",
//   };
//   const widthStyles = fullWidth ? "w-full" : "";

//   return (
//     <button
//       className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };


// Button Component
export const Button: React.FC<{
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}> = ({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  type = "button",
}) => {
  const baseStyles =
    "flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg shadow-sm";
  const variantStyles = {
    primary: "bg-[#485AFF] text-white border border-solid border-[#7F56D9]",
    secondary: "bg-white text-gray-700 border border-solid border-gray-300",
  };
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};