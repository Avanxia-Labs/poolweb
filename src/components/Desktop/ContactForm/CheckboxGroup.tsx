"use client";
import * as React from "react";
import { Checkbox } from "./Checkbox";

interface CheckboxOption {
  id: string;
  label: string;
}

interface CheckboxGroupProps {
  label: string;
  options: CheckboxOption[];
  selectedOptions: string[];
  onChange: (selectedIds: string[]) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  selectedOptions,
  onChange,
}) => {
  const handleCheckboxChange = (id: string) => {
    const newSelected = selectedOptions.includes(id)
      ? selectedOptions.filter((item) => item !== id)
      : [...selectedOptions, id];
    onChange(newSelected);
  };

  const leftColumn = options.slice(0, Math.ceil(options.length / 2));
  const rightColumn = options.slice(Math.ceil(options.length / 2));

  return (
    <div className="w-full">
      <div className="text-sm font-medium leading-none text-slate-700">
        {label}
      </div>
      <div className="flex gap-10 items-start mt-4 w-full">
        <div className="w-60">
          {leftColumn.map((option) => (
            <div
              key={option.id}
              className={option.id === leftColumn[0].id ? "" : "mt-4"}
            >
              <Checkbox
                label={option.label}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
            </div>
          ))}
        </div>
        <div className="w-[220px]">
          {rightColumn.map((option) => (
            <div
              key={option.id}
              className={option.id === rightColumn[0].id ? "" : "mt-4"}
            >
              <Checkbox
                label={option.label}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
