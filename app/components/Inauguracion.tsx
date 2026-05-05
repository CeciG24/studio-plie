"use client";

import { useEffect, useState } from "react";

// Cambia esta fecha a la fecha real de inauguración
const FECHA_INAUGURACION = new Date("2026-05-09T10:00:00");

const AGENDA = [
  { hora: "9:00", actividad: "Liston inaugural y bienvenida" },
  { hora: "10:00", actividad: "Primera Clase" },
  { hora: "11:00", actividad: "Segunda Clase" },
  { hora: "12:00", actividad: "Tercera Clase" },
  { hora: "13:00", actividad: "Bendicion y comida" },
  { hora: "14:00", actividad: "Break / Convivencia" },
  { hora: "15:00", actividad: "Clase" },
  { hora: "16:00", actividad: "Clase" },
];

const WHATSAPP_NUMBER = "522227095170"; // Cambia al número real
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, me interesa apartar mi lugar para la inauguración de Studio Plié 🙌",
);

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    return {
      dias: Math.floor(diff / 86400000),
      horas: Math.floor((diff % 86400000) / 3600000),
      minutos: Math.floor((diff % 3600000) / 60000),
      segundos: Math.floor((diff % 60000) / 1000),
    };
  };

  const [tiempo, setTiempo] = useState(calc);

  useEffect(() => {
    const timer = setInterval(() => setTiempo(calc), 1000);
    return () => clearInterval(timer);
  }, []);

  return tiempo;
}

export default function Inauguracion() {
  const { dias, horas, minutos, segundos } = useCountdown(FECHA_INAUGURACION);

  return (
    <section className="bg-[#2F4156] py-20 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-white/20">
            ✦ Evento especial
          </span>
        </div>

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">
            Gran Inauguración
          </h2>
          <p className="text-white/70 text-lg">
            9 de mayo · 9:00 am · Plaza universidad, Puebla
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda — Agenda */}
          <div className="flex flex-col gap-8">
            {/* Agenda */}
            <div>
              <h3 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">
                Agenda del día
              </h3>
              <div className="flex flex-col gap-3">
                {AGENDA.map((item) => (
                  <div
                    key={item.hora}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-3"
                  >
                    <span className="text-white/50 text-sm font-mono w-12 shrink-0">
                      {item.hora}
                    </span>
                    <span className="text-white text-sm">{item.actividad}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha — Countdown + Promo + CTA */}
          <div className="flex flex-col items-center gap-8">
            {/* Countdown */}
            <div className="w-full">
              <p className="text-white/50 text-xs font-semibold tracking-widest uppercase text-center mb-6">
                Faltan
              </p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { valor: dias, label: "Días" },
                  { valor: horas, label: "Horas" },
                  { valor: minutos, label: "Min" },
                  { valor: segundos, label: "Seg" },
                ].map(({ valor, label }) => (
                  <div
                    key={label}
                    className="bg-white/10 border border-white/20 rounded-2xl py-5 flex flex-col items-center gap-1"
                  >
                    <span className="text-white text-3xl font-bold tabular-nums">
                      {String(valor).padStart(2, "0")}
                    </span>
                    <span className="text-white/40 text-xs uppercase tracking-wide">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo - Mejorada */}
            <div className="w-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border-2 border-amber-400/60 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <p className="text-amber-200 text-xs font-semibold tracking-widest uppercase mb-3">
                  Promoción de inauguración
                </p>
                <p className="text-white text-3xl font-bold mb-2">
                  $180 por clase
                </p>
                <p className="text-white/80 text-sm">
                  Incluye café o batido de tu elección · Solo en inauguración
                </p>
              </div>
            </div>

            {/* Urgencia */}
            <p className="text-white/60 text-sm text-center">
              Lugares limitados — aparta el tuyo antes de que se agoten
            </p>

            {/* CTA WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-[#2F4156] text-center font-semibold py-4 rounded-full hover:bg-white/90 transition-colors text-sm"
            >
              Apartar mi lugar por WhatsApp
            </a>

            <p className="text-white/30 text-xs text-center">
              Sin costo · Solo necesitas confirmar tu asistencia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
