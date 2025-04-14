// import React from 'react'
// import Image from 'next/image'
// import ContactForm from './FormComponent/ContactForm'
// import Form from '../../../components/Desktop/ContactForm/Form'

// function Section1() {
//     return (
//         <section className='relative h-full w-full max-w-[1920px] pt-[34px] pr-[87px] bg-[#F5F9FF]'>

//             <div id='container' className='w-full h-full flex flex-row gap-[30px]'>

//                 <div id='woman' className='overflow-hidden mt-[125px] w-1/5 h-auto '>
//                     <Image src={'/images/ContactWoman.png'} alt={'woman'} width={371} height={739} />
//                 </div>

//                 <div id='text' className='w-1/5 overflow-hidden mb-[125px] mt-[125px] h-[739px] flex flex-col gap-[20px]'>
//                     <p className='text-[#0F172A] font-inter text-[64px] font-bold leading-[69px] normal'>Let's work together!</p>
//                     <p className='text-[#212939] w-full pr-[15px] font-inter text-[18.93px] font-normal leading-[21.89px]'>We're here to help you enjoy your pool again.
//                         Complete the form and we'll be in touch within the next 24 hours.
//                     </p>
//                 </div>

//                 <div id='form' className='w-3/5 h-full  flex flex-col gap-[10px]'>
//                     <div id='tarjetas' className=' flex flex-row gap-[20px] justify-center md:justify-between '>
//                         <div className='flex w-[229px] h-[121px] flex-col justify-center items-center gap-4 shrink-0 rounded-[7px] bg-white'>
//                             <Image src={'/svgs/ContactPhone.svg'} alt={'Phone'} width={27} height={29} />
//                             <p className='text-[#344054] text-center font-inter text-xs font-normal leading-[15.953px]'>+1 (239) 380-0766</p>
//                         </div>
//                         <div className='flex w-[229px] h-[121px] flex-col justify-center items-center gap-4 shrink-0 rounded-[7px] bg-white'>
//                             <Image src={'/svgs/ContactLocation.svg'} alt={'Phone'} width={27} height={29} />
//                             <p className='text-[#344054] text-center font-inter text-xs font-normal leading-[15.953px]'>Av.Sunset</p>
//                         </div>
//                         <div className='flex w-[229px] h-[121px] flex-col justify-center items-center gap-4 shrink-0 rounded-[7px] bg-white'>
//                             <Image src={'/svgs/ContactEmail.svg'} alt={'Phone'} width={27} height={29} />
//                             <p className='text-[#344054] text-center font-inter text-xs font-normal leading-[15.953px]'>email@hosting.com</p>
//                         </div>
//                     </div>
//                     {/* <ContactForm /> */}
//                     <div className='bg-white'>
//                     <Form/>
//                     </div>

//                 </div>

//             </div>

//             <div id='vector' className='absolute bottom-0 left-0'>
//                 <Image src={'/svgs/ContactVector1920.svg'} alt={'vector'}
//                     width={1920}
//                     height={637} />
//             </div>

//         </section>
//     )
// }

// export default Section1







// import React from 'react'
// import Image from 'next/image'
// import Form from '../../../components/Desktop/ContactForm/Form'

// function Section1() {
//     return (
//         <section className='relative w-full'>
//             <div className='max-w-[1920px] mx-auto bg-[#F5F9FF] pt-6 md:pt-[34px] px-4 sm:px-6 md:px-8 lg:pr-[87px]'>
//                 <div id='container' className='w-full flex flex-col lg:flex-row gap-8 lg:gap-[30px] relative z-10'>
//                     {/* Woman image - hidden on mobile, visible from medium screens */}
//                     <div id='woman' className='hidden md:block md:w-full lg:w-1/5 lg:mt-[125px]'>
//                         <div className='flex justify-center lg:justify-start'>
//                             <Image 
//                                 src={'/svgs/ContactWoman.svg'} 
//                                 alt={'woman'} 
//                                 width={371} 
//                                 height={739}
//                                 className='w-auto h-auto max-h-[500px] lg:max-h-[739px]' 
//                             />
//                         </div>
//                     </div>

