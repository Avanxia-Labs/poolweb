// "use client";
// import * as React from "react";

// interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   label: string;
//   placeholder?: string;
// }

// export const InputField: React.FC<InputFieldProps> = ({
//   label,
//   placeholder,
//   ...props
// }) => {
//   return (
//     <div className="w-full">
//       <label className="text-sm font-medium leading-none text-slate-700">
//         {label}
//       </label>
//       <input
//         className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//         placeholder={placeholder}
//         {...props}
//       />
//     </div>
//   );
// };


// InputField Component
export const InputField: React.FC<{
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}> = ({ label, placeholder, value, onChange, type = "text" }) => {
  return (
    <div className="w-full">
      <label className="text-sm font-medium leading-none text-slate-700">
        {label}
      </label>
      <input
        type={type}
        className="flex overflow-hidden gap-2 items-center px-3 sm:px-4 py-2.5 sm:py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};