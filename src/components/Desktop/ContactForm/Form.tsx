"use client";
import * as React from "react";
import { InputField } from "./InputField";
import { PhoneInput } from "./PhoneInput";
import { TextArea } from "./TextArea";
import { CheckboxGroup } from "./CheckboxGroup";
import { Button } from "./Button";

const serviceOptions = [
  { id: "maintenance", label: "Regular Maintenance" },
  { id: "cleaning", label: "Deep and Routine Cleaning" },
  { id: "repair", label: "Repair and Installation" },
  { id: "content", label: "Content creation" },
  { id: "automation", label: "Pool System Automation" },
  { id: "other", label: "Other" },
];

const Form: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedServices: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="w-full text-[#344054] text-sm font-large leading-[20px] font-inter">
        <InputField
          label="Name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <div className="mt-2 text-[#344054] text-sm font-large leading-[20px] font-inter">
          <InputField
            label="Do you have previous experience in pool 
            maintenance?"
            placeholder="Type"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="mt-2 text-[#344054] text-sm font-large leading-[20px] font-inter">
          <InputField
            label="Email"
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="mt-2 text-[#344054] text-sm font-large leading-[20px] font-inter">
          <PhoneInput
            label="Phone number"
            value={formData.phone}
            onChange={(value) => setFormData({ ...formData, phone: value })}
          />
        </div>

        <div className="mt-2">
          <TextArea
            label="How can we help?"
            placeholder="Tell us a little about the project..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <div className="mt-2">
          <CheckboxGroup
            label="Services"
            options={serviceOptions}
            selectedOptions={formData.selectedServices}
            onChange={(selected) =>
              setFormData({ ...formData, selectedServices: selected })
            }
          />
        </div>
      </div>

      <div className="mt-2">
        <Button type="submit" fullWidth>
          Get started
        </Button>
      </div>
    </form>
  );
};

export default Form;
