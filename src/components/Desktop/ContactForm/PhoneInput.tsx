// "use client";
// import * as React from "react";

// interface PhoneInputProps {
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
// }

// export const PhoneInput: React.FC<PhoneInputProps> = ({
//   label,
//   value,
//   onChange,
// }) => {
//   return (
//     <div className="w-full">
//       <label className="text-sm font-medium leading-none text-slate-700">
//         {label}
//       </label>
//       <div className="flex overflow-hidden flex-wrap mt-1.5 w-full text-base bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD]">
//         <div className="flex overflow-hidden justify-between items-center py-3 pr-3 pl-4 h-full text-gray-900 whitespace-nowrap">
//           <span className="self-stretch my-auto">US</span>
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/cc725807c14044218a044f65b2af1b69/5a8e3be11dbccb037152b8abdb72f658f459e08a?placeholderIfAbsent=true"
//             alt="US flag"
//             className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
//           />
//         </div>
//         <input
//           type="tel"
//           className="flex-1 shrink py-3 pr-4 text-gray-500 border-none focus:outline-none min-w-60"
//           placeholder="+1 (555) 000-0000"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };


// PhoneInput Component
export const PhoneInput: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ label, value, onChange }) => {
  return (
    <div className="w-full">
      <label className="text-sm font-medium leading-none text-slate-700">
        {label}
      </label>
      <div className="flex overflow-hidden flex-wrap mt-1.5 w-full text-base bg-white rounded-lg border border-solid shadow-sm border-[#D0D5DD]">
        <div className="flex overflow-hidden justify-between items-center py-2.5 sm:py-3 pr-2 sm:pr-3 pl-3 sm:pl-4 h-full text-gray-900 whitespace-nowrap">
          <span className="self-stretch my-auto text-sm sm:text-base">US</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc725807c14044218a044f65b2af1b69/5a8e3be11dbccb037152b8abdb72f658f459e08a?placeholderIfAbsent=true"
            alt="US flag"
            className="object-contain shrink-0 self-stretch my-auto w-4 sm:w-5 aspect-square ml-1 sm:ml-2"
          />
        </div>
        <input
          type="tel"
          className="flex-1 shrink py-2.5 sm:py-3 pr-3 sm:pr-4 text-gray-500 border-none focus:outline-none min-w-0 sm:min-w-60 text-sm sm:text-base"
          placeholder="+1 (555) 000-0000"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};