"use client";

export default function WhatsAppButton() {
  const phone = "5212227095170"; // 👈 cambia esto

  const message =
    "Hola, me gustaría recibir información sobre las clases de pilates";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Botón */}
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center">
        {/* Icono */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-current"
        >
          <path d="M16.001 3C9.372 3 4 8.372 4 15c0 2.385.7 4.606 1.9 6.476L4 29l7.734-1.86A11.94 11.94 0 0016 27c6.628 0 12-5.372 12-12S22.629 3 16.001 3zm0 21.6c-1.98 0-3.815-.58-5.36-1.58l-.384-.242-4.59 1.104 1.226-4.474-.25-.396A9.57 9.57 0 016.4 15c0-5.293 4.307-9.6 9.6-9.6 5.294 0 9.6 4.307 9.6 9.6 0 5.293-4.306 9.6-9.6 9.6zm5.26-7.22c-.29-.145-1.72-.85-1.986-.946-.265-.097-.46-.145-.653.145-.193.29-.75.946-.92 1.14-.17.193-.338.217-.628.072-.29-.145-1.224-.45-2.33-1.436-.86-.767-1.44-1.713-1.61-2.003-.17-.29-.018-.447.127-.592.13-.13.29-.338.435-.507.145-.17.193-.29.29-.483.097-.193.048-.362-.024-.507-.072-.145-.653-1.57-.894-2.15-.234-.563-.472-.486-.653-.495l-.557-.01c-.193 0-.507.072-.773.362-.265.29-1.014.99-1.014 2.413 0 1.423 1.038 2.8 1.183 2.994.145.193 2.044 3.122 4.953 4.378.692.298 1.232.475 1.653.608.695.22 1.328.189 1.828.115.558-.083 1.72-.702 1.963-1.38.241-.677.241-1.257.169-1.38-.072-.121-.266-.193-.556-.338z" />
        </svg>
      </div>

      {/* Tooltip */}
      <span className="absolute right-14 bottom-1/2 translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Escríbenos
      </span>
    </a>
  );
}
