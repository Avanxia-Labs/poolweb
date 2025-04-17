// 'use client';

// import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react';

// // Define types
// interface FormDataType {
//   name: string;
//   role: string;
//   company: string;
//   poolSize: string;
//   email: string;
//   phone: string;
//   projectDetails: string;
//   services: string[];
// }

// const Section1 = () => {
//   const [formData, setFormData] = useState<FormDataType>({
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

  

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleServiceChange = (service: string) => {
//     setFormData((prev) => {
//       const updatedServices = prev.services.includes(service)
//         ? prev.services.filter(s => s !== service)
//         : [...prev.services, service];
//       return { ...prev, services: updatedServices };
//     });
//   };

//   const selectRole = (role: string) => {
//     setFormData((prev) => ({ ...prev, role }));
//     setIsRoleDropdownOpen(false);
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Process form submission
//     alert('Form submitted successfully!');
//   };

//   return (
//     <section className="bg-[#F4F4F5] relative w-full min-h-screen overflow-hidden">
//       <div className="container mx-auto px-4 max-w-[1920px]">
//         <div className="relative flex flex-col lg:flex-row items-center justify-between py-12 md:py-16 lg:py-20">
//           {/* Left side with text */}
//           <div className=" lg:-mt-[450px] lg:justify-end flex flex-row w-full lg:w-[50%] mb-12 lg:mb-0 pt-10 lg:pt-0">

//             {/* Foto por debajo de lg */}
//             <div className="h-screen block lg:hidden w-full  z-[10]">
//               <img
//                 // src={vectorSrc} 
//                 src='/images/yosbanismall.png'
//                 alt="Yosbani"
//                 className="w-full object-cover"
//                 style={{
//                   minWidth: '100%',
//                   height: '690px'
//                 }}
//               />
//             </div>
            
            
//             <div className="ml-[-300px] lg:max-w-[21rem] mt-8 text-center lg:text-left z-20">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
//                 Let's<br />work<br />together!
//               </h1>
//               <p className="text-lg text-gray-600 max-w-md">
//                 We're here to help you enjoy your pool again. Complete the form and we'll be in touch within the next 24 hours.
//               </p>
//             </div>

            
//           </div>

//           {/* Right side with contact info and form */}
//           <div className="w-full lg:w-[50%]">
//             {/* Contact cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//               <div className="bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
//                 <Phone className="text-gray-500 mb-2" />
//                 <p className="text-sm text-center text-gray-600">+1 (236) 380-0768</p>
//               </div>
//               <div className="bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
//                 <MapPin className="text-gray-500 mb-2" />
//                 <p className="text-sm text-center text-gray-600">Au Surniat</p>
//               </div>
//               <div className="bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
//                 <Mail className="text-gray-500 mb-2" />
//                 <p className="text-sm text-center text-gray-600">email@hosting.com</p>
//               </div>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-sm">

//               {/* Form title */}
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-semibold text-gray-800">Contact us</h2>
//                 <p className="text-gray-600">Enter Your Details Below</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
//                 {/* Name Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>

//                 {/* Email Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="email@hosting.com"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>

//                 {/* I am a Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
//                   <div className="relative">
//                     <button
//                       type="button"
//                       className="w-full px-3 py-2 text-left border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
//                       onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
//                     >
//                       <span className="text-gray-500">{formData.role || 'Type'}</span>
//                       <ChevronDown size={20} />
//                     </button>

//                     {isRoleDropdownOpen && (
//                       <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//                         {roleOptions.map((option) => (
//                           <div
//                             key={option}
//                             className="px-3 py-2 cursor-pointer hover:bg-gray-100"
//                             onClick={() => selectRole(option)}
//                           >
//                             {option}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Pool Size Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">How many gallons is your pool?</label>
//                   <input
//                     type="text"
//                     name="poolSize"
//                     value={formData.poolSize}
//                     onChange={handleChange}
//                     placeholder="Don't know? Don't worry, move on"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 {/* Phone Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
//                   <div className="flex">
//                     <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
//                       <span className="text-gray-500">US</span>
//                       <ChevronDown size={16} className="ml-1 text-gray-500" />
//                     </div>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="+1 (555) 000-0000"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Company Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     placeholder="Your Company"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               {/* Project Details Field */}
//               <div className="mt-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
//                 <textarea
//                   name="projectDetails"
//                   value={formData.projectDetails}
//                   onChange={handleChange}
//                   placeholder="Tell us a little about the project..."
//                   rows={4}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//               </div>

//               {/* Services Field */}
//               <div className="mt-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <div className="flex items-start">
//                     <input
//                       type="checkbox"
//                       id="maintenance"
//                       className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={formData.services.includes('Regular Maintenance')}
//                       onChange={() => handleServiceChange('Regular Maintenance')}
//                     />
//                     <label htmlFor="maintenance" className="ml-2 block text-sm text-gray-700">
//                       Regular Maintenance
//                     </label>
//                   </div>

//                   <div className="flex items-start">
//                     <input
//                       type="checkbox"
//                       id="custom-design"
//                       className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={formData.services.includes('Custom Pool Design & Construction')}
//                       onChange={() => handleServiceChange('Custom Pool Design & Construction')}
//                     />
//                     <label htmlFor="custom-design" className="ml-2 block text-sm text-gray-700">
//                       Custom Pool Design & Construction
//                     </label>
//                   </div>

//                   <div className="flex items-start">
//                     <input
//                       type="checkbox"
//                       id="cleaning"
//                       className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={formData.services.includes('Deep and Routine Cleaning')}
//                       onChange={() => handleServiceChange('Deep and Routine Cleaning')}
//                     />
//                     <label htmlFor="cleaning" className="ml-2 block text-sm text-gray-700">
//                       Deep and Routine Cleaning
//                     </label>
//                   </div>

//                   <div className="flex items-start">
//                     <input
//                       type="checkbox"
//                       id="automation"
//                       className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={formData.services.includes('Pool System Automation')}
//                       onChange={() => handleServiceChange('Pool System Automation')}
//                     />
//                     <label htmlFor="automation" className="ml-2 block text-sm text-gray-700">
//                       Pool System Automation
//                     </label>
//                   </div>

//                   <div className="flex items-start">
//                     <input
//                       type="checkbox"
//                       id="repair"
//                       className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={formData.services.includes('Repair and Installation')}
//                       onChange={() => handleServiceChange('Repair and Installation')}
//                     />
//                     <label htmlFor="repair" className="ml-2 block text-sm text-gray-700">
//                       Repair and Installation
//                     </label>
//                   </div>

//                   <div className="flex items-start">
//                     <input
//                       type="checkbox"
//                       id="other"
//                       className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={formData.services.includes('Other')}
//                       onChange={() => handleServiceChange('Other')}
//                     />
//                     <label htmlFor="other" className="ml-2 block text-sm text-gray-700">
//                       Other
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="flex mt-6 justify-center">
//                 <button
//                   type="submit"
//                   className="w-[300px] bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//                 >
//                   Get in Touch
//                 </button>
//               </div>
//             </form>


//           </div>

//         </div>
//       </div>

//       {/* Vector background a partir de lg */}
//       <div className="absolute lg:bottom-0 left-0 w-full z-[10]">
//         <img
//           // src={vectorSrc} 
//           src='/svgs/YosbaniVector_H1000.svg'
//           alt="Vector background"
//           className="w-full object-cover"
//           style={{
//             minWidth: '100%',
//             height: 'auto'
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default Section1;







'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

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
  // Nuevos campos para información del cliente
  clientFullName: string;
  clientPhone: string;
  clientEmail: string;
  clientAddress: string;
  clientCompany: string;
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
    services: [],
    // Inicializar nuevos campos
    clientFullName: '',
    clientPhone: '',
    clientEmail: '',
    clientAddress: '',
    clientCompany: ''
  });

  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const roleOptions = ['Pool Owner', 'Pool Service Technician', 'Pool Repair Technician'];
  
  // Determinar si mostrar los campos adicionales del cliente
  const showClientFields = formData.role !== '' && formData.role !== 'Pool Owner';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpiar el error para este campo si existe
    if (formErrors[name]) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
    
    // Limpiar el error de servicios si se selecciona alguno
    if (formErrors['services'] && formData.services.length === 0) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated['services'];
        return updated;
      });
    }
  };

  const selectRole = (role: string) => {
    setFormData((prev) => ({ ...prev, role }));
    setIsRoleDropdownOpen(false);
    
    // Limpiar el error de role si existe
    if (formErrors['role']) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated['role'];
        return updated;
      });
    }
  };
  
  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
    
    // Limpiar el error de phone si existe
    if (formErrors['phone']) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated['phone'];
        return updated;
      });
    }
  };

  const handleClientPhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, clientPhone: value }));
    
    // Limpiar el error de clientPhone si existe
    if (formErrors['clientPhone']) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated['clientPhone'];
        return updated;
      });
    }
  };
  
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    // Validar campos obligatorios
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.role) errors.role = 'Role selection is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (formData.services.length === 0) errors.services = 'Please select at least one service';
    
    // Validar campos del cliente cuando corresponda
    if (showClientFields) {
      if (!formData.clientFullName.trim()) errors.clientFullName = 'Client name is required';
      if (!formData.clientPhone.trim()) errors.clientPhone = 'Client phone is required';
      if (!formData.clientEmail.trim()) errors.clientEmail = 'Client email is required';
      if (!formData.clientAddress.trim()) errors.clientAddress = 'Client address is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Process form submission
      alert('Form submitted successfully!');
    } else {
      console.log('Form validation failed');
      alert('Please fill in all required fields');
    }
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
              <div className="hover:rounded-[7px] hover:bg-white hover:shadow-[0px_9px_7.9px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
                <Phone className="text-gray-500 mb-2" />
                <p className="text-sm text-center text-gray-600">+1 (236) 380-0768</p>
              </div>
              <div className="hover:rounded-[7px] hover:bg-white hover:shadow-[0px_9px_7.9px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
                <MapPin className="text-gray-500 mb-2" />
                <p className="text-sm text-center text-gray-600">Au Surniat</p>
              </div>
              <div className="hover:rounded-[7px] hover:bg-white hover:shadow-[0px_9px_7.9px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@hosting.com"
                    className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>

                {/* I am a Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I am a <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className={`w-full px-3 py-2 text-left border ${formErrors.role ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center`}
                      onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                    >
                      <span className={formData.role ? 'text-gray-900' : 'text-gray-500'}>
                        {formData.role || 'Please select:'}
                      </span>
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
                  {formErrors.role && <p className="text-red-500 text-xs mt-1">{formErrors.role}</p>}
                </div>

                {/* Phone Field - usando PhoneInput */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <PhoneInput
                    placeholder="555 000-0000"
                    country="us"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputClass={`!w-full !py-2 !pl-12 !text-sm ${formErrors.phone ? '!border-red-500' : ''}`}
                    dropdownClass="!text-sm"
                    containerClass="!w-full"
                    enableSearch
                    inputProps={{
                      required: true,
                      name: 'phone'
                    }}
                  />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>

                {/* Pool Size Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    How many gallons is your pool? <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="poolSize"
                    value={formData.poolSize}
                    onChange={handleChange}
                    placeholder="Don't know? Don't worry, move on"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company <span className="text-gray-400">(optional)</span>
                  </label>
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

              {/* Campos adicionales del cliente - se muestran solo cuando no es Pool Owner */}
              {showClientFields && (
                <div className="mt-6 p-4 rounded-lg border border-gray-300 bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Client Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {/* Client Full Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Client Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="clientFullName"
                        value={formData.clientFullName}
                        onChange={handleChange}
                        placeholder="Client's full name"
                        className={`w-full px-3 py-2 border ${formErrors.clientFullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                      {formErrors.clientFullName && <p className="text-red-500 text-xs mt-1">{formErrors.clientFullName}</p>}
                    </div>
                    
                    {/* Client Phone Field - usando PhoneInput */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Client Phone Number <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        country="us"
                        value={formData.clientPhone}
                        onChange={handleClientPhoneChange}
                        inputClass={`!w-full !py-2 !pl-12 !text-sm ${formErrors.clientPhone ? '!border-red-500' : ''}`}
                        dropdownClass="!text-sm"
                        containerClass="!w-full"
                        enableSearch
                        inputProps={{
                          required: true,
                          name: 'clientPhone'
                        }} 
                      />
                      {formErrors.clientPhone && <p className="text-red-500 text-xs mt-1">{formErrors.clientPhone}</p>}
                    </div>
                    
                    {/* Client Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Client Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="clientEmail"
                        value={formData.clientEmail}
                        onChange={handleChange}
                        placeholder="client@example.com"
                        className={`w-full px-3 py-2 border ${formErrors.clientEmail ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                      {formErrors.clientEmail && <p className="text-red-500 text-xs mt-1">{formErrors.clientEmail}</p>}
                    </div>
                    
                    {/* Client Company Field (opcional) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Client Company <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="clientCompany"
                        value={formData.clientCompany}
                        onChange={handleChange}
                        placeholder="Client's company"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    {/* Client Address Field - full width */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Client Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="clientAddress"
                        value={formData.clientAddress}
                        onChange={handleChange}
                        placeholder="Client's full address"
                        className={`w-full px-3 py-2 border ${formErrors.clientAddress ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                      {formErrors.clientAddress && <p className="text-red-500 text-xs mt-1">{formErrors.clientAddress}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Project Details Field */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help? <span className="text-gray-400">(optional)</span>
                </label>
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
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Services <span className="text-red-500">*</span>
                </label>
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
                {formErrors.services && <p className="text-red-500 text-xs mt-1">{formErrors.services}</p>}
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
      {/* <div className="absolute lg:bottom-0 left-0 w-full z-[10]">
        <img
          src='/svgs/YosbaniVector_H1000.svg'
          alt="Vector background"
          className="w-full object-cover"
          style={{
            minWidth: '100%',
            height: 'auto'
          }}
        />
      </div> */}
    </section>
  );
};

export default Section1;







// 'use client';

// import { Mail, MapPin, Phone } from 'lucide-react';
// import { useState } from 'react';
// // Import the ContactForm component
// import ContactForm from './ContactForm';
// import Form from '../../../components/Desktop/ContactForm/Form'

// const Section1 = () => {
//   return (
//     <section className="bg-[#F4F4F5] relative w-full min-h-screen overflow-hidden">
//       <div className="container mx-auto px-4 max-w-[1920px]">
//         <div className="relative flex flex-col lg:flex-row items-center justify-between py-12 md:py-16 lg:py-20">
//           {/* Left side with text */}
//           <div className=" lg:-mt-[450px] lg:justify-end flex flex-row w-full lg:w-[50%] mb-12 lg:mb-0 pt-10 lg:pt-0">

//             {/* Foto por debajo de lg */}
//             <div className="h-screen block lg:hidden w-full  z-[10]">
//               <img
//                 src='/images/yosbanismall.png'
//                 alt="Yosbani"
//                 className="w-full object-cover"
//                 style={{
//                   minWidth: '100%',
//                   height: '690px'
//                 }}
//               />
//             </div>
            
            
//             <div className="ml-[-300px] lg:max-w-[21rem] mt-8 text-center lg:text-left z-20">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
//                 Let's<br />work<br />together!
//               </h1>
//               <p className="text-lg text-gray-600 max-w-md">
//                 We're here to help you enjoy your pool again. Complete the form and we'll be in touch within the next 24 hours.
//               </p>
//             </div>
//           </div>

//           {/* Right side with contact info and form */}
//           <div className="w-full lg:w-[50%]">
//             {/* Contact cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//               <div className="hover:rounded-[7px] hover:bg-white hover:shadow-[0px_9px_7.9px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
//                 <Phone className="text-gray-500 mb-2" />
//                 <p className="text-sm text-center text-gray-600">+1 (236) 380-0768</p>
//               </div>
//               <div className="hover:rounded-[7px] hover:bg-white hover:shadow-[0px_9px_7.9px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
//                 <MapPin className="text-gray-500 mb-2" />
//                 <p className="text-sm text-center text-gray-600">Au Surniat</p>
//               </div>
//               <div className="hover:rounded-[7px] hover:bg-white hover:shadow-[0px_9px_7.9px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center">
//                 <Mail className="text-gray-500 mb-2" />
//                 <p className="text-sm text-center text-gray-600">email@hosting.com</p>
//               </div>
//             </div>

//             {/* Contact Form Component */}
//             <Form />
//             {/* <ContactForm /> */}
//           </div>
//         </div>
//       </div>

//       {/* Vector background a partir de lg */}
//       {/* <div className="absolute lg:bottom-0 left-0 w-full z-[10]">
//         <img
//           src='/svgs/YosbaniVector_H1000.svg'
//           alt="Vector background"
//           className="w-full object-cover"
//           style={{
//             minWidth: '100%',
//             height: 'auto'
//           }}
//         />
//       </div> */}
//     </section>
//   );
// };

// export default Section1;


