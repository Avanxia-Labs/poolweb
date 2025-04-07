import "./globals.css";
import { Inter, Poppins, Kanit, Plus_Jakarta_Sans } from "next/font/google"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cargando el script de la fuente Foster */}
        {/* <script
          src="https://c.webfontfree.com/c.js?f=Foster"
          type="text/javascript"
        ></script> */}
      </head>
      <body
        
        className={`${inter.variable} ${poppins.variable} ${kanit.variable} ${plus_jakarta_sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
