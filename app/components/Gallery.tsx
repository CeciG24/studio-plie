"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/client";

export default function Gallery({ data }: { data: any[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const main = data[0];
  const rest = data.slice(1);

  const open = (index: number) => setSelectedIndex(index);
  const close = () => setSelectedIndex(null);

  const next = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % data.length : prev,
    );

  const prev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + data.length) % data.length : prev,
    );

  return (
    <section className="py-24 bg-[#F5F3EF] text-center">
      <h2 className="text-5xl font-serif mb-16">Nuestro espacio</h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        {/* Imagen principal */}
        <div
          onClick={() => open(0)}
          className={`relative cursor-pointer rounded-xl overflow-hidden ${
            rest.length === 0
              ? "col-span-3 h-[500px]"
              : "md:col-span-2 h-[500px]"
          }`}
        >
          <Image
            src={urlFor(main).width(1000).height(750).url()}
            alt=""
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Secundarias */}
        {rest.length > 0 && (
          <div className="grid gap-6 grid-cols-2">
            {rest.map((img: any, i: number) => (
                  <div
                    key={i}
                    onClick={() => open(i + 1)}
                    className="relative h-[240px] cursor-pointer rounded-xl overflow-hidden"
                  >
                    <Image
                      src={urlFor(img).width(500).height(400).url()}
                      alt=""
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            {/* Imagen */}
            <motion.div
              className="relative w-[95%] max-w-5xl h-[85vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={urlFor(data[selectedIndex]).width(1400).url()}
                alt=""
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>

            {/* Cerrar */}
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white text-4xl"
            >
              ✕
            </button>

            {/* Flechas */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-6 text-white text-4xl"
            >
              ←
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-6 text-white text-4xl"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
