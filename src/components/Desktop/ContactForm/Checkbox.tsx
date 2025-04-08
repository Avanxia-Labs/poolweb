"use client";
import * as React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <label className="flex gap-3 items-center w-full cursor-pointer">
      <div className="flex justify-center items-center self-stretch my-auto w-5">
        <input
          type="checkbox"
          className="w-5 h-5 bg-white rounded-md border border-solid border-[#D0D5DD] min-h-5 cursor-pointer"
          {...props}
        />
      </div>
      <span className="self-stretch my-auto text-base font-medium text-slate-700">
        {label}
      </span>
    </label>
  );
};
