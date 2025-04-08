import React from 'react'
import Image from 'next/image'
import BeforeAfterAnimation from './BeforeAfterAnimation'
import Card from './Card'
import InputDesign from './Frame66Card'
import SvgWithVideoBackground from './SVG'

function Body() {
    return (
        <div className='flex w-full max-w-[1600px] mx-auto h-full flex-col items-start shrink-0'>
            <section id='Frame25' className='w-full flex flex-col items-center gap-2.5 self-stretch'>
                <div id='Group24' className=' w-full  max-w-[1600px] mx-auto h-[1051.376px]'>

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

                    <div id='Group23' className='relative w-full max-w-[1600px] mx-auto h-[877.731px] flex-shrink-0'>

                        {/* BeforeAfterAnimation ahora está colocado con top-0 para alinearse con el borde superior del padre */}
                        <div className="absolute z-5 inset-0">
                            <BeforeAfterAnimation />
                        </div>

                        <div id='Group22' className='overflow-hidden relative w-full max-w-[1600px] mx-auto h-[646.376px] flex-shrink-0'>


                            {/* Cuarta capa: Fondo */}
                            <div id='vector1' className='absolute bottom-15 z-10 w-full max-w-[3372.599px] h-[283.225px] mx-auto'>
                                <Image src={'/svgs/vector1.svg'} alt={'vector'} width={3372} height={283} />
                            </div>

                            {/* Tercera capa: agua más brillante */}
                            <div id='vector2' className='absolute bottom-0 z-20 w-full max-w-[1615.075px] h-[225.499px] mx-auto'>
                                <Image src={'/svgs/vector2.svg'} alt={'vector'} width={1615} height={225} />
                            </div>

                            {/* Segunda capa: video en pantalla */}
                            <div id='image' className='absolute inset-0 z-30 flex justify-center items-center'>
                                <div className='w-[354.463px] h-[437px] rounded-t-[30px] overflow-hidden'>
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className='w-full h-full object-cover scale-109 bg-[#0F172A]'>
                                        <source src='videos/videopool.mp4' type='video/mp4' />
                                    </video>
                                </div>
                            </div>

                            {/* Primer plano: ola encima del video - ahora posicionada para alinearse con la parte inferior del video */}
                            <div id='vector4' className='absolute z-40 flex justify-center w-full' style={{
                                bottom: 'calc(50% - (437px/2) - 7px )',  // Calcula la posición inferior basada en la altura del video
                            }}>
                                <Image src={'/svgs/vector4.svg'} alt={'vector'} width={386} height={24} />
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section id='Frame4' className='overflow-hidden flex flex-col items-center gap-[64.829px] self-stretch px-[77px] pb-[28.165px] pt-0 bg-gradient-to-b from-[#4CF7FB] to-[#206680]'>

                <div id='image' className='mb-[64px] w-[354.463px] h-[170.171px] blur-[19.5px]'>
                    <div id='video' className='py-15 flex w-[354.463px] h-[170.171px] justify-center items-center gap-[10px] flex-shrink-0 rounded-t-[30px] bg-[#0F172A]'></div>
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


            <section id='Frame64' className='overflow-hidden flex h-full max-h-[1127px] w-full max-w-[1622px] py-[120px] flex-col items-center gap-[41px]'>

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
                    <div id='Vector12' className='top-[50%] w-full max-w-[1622px] max-h-[1127px] absolute  fill-[#007FBE]'>
                        <Image src={'/svgs/vector12.svg'} alt={'vector'} width={1622} height={514} />
                    </div>
                    <div id='Frame66' className='z-5 w-[485px] h-[643.805px] flex-shrink-0 rounded-[39.422px] bg-[#F6FEFF] shadow-[0px_2.92px_7.884px_0px_rgba(0,0,0,0.25)]'>
                        <InputDesign />
                    </div>
                    <div id='Image' className='overflow-hidden relative z-5 w-[485px] h-[643px] flex-shrink-0 rounded-[39.422px] bg-[#F6FEFF]'>
                        <Image
                            src={'/images/pool.png'}
                            alt={'pool'}
                            fill
                            className='w-full h-full object-cover scale-110' />
                    </div>
                </div>
            </section>

            <section id='Frame29' className='overflow-hidden flex flex-col items-center gap-[10px] self-stretch bg-white'>

                <div id='Group26' className='relative w-full max-w-[3284.265px] max-h-[664.377px]'>
                    <div id='vector6' className='w-full max-w-[3284.265px] h-full max-h-[653.18px] flex-shrink-0 fill-[#F5F9FF]'>
                        <Image src={'/svgs/vector6.svg'} alt={'vector'} width={3372} height={283} />
                    </div>

                    <div id='Group9' className='absolute top-0 left-0 w-full max-w-[1254.483px] h-full max-h-[651.141px] flex-shrink-0'>
                        <div id='Content' className='absolute top-[20%] left-[67.5%] w-full max-w-[560.575px] h-full max-h-[470.658px] flex-shrink-0'>

                            <div id='Frame61' className='w-[550px] h-[109.622px] flex-shrink-0'>
                                <p className='mb-5 w-[545px] h-[36.821px] flex-shrink-0 text-[#0F172A] font-inter text-[64px] not-italic font-semibold leading-[28px]'>
                                    Yosbani Martinez
                                </p>
                                <p className='w-[545px] h-[46.801px] flex-shrink-0 text-[#485AFF] font-inter text-[24px] not-italic font-medium leading-[28px]'>
                                    Founder & Chemical Engineer
                                </p>
                            </div>

                            <div id='Frame11' className='flex w-full max-w-[366.575px] h-full max-h-[249.658px] flex-col items-start gap-[18.461px] flex-shrink-0'>
                                <p className='w-[345.477px] text-[#18181B] font-inter text-[15.823px] not-italic font-normal leading-[24.614px]'>
                                    I founded Pool Quality Solutions to bring a higher level of scientific precision to pool care. As a Chemical Engineer, with a degree evaluated as equivalent to a U.S.
                                    <br />
                                    <br />
                                    Bachelor of Science, I understand that water chemistry is crucial. It's not just about having a pool that looks clean - it's about ensuring a safe, balanced, and healthy swimming environment for your family and friends. Our commitment is to apply this expertise accurately and consistently, delivering quality service you can trust.
                                </p>
                                <p className='text-[#A1A1AA] font-plusjakartasans text-[14.065px] italic font-extrabold leading-[24.614px] underline self-stretch'>
                                    View Verified Credentials
                                </p>
                            </div>
                        </div>

                        <div id='vector7' className='-translate-y-[-58px] absolute bottom-0 left-0 w-[893.011px] h-[513.664px] shrink-0 fill-[#0F172A]'>
                            <Image src={'/svgs/vector7.svg'} alt={'vector'} width={832} height={514} />
                        </div>



                        <div id='Image' className='relative left-[40%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[454.482px] h-full shrink-0 rounded-full overflow-hidden'>
                            <div id='BG' className='transform absolute inset-0 w-full h-full shrink-0 rounded-full bg-[#0B0B0B]'></div>
                            <div id='Shadow' className='absolute bottom-0 w-[455.433px] h-[253.43px] flex-shrink-0 opacity-60 blur-[51.133px] bg-[linear-gradient(135deg,_#44BCFF_-0.55%,_#44B0FF_22.86%,_#485AFF_48.36%,_#485AFF_73.33%,_#000_99.34%)]'></div>
                            <div id='image' className="transform absolute inset-0 w-full h-full flex-shrink-0 bg-[url('/images/woman.png')] h-full bg-cover bg-center bg-no-repeat"></div>
                        </div>
                    </div>
                </div>


            </section>

            {/* 
            <div className='bg-[#512AFF] w-full h-[370.171px]'>TEXTO</div> */}

            <section id='Frame8' className='overflow-hidden w-full max-w-[1600px] h-full max-h-[1415px] flex flex-col items-center gap-[10px] self-stretch'>
                <div id='Group28' className='relative overflow-hidden w-full max-w-[1600px] h-full max-h-[1415px]'>
                    <div id='Frame12' className='absolute top-0 left-0 w-full max-w-[1600px] h-full max-h-[843px] flex-shrink-0 bg-[#485AFF]'>
                        <div id='Content' className='w-[966px] h-[682px] shrink-0'>
                            <div id='Frame5' className='z-[-5] mt-[113px] ml-[80px] flex w-[966px] flex-col items-start gap-[38px]'>
                                <p className='text-[#F5F9FF] font-inter text-[80px] font-bold leading-[86px] tracking-[-4px] self-stretch'>Transform Your Pool Experience</p>
                                <p className='text-[#FFF] font-inter text-[24px] font-normal leading-[40px] self-stretch'>We combine expertise with dedication to deliver exceptional pool services that exceed expectations. We combine expertise with dedication to deliver exceptional pool services that exceed expectations. We combine expertise with dedication to deliver exceptional pool services that exceed expectations. We combine expertise with dedication to deliver exceptional pool services that exceed expectations.  </p>
                                <button className='flex p-[16px_20px] flex-col justify-center items-center gap-[10px] rounded-[8px] bg-[#F5F9FF]'>
                                    <div id='Frame1' className='flex justify-center items-center gap-[9px]'>
                                        <p className='text-[#485AFF] text-center font-inter text-[18px] font-extrabold leading-[28px]'>Start with a Free Estimate</p>
                                    </div>
                                </button>
                            </div>

                        </div>



                    </div>

                    <div id='vector7' className='absolute top-[16.5%] right-[-15.5%] w-[893.011px] h-[571.264px] flex-shrink-0 fill-[#0F172A] stroke-[#FFF] stroke-[26px] z-10'>
                        <Image src={'/svgs/vector_7.svg'} alt='vector7'
                            width={893.011}
                            height={571.264}
                            className='w-full h-full'
                        />
                    </div>

                    <Image src={'/images/piscina_1.png'} alt={'piscina'}
                        width={1202.779}
                        height={571.666}
                        className='absolute top-[59.43%] left-0 shrink-0'
                    />
                    <Image src={'/svgs/rectangle_5.svg'} alt='rectangle5'
                        width={437.273}
                        height={571.666}
                        className='absolute overflow-hidden top-[59.646%] right-0 shrink-0 z-10'
                    />

                    <Image src={'/svgs/rectangle_6.svg'} alt='rectangle6'
                        width={437.273}
                        height={37.266}
                        className='absolute top-[56.94%] right-0 shrink-0 z-10'
                    />

                    <Image src={'/svgs/cleaner-man.svg'} alt='cleaner-man'
                        width={1230.69}
                        height={812.598}
                        className='absolute bottom-[40.4%] right-[10px] shrink-0 z-10'
                    />

                </div>
            </section>

            <section id='6' className='w-full bg-[#161F7B] max-w-[1600px] h-full max-h-[644px] flex-shrink-0 flex'>

                {/* Sección de texto */}
                <div id='Customers' className='ml-[110px] mt-[160px] flex w-[471px] flex-col items-start gap-[40px]'>
                    <p className='text-[#F5F9FF] font-inter text-[64px] font-extrabold leading-[76px]'>Customers say About Us</p>
                    <p className='text-[#F5F9FF] font-inter text-[24px] font-normal self-stretch leading-[38px]'>
                        Trust is built through results. Here you can read what our clients say about their experience with our service. Their words reflect our commitment to quality and excellence.
                    </p>
                </div>

                {/* Contenedor flexible de comentarios */}
                <div className='ml-[92px] mt-[100px] flex gap-[60px]'>
                    <div id='Comentario1' className='flex bg-black h-[443.791px] w-[443.791px] rotate-[-2.653deg] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'></div>

                    <div id='Comentario2' className='flex bg-black h-[406.404px] w-[406.404px] rotate-[6.036deg] flex-col items-start gap-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'></div>
                </div>

            </section>













        </div>


    )
}

export default Body