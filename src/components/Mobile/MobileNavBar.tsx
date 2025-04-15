import React from "react";
import { Menu } from 'lucide-react'; // ícono hamburguesa
import { useState } from 'react';
import MobileMenu from '@/components/Mobile/MobileMenu';


const MobileNavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
      <header className="flex items-center justify-between w-full px-4 py-2 bg-[#f7fafe] shadow-sm">
        <img src="/images/logo.png" alt="Pool Quality Logo" className="h-[45px] w-auto" />

        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </header>

      {/* Menú móvil */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
    );
  };
  
export default MobileNavBar;
