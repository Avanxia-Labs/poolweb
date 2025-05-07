import "./globals.css";
import { Inter, Poppins, Kanit, Plus_Jakarta_Sans, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
//import TransitionLayout from "@/components/Desktop/TransitionLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "100"
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: "100"
})

const plus_jakarta_sans = Plus_Jakarta_Sans({
  variable: "--font-plus_jakarta_sans",
  subsets: ["latin"]
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className="light"
      data-theme="light"
      data-color-mode="light"
      style={{ colorScheme: 'light' }}>
      <head>
      <meta name="color-scheme" content="light only"/>
      </head>
      <body
        className={`
            ${inter.variable} 
            ${poppins.variable} 
            ${kanit.variable} 
            ${plus_jakarta_sans.variable}
            ${montserrat.variable} 
            antialiased`}>
        {/* <TransitionLayout> */}
            {children}
            <Analytics />
        {/* </TransitionLayout> */}
        {/* Script de Metricool */}
        <Script id="metricool" strategy="afterInteractive">
          {`
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],
                  c=document.createElement("script");
              c.type="text/javascript";
              c.src="https://tracker.metricool.com/resources/be.js";
              c.onreadystatechange=a;
              c.onload=a;
              b.appendChild(c)
            }
            loadScript(function(){
              beTracker.t({hash:"3e527613498a2c475d56b59c0b9e897a"})
            });
          `}
        </Script>
      </body>
    </html>
  );
}
