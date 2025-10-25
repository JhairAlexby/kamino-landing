"use client";
import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus({ type: "error", message: "Por favor, ingresa un correo válido." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data?.ok) {
        setStatus({ type: "success", message: data.message ?? "¡Te registraste a la lista de espera!" });
        setEmail("");
      } else {
        setStatus({ type: "error", message: data?.message ?? "Ocurrió un error. Intenta de nuevo." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "No se pudo enviar. Verifica tu conexión." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Regístrate a la lista de espera</h2>
        <p className="mt-3 text-white/80">Sé el primero en explorar Kamino cuando lancemos.</p>
        <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center" noValidate>
          <input
            type="email"
            name="email"
            aria-label="Correo electrónico"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-[320px] rounded-md px-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-acento-principal)]"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md px-6 py-3 font-semibold text-black disabled:opacity-60"
            style={{ backgroundColor: "var(--color-acento-principal)" }}
          >
            {loading ? "Enviando..." : "Registrarme"}
          </button>
        </form>
        {status && (
          <p className={`mt-4 text-sm ${status.type === "success" ? "text-emerald-400" : "text-red-400"}`}>
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}