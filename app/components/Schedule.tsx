"use client";

import { useState } from "react";

const daysOrder = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

function formatTime(time: string) {
  const [start, end] = time.split("-");
  return `${start}:00 - ${end}:00`;
}

export default function Schedule({ data }) {
  const [activeDay, setActiveDay] = useState("lunes");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const phone = "5212227095170";

  const current = data.find((d) => d.day === activeDay);

  const handleScheduleClick = () => {
    if (!selectedSlot) return;

    const timeFormatted = formatTime(selectedSlot.time);
    const coachName = selectedSlot.coach?.nombre || "disponible";
    const dayName = activeDay.charAt(0).toUpperCase() + activeDay.slice(1);
    const message = `Hola, me interesa agendar la clase de ${dayName} a las ${timeFormatted} con ${coachName}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="horarios" className="py-20 bg-[#F5F3EF] text-center">
      <h2 className="text-4xl font-serif mb-10">Horario</h2>

      <p className="text-gray-600 mb-8">
        Selecciona el horario que prefieres y envía tu solicitud por WhatsApp
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {daysOrder.map((day) => (
          <button
            key={day}
            onClick={() => {
              setActiveDay(day);
              setSelectedSlot(null);
            }}
            className={`px-4 py-2 rounded-full transition-all ${
              activeDay === day
                ? "bg-[#2F4156] text-white"
                : "bg-white text-gray-600 hover:bg-gray-200"
            }`}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </button>
        ))}
      </div>

      {/* Schedule Card */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden mb-6">
        {current?.slots?.map((slot, index) => (
          <button
            key={index}
            onClick={() => {
              if (slot.type !== "break") {
                setSelectedSlot(slot);
              }
            }}
            disabled={slot.type === "break"}
            className={`w-full px-6 py-4 border-b last:border-none transition text-left ${
              slot.type === "break"
                ? "bg-gray-200 text-gray-700 font-semibold cursor-not-allowed"
                : selectedSlot === slot
                  ? "bg-[#2F4156] text-white"
                  : "bg-white text-gray-900 hover:bg-gray-50"
            }`}
          >
            {slot.type === "break" ? (
              <p>Descanso</p>
            ) : (
              <>
                <p className="font-medium">{formatTime(slot.time)}</p>
                <p className="text-sm opacity-75">{slot.coach?.nombre}</p>
              </>
            )}
          </button>
        ))}
      </div>

      {/* Agendar Button */}
      <button
        onClick={handleScheduleClick}
        disabled={!selectedSlot}
        className={`px-8 py-3 rounded-lg font-medium transition ${
          selectedSlot
            ? "bg-[#2F4156] text-white hover:bg-[#243447]"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Agendar
      </button>
    </section>
  );
}
