// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// function NavBar() {
//     const pathname = usePathname()

//     // check if current route matches
//     function isActive(path: string): boolean {
//         return pathname === path
//     }
    

//     return (
//         <nav className='flex flex-col items-center w-full px-4 pt-6 gap-2.5 bg-[#F5F9FF]'>
//             <div className='w-full max-w-screen-[1920px]'>
//                 <div className='flex justify-between items-start w-full'>

//                     {/* Logo and menu */}
//                     <div className='flex items-center gap-6'>

//                         {/* Logo also links to home */}
//                         <Link href="/">
//                             <div 
//                                 id='logo' 
//                                 className="cursor-pointer w-[12rem] h-auto aspect-[197.83/55.80] bg-[url('/images/logo.png')] bg-center bg-cover bg-no-repeat"
//                             ></div>
//                         </Link>

//                         {/* Menu items */}
//                         <div className="hidden md:flex items-center gap-12">

//                             {/* Placeholder - not in design */}
//                             <div className="text-zinc-900 font-semibold text-base leading-6 font-inter"></div>

//                             <Link href="/">
//                                 <div className={`${isActive('/') ? 'text-[#485AFF] underline' : 'text-zinc-900'} font-semibold text-base leading-6 font-inter`}>
//                                     Home
//                                 </div>
//                             </Link>

//                             <Link href="/services">
//                                 <div className={`${isActive('/services') ? 'text-[#485AFF] underline' : 'text-zinc-900'} font-semibold text-base leading-6 font-inter`}>
//                                     Services
//                                 </div>
//                             </Link>

//                             <Link href="/about">
//                                 <div className={`${isActive('/about') ? 'text-[#485AFF] underline' : 'text-zinc-900'} font-semibold text-base leading-6 font-inter`}>
//                                     About Us
//                                 </div>
//                             </Link>

//                         </div>
//                     </div>

//                     {/* Contact button */}
//                     <Link href="/form">
//                         <div className={`flex h-12 px-6 py-3 items-center gap-2 rounded-lg border-2 
//                             ${isActive('/form') ? 'border-[#485AFF]' : 'border-[#0F172A]'}`}>
//                             <p className={`font-inter text-base font-semibold leading-6 
//                                 ${isActive('/form') ? 'text-[#485AFF]' : 'text-[#0F172A]'}`}>
//                                 Contact
//                             </p>
//                             {/* Placeholder icon */}
//                             <div id='icon'></div>
//                         </div>
//                     </Link>

//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default NavBar


'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBar() {
    const pathname = usePathname()

    // check if current route matches
    function isActive(path: string): boolean {
        return pathname === path
    }
    
    // Handler para la navegación con transición
    const handleNavigation = (path: string, e: React.MouseEvent) => {
        e.preventDefault()
        // Usar la función global que expusimos desde el componente PageTransition
        if (window.navigateWithTransition) {
            window.navigateWithTransition(path)
        }
    }

    return (
        <nav className='flex flex-col items-center w-full px-4 pt-6 gap-2.5 bg-[#F5F9FF]'>
            <div className='w-full max-w-screen-[1920px]'>
                <div className='flex justify-between items-start w-full'>

                    {/* Logo and menu */}
                    <div className='flex items-center gap-6'>

                        {/* Logo also links to home */}
                        <Link href="/" onClick={(e) => handleNavigation('/', e)}>
                            <div 
                                id='logo' 
                                className="cursor-pointer w-[12rem] h-auto aspect-[197.83/55.80] bg-[url('/images/logo.png')] bg-center bg-cover bg-no-repeat"
                            ></div>
                        </Link>

                        {/* Menu items */}
                        <div className="hidden md:flex items-center gap-12">

                            {/* Placeholder - not in design */}
                            <div className="text-zinc-900 font-semibold text-base leading-6 font-inter"></div>

                            <Link href="/" onClick={(e) => handleNavigation('/', e)}>
                                <div className={`${isActive('/') ? 'text-[#485AFF] underline' : 'text-zinc-900'} font-semibold text-base leading-6 font-inter`}>
                                    Home
                                </div>
                            </Link>

                            <Link href="/services" onClick={(e) => handleNavigation('/services', e)}>
                                <div className={`${isActive('/services') ? 'text-[#485AFF] underline' : 'text-zinc-900'} font-semibold text-base leading-6 font-inter`}>
                                    Services
                                </div>
                            </Link>

                            <Link href="/about" onClick={(e) => handleNavigation('/about', e)}>
                                <div className={`${isActive('/about') ? 'text-[#485AFF] underline' : 'text-zinc-900'} font-semibold text-base leading-6 font-inter`}>
                                    About Us
                                </div>
                            </Link>

                        </div>
                    </div>

                    {/* Contact button */}
                    <Link href="/form" onClick={(e) => handleNavigation('/form', e)}>
                        <div className={`flex h-12 px-6 py-3 items-center gap-2 rounded-lg border-2 
                            ${isActive('/form') ? 'border-[#485AFF]' : 'border-[#0F172A]'}`}>
                            <p className={`font-inter text-base font-semibold leading-6 
                                ${isActive('/form') ? 'text-[#485AFF]' : 'text-[#0F172A]'}`}>
                                Contact
                            </p>
                            {/* Placeholder icon */}
                            <div id='icon'></div>
                        </div>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default NavBar