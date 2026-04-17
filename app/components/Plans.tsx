export default function Plans({ data }) {
  const phone = "5212227095170"; // 👈 cambia por el número real

  return (
    <section className="py-20 bg-[#F5F3EF] text-center">
      <h2 className="text-4xl font-serif mb-2">Elige tu plan</h2>
      <p className="text-gray-500 mb-12">Sin contratos, sin compromisos</p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((plan) => {
          const message = plan.whatsappText
            ? plan.whatsappText
            : `Hola, me interesa el plan ${plan.nombre} de $${plan.precio}`;

          const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
            message,
          )}`;

          return (
            <div
              key={plan._id}
              className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                plan.destacado
                  ? "bg-[#2F4156] text-white shadow-xl scale-105"
                  : "bg-white hover:shadow-md"
              }`}
            >
              {/* Info */}
              <div>
                <h3 className="text-lg font-semibold mb-2">{plan.nombre}</h3>

                <p className="text-3xl font-bold mb-4">${plan.precio}</p>

                {plan.descripcion && (
                  <p
                    className={`text-sm mb-2 ${
                      plan.destacado ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {plan.descripcion}
                  </p>
                )}

                {plan.detalle && (
                  <p
                    className={`text-xs mb-6 ${
                      plan.destacado ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    {plan.detalle}
                  </p>
                )}
              </div>

              {/* Botón */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-block w-full py-3 rounded-lg font-medium transition ${
                  plan.destacado
                    ? "bg-white text-[#2F4156] hover:bg-gray-200"
                    : "bg-[#2F4156] text-white hover:bg-[#243447]"
                }`}
              >
                Reservar
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
