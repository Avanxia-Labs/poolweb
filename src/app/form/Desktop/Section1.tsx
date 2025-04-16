'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react';

// Define types
interface FormDataType {
  name: string;
  role: string;
  company: string;
  poolSize: string;
  email: string;
  phone: string;
  projectDetails: string;
  services: string[];
}

const Section1 = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    role: '',
    company: '',
    poolSize: '',
    email: '',
    phone: '',
    projectDetails: '',
    services: []
  });

  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  
  const roleOptions = ['Pool Owner', 'Property Manager', 'Contractor', 'Designer'];

  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
  };

  const selectRole = (role: string) => {
    setFormData((prev) => ({ ...prev, role }));
    setIsRoleDropdownOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Process form submission
    alert('Form submitted successfully!');
  };

  return (
    <section className="bg-[#F4F4F5] relative w-full min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1920px]">
        <div className="relative flex flex-col lg:flex-row items-center justify-between py-12 md:py-16 lg:py-20">
          {/* Left side with text */}
          <div className=" lg:-mt-[450px] lg:justify-end flex flex-row w-full lg:w-[50%] mb-12 lg:mb-0 pt-10 lg:pt-0">

            {/* Foto por debajo de lg */}
            <div className="h-screen block lg:hidden w-full  z-[10]">
              <img
                // src={vectorSrc} 
                src='/images/yosbanismall.png'
                alt="Yosbani"
                className="w-full object-cover"
                style={{
                  minWidth: '100%',
                  height: '690px'
                }}
              />
            </div>
            
            
            <div className="ml-[-300px] lg:max-w-[21rem] mt-8 text-center lg:text-left z-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Let's<br />work<br />together!
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                We're here to help you enjoy your pool again. Complete the form and we'll be in touch within the next 24 hours.
              </p>
            </div>

            
          </div>

          {/* Right side with contact info and form */}
          <div className="w-full lg:w-[50%]">
            {/* Contact cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
                <Phone className="text-gray-500 mb-2" />
                <p className="text-sm text-center text-gray-600">+1 (236) 380-0768</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
                <MapPin className="text-gray-500 mb-2" />
                <p className="text-sm text-center text-gray-600">Au Surniat</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
                <Mail className="text-gray-500 mb-2" />
                <p className="text-sm text-center text-gray-600">email@hosting.com</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-sm">

              {/* Form title */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Contact us</h2>
                <p className="text-gray-600">Enter Your Details Below</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@hosting.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* I am a Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full px-3 py-2 text-left border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
                      onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                    >
                      <span className="text-gray-500">{formData.role || 'Type'}</span>
                      <ChevronDown size={20} />
                    </button>

                    {isRoleDropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        {roleOptions.map((option) => (
                          <div
                            key={option}
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => selectRole(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Pool Size Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How many gallons is your pool?</label>
                  <input
                    type="text"
                    name="poolSize"
                    value={formData.poolSize}
                    onChange={handleChange}
                    placeholder="Don't know? Don't worry, move on"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                      <span className="text-gray-500">US</span>
                      <ChevronDown size={16} className="ml-1 text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Project Details Field */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us a little about the project..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Services Field */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="maintenance"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.services.includes('Regular Maintenance')}
                      onChange={() => handleServiceChange('Regular Maintenance')}
                    />
                    <label htmlFor="maintenance" className="ml-2 block text-sm text-gray-700">
                      Regular Maintenance
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="custom-design"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.services.includes('Custom Pool Design & Construction')}
                      onChange={() => handleServiceChange('Custom Pool Design & Construction')}
                    />
                    <label htmlFor="custom-design" className="ml-2 block text-sm text-gray-700">
                      Custom Pool Design & Construction
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="cleaning"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.services.includes('Deep and Routine Cleaning')}
                      onChange={() => handleServiceChange('Deep and Routine Cleaning')}
                    />
                    <label htmlFor="cleaning" className="ml-2 block text-sm text-gray-700">
                      Deep and Routine Cleaning
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="automation"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.services.includes('Pool System Automation')}
                      onChange={() => handleServiceChange('Pool System Automation')}
                    />
                    <label htmlFor="automation" className="ml-2 block text-sm text-gray-700">
                      Pool System Automation
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="repair"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.services.includes('Repair and Installation')}
                      onChange={() => handleServiceChange('Repair and Installation')}
                    />
                    <label htmlFor="repair" className="ml-2 block text-sm text-gray-700">
                      Repair and Installation
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="other"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.services.includes('Other')}
                      onChange={() => handleServiceChange('Other')}
                    />
                    <label htmlFor="other" className="ml-2 block text-sm text-gray-700">
                      Other
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex mt-6 justify-center">
                <button
                  type="submit"
                  className="w-[300px] bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </form>


          </div>

        </div>
      </div>

      {/* Vector background a partir de lg */}
      <div className="absolute lg:bottom-0 left-0 w-full z-[10]">
        <img
          // src={vectorSrc} 
          src='/svgs/YosbaniVector_H1000.svg'
          alt="Vector background"
          className="w-full object-cover"
          style={{
            minWidth: '100%',
            height: 'auto'
          }}
        />
      </div>
    </section>
  );
};

export default Section1;



