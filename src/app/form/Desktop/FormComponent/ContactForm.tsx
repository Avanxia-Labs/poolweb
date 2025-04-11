"use client";

import React from "react";
import { FormField } from "./FormField";
import { useFormValidation } from "./useFormValidation";
import { ServiceCheckbox } from "./ServiceCheckbox_temp";

export default function ContactForm() {
  const {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    updateFormData,
    updateService,
    validateForm,
    setErrors,
  } = useFormValidation({
    name: "",
    email: "",
    userType: "",
    poolSize: "",
    phone: "",
    company: "",
    message: "",
    services: {
      regularMaintenance: false,
      cleaning: false,
      repair: false,
      customDesign: false,
      automation: false,
      other: false,
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="bg-white px-10 py-5 mx-auto my-0 max-w-[750px] text-zinc-800 max-sm:p-5">
      <header>
        <h1 className="mb-2 text-4xl text-center text-zinc-900">Contact us</h1>
        <p className="mb-10 text-center text-stone-500">
          Enter Your Details Below
        </p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 grid-cols-[1fr_1fr] max-sm:grid-cols-[1fr]">
          <FormField
            label="Name"
            value={formData.name}
            onChange={(value) => updateFormData("name", value)}
            placeholder="Your name"
            error={errors.name}
          />

          <FormField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => updateFormData("email", value)}
            placeholder="email@hosting.com"
            error={errors.email}
          />

          <FormField
            label="I am a"
            type="select"
            value={formData.userType}
            onChange={(value) => updateFormData("userType", value)}
            options={[
              { value: "homeowner", label: "Homeowner" },
              { value: "business", label: "Business Owner" },
              { value: "contractor", label: "Contractor" },
            ]}
          />

          <FormField
            label="How many gallons is your pool?"
            value={formData.poolSize}
            onChange={(value) => updateFormData("poolSize", value)}
            placeholder="Don't know? Don't worry, move on"
          />

          <FormField
            label="Phone number"
            type="tel"
            value={formData.phone}
            onChange={(value) => updateFormData("phone", value)}
            placeholder="+1 (555) 000-0000"
            error={errors.phone}
          />

          <FormField
            label="Company"
            value={formData.company}
            onChange={(value) => updateFormData("company", value)}
            placeholder="Your Company"
          />
        </div>

        <div className="mt-6">
          <FormField
            label="How can we help?"
            type="textarea"
            value={formData.message}
            onChange={(value) => updateFormData("message", value)}
            placeholder="Tell us a little about the project..."
          />
        </div>

        <fieldset className="">
          <legend className="mb-4 ml-[70px] font-medium">Services</legend>
          <div className="grid mx-auto w-[570px] gap-2 grid-cols-[1fr_1fr] max-sm:grid-cols-[1fr]">
            <ServiceCheckbox
              label="Regular Maintenance"
              checked={formData.services.regularMaintenance}
              onChange={(checked) =>
                updateService("regularMaintenance", checked)
              }
            />
            <ServiceCheckbox
              label="Deep and Routine Cleaning"
              checked={formData.services.cleaning}
              onChange={(checked) => updateService("cleaning", checked)}
            />
            <ServiceCheckbox
              label="Repair and Installation"
              checked={formData.services.repair}
              onChange={(checked) => updateService("repair", checked)}
            />
            <ServiceCheckbox
              label="Custom Pool Design & Construction"
              checked={formData.services.customDesign}
              onChange={(checked) => updateService("customDesign", checked)}
            />
            <ServiceCheckbox
              label="Pool System Automation"
              checked={formData.services.automation}
              onChange={(checked) => updateService("automation", checked)}
            />
            <ServiceCheckbox
              label="Other"
              checked={formData.services.other}
              onChange={(checked) => updateService("other", checked)}
            />
          </div>
        </fieldset>

        <div className="flex flex-col w-[400px] mx-auto">
          <button
            className="p-4 mt-8 w-full justify-center text-base font-medium bg-indigo-600 rounded-lg cursor-pointer border-[none] duration-[0.3s] text-[white] transition-[background-color]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <span>Sending...</span> : <span>Get in Touch</span>}
          </button>
        </div>

      </form>
    </section>
  );
}
