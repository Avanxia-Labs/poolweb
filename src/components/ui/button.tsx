import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans rounded-md transition-colors duration-200";

  const variants = {
    default: "bg-[#485AFF] text-white hover:bg-[#485AFF]/90",
    outline: "border border-[#485AFF] text-[#485AFF] bg-transparent hover:bg-[#485AFF]/10",
    ghost: "bg-transparent hover:bg-[#485AFF]/10 text-[#485AFF]",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
