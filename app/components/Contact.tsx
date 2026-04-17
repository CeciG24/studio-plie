"use client";

import { useState } from "react";

export default function Contact() {
  const phone = "5212227095170"; // 👈 cambia esto
  const [form, setForm] = useState({
    nombre: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hola, soy ${form.nombre}. ${form.mensaje}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-[#FFFCF5]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* FORMULARIO */}
        <div>
          <h2 className="text-4xl font-serif mb-4">Contáctanos</h2>
          <p className="text-gray-500 mb-8">
            Agenda tu clase o resuelve tus dudas
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              onChange={handleChange}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2F4156]"
            />

            <textarea
              name="mensaje"
              placeholder="¿En qué podemos ayudarte?"
              required
              rows={4}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2F4156]"
            />

            <button
              type="submit"
              className="w-full bg-[#2F4156] text-white py-3 rounded-lg hover:bg-[#243447] transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* MAPA */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15090.35905597623!2d-98.21036274999999!3d18.9937166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses-419!2smx!4v1776443639956!5m2!1ses-419!2smx"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
