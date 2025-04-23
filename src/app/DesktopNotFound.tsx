import React from 'react'
import NavBar from '@/components/Desktop/NavBar'
import FooterSection from '@/components/Desktop/FooterSection'
import Image from 'next/image'
import Link from 'next/link'
import PageTransition from '@/components/Desktop/PageTransition'

function DesktopNotFound() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div
          id="404"
          className="flex-grow flex flex-col justify-center items-center gap-5 px-6 pt-16 pb-20 bg-[#F5F9FF] md:px-16 lg:px-32 2xl:px-52"
        >
          <Image
            src={'/svgs/404.svg'}
            alt={'404'}
            width={1180}
            height={314}
            className="mb-10"
          />
          <nav>
            <Link href="/">
              <div
                id="button"
                className="w-32 h-14 py-1 bg-blue-600 rounded-lg inline-flex flex-col justify-center items-center"
              >
                <div className="inline-flex justify-center items-center">
                  <div className="text-center text-white text-lg font-semibold font-inter leading-none">
                    HOME PAGE
                  </div>
                </div>
              </div>
            </Link>
          </nav>
        </div>
        <FooterSection />
      </div>
    </PageTransition>
  );
}

export default DesktopNotFound;