"use client";
import * as React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  return (
    <div className="w-full">
      <label className="text-sm font-medium leading-none text-slate-700">
        {label}
      </label>
      <textarea
        className="overflow-hidden flex-1 shrink gap-2 px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD] w-full min-h-[154px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        {...props}
      />
    </div>
  );
};
