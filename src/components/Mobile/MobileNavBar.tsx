import React from "react";
import { MenuIcon } from "lucide-react";

const MobileNavBar = () => {
  return (
    <header className="flex items-center justify-between w-full px-4 py-2 bg-white shadow-sm max-w-screen-sm mx-auto">
      <img
        src="/images/logo.png"
        alt="Pool Quality Logo"
        className="h-[45px] w-auto"
      />

      <button className="p-2 rounded-md hover:bg-gray-100">
        <MenuIcon className="h-6 w-6 text-gray-800" />
      </button>
    </header>
  );
};

export default MobileNavBar;
