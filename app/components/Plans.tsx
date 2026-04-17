import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

export default function Plans({ data }: { data: any }) {
  const phone = "5212227095170"; 

  return (
    <section id="costos" className="py-20 bg-[#FFFCF5] text-center">
      <h2 className="text-4xl font-serif mb-2">Elige tu plan</h2>
      <p className="text-gray-500 mb-12">Sin contratos, sin compromisos</p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((plan: { whatsappText: any; nombre: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; precio: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; _id: Key | null | undefined; destacado: any; descripcion: any[]; detalle: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; }) => {
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
                  <ul className="text-sm mb-4 space-y-2 text-left">
                    {plan.descripcion.map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 ${
                          plan.destacado ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        <span className="mt-1 text-xs">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
