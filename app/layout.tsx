import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
