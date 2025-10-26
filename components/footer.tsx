import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Kamino" width={32} height={32} />
        </div>
        <div className="text-white/70 text-sm order-3 sm:order-2">
          © {new Date().getFullYear()} Kamino. Todos los derechos reservados.
        </div>
        <div className="flex gap-6 text-white/70 text-sm order-2 sm:order-3">
          <a href="/privacidad" className="hover:text-white" aria-label="Ver Política de Privacidad">Privacidad</a>
          <a href="/terminos" className="hover:text-white" aria-label="Ver Términos y Condiciones">Términos y Condiciones</a>
          <a href="mailto:contacto@kamino.app" className="hover:text-white" aria-label="Contactar a Kamino">Contacto</a>
        </div>
      </div>
    </footer>
  );
}