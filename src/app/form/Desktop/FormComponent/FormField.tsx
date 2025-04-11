import React from "react";

interface FormFieldProps {
  label: string;
  error?: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export function FormField({
  label,
  error,
  type = "text",
  value,
  onChange,
  placeholder,
  options,
}: FormFieldProps) {
  const baseInputClasses =
    "p-3 w-full text-base rounded-lg border border-solid border-zinc-300 duration-[0.3s] transition-[border-color]";

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            className={`${baseInputClasses} cursor-pointer bg-[white]`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Select type</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            className={`${baseInputClasses} resize-y min-h-[120px]`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        );

      default:
        return (
          <input
            className={baseInputClasses}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        );
    }
  };

  return (
    <div>
      <label className="mb-2 font-medium">{label}</label>
      {renderInput()}
      {error && <span className="text-sm text-[red]">{error}</span>}
    </div>
  );
}
