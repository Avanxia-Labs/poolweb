// "use client";
// import * as React from "react";
// import { InputField } from "./InputField";
// import { PhoneInput } from "./PhoneInput";
// import { TextArea } from "./TextArea";
// import { CheckboxGroup } from "./CheckboxGroup";
// import { Button } from "./Button";

// const serviceOptions = [
//   { id: "maintenance", label: "Regular Maintenance" },
//   { id: "cleaning", label: "Deep and Routine Cleaning" },
//   { id: "repair", label: "Repair and Installation" },
//   { id: "content", label: "Content creation" },
//   { id: "automation", label: "Pool System Automation" },
//   { id: "other", label: "Other" },
// ];

// const Form: React.FC = () => {
//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     selectedServices: [] as string[],
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg">
//       <div className="w-full text-[#344054] text-sm font-large leading-[20px] font-inter">
//         <InputField
//           label="Name"
//           placeholder="Your name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />

//         <div className="mt-2 text-[#344054] text-sm font-large leading-[20px] font-inter">
//           <InputField
//             label="Do you have previous experience in pool 
//             maintenance?"
//             placeholder="Type"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />
//         </div>

//         <div className="mt-2 text-[#344054] text-sm font-large leading-[20px] font-inter">
//           <InputField
//             label="Email"
//             type="email"
//             placeholder="you@company.com"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />
//         </div>

//         <div className="mt-2 text-[#344054] text-sm font-large leading-[20px] font-inter">
//           <PhoneInput
//             label="Phone number"
//             value={formData.phone}
//             onChange={(value) => setFormData({ ...formData, phone: value })}
//           />
//         </div>

//         <div className="mt-2">
//           <TextArea
//             label="How can we help?"
//             placeholder="Tell us a little about the project..."
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//           />
//         </div>

//         <div className="mt-2">
//           <CheckboxGroup
//             label="Services"
//             options={serviceOptions}
//             selectedOptions={formData.selectedServices}
//             onChange={(selected) =>
//               setFormData({ ...formData, selectedServices: selected })
//             }
//           />
//         </div>
//       </div>

//       <div className="mt-2">
//         <Button type="submit" fullWidth>
//           Get started
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default Form;




// import { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import FancyButton from '../FancyButton';

// export default function PoolServiceForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     role: '',
//     company: '',
//     poolSize: '',
//     email: '',
//     phone: '',
//     projectDetails: '',
//     services: []
//   });

