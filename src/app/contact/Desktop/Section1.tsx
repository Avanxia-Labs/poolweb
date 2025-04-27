'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Form from '@/components/Desktop/ContactForm/Form';

const Section1 = () => {
  return (
    <section className="bg-[#F4F4F5] relative w-full min-h-screen overflow-visible pb-0 mb-0">
      <div className="w-full h-full">
        <div className="min-h-screen relative flex flex-col lg:flex-row">
          {/* Left side with image - fixed minimum width to prevent shrinking */}
          <div className="relative lg:w-5/9 2xl:w-1/2 min-h-screen" style={{ overflow: 'visible' }}>
            {/* Mobile text overlay (visible only below lg) */}
            <div className="block lg:hidden flex flex-col items-center justify-center text-center z-20 py-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Let&apos;s<br />work<br />together!
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                We&apos;re here to help you enjoy your pool again. Complete the form and we&apos;ll be in touch within the next 24 hours.
              </p>
            </div>

            {/* Desktop image container with person and blue decorator as separate elements */}
            <div className="hidden lg:block absolute inset-0">
              {/* Container for both elements */}
              <div className="relative h-[100%] w-full" style={{ overflow: 'visible' }}>
                
                {/* Person image - positioned with correct spacing and minimum size */}
                <div 
                  className="absolute bottom-0 left-0 h-[90%] flex justify-center" 
                  style={{ 
                    bottom: '-1px',
                    width: 'max-content',
                    minWidth: '480px'
                  }}
                >
                  <img
                    src='/images/contact_image.png'
                    alt="Contact Person"
                    className="h-full w-auto object-contain object-bottom z-20"
                    style={{ 
                      width: 'auto',
                      minHeight: '90%',
                      position: 'relative',
                      zIndex: 20
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile image (visible only below lg) - set to 100% height */}
            <div className="h-[1110px] w-full mb-0 pb-0 block lg:hidden">
              <div className="h-full w-full relative">
                <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
                  <img
                    src='/images/yosbaniContact.png'
                    alt="Yosbani"
                    className="w-full h-full object-cover object-left-bottom"
                    style={{ objectPosition: 'left bottom' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side with contact info and form - original width maintained */}
          <div className="flex flex-col gap-[1.25rem] 2xl:justify-center w-full lg:w-4/9 2xl:w-1/2 lg:pl-0 2xl:pl-0 px-4 lg:px-0 lg:pr-10 relative z-30">
            {/* Desktop text overlay */}
            <div className='flex flex-col items-start gap-[2.5rem]'>
              <h1 className='text-[#0F172A] font-inter text-[4rem] font-bold leading-[4.3125rem] not-italic self-stretch'>Let&apos;s work together!</h1>

              <p className='text-[#212939] font-inter text-2xl not-italic font-normal leading-[2.375rem]'>We&apos;re here to help you enjoy your pool again. Complete the form and we&apos;ll be in touch within the next 24 hours.</p>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Teléfono */}
              <a
                href="tel:+12363800768"
                className="xl:h-[100px] 2xl:h-[120px] hover:rounded-[7px] hover:bg-white hover:shadow-[0px_9px_7.9px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center"
              >
                <Phone className="text-gray-500 mb-2" />
                <p className="text-sm text-center text-gray-600">+1 (236) 380-0768</p>
              </a>

              {/* Dirección */}
              <a
                href="https://www.google.com/maps?q=1743+Jung+Blvd+E,+Naples,+FL+34120"
                target="_blank"
                rel="noopener noreferrer"
                className="xl:h-[100px] 2xl:h-[120px] hover:rounded-[7px] hover:bg-white hover:shadow-[0px_9px_7.9px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center"
              >
                <MapPin className="text-gray-500 mb-2" />
                <p className="text-sm text-center text-gray-600">1743 Jung Blvd E Naples, Fl 34120</p>
              </a>

              {/* Correo */}
              <a
                href="mailto:poolqualitysolutions@hotmail.com"
                className="xl:h-[100px] 2xl:h-[120px] hover:rounded-[7px] hover:bg-white hover:shadow-[0px_9px_7.9px_rgba(0,0,0,0.4)] transition-all duration-300 bg-white p-4 rounded shadow-sm flex flex-col items-center justify-center"
              >
                <Mail className="text-gray-500 mb-2" />
                <p className="break-all text-sm text-center text-gray-600">poolqualitysolutions@hotmail.com</p>
              </a>
            </div>

            {/* Contact Form Component */}
            <div className='min-h-[500px] bg-white rounded-lg flex flex-col pt-2 mb-0 relative z-30'>
              {/* Form title */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Contact us</h2>
                <p className="text-gray-600">Enter Your Details Below</p>
              </div>

              {/* Form */}
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* SVG decorador azul - colocado por detrás y centrado, alineado perfectamente */}
      <div className="absolute bottom-[-1px] w-full overflow-visible" style={{ zIndex: 10 }}>
        <div className="relative w-full overflow-visible" style={{ height: 'auto' }}>
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2" 
            style={{ 
              width: '100vw', /* Se estirará con el ancho del viewport */
              minWidth: '100%',
              height: 'auto',
              zIndex: 10
            }}
          >
            <img
              src="/svgs/contact_blue_desktop.svg"
              alt="Decorative Blue Shape"
              className="w-[150%] h-auto"
              style={{
                objectFit: 'cover',
                objectPosition: 'bottom',
                minWidth: '150%',
                left: '-25%',
                position: 'relative'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;