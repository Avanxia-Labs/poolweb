import React from 'react'
import Image from 'next/image'

function Section4() {
  return (
    <section
      id='Frame29'
      className='overflow-hidden flex flex-col items-center gap-[0.52vw] self-stretch bg-white max-w-[100vw]'
    >
      <div id='Group26' className='relative w-full max-w-[100vw] mx-auto'>

        {/* Vector6: full-width at the bottom */}
        <div className='relative w-full pt-[34.58%]'>
          <Image
            src='/svgs/vector6.svg'
            alt='vector6'
            layout='fill'
            objectFit='cover'
            className='absolute bottom-0 left-0 w-full h-full'
            priority
          />
        </div>

        {/* Group9 Content */}
        <div
          id='Group9'
          className='absolute inset-0 w-full max-w-[65.4vw] h-full flex-shrink-0 left-0 top-0'
        >
        <div
        id='Content'
        className="
            absolute
            top-[-0%]           /* opcional: bajas un poco si sigue chocando abajo */
            left-[65%]          /* más espacio para el texto */
            w-full
            max-w-[55vw]        /* ancho ampliado para que quepa mejor */
        "
        >
            <div id='Frame61' className='w-full mb-[1vw]'>
              {/* Nombre */}
              <p
                className="
                  text-[#0F172A] font-inter font-semibold leading-[1.4] mb-[0.3vw]
                  text-[13px]        /* tamaño fijo 13px */
                "
              >
                Yosbani Martinez
              </p>
              {/* Subtítulo */}
              <p
                className="
                  text-[#485AFF] font-inter font-medium leading-[1.4]
                  text-[13px]        /* tamaño fijo 13px */
                "
              >
                Founder & Chemical Engineer
              </p>
            </div>

            {/* Descripción */}
            <div id='Frame11' className='flex flex-col items-start gap-[0.96vw]'>
              <p
                className="
                  text-[#18181B] font-inter leading-[1.5] max-w-[100%]
                  text-[13px]        /* tamaño fijo 13px */
                "
              >
                I founded Pool Quality Solutions to bring a higher level of scientific precision to pool care. As a Chemical Engineer, with a degree evaluated as equivalent to a U.S.
                <br /><br />
                Bachelor of Science, I understand that water chemistry is crucial. It's not just about having a pool that looks clean&nbsp;— it's about ensuring a safe, balanced, and healthy swimming environment for your family and friends. Our commitment is to apply this expertise accurately and consistently, delivering quality service you can trust.
              </p>

              {/* Enlace */}
              <a
                href='/docs/VerifiedCredentials.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className="
                  hover:text-[#485AFF] text-[#A1A1AA] font-plusjakartasans font-extrabold italic underline
                  text-[13px]        /* tamaño fijo 13px */
                  self-stretch
                "
              >
                View Verified Credentials
              </a>
            </div>
          </div>

          {/* Vector7: positioned bottom left */}
          <div id='vector7' className='absolute bottom-0 left-0 w-[46.5vw] h-auto'>
            <Image src='/svgs/vector7.svg' alt='vector7' width={832} height={514} />
          </div>

          {/* Imagen circular (sin cambios) */}
          <div className='relative left-[40%] top-1/2 h-full transform -translate-x-1/2 -translate-y-1/2 w-[23.7vw] aspect-square rounded-full overflow-hidden'>
            <div id="circle" className='z-20 absolute inset-0 rounded-full'></div>
            <div
              id='shadow'
              className='
                z-25 absolute top-[70%] w-full h-[55%] opacity-60 blur-[2.7vw]
                bg-[linear-gradient(135deg,_#44BCFF_-0.55%,_#44B0FF_22.86%,_#485AFF_48.36%,_#485AFF_73.33%,_#000_99.34%)]
              '
            ></div>
            <div
              id="yosbani"
              className="z-30 absolute inset-0 bg-[url('/images/yosbaniDesktop.png')] bg-cover bg-no-repeat"
            ></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section4
