import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b" 
              style={{ 
                backgroundImage: `linear-gradient(to bottom, var(--color-fondo-claro), var(--color-acento-principal))` 
              }}>
            Kamino <br /> Explora tu ciudad
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg max-w-2xl text-center mx-auto" 
             style={{ color: 'var(--color-fondo-claro)' }}>
            Descubre lugares únicos, rutas secretas y experiencias urbanas extraordinarias. 
            Kamino te conecta con la esencia oculta de tu ciudad a través de la exploración urbana inteligente.
          </p>
        </div>
      </div>
      
    </div>
  );
}
