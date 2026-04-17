import { ReactNode } from "react";

interface BeneficioCard {
  icon: ReactNode;
  titulo: string;
  descripcion: string;
}

const beneficios: BeneficioCard[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L8 8H3l4 4-1.5 6L12 15l6.5 3L17 12l4-4h-5L12 2z" />
      </svg>
    ),
    titulo: "Fortalece sin impacto",
    descripcion: "Ejercicios seguros y efectivos para todo nivel",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
      </svg>
    ),
    titulo: "Reduce el estrés",
    descripcion: "Conecta cuerpo y mente en cada sesión",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M12 9a3 3 0 000 6" />
        <path d="M7 7l-2-2M17 17l2 2M7 17l-2 2M17 7l2-2" />
      </svg>
    ),
    titulo: "Mejora tu postura",
    descripcion: "Corrige desbalances y alinea tu cuerpo",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    titulo: "Resultados visibles",
    descripcion: "Mayor tonificación y flexibilidad",
  },
];

export default function Beneficios() {
  return (
    <section className="bg-[#F7F5F2] py-24 px-8">
      {/* Encabezado */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#2F4156] mb-4">
          Beneficios de los Pilates
        </h2>
        <p className="text-lg text-[#6B7280]">
          Un método efectivo para mejorar tu fuerza, postura y bienestar físico
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {beneficios.map((b) => (
          <div
            key={b.titulo}
            className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-sm border border-[#F7F5F2] hover:shadow-md hover:-translate-y-1 hover:border-[#2F4156]/20 transition-all duration-300 cursor-pointer"
          >
            <div className="text-[#2F4156]">{b.icon}</div>
            <h3 className="text-base font-bold text-[#2F4156] leading-snug">
              {b.titulo}
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              {b.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <a
          href="#horarios"
          className="bg-[#2F4156] text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-[#243347] transition-colors"
        >
          Agendar Clase
        </a>
      </div>
    </section>
  );
}