import Image from "next/image";
export default function History() {
  return (
    <section
      id="historia"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[#F7F5F2]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2F4156] mb-12 text-center">
          Nuestra Historia
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/pilates-reformer.jpg"
              alt="Nuestra Historia"
              width={600}
              height={400}
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-[#6B7280]">
              El estudio nace con la idea de hacer del pilates una experiencia
              accesible para más personas. Buscamos romper la idea de que es
              exclusivo, ofreciendo clases de calidad en un ambiente cercano,
              profesional y a precios justos.
                <br />
                <br />
              Más que un estudio, somos un espacio donde puedes desconectarte
              del estrés, reconectar con tu cuerpo y sentirte acompañada en tu
              proceso, en una comunidad inclusiva que prioriza tu bienestar
              físico y mental.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
