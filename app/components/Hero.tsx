import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col md:flex-row md:h-screen md:min-h-[600px]">
      <Navbar />

      {/* Imagen arriba en móvil, derecha en desktop */}
      <div className="order-first md:order-last w-full md:w-1/2 relative bg-[#F7F5F2] h-[50vh] md:h-full">
        <Image
          src="/CoachAlicia.jpg"
          alt="Clase de Pilates Reformer en Studio Plié"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Texto abajo en móvil, izquierda en desktop */}
      <div className="order-last md:order-first w-full md:w-1/2 bg-[#FFFCF5] flex flex-col justify-center px-8 lg:px-20 pt-6 md:pt-24 pb-10 md:pb-12">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#2F4156] leading-tight mb-4">
          Pilates Reformer en Puebla
        </h1>
        <p className="text-xl lg:text-3xl text-[#2F4156]/70 mb-8">
          Para transformar tu cuerpo y mente
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#costos"
            className="bg-[#2F4156] text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-[#243347] transition-colors"
          >
            Ver Costos
          </a>

          <a
            href="#horarios"
            className="border border-[#2F4156] text-[#2F4156] text-sm font-medium px-7 py-3 rounded-full hover:bg-[#2F4156] hover:text-white transition-colors"
          >
            Ver horarios
          </a>
        </div>
      </div>
    </section>
  );
}