import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";
import Navbar from "./components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Plié | Pilates Reformer en Puebla",
  description:
    "Clases de Pilates Reformer en Puebla. Transforma tu cuerpo y mente con nuestro método profesional. Horarios flexibles, instructoras certificadas.",
  keywords:
    "pilates reformer puebla, clases pilates puebla, studio plie, pilates puebla",
  openGraph: {
    title: "Studio Plié | Pilates Reformer en Puebla",
    description: "Transforma tu cuerpo y mente con Pilates Reformer en Puebla.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {/* NAVEGACIÓN */}
        <Navbar />

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <Footer />

        {/* BOTÓN FLOTANTE */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
