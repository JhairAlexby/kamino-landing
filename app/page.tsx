"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Sección Spotlight */}
      <section className="h-dvh w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
          <h1
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b"
            style={{
              backgroundImage: `linear-gradient(to bottom, var(--color-fondo-claro), var(--color-acento-principal))`,
            }}
          >
            Kamino <br /> Explora tu ciudad
          </h1>
          <p
            className="mt-4 font-normal text-base md:text-lg max-w-2xl text-center mx-auto"
            style={{ color: "var(--color-fondo-claro)" }}
          >
            Descubre lugares únicos, rutas secretas y experiencias urbanas extraordinarias.
            Kamino te conecta con la esencia oculta de tu ciudad a través de la exploración urbana inteligente.
          </p>
        </div>
      </section>

      {/* Sección Hero Highlight */}
      <section>
        <HeroHighlight containerClassName="bg-black h-dvh">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Con Kamino, cada calle cuenta una historia. Descubre los secretos de tu ciudad,
            <Highlight
              className="text-black dark:text-white"
              style={{
                background: `linear-gradient(to right, var(--color-acento-principal), var(--color-acento-secundario))`,
              }}
            >
              un paso a la vez.
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </section>
    </div>
  );
}
