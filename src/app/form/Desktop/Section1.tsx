'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Form from '@/components/Desktop/ContactForm/Form'

const Section1 = () => {
  return (
    <section className="bg-[#F4F4F5] relative w-full min-h-screen overflow-hidden">
      <div className="w-full">
        <div className="min-h-screen relative flex flex-col lg:flex-row">
          {/* Left side with image - modified to occupy 85% height on desktop, 100% on mobile */}
          <div className="relative lg:w-5/9 2xl:w-1/2 min-h-screen">
            {/* Mobile text overlay (visible only below lg) */}
            <div className="block lg:hidden flex flex-col items-center justify-center text-center z-20 py-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Let's<br />work<br />together!
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                We're here to help you enjoy your pool again. Complete the form and we'll be in touch within the next 24 hours.
              </p>
            </div>

            {/* Desktop image container with absolute positioning (>1024px) */}
            <div className="hidden lg:block absolute inset-0">
              {/* Image container set to 85% height and positioned at the bottom */}
              <div className="relative h-[100%] w-full">
                {/* <div className="absolute bottom-0 left-0 w-full h-[100%] 2xl:h-[100%] overflow-hidden">
                  <img 
                    src='/images/yosbaniContact.png'
                    alt="Yosbani"
                    className="w-full h-full object-cover object-left-bottom"
                    style={{ objectPosition: 'left bottom' }}
                  />
                </div> */}

                <div className='absolute bottom-0 left-0 w-full h-[98%]'>
                  <div className="absolute bottom-0 top-0 left-0 w-full h-[100%] 2xl:h-[100%] overflow-hidden">
                    <img
                      src='/images/yosbaniContact.png'
                      alt="Yosbani"
                      className="w-full h-full object-cover object-left-top"
                      style={{ objectPosition: 'left top' }}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop text overlay */}
              <div className="wide-1920 absolute top-10 right-0 flex flex-col items-start justify-start max-w-md xl:max-w-[430px] 2xl:max-w-lg lg:max-w-sm lg:items-start px-8 z-20">
                <h1 className="title-1920 title-1800 text-4xl md:text-5xl lg:text-3xl xl:text-6xl font-bold text-gray-800 mb-4">
                  Let's<br />work<br />together!
                </h1>
                <p className=" text-1920 text-1800 text-lg text-gray-600 lg:text-start lg:text-2xl lg:max-w-[190px] xl:max-w-full xl:text-3xl 2xl:text-4xl">
                  We're here to help you enjoy your pool again. Complete the form and we'll be in touch within the next 24 hours.
                </p>
              </div>
            </div>

            {/* Mobile image (visible only below lg) - set to 100% height */}
            <div className="h-[1110px] w-full mb-[10px] block lg:hidden">
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

          {/* Right side with contact info and form */}
          <div className="flex flex-col 2xl:justify-center w-full lg:w-4/9 2xl:w-1/2 lg:pl-5 2xl:pl-10 px-4 lg:px-0 lg:pr-10">
            {/* Contact cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-6 lg:mt-16">
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
            <div className='min-h-[500px] bg-white rounded-lg flex flex-col pt-2 mb-10'>
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
    </section>
  );
};

export default Section1;