import React from 'react'
import Image from 'next/image'

function Frame64() {
  return (
    <section id='Frame64' className='flex h-full max-h-[1127px] w-full max-w-[1622px] py-[120px] flex-col items-center gap-[41px]'>

                <div id='Frame65' className='flex px-[320px] flex-col items-center gap-5 self-stretch'>
                    <p className='text-[#0F172A] text-center font-plus_jakarta_sans text-4xl font-bold leading-[60px] w-[726.25px]'>
                        Get Your Instant Pool Service <br /> Estimate
                    </p>
                    <button className='flex px-5 py-4 flex-col justify-center items-center gap-2 rounded-lg bg-[#F5F9FF]'>
                        <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
                            <p className='text-[#485AFF] text-center font-inter text-lg font-extrabold leading-[28px]'>
                                Enter Your Pool Details Below
                            </p>
                            {/* NO ESTA EN EL DISEÑO */}
                            <div id='icon'></div>
                        </div>
                    </button>
                </div>

                <div id='Frame67' className='relative flex w-full max-w-[1622px] justify-center items-start gap-[76px]'>
                    <div id='Vector12' className='w-full max-w-[1622px] max-h-[1127px] absolute  fill-[#007FBE]'>
                        <Image src={'/svgs/vector12.svg'} alt={'vector'} width={1622} height={514} />
                    </div>
                    <div id='Frame66'></div>
                    <div id='Image'></div>
                </div>
            </section>
  )
}

export default Frame64