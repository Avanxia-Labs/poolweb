import React, { useState } from 'react';
import InputDesign from '@/components/Desktop/Frame66Card';

// Definimos un tipo para los datos de servicios
type ServiceData = {
  id: string;
  name: string;
  title: string;
  description: string[];
  beforeAfterImage: string;
  beforeImage: string;
  afterImage: string;
};

const Section2 = () => {
  // Datos de los diferentes servicios
  const servicesData: ServiceData[] = [
    {
      id: 'pool-cleaning',
      name: 'Pool Cleaning',
      title: 'The Pool Quality Cleaning Difference',
      description: [`
        Keeping your pool visually appealing is just the start. Our professional Pool Cleaning service ensures your water is not only sparkling clear but also healthy and safe for swimming, reflecting our commitment to meticulous care backed by scientific understanding. We go beyond a simple surface skim. Our comprehensive cleaning includes thoroughly brushing pool walls, steps, and waterlines to dislodge algae and buildup, meticulous vacuuming of the pool floor to remove settled debris, emptying skimmer and pump baskets to maintain proper flow, and ensuring overall cleanliness.\n
        Whether you need a one-time deep clean after a party or storm, require seasonal opening or closing services, or are dealing with the challenge of recovering a green pool, Pool Quality Solutions has the specialized tools and expertise required. Even during routine cleaning, our knowledge of water chemistry – driven by our founder's Chemical Engineering background – ensures we help maintain the delicate water balance, protecting both swimmers and your valuable pool equipment from potential issues caused by neglect. Let us handle the hard work with precision and care, so you can simply relax and enjoy your pristine, healthy pool environment.
      `],
      beforeAfterImage: '/images/poolBeforeAndAfter.png',
      beforeImage: '/images/pooldirty2.png',
      afterImage: '/images/poolclean2.png'
    },
    {
      id: 'pool-maintenance',
      name: 'Pool Maintenance',
      title: 'Professional Pool Maintenance Services',
      description: [`
        Choosing Pool Quality Maintenance changes everything. Our professional maintenance service ensures your investment is protected and your pool is always ready to enjoy. Following our maintenance schedule, we make sure all systems function correctly, extending the lifespan of your equipment and keeping the water crystal clear.\n
        Our certified technicians perform comprehensive inspections of the filtration system, pumps, heaters, and automation systems. We check and adjust chemical levels to prevent problems like algae, cloudy water, or skin irritation. Regular maintenance eliminates debris buildup, reduces the chances of costly repairs, and allows you to enjoy your pool without worries.\n
        Whether you need weekly, bi-weekly, or monthly service, our customized plans adapt to your specific needs. Equipped with the necessary tools and expertise, we perform preventive maintenance that saves time and money in the long run. Our knowledge of water chemistry and filtration systems ensures superior results. Let us handle the technical aspects while you simply enjoy your crystal-clear water and perfectly maintained pool environment.
      `],
      beforeAfterImage: '/images/maintenance-comparison.png',
      beforeImage: '/images/maintenance-before.png',
      afterImage: '/images/maintenance-after.png'
    },
    {
      id: 'equipment-repair',
      name: 'Equipment Repair & Installation',
      title: 'Expert Pool Equipment Solutions',
      description: [`
      Trust Pool Quality for all your pool equipment needs. Our certified technicians have experience with all major brands and equipment models, ensuring your system operates at maximum efficiency. When something fails in your pool, we respond quickly to diagnose and fix the problem, minimizing downtime.\n
      Our comprehensive repair service includes pumps, filters, heaters, chlorination systems, automatic controllers, and cleaning systems. We use quality replacement parts and offer warranty on our repairs. For new installations, we ensure each component is properly sized and configured for optimal performance, energy savings, and ease of maintenance.\n
      We stay updated with the latest technologies in pool equipment, offering you options that can reduce your operating costs and enhance your pool experience. Whether it's a simple repair or a complete system renovation, our team provides expert advice, professional installation, and ongoing support. Count on us to keep your equipment running smoothly season after season.
      `],
      beforeAfterImage: '/images/equipment-service.png',
      beforeImage: '/images/equipment-old.png',
      afterImage: '/images/equipment-new.png'
    },
    {
      id: 'pool-automation',
      name: 'Pool Automation',
      title: 'Modern Pool Automation Systems',
      description: [`
      Discover ultimate convenience with Pool Quality automation services. We integrate smart systems that allow you to control all aspects of your pool with just a button press. From water temperature to lighting, filtration scheduling, and special features, automation completely transforms how you interact with your pool.\n
      Our automation specialists assess your current setup and identify the best options to modernize your system. We install cutting-edge controllers compatible with smartphones and voice assistants, allowing you to manage your pool from anywhere. Smart programming optimizes filtration cycles and chemical treatments, improving energy efficiency and reducing operating costs.\n
      Automation not only adds convenience but also value to your property. Our solutions include remote monitoring, maintenance alerts, and automatic adjustments based on weather conditions. We provide comprehensive training on your new system and ongoing technical support to ensure you get the most out of your automated pool. Let us elevate your aquatic experience with technology that makes pool maintenance simple, efficient, and truly enjoyable.
      `],
      beforeAfterImage: '/images/automation-showcase.png',
      beforeImage: '/images/manual-controls.png',
      afterImage: '/images/automated-system.png'
    },
    {
      id: 'diagnostics',
      name: 'Diagnostics & Troubleshooting',
      title: 'Advanced Pool Diagnostics Services',
      description: [`
      Discover ultimate convenience with Pool Quality automation services. We integrate smart systems that allow you to control all aspects of your pool with just a button press. From water temperature to lighting, filtration scheduling, and special features, automation completely transforms how you interact with your pool.\n
      Our automation specialists assess your current setup and identify the best options to modernize your system. We install cutting-edge controllers compatible with smartphones and voice assistants, allowing you to manage your pool from anywhere. Smart programming optimizes filtration cycles and chemical treatments, improving energy efficiency and reducing operating costs.\n
      Automation not only adds convenience but also value to your property. Our solutions include remote monitoring, maintenance alerts, and automatic adjustments based on weather conditions. We provide comprehensive training on your new system and ongoing technical support to ensure you get the most out of your automated pool. Let us elevate your aquatic experience with technology that makes pool maintenance simple, efficient, and truly enjoyable.
      `],
      beforeAfterImage: '/images/diagnostics-testing.png',
      beforeImage: '/images/problem-pool.png',
      afterImage: '/images/solution-implemented.png'
    },

    {
        id: 'design-and-construction',
        name: 'Custom Pool Design & Construction',
        title: 'Custom Pool Design & Construction',
        description: [`
        At Pool Quality, we transform visions into stunning aquatic realities. Our custom design and construction process begins with a detailed consultation to fully understand your desires, needs, and the environment where your new pool will be located. Our expert designers create concepts that maximize your space, complement existing architecture, and reflect your personal style.\n
        From infinity pools with panoramic views to intimate tropical oases or elegant minimalist designs, our construction team has the expertise to execute projects of any scale and complexity. We use the highest quality materials and advanced construction techniques that ensure durability, energy efficiency, and ease of maintenance. Every detail, from finish selection to the integration of special water features, is meticulously planned.\n
        Throughout the construction process, we maintain transparent communication and constant supervision to ensure that every aspect meets our rigorous standards. Our commitment to excellence extends beyond project completion, offering comprehensive guidance on the maintenance and operation of your new pool. Let us create a custom aquatic space that not only beautifies your property but also enriches your lifestyle for many years to come.
        `],
        beforeAfterImage: '/images/design-custom-pool.png',
        beforeImage: '/images/custom-pool-one.png',
        afterImage: '/images/custom-pool-two.png'
    }
  ];

  // Estado para el servicio seleccionado actualmente
  const [selectedService, setSelectedService] = useState<string>('pool-cleaning');

  // Encontrar el servicio actualmente seleccionado
  const currentService = servicesData.find(service => service.id === selectedService) || servicesData[0];

  return (
    <div className="flex flex-col lg:flex-row bg-[#F5F9FF] w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-32 gap-8 lg:gap-12 xl:gap-[118px]">
      
      {/* Before/After Section - Responsive layout */}
      <div className="w-full lg:w-3/5">
        <div className="w-full mb-6 md:mb-8 lg:mb-[58px]">
          <img 
            id='poolBeforeAndAfter'
            src={currentService.beforeAfterImage}
            alt="Pool service comparison"
            className="rounded-lg w-full h-auto"
          />
        </div>

        <div id='serviceDescription' className="w-full mb-6 md:mb-8 lg:mb-[58px]">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3 md:mb-4">{currentService.title}</h2>
          {currentService.description.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Before/After Pool Images - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div id='beforeImage' className="border border-blue-200 rounded-lg overflow-hidden">
            <img
              src={currentService.beforeImage}
              alt="Before service"
              className="w-full h-auto"
            />
          </div>
          <div id='afterImage' className="border border-blue-200 rounded-lg overflow-hidden">
            <img
              src={currentService.afterImage}
              alt="After service"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Services and Calculator Section - Responsive layout */}
      <div className="flex flex-col w-full lg:w-2/5 gap-8 md:gap-10 lg:gap-12">
        {/* Services Column */}
        <div id='Services' className="w-full max-w-[485px] mt-6 lg:mt-[110px] bg-white rounded-lg shadow-sm mx-auto lg:mx-0">
          <div className="px-4 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Services</h3>
            <ul className="space-y-3 md:space-y-4">
              {servicesData.map(service => (
                <li 
                  key={service.id}
                  className={`cursor-pointer transition-colors duration-200 text-sm md:text-base ${
                    selectedService === service.id 
                      ? "text-blue-600 font-medium" 
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscription Calculator */}
        <div className="w-full max-w-[485px] mx-auto lg:mx-0">
          <InputDesign />
        </div>

        {/* Social Media Section */}
        <div className="w-full max-w-[485px] mt-6 md:mt-10 lg:mt-16 mx-auto lg:mx-0">
          <div className="border border-gray-300 rounded-lg px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
            <h3 className="text-lg md:text-xl flex justify-left font-medium text-gray-800 mb-3 md:mb-4">Follow Us Instagram</h3>
            <div className="flex justify-left space-x-4 md:space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 10.08l-7.76-5.88a6.82 6.82 0 0 1 2-1.52 5.42 5.42 0 0 1 5.56.48l1.2.9 1.27-.9a5.42 5.42 0 0 1 5.56-.48 6.82 6.82 0 0 1 2 1.52l-7.83 5.88"></path>
                  <path d="M10 17.4h.01"></path>
                  <path d="M15 17.4h.01"></path>
                  <path d="M8.5 20h7"></path>
                  <path d="M12.01 7.7c-.63-.7-1.51-1.2-2.51-1.2C7.67 6.5 6 8.17 6 10s1.01 3.5 6.01 3.5"></path>
                  <path d="M18 10c0-1.83-1.67-3.5-3.5-3.5-.99 0-1.88.5-2.5 1.2"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;