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

  const current = data.find((d) => d.day === activeDay);

  return (
    <section className="py-20 bg-[#F5F3EF] text-center">
      <h2 className="text-4xl font-serif mb-10">Horario</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {daysOrder.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
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
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {current?.slots?.map((slot, index) => (
          <div
            key={index}
            className={`px-6 py-4 border-b last:border-none transition ${
              slot.type === "break"
                ? "bg-gray-200 text-gray-700 font-semibold"
                : "hover:bg-gray-50"
            }`}
          >
            {slot.type === "break" ? (
              <p>Descanso</p>
            ) : (
              <>
                <p className="font-medium">{formatTime(slot.time)}</p>
                <p className="text-sm text-gray-500">{slot.coach?.nombre}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
