import type { Metadata } from "next";
import BackButton from "../../components/back-button";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Kamino",
  description: "Términos y Condiciones del servicio Kamino",
};

export default function Terminos() {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <BackButton className="mb-6" />
        <h1
          className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b"
          style={{ backgroundImage: `linear-gradient(to bottom, var(--color-fondo-claro), var(--color-acento-principal))` }}
        >
          Términos y Condiciones
        </h1>

        <p className="text-white/80 mb-8 text-center">
          Lee atentamente estos términos antes de utilizar Kamino. Al acceder o usar el servicio,
          aceptas las condiciones descritas a continuación.
        </p>

        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Aceptación de los términos</h2>
            <p>
              Al usar Kamino, confirmas que tienes la capacidad legal para aceptar estos términos y que
              los has leído y comprendido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Uso del servicio</h2>
            <p>
              Te comprometes a utilizar Kamino de forma lícita y respetuosa, sin infringir derechos de terceros
              ni realizar actividades que afecten la seguridad o disponibilidad del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Cuenta y seguridad</h2>
            <p>
              Si en el futuro existen cuentas de usuario, eres responsable de mantener la confidencialidad
              de tus credenciales y de todas las actividades realizadas bajo tu cuenta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Propiedad intelectual</h2>
            <p>
              Todo el contenido, marcas y elementos gráficos de Kamino son propiedad de sus respectivos titulares.
              No se permite su uso sin autorización previa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Limitación de responsabilidad</h2>
            <p>
              Kamino se proporciona "tal cual". No garantizamos disponibilidad continua ni ausencia de errores.
              No seremos responsables por daños derivados del uso del servicio más allá de lo permitido por la ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Modificaciones</h2>
            <p>
              Podemos actualizar estos términos. Publicaremos cambios en esta página indicando la fecha de
              última modificación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Contacto</h2>
            <p>
              Si tienes preguntas, escríbenos a <a href="mailto:contacto@kamino.app" className="text-white underline">contacto@kamino.app</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}