//                     {/* Text content */}
//                     <div id='text' className='w-full lg:w-1/5 lg:mt-[125px] flex flex-col gap-4 lg:gap-[20px] text-center lg:text-left'>
//                         <p className='text-[#0F172A] font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-[69px]'>
//                             Let's work together!
//                         </p>
//                         <p className='text-[#212939] font-inter text-base sm:text-lg lg:text-[18.93px] font-normal leading-normal lg:leading-[21.89px] lg:pr-[15px]'>
//                             We're here to help you enjoy your pool again.
//                             Complete the form and we'll be in touch within the next 24 hours.
//                         </p>
//                     </div>

//                     {/* Form section */}
//                     <div id='form' className='w-full lg:w-3/5 flex flex-col gap-6 lg:gap-[10px] pb-16 lg:pb-0'>
//                         {/* Contact cards */}
//                         <div id='tarjetas' className='flex flex-col sm:flex-row gap-4 sm:gap-[20px] justify-center'>
//                             <div className='flex w-full sm:w-[229px] h-[100px] sm:h-[121px] flex-col justify-center items-center gap-4 shrink-0 rounded-[7px] bg-white'>
//                                 <Image src={'/svgs/ContactPhone.svg'} alt={'Phone'} width={27} height={29} />
//                                 <p className='text-[#344054] text-center font-inter text-xs font-normal leading-[15.953px]'>+1 (239) 380-0766</p>
//                             </div>
//                             <div className='flex w-full sm:w-[229px] h-[100px] sm:h-[121px] flex-col justify-center items-center gap-4 shrink-0 rounded-[7px] bg-white'>
//                                 <Image src={'/svgs/ContactLocation.svg'} alt={'Location'} width={27} height={29} />
//                                 <p className='text-[#344054] text-center font-inter text-xs font-normal leading-[15.953px]'>Av.Sunset</p>
//                             </div>
//                             <div className='flex w-full sm:w-[229px] h-[100px] sm:h-[121px] flex-col justify-center items-center gap-4 shrink-0 rounded-[7px] bg-white'>
//                                 <Image src={'/svgs/ContactEmail.svg'} alt={'Email'} width={27} height={29} />
//                                 <p className='text-[#344054] text-center font-inter text-xs font-normal leading-[15.953px]'>email@hosting.com</p>
//                             </div>
//                         </div>

//                         {/* Contact form */}
//                         <Form />
//                     </div>
//                 </div>
//             </div>

//             {/* Background vector - full width */}
//             <div id='vector' className='absolute bottom-0 left-0 w-full z-0'>
//                 <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[637px]'>
//                     <Image 
//                         src={'/svgs/ContactVector.svg'} 
//                         alt={'vector'}
//                         fill
//                         className='object-cover object-top'
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Section1



// 'use client'
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import Form from '../../../components/Desktop/ContactForm/Form'

// function Section1() {
//     const [vectorSrc, setVectorSrc] = useState('/svgs/ContactVector1920.svg')

//     useEffect(() => {
//         const updateVector = () => {
//             const width = window.innerWidth
//             if (width >= 1920) setVectorSrc('/svgs/ContactVector1920.svg')
//             else if (width >= 1536) setVectorSrc('/svgs/ContactVector1536.svg')
//             else if (width >= 1280) setVectorSrc('/svgs/ContactVector1280.svg')
//             else if (width >= 1024) setVectorSrc('/svgs/ContactVector1024.svg')
//             else setVectorSrc('/svgs/ContactVector768.svg')
//         }

//         updateVector()
//         window.addEventListener('resize', updateVector)
//         return () => window.removeEventListener('resize', updateVector)
//     }, [])

//     return (
//         <section className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 py-10 bg-[#F5F9FF] max-h-screen overflow-hidden">

//             <div className="flex flex-col xl:flex-row xl:items-start gap-10 xl:gap-[30px] relative z-10">

                
//                     {/* Imagen de la mujer posicionada con control de altura */}
//                     <div className="w-full xl:w-1/5 relative xl:static flex justify-center xl:justify-start">
//                         <Image
//                             src="/images/ContactWoman.png"
//                             alt="woman"
//                             width={371}
//                             height={739}
//                             className="w-[200px] sm:w-[250px] md:w-[300px] xl:w-[371px] h-auto object-contain absolute bottom-[80%] xl:static z-0"
//                             style={{ zIndex: 0 }}
//                         />
//                     </div>

