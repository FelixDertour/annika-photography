import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import NavigationMenu from "@/components/navigation-menu"

export const metadata: Metadata = {
  title: "Photography by Annika – Hochzeitsfotografie & emotionale Bilder aus Augsburg & München",
  description:
    "Photography by Annika – Deine Fotografin mit Herz in Augsburg, München & Umgebung. Emotionale Hochzeitsfotos, natürliche Portraits, Babybauchshootings & mehr.",
  keywords:
    "Fotografie, Hochzeitsfotografie, Porträtfotografie, Familienfotos, professionelle Fotografie, Annika Photography, Fotoshooting, Bayern, Augsburg",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://photographybyannika.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Annika Fendt",
              alternateName: "Fotografin mit Herz",
              url: "https://photographybyannika.com",
              sameAs: ["https://www.instagram.com/photo_graphybyannika", "https://www.facebook.com/annika.photography"],
              image: "https://photographybyannika.com/images/ueber-mich-min.png",
              jobTitle: "Fotografin",
              worksFor: {
                "@type": "Organization",
                name: "Annika Photography",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Augsburg",
                addressRegion: "Bayern",
                addressCountry: "DE",
              },
              description:
                'Annika Fendt ist eine professionelle Fotografin aus Augsburg und München, spezialisiert auf  "Annika Fendt ist eine professionelle Fotografin aus Augsburg und München, spezialisiert auf natürliche Hochzeitsfotografie, Familienportraits, Babybauch- und Neugeborenen-Shootings, Tierfotografie sowie Businessfotos. Ihr Stil ist emotional, authentisch und empathisch.',
              knowsAbout: [
                "Fotografin Augsburg",
                "Hochzeitsfotografie Bayern",
                "Boho Fotoshooting",
                "Babybauch Shooting München",
                "authentische Hochzeitsreportage",
                "emotionale Fotografie",
                "natürliche Paarfotos",
                "Kinderfotografie",
                "Business Headshots",
                "Tierfotografie",
              ],
              areaServed: [
                "Augsburg",
                "München",
                "Untermeitingen",
                "Obermeitingen",
                "Lechhausen",
                "Göggingen",
                "Hochzoll",
                "Haunstetten",
                "Innenstadt",
                "Altstadt-Lehel",
                "Schwabing",
                "Sendling",
                "Laim",
                "Nymphenburg",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <NavigationMenu />
        {children}
      </body>
    </html>
  )
}


import './globals.css'