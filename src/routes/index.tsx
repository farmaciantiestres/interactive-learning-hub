import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { acciones, contexto, estudiante, titulo } from "@/data/planeacion";
import { ChevronDown, MapPin, Sparkles, BookOpen } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acciones Pedagógicas — Sugeiry Ponzón Rivadeneira" },
      {
        name: "description",
        content:
          "Planeación pedagógica intercultural para fortalecer la identidad cultural Wayuu en primera infancia, Hatonuevo, La Guajira.",
      },
      { property: "og:title", content: "Acciones Pedagógicas — Identidad Wayuu" },
      {
        property: "og:description",
        content:
          "Estrategias pedagógicas con recursos sonoros y culturales para niños y niñas Wayuu.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [openId, setOpenId] = useState<string | null>(acciones[0].id);
  const [activeMomento, setActiveMomento] = useState(0);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-sun blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sea/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur px-4 py-1.5 text-sm font-medium animate-fade-up">
            <Sparkles className="w-4 h-4" /> Planeación Pedagógica Intercultural
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {titulo}
          </h1>
          <p className="mt-4 text-xl md:text-2xl opacity-95 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {estudiante}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base opacity-90 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {contexto}</span>
            <span className="inline-flex items-center gap-2"><BookOpen className="w-4 h-4" /> Primera infancia · 5 a 6 años</span>
          </div>
        </div>
        <svg className="block w-full h-12 text-background" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden>
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="currentColor" />
        </svg>
      </section>

      {/* Elementos del ciclo - Tabs visuales */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Elementos del ciclo</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explora cada pregunta orientadora de la planeación. Haz clic para descubrir la propuesta.
          </p>
        </div>

        <div className="grid gap-4">
          {acciones.map((a, idx) => {
            const isOpen = openId === a.id;
            return (
              <article
                key={a.id}
                className="bg-card rounded-2xl shadow-card border border-border overflow-hidden transition-all hover:shadow-warm animate-fade-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : a.id)}
                  className="w-full text-left p-6 md:p-7 flex items-start gap-5 group"
                  aria-expanded={isOpen}
                >
                  <div className="text-4xl md:text-5xl shrink-0 transition-transform group-hover:scale-110">
                    {a.icono}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        Elemento {idx + 1}
                      </span>
                      <span className="inline-block text-xs font-medium text-accent-foreground bg-accent/30 px-2.5 py-1 rounded-full">
                        {a.tema}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{a.pregunta}</h3>
                    <p className="mt-1.5 text-sm md:text-base text-muted-foreground">
                      <span className="font-semibold text-earth">Acciones que requiere:</span> {a.acciones}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-7 pt-2 border-t border-border/60">
                      <div className="bg-secondary/50 rounded-xl p-5 md:p-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-earth mb-2">
                          Descripción de la acción pedagógica
                        </h4>
                        <p className="text-foreground/90 leading-relaxed">{a.descripcion}</p>
                      </div>

                      {a.momentos && (
                        <div className="mt-6">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {a.momentos.map((m, i) => (
                              <button
                                key={m.titulo}
                                onClick={() => setActiveMomento(i)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                                  activeMomento === i
                                    ? "bg-gradient-earth text-earth-foreground shadow-warm"
                                    : "bg-muted text-muted-foreground hover:bg-accent/40"
                                }`}
                              >
                                {i + 1}. {m.titulo}
                              </button>
                            ))}
                          </div>
                          <div className="bg-card border border-border rounded-xl p-5 md:p-6 shadow-card">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="w-10 h-10 rounded-full bg-gradient-hero text-primary-foreground inline-flex items-center justify-center font-bold">
                                {activeMomento + 1}
                              </span>
                              <h5 className="text-xl font-bold text-foreground">
                                {a.momentos[activeMomento].titulo}
                              </h5>
                            </div>
                            <p className="text-foreground/90 leading-relaxed">
                              {a.momentos[activeMomento].contenido}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-earth text-earth-foreground mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-lg font-semibold">Anaa akua'ipa · Buen vivir Wayuu</p>
          <p className="mt-2 text-sm opacity-80">
            Planeación pedagógica · {estudiante} · {contexto}
          </p>
        </div>
      </footer>
    </main>
  );
}
