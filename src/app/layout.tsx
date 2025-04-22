import "./globals.css";
import { Inter, Poppins, Kanit, Plus_Jakarta_Sans, Montserrat } from "next/font/google"

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
    <html lang="en" className="light">
      <body
        
        className={`
            ${inter.variable} 
            ${poppins.variable} 
            ${kanit.variable} 
            ${plus_jakarta_sans.variable}
            ${montserrat.variable} 
            antialiased`}>
        {children}
      </body>
    </html>
  );
}
