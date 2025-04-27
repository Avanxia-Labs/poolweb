import React, { useState } from 'react';
import ExplorePoolServices from './ExplorePoolServices';
import { SubscriptionCalculator } from '@/components/shared/SubscriptionCalculator';

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
    // Contenedor exterior que permite que el fondo se extienda a todo el ancho disponible
    <div className="w-full bg-[#F5F9FF]">
      {/* Contenedor interior que mantiene el contenido con un ancho máximo fijo en 2xl */}
      <div className="flex flex-col justify-center xl:flex-row items-center w-full py-8 md:py-12 xl:py-16 px-4 md:px-8 xl:px-16 xl:px-32 
        gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-[118px] 2xl:max-w-[1536px] 2xl:mx-auto">

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
            <h2 className="md:px-4 text-2xl md:text-3xl font-bold text-blue-600 mb-3 md:mb-4">{currentService.title}</h2>
            {currentService.description.map((paragraph, index) => (
              <p key={index} className="md:px-4 text-gray-700 mb-3 md:mb-4 text-sm md:text-base whitespace-pre-line">
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
        <div className="xl:mt-[-250px] flex flex-col w-full md:items-center lg:w-2/5 gap-8 md:gap-10 lg:gap-12">
          {/* Services Column - Mismo ancho que el calculador */}
          <div id='Services' className="w-full mt-6 bg-white rounded-lg shadow-sm" style={{minWidth: '30rem', maxWidth: '30rem'}}>
            <div className="px-4 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Services</h3>
              <ul className="space-y-3 md:space-y-4">
                {servicesData.map(service => (
                  <li
                    key={service.id}
                    className={`cursor-pointer transition-colors duration-200 text-sm md:text-base ${selectedService === service.id
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

          {/* Subscription Calculator or ExplorePoolServices */}
          <div className="flex flex-col md:items-center lg:items-center w-full">
            {['pool-cleaning', 'pool-maintenance'].includes(selectedService)
              ? <SubscriptionCalculator isMobile={false} />
              : <ExplorePoolServices />}
          </div>

          {/* Social Media Section */}
          {/* <div className="w-full mt-6 md:mt-10 lg:mt-16">
            <div className="border border-gray-300 rounded-lg px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
              <h3 className="text-lg md:text-xl flex justify-left font-medium text-gray-800 mb-3 md:mb-4">Follow Us Social Media</h3>
              <div className="flex justify-left space-x-4 md:space-x-6">
                
                <a href="https://tiktok.com" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
                    <path d="M9.99854 0.104736C11.1776 0.104736 12.2112 0.104736 13.3007 0.104736C13.6922 3.07401 15.3632 4.81671 18.5264 5.14007C18.5264 6.18009 18.5264 7.22322 18.5264 8.30522C16.6285 8.40471 15.0213 7.73313 13.3918 6.69C13.3918 7.63208 13.3982 8.47467 13.3902 9.31726C13.3726 11.1284 13.4653 12.9488 13.3023 14.7475C13.0244 17.796 10.0513 20.1777 6.81614 20.103C3.58902 20.0284 0.786855 17.5069 0.547217 14.4599C0.297994 11.2869 2.541 8.39228 5.67547 7.84195C7.94244 7.44397 7.94244 7.44397 7.94244 9.62507C7.94244 10.0852 7.94244 10.5454 7.94244 11.0662C6.62124 10.7941 5.52689 11.0475 4.68496 11.9834C3.79511 12.9737 3.72162 14.4303 4.45651 15.5185C5.16744 16.5694 6.49183 17.0638 7.72198 16.7358C9.0927 16.3705 9.97457 15.3553 9.98256 13.9857C10.0081 9.68725 9.99694 5.3888 10.0001 1.09035C9.99854 0.787203 9.99854 0.482503 9.99854 0.104736Z" fill="#0F172A" />
                  </svg>
                </a>

                <a href="https://facebook.com" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                    <path d="M3.20228 17.4538V9.54008H0.526367V6.45595H3.20228V4.18149C3.20228 1.54199 4.82213 0.104736 7.18804 0.104736C8.32134 0.104736 9.29535 0.18871 9.5792 0.226243V2.98467L7.93831 2.98541C6.6516 2.98541 6.40246 3.59392 6.40246 4.48686V6.45595H9.47115L9.07159 9.54008H6.40245V17.4538H3.20228Z" fill="#0F172A" />
                  </svg>
                </a>

                <a href="https://instagram.com" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10.2786 1.84414C12.8683 1.84414 13.175 1.85379 14.1981 1.90022C14.8132 1.90771 15.4225 2.02012 15.9994 2.23256C16.4178 2.39315 16.7977 2.63914 17.1148 2.95471C17.4319 3.27028 17.6791 3.64843 17.8404 4.06482C18.0539 4.639 18.1669 5.24537 18.1744 5.85754C18.2206 6.87572 18.2307 7.18094 18.2307 9.75833C18.2307 12.3357 18.221 12.6409 18.1744 13.6591C18.1669 14.2713 18.0539 14.8777 17.8404 15.4518C17.6791 15.8682 17.4319 16.2464 17.1148 16.562C16.7977 16.8775 16.4178 17.1235 15.9994 17.2841C15.4225 17.4965 14.8132 17.609 14.1981 17.6164C13.1755 17.6624 12.8688 17.6725 10.2786 17.6725C7.68834 17.6725 7.38166 17.6629 6.35906 17.6164C5.74394 17.609 5.13467 17.4965 4.55773 17.2841C4.13934 17.1235 3.75937 16.8775 3.44229 16.562C3.12521 16.2464 2.87803 15.8682 2.71668 15.4518C2.50322 14.8777 2.39027 14.2713 2.38274 13.6591C2.33655 12.6409 2.32639 12.3357 2.32639 9.75833C2.32639 7.18094 2.33609 6.87572 2.38274 5.85754C2.39027 5.24537 2.50322 4.639 2.71668 4.06482C2.87803 3.64843 3.12521 3.27028 3.44229 2.95471C3.75937 2.63914 4.13934 2.39315 4.55773 2.23256C5.13467 2.02012 5.74394 1.90771 6.35906 1.90022C7.38212 1.85425 7.68881 1.84414 10.2786 1.84414ZM10.2786 0.104736C7.64585 0.104736 7.31422 0.115768 6.27961 0.162655C5.47458 0.178591 4.67809 0.330289 3.92403 0.611296C3.27717 0.85385 2.69127 1.23395 2.20723 1.72508C1.71329 2.20699 1.33104 2.79042 1.08717 3.43461C0.804813 4.18507 0.652387 4.97775 0.636375 5.77894C0.590187 6.80769 0.579102 7.13773 0.579102 9.75787C0.579102 12.378 0.590187 12.7081 0.637298 13.7377C0.653311 14.5389 0.805737 15.3316 1.08809 16.0821C1.33169 16.7262 1.71363 17.3096 2.20723 17.7916C2.69154 18.2828 3.27776 18.6629 3.92495 18.9054C4.67902 19.1864 5.4755 19.3381 6.28054 19.354C7.31515 19.4 7.64539 19.4119 10.2795 19.4119C12.9136 19.4119 13.2438 19.4009 14.2784 19.354C15.0835 19.3381 15.88 19.1864 16.634 18.9054C17.2781 18.6569 17.8631 18.2773 18.3514 17.791C18.8397 17.3047 19.2207 16.7223 19.47 16.0811C19.7523 15.3307 19.9047 14.538 19.9207 13.7368C19.9669 12.7081 19.978 12.378 19.978 9.75787C19.978 7.13773 19.9669 6.80769 19.9198 5.77802C19.9038 4.97683 19.7514 4.18415 19.469 3.43369C19.2254 2.78959 18.8435 2.20616 18.3499 1.72416C17.8656 1.23292 17.2794 0.852812 16.6322 0.610377C15.8781 0.32937 15.0816 0.177672 14.2766 0.161736C13.2429 0.115769 12.9113 0.104736 10.2786 0.104736Z" fill="#0F172A" />
                    <path d="M10.2236 4.60571C9.23845 4.60571 8.27545 4.89644 7.45634 5.44114C6.63723 5.98583 5.99882 6.76003 5.62183 7.66582C5.24483 8.57162 5.1462 9.56833 5.33838 10.5299C5.53057 11.4915 6.00496 12.3748 6.70155 13.068C7.39814 13.7613 8.28566 14.2334 9.25186 14.4247C10.2181 14.616 11.2195 14.5178 12.1297 14.1426C13.0398 13.7674 13.8177 13.132 14.3651 12.3169C14.9124 11.5017 15.2045 10.5433 15.2045 9.56283C15.2045 8.24812 14.6797 6.98726 13.7456 6.05762C12.8115 5.12798 11.5446 4.60571 10.2236 4.60571ZM10.2236 12.7805C9.58412 12.7805 8.95903 12.5918 8.42734 12.2383C7.89565 11.8847 7.48125 11.3822 7.23654 10.7942C6.99183 10.2062 6.9278 9.55926 7.05255 8.93508C7.1773 8.31091 7.48523 7.73757 7.9374 7.28756C8.38956 6.83756 8.96565 6.5311 9.59282 6.40694C10.22 6.28279 10.8701 6.34651 11.4609 6.59005C12.0516 6.83359 12.5566 7.24601 12.9119 7.77516C13.2671 8.30431 13.4567 8.92642 13.4567 9.56283C13.4567 10.4162 13.1161 11.2347 12.5098 11.8381C11.9034 12.4415 11.0811 12.7805 10.2236 12.7805Z" fill="#0F172A" />
                    <path d="M15.743 5.42149C16.3859 5.42149 16.907 4.90287 16.907 4.26311C16.907 3.62336 16.3859 3.10474 15.743 3.10474C15.1002 3.10474 14.5791 3.62336 14.5791 4.26311C14.5791 4.90287 15.1002 5.42149 15.743 5.42149Z" fill="#0F172A" />
                  </svg>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section2;