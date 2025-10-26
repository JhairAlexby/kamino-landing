import type { Metadata } from "next";
import BackButton from "../../components/back-button";

export const metadata: Metadata = {
  title: "Privacidad - Kamino",
  description: "Política de privacidad de Kamino",
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <BackButton className="mb-6" />
        <h1
          className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b"
          style={{ backgroundImage: `linear-gradient(to bottom, var(--color-fondo-claro), var(--color-acento-principal))` }}
        >
          Privacidad
        </h1>

        <p className="text-white/80 mb-8 text-center">
          Tu privacidad es importante para nosotros. En esta página explicamos qué datos
          recopilamos, cómo los utilizamos y qué derechos tienes sobre ellos.
        </p>

        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Información que recopilamos</h2>
            <p>
              Podemos solicitar tu correo electrónico para gestionar comunicaciones sobre el producto,
              lista de espera y novedades. No recopilamos información sensible sin tu consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Uso de tus datos</h2>
            <p>
              Utilizamos tu correo para enviarte actualizaciones, invitaciones y anuncios relevantes de Kamino.
              No vendemos tus datos a terceros. Podremos compartirlos con proveedores de servicios
              (por ejemplo, envío de correo) siempre bajo acuerdos de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Conservación y seguridad</h2>
            <p>
              Guardamos tus datos durante el tiempo necesario para las finalidades descritas y aplicamos medidas
              razonables de seguridad para protegerlos contra accesos no autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Tus derechos</h2>
            <p>
              Puedes solicitar acceso, rectificación, eliminación y oposición al tratamiento de tu información.
              Para ejercer estos derechos, contáctanos en <a href="mailto:contacto@kamino.app" className="text-white underline">contacto@kamino.app</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política de privacidad. Publicaremos cualquier cambio en esta misma página,
              indicando la fecha de la última modificación.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}