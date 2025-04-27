import "./globals.css";
import { Inter, Poppins, Kanit, Plus_Jakarta_Sans, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
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
      </body>
    </html>
  );
}
