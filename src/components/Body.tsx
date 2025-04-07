import React from 'react'
import Image from 'next/image'
import MyIcon from '../../public/svgs/vector2.svg'
import BeforeAfterAnimation from './BeforeAfterAnimation'
import Card from './Card'

function Body() {
    return (
        <div className='flex w-full max-w-[1600px] mx-auto h-[8719px] flex-col items-start shrink-0'>
            <section id='Frame25' className='flex flex-col items-center gap-2.5 self-stretch'>
                <div id='Group24' className='w-full max-w-[1600px] mx-auto h-[1051.376px]'>


                    <div id='Group23' className='relative w-full max-w-[1356px] mx-auto h-[877.731px] flex-shrink-0'>

                        <div id='Content' className='relative w-full max-w-[650px] mx-auto h-[405px] flex-shrink-0'>
                            <div id='Frame5' className='relative flex flex-col items-center gap-[23px] w-full max-w-[650px] mx-auto'>
                                <p className='text-[#0F172A] text-center font-inter text-[80px] font-bold leading-[86px] tracking-[-4px] self-stretch'>Transform Your Pool Experience</p>
                                <p className='text-[#212939] text-center font-inter text-[24px] font-normal leading-[40px] w-[594px]'>We combine expertise with dedication to deliver exceptional pool services that exceed expectations.</p>
                                <button id='button' className='flex flex-col justify-center items-center gap-[10px] p-4 px-5 rounded-[8px] bg-[#485AFF]'>
                                    <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
                                        <p className='text-white text-center font-inter text-[18px] font-semibold leading-[28px]'>GET YOUR FREE ESTIMATE</p>

                                        {/* NO ESTA EN EL DISEÑO */}
                                        <div id='icon'></div>
                                    </div>
                                </button>
                                <div id='info' className='w-[5px] h-[24px]'>
                                    <p className='text-[#9EA4B2] text-center font-poppins text-[16px] font-bold leading-none'>.</p>
                                </div>

                            </div>
                        </div>

                        {/* <div id='Before' className='flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0'>
                            <p className='text-[#3D4B5C] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px] blur-[11.9px]'>BEFORE</p>
                        </div>

                        <div id='After' className='flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0'>
                            <p className='text-[#49EDF2] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px] tracking-[63.91px]'>AFTER</p>
                        </div> */}

                        {/* <div id='Before' className='flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0 opacity-1 animate-fade-to-after'>
                            <p className='text-[#3D4B5C] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px] blur-[11.9px]'>
                                BEFORE
                            </p>
                        </div>

                        <div id='After' className='flex w-full max-w-[1356px] mx-auto h-[564px] justify-center items-center shrink-0 opacity-0 animate-fade-to-after'>
                            <p className='text-[#49EDF2] text-center font-kanit text-[375.944px] font-semibold leading-[563.916px] tracking-[63.91px]'>
                                AFTER
                            </p>
                        </div> */}

                        <BeforeAfterAnimation />




                    </div>

                    <div id='Group22' className='relative w-full max-w-[1600px] mx-auto h-[646.376px] flex-shrink-0'>


                        <div id='vector1' className='absolute z-10 w-full max-w-[3372.599px] h-[283.225px] flex-shrink-0'>
                            <Image src={'/svgs/vector1.svg'} alt={'vector'} width={3372} height={283} />
                        </div>


                        <div id='vector2' className='absolute z-20 w-full max-w-[1615.075px] h-[225.499px] flex-shrink-0'>
                            <Image src={'/svgs/vector2.svg'} alt={'vector'} width={1615} height={225} />
                        </div>

                        {/* <div id='image' className='absolute z-30 w-[354.463px] h-[548px] bg-[#F565F4] flex-shrink-0'>
                            <video autoPlay loop muted className='flex w-full max-w-[354.463px] mx-auto px-[443px] py-[230px] justify-center items-center gap-[10px] rounded-t-[30px] bg-[#0F172A]'>
                                VIDEO
                            </video>
                        </div>

                        <div id='vector4' className='absolute z-40 w-[386.633px] h-[24.819px] flex-shrink-0'>
                            <Image src={'/svgs/vector4.svg'} alt={'vector'} width={386} height={24} />
                        </div> */}

                    </div>


                </div>
            </section>

            <section id='Frame4' className='flex flex-col items-center gap-[64.829px] self-stretch px-[77px] pb-[28.165px] pt-0 bg-gradient-to-b from-[#4CF7FB] to-[#206680]'>

                <div id='image' className='mb-[64px] w-[354.463px] h-[170.171px] blur-[19.5px]'>
                    <div id='video' className='py-30 flex w-[354.463px] h-[170.171px] justify-center items-center gap-[10px] flex-shrink-0 rounded-t-[30px] bg-[#0F172A]'></div>
                </div>

                <div id='Frame10' className='flex w-full max-w-[1428px] flex-col items-center gap-[50px]'>

                    <div id='Frame7' className='mb-[50px] flex w-full max-w-[858.176px] flex-col items-center gap-[23px]'>
                        <div id='Group2' className='mb-[23px] w-full max-w-[858.176px] h-[287.835px]'>
                            <p className='text-[#0F172A] text-center font-foster text-[218.629px] font-normal leading-[235.026px] tracking-[-10.931px] w-[858.176px]'>
                                DEEP
                            </p>
                            <p className='text-[#0F172A] text-center font-inter text-[80px] font-bold leading-[86px] tracking-[-4px]'>
                                Into our Services
                            </p>
                        </div>

                        <div id='Button' className='rounded-[8px] bg-[#485AFF] flex flex-col justify-center items-center px-[20px] py-[16px] gap-[10px]'>
                            <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
                                <p className='text-white text-center font-inter text-[18px] font-semibold leading-[28px]'>GET YOUR FREE ESTIMATE</p>

                                {/* NO ESTA EN EL DISEÑO */}
                                <div id='icon'>

                                </div>
                            </div>
                        </div>

                        <p className='max-w-[594px] text-[#212939] text-center font-inter text-[24px] font-normal leading-[40px]'>
                            We combine expertise with dedication to deliver exceptional pool services that exceed expectations.
                        </p>


                    </div>

                    <div id='Frame9' className='flex h-[649px] p-[30px_10px] flex-col items-start gap-[10px] self-stretch rounded-[20px] bg-white/50 backdrop-blur-[2px]'>
                        <div id='Frame8' className='flex flex-col items-center gap-[40px] self-stretch'>

                            <div id='List' className="relative w-full max-w-[1296px] h-[573px] mx-auto">
                                {/* Línea horizontal entre filas */}
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#E4E4E7]" />

                                {/* Líneas verticales entre columnas */}
                                <div className="absolute top-0 left-1/3 w-[1px] h-full bg-[#E4E4E7]" />
                                <div className="absolute top-0 left-2/3 w-[1px] h-full bg-[#E4E4E7]" />

                                {/* Grid de 2 filas x 3 columnas */}
                                <div className="grid grid-cols-3 grid-rows-2 w-full h-full place-items-center">
                                    <Card
                                        icon="/svgs/headphones.svg"
                                        title="Support"
                                        description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
                                    />
                                    <Card
                                        icon="/svgs/charbar.svg"
                                        title="Sales"
                                        description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
                                    />
                                    <Card
                                        icon="/svgs/headphones.svg"
                                        title="Support"
                                        description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
                                    />
                                    <Card
                                        icon="/svgs/charbar.svg"
                                        title="Sales"
                                        description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
                                    />
                                    <Card
                                        icon="/svgs/headphones.svg"
                                        title="Support"
                                        description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
                                    />
                                    <Card
                                        icon="/svgs/charbar.svg"
                                        title="Sales"
                                        description="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section id='Frame29' className='flex flex-col items-center gap-[10px] self-stretch bg-white'>
                {/* <div id='Group26' className='relative w-full max-w-[3284.265px] max-h-[664.377px]'>
                    
                    <div id='vector6' className='w-full max-w-[3284.265px] h-full max-h-[653.18px] flex-shrink-0 fill-[#F5F9FF]'>
                        <Image src={'/svgs/vector6.svg'} alt={'vector'} width={3372} height={283} />
                    </div>

                    <div id='Group9' className='w-full max-w-[1254.483px] h-full max-h-[651.141px] flex-shrink-0'>
                        <div id='Content' className='absolutew-full max-w-[366.575px] h-full max-h-[249.658px] flex-shrink-0'>
                            <div id='Frame11' className='flex w-full max-w-[366.575px] h-full max-h-[249.658px] flex-col items-start gap-[18.461px] flex-shrink-0'>
                                <p className='text-[#18181B] font-inter text-[18.461px] font-medium leading-[29.889px] self-stretch'>"Simply the best. Better than all the rest. I'd recommend this product to beginners and all users."</p>
                                <p className='text-[#18181B] font-inter text-[15.823px] font-normal leading-[24.614px] max-w-[345.477px]'>"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."</p>
                                <p className='text-[#A1A1AA] font-plus_jakarta_sans text-[14.065px] font-bold leading-[24.614px] self-stretch'>Leslie Alexander, Product Designer at Crowny</p>
                            </div> 
                        </div>
                        
                        <div id='vector7'></div>
                        
                        <div id='Image'></div>
                    </div>
                    
                </div> */}

                {/* <div id='Group26' className='relative w-full max-w-[3284.265px] max-h-[664.377px]'>

                    <div id='vector6' className='w-full max-w-[3284.265px] h-full max-h-[653.18px] flex-shrink-0 fill-[#F5F9FF]'>
                        <Image src={'/svgs/vector6.svg'} alt={'vector'} width={3372} height={283} />
                    </div>

                    <div id='Group9' className='absolute top-0 left-0 w-full max-w-[1254.483px] h-full max-h-[651.141px] flex-shrink-0'>
                        <div id='Content' className='absolute top-[20%] left-[10%] w-full max-w-[366.575px] h-full max-h-[249.658px] flex-shrink-0'>
                            <div id='Frame11' className='flex w-full max-w-[366.575px] h-full max-h-[249.658px] flex-col items-start gap-[18.461px] flex-shrink-0'>
                                <p className='text-[#18181B] font-inter text-[18.461px] font-medium leading-[29.889px] self-stretch'>"Simply the best. Better than all the rest. I'd recommend this product to beginners and all users."</p>
                                <p className='text-[#18181B] font-inter text-[15.823px] font-normal leading-[24.614px] max-w-[345.477px]'>"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."</p>
                                <p className='text-[#A1A1AA] font-plus_jakarta_sans text-[14.065px] font-bold leading-[24.614px] self-stretch'>Leslie Alexander, Product Designer at Crowny</p>
                            </div>
                        </div>

                        <div id='vector7' className='absolute top-0 right-0 max-w-[893.011px] max-h-[513.664px] shrink-0 fill-[#0F172A]'>
                            <Image src={'/svgs/vector7.svg'} alt={'vector'} width={832} height={514} />
                        </div>

                        <div id='Image' className='max-w-[454.482px] max-h-[597.046px] shrink-0'>
                            <div id='BG' className='max-w-[454.482px] max-h-[597.046px] shrink-0 rounded-[468.835px] bg-[#0B0B0B]'></div>
                            <div id='Shadow' className='max-w-[455.433px] max-h-[253.43px] flex-shrink-0 opacity-60 bg-[linear-gradient(90deg,_#44BCFF_-0.55%,_#44B0FF_22.86%,_#485AFF_48.36%,_#485AFF_73.33%,_#000_99.34%)] blur-[51.133px]'></div>
                            <div id='image' className="absolute w-[413.34px] h-[738.654px] flex-shrink-0 bg-[url(/images/woman.png)] bg-lightgray bg-[50%] bg-cover bg-no-repeat">
                                <Image src={'/images/woman.png'} alt={'woman'} width={413} height={738} />
                            </div>
                        </div>
                    </div>

                </div> */}

                <div id='Group26' className='relative w-full max-w-[3284.265px] max-h-[664.377px]'>
                    <div id='vector6' className='w-full max-w-[3284.265px] h-full max-h-[653.18px] flex-shrink-0 fill-[#F5F9FF]'>
                        <Image src={'/svgs/vector6.svg'} alt={'vector'} width={3372} height={283} />
                    </div>

                    <div id='Group9' className='absolute top-0 left-0 w-full max-w-[1254.483px] h-full max-h-[651.141px] flex-shrink-0'>
                        <div id='Content' className='absolute top-[20%] right-[10%] w-full max-w-[366.575px] h-full max-h-[249.658px] flex-shrink-0'>
                            <div id='Frame11' className='flex w-full max-w-[366.575px] h-full max-h-[249.658px] flex-col items-start gap-[18.461px] flex-shrink-0'>
                                <p className='text-[#18181B] font-inter text-[18.461px] font-medium leading-[29.889px] self-stretch'>"Simply the best. Better than all the rest. I'd recommend this product to beginners and all users."</p>
                                <p className='text-[#18181B] font-inter text-[15.823px] font-normal leading-[24.614px] max-w-[345.477px]'>"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."</p>
                                <p className='text-[#A1A1AA] font-plus_jakarta_sans text-[14.065px] font-bold leading-[24.614px] self-stretch'>Leslie Alexander, Product Designer at Crowny</p>
                            </div>
                        </div>

                        <div id='vector7' className='absolute bottom-0 left-0 w-[893.011px] h-[513.664px] shrink-0 fill-[#0F172A]'>
                            <Image src={'/svgs/vector7.svg'} alt={'vector'} width={832} height={514} />
                        </div>

                        <div id='Image' className='absolute left-[30%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[454.482px] h-[454.482px] shrink-0 rounded-full overflow-hidden'>
                            <div id='BG' className='absolute inset-0 w-full h-full shrink-0 rounded-full bg-white'></div>
                            <div id='Shadow' className='absolute bottom-0 w-full h-[253.43px] flex-shrink-0 opacity-60 bg-[linear-gradient(90deg,_#44BCFF_-0.55%,_#44B0FF_22.86%,_#485AFF_48.36%,_#485AFF_73.33%,_#000_99.34%)] blur-[51.133px]'></div>
                            <div id='image' className="absolute inset-0 w-full h-full flex-shrink-0 bg-[url('/images/woman.png')] bg-cover bg-center bg-no-repeat"></div>
                        </div>
                    </div>
                </div>


            </section>


        </div>


    )
}

export default Body