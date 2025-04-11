import React from "react";

interface ServiceCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function ServiceCheckbox({
  label,
  checked,
  onChange,
}: ServiceCheckboxProps) {
  return (
    <label className="flex gap-2 items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