//   const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  
//   const roleOptions = ['Pool Owner', 'Property Manager', 'Contractor', 'Designer'];
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleServiceChange = (service) => {
//     setFormData(prev => {
//       const updatedServices = prev.services.includes(service)
//         ? prev.services.filter(s => s !== service)
//         : [...prev.services, service];
//       return { ...prev, services: updatedServices };
//     });
//   };
  
//   const selectRole = (role) => {
//     setFormData(prev => ({ ...prev, role }));
//     setIsRoleDropdownOpen(false);
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Process form submission
//     alert('Form submitted successfully!');
//   };

//   return (
//     <div className="flex justify-center w-full h-full items-center min-h-screen bg-black p-4">
//       <div className="w-full h-full max-w-4xl bg-indigo-100 rounded-xl shadow-md p-4 sm:p-8">
//         <form onSubmit={handleSubmit} className="space-y-6 xl:space-y-4">
//           <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
//             {/* Name Field */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
            
//             {/* I am a Field */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">I am a</label>
//               <div className="relative">
//                 <button
//                   type="button"
//                   className="w-full px-3 py-2 text-left border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
//                   onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
//                 >
//                   <span>{formData.role || 'Please select:'}</span>
//                   <ChevronDown size={20} />
//                 </button>
                
//                 {isRoleDropdownOpen && (
//                   <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//                     {roleOptions.map((option) => (
//                       <div
//                         key={option}
//                         className="px-3 py-2 cursor-pointer hover:bg-gray-100"
//                         onClick={() => selectRole(option)}
//                       >
//                         {option}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
            
//             {/* Company Field */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">Company</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="Your company"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
            
//             {/* Pool Size Field */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">How many gallons is your pool?</label>
//               <input
//                 type="text"
//                 name="poolSize"
//                 value={formData.poolSize}
//                 onChange={handleChange}
//                 placeholder="Don't know? Don't worry, move on"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
            
//             {/* Email Field */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@company.com"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
            
//             {/* Phone Field */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">Phone number</label>
//               <div className="flex">
//                 <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
//                   <span className="text-gray-500">US</span>
//                   <ChevronDown size={16} className="ml-1 text-gray-500" />
//                 </div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+1 (555) 000-0000"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Project Details Field */}
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">How can we help?</label>
//             <textarea
//               name="projectDetails"
//               value={formData.projectDetails}
//               onChange={handleChange}
//               placeholder="Tell us a little about the project..."
//               rows="4"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             ></textarea>
//           </div>
          
//           {/* Services Field */}
//           <div className="space-y-3">
//             <label className="block text-sm font-medium text-gray-700">Services</label>
//             <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="maintenance"
//                   className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                   checked={formData.services.includes('Regular Maintenance')}
//                   onChange={() => handleServiceChange('Regular Maintenance')}
//                 />
//                 <label htmlFor="maintenance" className="ml-2 block text-sm text-gray-700">
//                   Regular Maintenance
//                 </label>
//               </div>
              
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="custom-design"
//                   className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                   checked={formData.services.includes('Custom Pool Design & Construction')}
//                   onChange={() => handleServiceChange('Custom Pool Design & Construction')}
//                 />
//                 <label htmlFor="custom-design" className="ml-2 block text-sm text-gray-700">
//                   Custom Pool Design & Construction
//                 </label>
//               </div>
              
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="cleaning"
//                   className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                   checked={formData.services.includes('Deep and Routine Cleaning')}
//                   onChange={() => handleServiceChange('Deep and Routine Cleaning')}
//                 />
//                 <label htmlFor="cleaning" className="ml-2 block text-sm text-gray-700">
//                   Deep and Routine Cleaning
//                 </label>
//               </div>
              
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="automation"
//                   className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                   checked={formData.services.includes('Pool System Automation')}
//                   onChange={() => handleServiceChange('Pool System Automation')}
//                 />
//                 <label htmlFor="automation" className="ml-2 block text-sm text-gray-700">
//                   Pool System Automation
//                 </label>
//               </div>
              
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="repair"
//                   className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                   checked={formData.services.includes('Repair and Installation')}
//                   onChange={() => handleServiceChange('Repair and Installation')}
//                 />
//                 <label htmlFor="repair" className="ml-2 block text-sm text-gray-700">
//                   Repair and Installation
//                 </label>
//               </div>
              
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="other"
//                   className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                   checked={formData.services.includes('Other')}
//                   onChange={() => handleServiceChange('Other')}
//                 />
//                 <label htmlFor="other" className="ml-2 block text-sm text-gray-700">
//                   Other
//                 </label>
//               </div>
//             </div>
//           </div>
          
//           {/* Submit Button */}
//           <div className="pt-2">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//             >
//               Get started
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



import { useState, ChangeEvent, FormEvent } from 'react';
import { ChevronDown } from 'lucide-react';

// Define types
type ServiceType = string;

interface FormDataType {
  name: string;
  role: string;
  company: string;
  poolSize: string;
  email: string;
  phone: string;
  projectDetails: string;
  services: ServiceType[];
}

export default function PoolServiceForm() {
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
    setFormData((prev: FormDataType) => ({ ...prev, [name]: value }));
  };
  
  const handleServiceChange = (service: ServiceType) => {
    setFormData((prev: FormDataType) => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
  };
  
  const selectRole = (role: string) => {
    setFormData((prev: FormDataType) => ({ ...prev, role }));
    setIsRoleDropdownOpen(false);
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Process form submission
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex justify-center w-full h-full items-start min-h-screen sm:pb-5 p-4 overflow-auto">
      
      <form onSubmit={handleSubmit} className="space-y-6 xl:space-y-4">
          <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Name</label>
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
            
            {/* I am a Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">I am a</label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full px-3 py-2 text-left border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                >
                  <span>{formData.role || 'Please select:'}</span>
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
            
            {/* Company Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Pool Size Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">How many gallons is your pool?</label>
              <input
                type="text"
                name="poolSize"
                value={formData.poolSize}
                onChange={handleChange}
                placeholder="Don't know? Don't worry, move on"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            {/* Phone Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
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
          </div>
          
          {/* Project Details Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">How can we help?</label>
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
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Services</label>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2">
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
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Get started
            </button>
          </div>
      </form>
      
      {/* <div className="bg-indigo-300 w-full h-[80vh] max-w-4xl rounded-xl shadow-md p-4 sm:p-8 max-h-screen overflow-y-auto">
        
      </div> */}
    </div>
  );
}