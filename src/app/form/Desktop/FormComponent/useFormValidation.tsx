"use client";

import { useState } from "react";

export interface FormData {
  name: string;
  email: string;
  userType: string;
  poolSize: string;
  phone: string;
  company: string;
  message: string;
  services: {
    regularMaintenance: boolean;
    cleaning: boolean;
    repair: boolean;
    customDesign: boolean;
    automation: boolean;
    other: boolean;
  };
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export function useFormValidation(initialData: FormData) {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    return /^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(phone);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone format";
    }

    return newErrors;
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateService = (
    service: keyof FormData["services"],
    checked: boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: checked,
      },
    }));
  };

  return {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    updateFormData,
    updateService,
    validateForm,
    setErrors,
  };
}
