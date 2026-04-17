import Image from "next/image";
import { client, urlFor } from "../../sanity/lib/client";

interface Instructora {
  _id: string;
  nombre: string;
  especialidad: string;
  bio: string;
  foto: object;
  orden: number;
}

async function getInstructoras(): Promise<Instructora[]> {
  return client.fetch(
    `*[_type == "instructora"] | order(orden asc)`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export default async function Coachs() {
  const instructoras = await getInstructoras();

  return (
    <section id="instructores" className="bg-[#FFFCF5] py-24 px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#2F4156] mb-4">
          Nuestras instructoras
        </h2>
        <p className="text-lg text-[#6B7280]">
          Profesionales certificadas para guiarte en cada sesión
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructoras.map((instructora) => (
          <div
            key={instructora._id}
            className="flex flex-col items-center text-center group"
          >
            {/* Foto */}
            <div className="relative w-52 h-52 rounded-full overflow-hidden mb-6 shadow-md">
              {instructora.foto ? (
                <Image
                  src={urlFor(instructora.foto).width(400).height(400).url()}
                  alt={instructora.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-[#F7F5F2] flex items-center justify-center">
                  <span className="text-4xl text-[#2F4156]/30">
                    {instructora.nombre?.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <h3 className="text-xl font-bold text-[#2F4156] mb-1">
              {instructora.nombre}
            </h3>
            <p className="text-sm font-medium text-[#2F4156]/60 mb-3 tracking-wide uppercase">
              {instructora.especialidad}
            </p>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs">
              {instructora.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}