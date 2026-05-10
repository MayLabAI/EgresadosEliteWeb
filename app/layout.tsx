import type { Metadata } from "next";
import { Bebas_Neue, Pacifico, Inter, Anton, Oswald, Permanent_Marker, Bangers, Dancing_Script, Alfa_Slab_One, DM_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
});

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const alfaSlabOne = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alfa-slab",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Egresados Elite — Diseño rápido, atención elite",
  description:
    "Indumentaria personalizada para egresados de primaria y secundaria. Buzos, camperas y kits de egreso en Rosario, Santa Fe y Buenos Aires.",
  keywords: "egresados, buzos de egreso, camperas, indumentaria escolar, Rosario, Santa Fe, Buenos Aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bebasNeue.variable} ${pacifico.variable} ${inter.variable} ${anton.variable} ${oswald.variable} ${permanentMarker.variable} ${bangers.variable} ${dancingScript.variable} ${alfaSlabOne.variable} ${dmSans.variable} font-inter antialiased bg-white text-brand-dark`}
      >
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
