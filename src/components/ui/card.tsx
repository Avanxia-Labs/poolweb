import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => {
  return <div className={`rounded-xl bg-white ${className}`} {...props} />;
};

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent = ({ className, ...props }: CardContentProps) => {
  return <div className={`p-6 ${className}`} {...props} />;
};
