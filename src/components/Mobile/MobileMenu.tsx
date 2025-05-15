import React from 'react';
import { X } from 'lucide-react';
import { Mail, Phone, Facebook, Instagram, Music2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@/components/Mobile/icons/HomeIcon';
import ServicesIcon from '@/components/Mobile/icons/ServicesIcon';
import AboutIcon from '@/components/Mobile/icons/AboutIcon';
import ContactIcon from '@/components/Mobile/icons/ContactIcon';
import ActiveMarker from './icons/ActiveMarker';




const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {

    const pathname = usePathname();      

const getLinkClass = (href: string) =>
  `flex items-center gap-2 text-[14px] leading-[22px] font-medium tracking-[0.28px] font-inter ${
    pathname === href
      ? 'text-[#485AFF] underline decoration-solid [text-decoration-skip-ink:none]'
      : 'text-black'
  }`;

  const getStrokeColor = (href: string) =>
    pathname === href ? '#485AFF' : '#9EA2BE';
  console.log('PATH:', pathname);
  console.log('Home color:', getStrokeColor('/'));
  console.log('Services color:', getStrokeColor('/services'));
  

  return (
    <div
    className={`fixed top-0 right-0 z-50 h-full bg-white shadow-lg w-3/4 max-w-xs flex flex-col justify-between transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    {/* Top */}
    <div className="pt-[120px] px-6">
      {/* Botón cerrar */}
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-600">
        <X className="h-6 w-6" />
      </button>
  
      {/* Logo */}
      <div className="flex justify-center mb-3">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[45px] cursor-pointer"
          />
        </Link>      
      </div>

      <div className="w-full flex justify-center mb-4">
        <div className="w-[80%] border-t border-dashed border-[#D9D9D9]" />
      </div>
      {/* Menú */}
      <nav className="flex flex-col gap-[38px] items-start w-full">
        {/* Home */}
        <Link href="/" onClick={onClose} className="relative w-full pl-[16px]">
          {pathname === '/' && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[24px]">
              <ActiveMarker className="w-[12px] h-[31px]" />
            </div>
          )}
          <div className="flex items-center gap-2">
            <HomeIcon className="w-6 h-6" stroke={getStrokeColor('/')} />
            <span className={getLinkClass('/')}>Home</span>
          </div>
        </Link>
        {/* Services */}
        <Link href="/services" onClick={onClose} className="relative w-full pl-[16px]">
          {pathname === '/services' && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[24px]">
              <ActiveMarker className="w-[12px] h-[31px]" />
            </div>
          )}
          <div className="flex items-center gap-2">
            <ServicesIcon className="w-6 h-6" stroke={getStrokeColor('/services')} />
            <span className={getLinkClass('/services')}>Services</span>
          </div>
        </Link>
        {/* About Us */}
        <Link href="/about" onClick={onClose} className="relative w-full pl-[16px]">
          {pathname === '/about' && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[24px]">
              <ActiveMarker className="w-[12px] h-[31px]" />
            </div>
          )}
          <div className="flex items-center gap-2">
            <AboutIcon className="w-6 h-6" stroke={getStrokeColor('/about')} />
            <span className={getLinkClass('/about')}>About Us</span>
          </div>
        </Link>
        {/* Contact Button */}
        <Link href="/contact" onClick={onClose} className="mt-[30px] w-full flex justify-center">
          <button
            className={`w-[212px] px-[20px] py-[10px] flex items-start justify-center gap-[21px] rounded-none text-[14px] leading-[22px] font-medium tracking-[0.28px] font-inter transition-colors duration-300 ${
              pathname === '/contact' ? 'bg-[#3A48CC]' : 'bg-[#485AFF]'
            } text-white`}
          >
            <ContactIcon className="w-6 h-6" />
            Contact
          </button>
        </Link>
      </nav>
    </div>
      {/* Footer */}
      <div className="bg-[#0F172A] text-white px-6 py-4 text-sm font-inter">
        <div className="mb-2 flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>poolqualitysolutions@hotmail.com</span>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+1 (239) 580-0766</span>
        </div>

        {/* Redes */}
        <div className="flex justify-around items-center gap-4 text-white">
        {/* <Music2 className="text-white w-6 h-6" aria-label="TikTok" />
        <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a> */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
