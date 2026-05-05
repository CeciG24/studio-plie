import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import History from "./components/History";
import Coachs from "./components/Coachs";
import Schedule from "./components/Schedule";
import Inauguracion from "./components/Inauguracion";

import { client } from "@/sanity/lib/client";
import { scheduleQuery } from "@/sanity/lib/queries";

import { plansQuery } from "@/sanity/lib/queries";
import Plans from "./components/Plans";
import { galleryQuery } from "@/sanity/lib/queries";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default async function Home() {
  const scheduleData = await client.fetch(scheduleQuery);
  const plansData = await client.fetch(plansQuery);
  const galleryData = await client.fetch(galleryQuery);
  return (
    <main>
      <Hero />
      <Inauguracion />
      <Benefits />
      <History />
      <Coachs />

      <Schedule data={scheduleData} />
      <Plans data={plansData} />
      <Gallery data={galleryData?.imagenes} />
      <Contact />
    </main>
  );
}
