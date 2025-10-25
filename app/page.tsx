"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";
import { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import FeaturesSectionDemo1 from "@/components/features-section-demo-1";
import FeaturesSectionDemo2 from "@/components/features-section-demo-2";
import FeaturesSectionDemo3 from "@/components/features-section-demo-3";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";

const World = dynamic(() => import("@/components/ui/globe").then(mod => ({ default: mod.World })), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2"
        style={{ borderColor: 'var(--color-acento-principal)' }}>
      </div>
    </div>
  )
});

function GlobeWrapper() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const globeConfig = {
    pointSize: isMobile ? 2 : 4,
    globeColor: "#1a1a2e",
    showAtmosphere: !isMobile,
    atmosphereColor: "#4a90e2",
    atmosphereAltitude: 0.1,
    emissive: "#0f0f23",
    emissiveIntensity: isMobile ? 0.05 : 0.1,
    shininess: isMobile ? 0.5 : 0.9,
    polygonColor: isMobile ? "rgba(34, 139, 34, 0.6)" : "rgba(34, 139, 34, 0.8)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#f0f0f0",
    pointLight: "#ffffff",
    arcTime: isMobile ? 1500 : 1000,
    arcLength: 0.9,
    rings: isMobile ? 1 : 1,
    maxRings: isMobile ? 2 : 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: isMobile ? 0.5 : 1,
  };

  const globeData = isMobile ? [
    {
      order: 1,
      startLat: 40.7128,
      startLng: -74.0060,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: "#00d4ff",
    },
  ] : [
    {
      order: 1,
      startLat: 40.7128,
      startLng: -74.0060,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: "#00d4ff",
    },
    {
      order: 2,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.2,
      color: "#ff6b6b",
    },
    {
      order: 3,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.4,
      color: "#4ecdc4",
    },
  ];

  if (!isLoaded) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2"
          style={{ borderColor: 'var(--color-acento-principal)' }}>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="h-full w-full flex items-center justify-center">
        <div className="animate-pulse text-center" style={{ color: 'var(--color-fondo-claro)' }}>
          Cargando globo...
        </div>
      </div>
    }>
      <World globeConfig={globeConfig} data={globeData} />
    </Suspense>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black" suppressHydrationWarning={true}>
      <section className="h-screen w-full relative overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Spotlight />

        <div className="h-full w-full max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 p-4 lg:p-8" suppressHydrationWarning={true}>

          <div className="flex flex-col justify-center space-y-4 lg:pr-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left">
              
              <div className="relative h-[2em] w-auto max-w-full mx-auto lg:mx-0 mb-1">
                <Image
                  src="/images/logo.png"
                  alt="Kamino Logo"
                  fill
                  className="object-contain object-center lg:object-left"
                  priority
                />
              </div>

              <span className="bg-clip-text text-transparent bg-gradient-to-b"
                style={{
                  backgroundImage: `linear-gradient(to bottom, var(--color-fondo-claro), var(--color-acento-principal))`
                }}>
                Explora tu ciudad
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl max-w-2xl text-center lg:text-left mx-auto lg:mx-0 leading-relaxed"
              style={{ color: 'var(--color-fondo-claro)' }}>
              Descubre lugares únicos, rutas secretas y experiencias urbanas extraordinarias.
              Kamino te conecta con la esencia oculta de tu ciudad a través de la exploración urbana inteligente.
            </p>


          </div>

          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden z-10 pointer-events-none"></div>

            <div className="h-full w-full relative">
              <GlobeWrapper />
            </div>

          </div>
        </div>

      </section>

      <section className="min-h-screen bg-black">
        <HeroHighlight containerClassName="bg-black h-screen">
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
            className="text-2xl px-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Con Kamino, cada calle cuenta una historia. Descubre los secretos de tu ciudad,{" "}
            <Highlight
              className="text-black dark:text-white"
              style={{
                background: `linear-gradient(to right, var(--color-acento-principal), var(--color-acento-secundario))`,
                padding: "0.25rem 0.5rem",
                borderRadius: "0.5rem"
              }}
            >
              un paso a la vez.
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </section>

      <section className="bg-black">
        <FeaturesSectionDemo1 />
      </section>

      <section className="bg-black">
        <FeaturesSectionDemo2 />
      </section>

      <section className="bg-black">
        <FeaturesSectionDemo3 />
      </section>

      <section className="bg-black">
        <WaitlistSection />
      </section>

      <Footer />
    </div>
  );
}