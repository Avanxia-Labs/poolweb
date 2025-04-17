import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="w-full h-full bg-[#0F172A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">POOL QUALITY SOLUTION INC</h2>

        <div className="flex items-center mb-4">
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:correo@hosting.com" className="hover:underline">correo@hosting.com</a>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+12393800766" className="hover:underline">+1 (239) 380-0766</a>
          </div>
        </div>

        {/* FUTURA SECCION DE REDES SOCIALES */}
        
        {/* <div className="flex gap-6 mb-8">
          <a href="https://tiktok.com" className="hover:text-gray-300" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
              <path d="M9.47021 0.442383C10.6492 0.442383 11.6829 0.442383 12.7724 0.442383C13.1638 3.41166 14.8349 5.15436 17.9981 5.47771C17.9981 6.51774 17.9981 7.56087 17.9981 8.64287C16.1002 8.74236 14.493 8.07077 12.8635 7.02764C12.8635 7.96973 12.8699 8.81231 12.8619 9.65491C12.8443 11.466 12.937 13.2864 12.774 15.0851C12.496 18.1337 9.52293 20.5153 6.28782 20.4407C3.0607 20.3661 0.258535 17.8445 0.0188968 14.7975C-0.230327 11.6246 2.01268 8.72992 5.14715 8.1796C7.41412 7.78162 7.41412 7.78162 7.41412 9.96272C7.41412 10.4229 7.41412 10.883 7.41412 11.4038C6.09292 11.1318 4.99857 11.3852 4.15664 12.321C3.26679 13.3113 3.1933 14.768 3.92819 15.8562C4.63911 16.9071 5.96351 17.4014 7.19366 17.0734C8.56438 16.7081 9.44625 15.6929 9.45424 14.3234C9.4798 10.0249 9.46862 5.72645 9.47181 1.428C9.47021 1.12485 9.47021 0.820149 9.47021 0.442383Z" fill="white" />
            </svg>
          </a>
          <a href="https://facebook.com" className="hover:text-gray-300" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div> */}

        <nav className="flex flex-wrap justify-center gap-8 mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/form" className="hover:underline">
            Contact
          </Link>
        </nav>

        <div className="text-sm text-gray-400">
          © Copyright 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;