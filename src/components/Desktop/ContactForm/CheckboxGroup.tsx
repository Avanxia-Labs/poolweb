// "use client";
// import * as React from "react";
// import { Checkbox } from "./Checkbox";

// interface CheckboxOption {
//   id: string;
//   label: string;
// }

// interface CheckboxGroupProps {
//   label: string;
//   options: CheckboxOption[];
//   selectedOptions: string[];
//   onChange: (selectedIds: string[]) => void;
// }

// export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
//   label,
//   options,
//   selectedOptions,
//   onChange,
// }) => {
//   const handleCheckboxChange = (id: string) => {
//     const newSelected = selectedOptions.includes(id)
//       ? selectedOptions.filter((item) => item !== id)
//       : [...selectedOptions, id];
//     onChange(newSelected);
//   };

//   const leftColumn = options.slice(0, Math.ceil(options.length / 2));
//   const rightColumn = options.slice(Math.ceil(options.length / 2));

//   return (
//     <div className="w-full">
//       <div className="text-sm font-medium leading-none text-slate-700">
//         {label}
//       </div>
//       <div className="flex gap-10 items-start mt-4 w-full">
//         <div className="w-60">
//           {leftColumn.map((option) => (
//             <div
//               key={option.id}
//               className={option.id === leftColumn[0].id ? "" : "mt-4"}
//             >
//               <Checkbox
//                 label={option.label}
//                 checked={selectedOptions.includes(option.id)}
//                 onChange={() => handleCheckboxChange(option.id)}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="w-[220px]">
//           {rightColumn.map((option) => (
//             <div
//               key={option.id}
//               className={option.id === rightColumn[0].id ? "" : "mt-4"}
//             >
//               <Checkbox
//                 label={option.label}
//                 checked={selectedOptions.includes(option.id)}
//                 onChange={() => handleCheckboxChange(option.id)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// CheckboxGroup Component
import { Checkbox } from "./Checkbox";

export const CheckboxGroup: React.FC<{
  label: string;
  options: Array<{ id: string; label: string }>;
  selectedOptions: string[];
  onChange: (selectedIds: string[]) => void;
}> = ({ label, options, selectedOptions, onChange }) => {
  const handleCheckboxChange = (id: string) => {
    const newSelected = selectedOptions.includes(id)
      ? selectedOptions.filter((item) => item !== id)
      : [...selectedOptions, id];
    onChange(newSelected);
  };

  // En móvil, mostrar una columna; en escritorio, mostrar dos columnas
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Si es móvil, una sola columna
  if (isMobile) {
    return (
      <div className="w-full">
        <div className="text-sm font-medium leading-none text-slate-700">
          {label}
        </div>
        <div className="flex flex-col gap-3 mt-3 w-full">
          {options.map((option) => (
            <div key={option.id}>
              <Checkbox
                label={option.label}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Si es escritorio, dos columnas
  const leftColumn = options.slice(0, Math.ceil(options.length / 2));
  const rightColumn = options.slice(Math.ceil(options.length / 2));

  return (
    <div className="w-full">
      <div className="text-sm font-medium leading-none text-slate-700">
        {label}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-10 items-start mt-3 sm:mt-4 w-full">
        <div className="w-full sm:w-1/2 md:w-60">
          {leftColumn.map((option) => (
            <div
              key={option.id}
              className={option.id === leftColumn[0].id ? "" : "mt-3 sm:mt-4"}
            >
              <Checkbox
                label={option.label}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
            </div>
          ))}
        </div>
        <div className="w-full sm:w-1/2 md:w-60">
          {rightColumn.map((option) => (
            <div
              key={option.id}
              className={option.id === rightColumn[0].id ? "" : "mt-3 sm:mt-4"}
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
