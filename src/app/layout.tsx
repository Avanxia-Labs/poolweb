  // app/layout.tsx

  import "./globals.css"
  import { Inter, Poppins, Kanit, Plus_Jakarta_Sans, Montserrat } from "next/font/google"
  import { Analytics } from "@vercel/analytics/react"
  import Script from "next/script"
  import MaintenanceRedirect from "./MaintenanceRedirect"
  // import TransitionLayout from "@/components/Desktop/TransitionLayout"

  const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
  })

  const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: "100",
  })

  const kanit = Kanit({
    variable: "--font-kanit",
    subsets: ["latin"],
    weight: "100",
  })

  const plus_jakarta_sans = Plus_Jakarta_Sans({
    variable: "--font-plus_jakarta_sans",
    subsets: ["latin"],
  })

  const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
  })

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <html
        lang="en"
        className="light"
        data-theme="light"
        data-color-mode="light"
        style={{ colorScheme: "light" }}
      >
        <head>
          {/* Prevent mix-mode flicker */}
          <meta name="color-scheme" content="light only" />

          {/* Primary Meta Tags */}
          <title>Pool Quality Solutions</title>
          <meta
            name="description"
            content="Professional pool care: maintenance, diagnostics, automation, and more."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://poolqualitysolutions.com" />
          <meta property="og:title" content="Pool Quality Solutions" />
          <meta
            property="og:description"
            content="Professional pool care: maintenance, diagnostics, automation, and more."
          />
           <meta property="og:image" content="https://poolqualitysolutions.com/images/logoHD.png" />
           <meta property="og:image:width"  content="1200" />
           <meta property="og:image:height" content="630" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:url"
            content="https://poolqualitysolutions.com"
          />
          <meta name="twitter:title" content="Pool Quality Solutions" />
          <meta
            name="twitter:description"
            content="Professional pool care: maintenance, diagnostics, automation, and more."
          />
          <meta
            name="twitter:image"
            content="https://poolqualitysolutions.com/images/twitter-card.jpg"
          />

          {/* SEO Controls */}
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href="https://poolqualitysolutions.com" />
        </head>
        <body
          className={`
            ${inter.variable}
            ${poppins.variable}
            ${kanit.variable}
            ${plus_jakarta_sans.variable}
            ${montserrat.variable}
            antialiased
          `}
        >
          {/* Componente de redirección al modo mantenimiento */}
          <MaintenanceRedirect />
          
          {/* If you need page transitions, uncomment below */}
          {/* <TransitionLayout> */}
            {children}
            <Analytics />
          {/* </TransitionLayout> */}

          {/* Metricool tracking script */}
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
    )
  }