//                     {/* Texto */}
//                     <div className="w-full xl:w-1/5 flex flex-col justify-start gap-5 text-center xl:text-left z-10">
//                         <p className="text-[#0F172A] font-inter text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-tight">
//                             Let's work together!
//                         </p>
//                         <p className="text-[#212939] font-inter text-base sm:text-lg md:text-[18.93px] leading-relaxed">
//                             We're here to help you enjoy your pool again. Complete the form and we'll be in touch within the next 24 hours.
//                         </p>
//                     </div>

                

//                 {/* Formulario */}
//                 <div className="w-full xl:w-3/5 flex flex-col gap-5 z-10">

//                     {/* Tarjetas de contacto */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-md shadow-sm">
//                             <Image src="/svgs/ContactPhone.svg" alt="Phone" width={27} height={29} />
//                             <p className="text-[#344054] text-center text-xs">+1 (239) 380-0766</p>
//                         </div>
//                         <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-md shadow-sm">
//                             <Image src="/svgs/ContactLocation.svg" alt="Location" width={27} height={29} />
//                             <p className="text-[#344054] text-center text-xs">Av.Sunset</p>
//                         </div>
//                         <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-md shadow-sm">
//                             <Image src="/svgs/ContactEmail.svg" alt="Email" width={27} height={29} />
//                             <p className="text-[#344054] text-center text-xs">email@hosting.com</p>
//                         </div>
//                     </div>

//                     {/* Formulario */}
//                     <div className="bg-white z-0 rounded-md shadow-sm overflow-auto">
//                         <Form />
//                     </div>
//                 </div>
//             </div>

//             {/* Vector inferior como fondo */}
//             <div className="w-full z-10 xl:absolute xl:bottom-0 xl:left-0">
//                 <Image
//                     src={vectorSrc}
//                     alt="vector"
//                     width={1920}
//                     height={637}
//                     className="w-full h-auto"
//                 />
//             </div>
//         </section>
//     )
// }

// export default Section1







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
//   const [vectorSrc, setVectorSrc] = useState('/svgs/ContactVector1920.svg');
  
//   const roleOptions = ['Pool Owner', 'Property Manager', 'Contractor', 'Designer'];
  
//   useEffect(() => {
//     const updateVector = () => {
//       const width = window.innerWidth
//       if (width >= 1920) setVectorSrc('/svgs/ContactVector1920.svg')
//       else if (width >= 1536) setVectorSrc('/svgs/ContactVector1536.svg')
//       else if (width >= 1280) setVectorSrc('/svgs/ContactVector1280.svg')
//       else if (width >= 1024) setVectorSrc('/svgs/ContactVector1024.svg')
//       else setVectorSrc('/svgs/ContactVector768.svg')
//     }

//     updateVector()
//     window.addEventListener('resize', updateVector)
//     return () => window.removeEventListener('resize', updateVector)
//   }, []);

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
//         <div className="flex flex-col lg:flex-row items-center justify-between py-12 md:py-16 lg:py-20">
//           {/* Left side with woman image and text */}
//           <div className="flex flex-row w-full lg:w-[50%] mb-12 lg:mb-0 pt-10 lg:pt-0">
//             <div className="relative">
//               <img 
//                 src="/images/ContactWoman.png" 
//                 alt="Contact professional" 
//                 className="w-full max-w-[400px] md:max-w-[500px] mx-auto lg:mx-0"
//               />
//             </div>
//             <div className="mt-8 text-center lg:text-left">
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
            
//             {/* Form title */}
//             <div className="text-center mb-6">
//               <h2 className="text-2xl font-semibold text-gray-800">Contact us</h2>
//               <p className="text-gray-600">Enter Your Details Below</p>
//             </div>
            
//             {/* Form */}
//             <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-sm">
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
//               <div className="mt-6">
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//                 >
//                   Get in Touch
//                 </button>
//               </div>
//             </form>
          
          
//           </div>
        
//         </div>
//       </div>
      
//       {/* Vector background */}
//       <div className="absolute bottom-0 left-0 w-full z-[10]">
//         <img 
//           src={vectorSrc} 
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


import React from 'react'

function Section1() {
  return (
    <div>Section1</div>
  )
}

export default Section1