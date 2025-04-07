import React from 'react'
import Link from 'next/link'

function NavBar() {
    return (
        <nav id='nav' className='flex w-full max-w-[1600px] mx-auto h-[171px] pt-[30px] flex-col items-center gap-[10px] shrink-0'>
            <div id='Group25' className='mx-auto w-full max-w-[1286.477px] h-[55.805px] shrink-0'>
                <div id='Header' className='mx-auto w-full max-w-[1286.477px] h-[55.805px] shrink-0'>
                    <div id='Frame2' className='flex mx-auto w-full max-w-[1286.477px] justify-between items-start'>

                        <div id='Frame1' className='flex items-center gap-[15px]'>
                            <div id='logo' className="w-[197.827px] h-[55.805px] aspect-[197.83/55.80] bg-[url('/images/logo.png')] bg-lightgray bg-center bg-cover bg-no-repeat"></div>
                            <div id='menu' className="flex items-center gap-[47px]">

                                {/* NO ESTA EN EL DISEÑO */}
                                <div id='Services1' className="text-zinc-900 font-semibold text-base leading-6 font-inter">

                                </div>

                                <Link href="/">
                                    <div id='Home' className="text-[#485AFF] font-semibold text-base leading-6 font-inter underline">Home</div>
                                </Link>

                                <Link href="/services">
                                    <div id='Services2' className="text-zinc-900 font-semibold text-base leading-6 font-inter">Services</div>
                                </Link>

                                <Link href="/about">
                                    <div id='AboutUs' className='text-zinc-900 font-semibold text-base leading-6 font-inter'>About Us</div>
                                </Link>

                            </div>
                        </div>

                        <Link href="/form">
                            <div id='Button' className='flex h-[50px] p-[16px_24px] flex-col justify-center items-center gap-2.5 rounded-[8px] border-2 border-[#0F172A]'>
                                <div id='Frame1' className='flex justify-center items-center gap-2.25'>
                                    <p id='ButtonName' className='text-[#0F172A] text-right font-inter text-base font-semibold leading-6'>
                                        Contact
                                    </p>

                                    {/* NO ESTA EN EL DISEÑO */}
                                    <div id='icon' ></div>
                                </div>
                            </div>
                        </Link>


                    </div>
                </div>
            </div>

        </nav>

        
    )
}

export default NavBar
