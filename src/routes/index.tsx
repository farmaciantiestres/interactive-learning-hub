import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { acciones, contexto, estudiante, titulo } from "@/data/planeacion";
import { ChevronDown, MapPin, Sparkles, BookOpen, Heart, Star, Sun, Cloud } from "lucide-react";

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

const decoEmojis = ["🌈", "⭐", "🎈", "🌸", "🦋", "✨", "🌻", "🎨", "🪁", "🌟"];

function Index() {
  const [openId, setOpenId] = useState<string | null>(acciones[0].id);
  const [activeMomento, setActiveMomento] = useState(0);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Decoración flotante de fondo */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        {decoEmojis.map((e, i) => (
          <span
            key={i}
            className="absolute text-3xl md:text-4xl opacity-30 animate-float"
            style={{
              top: `${(i * 37) % 90 + 5}%`,
              left: `${(i * 53) % 92 + 3}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          >
            {e}
          </span>
        ))}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        {/* Blurs animados */}
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-sun blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sea/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-accent/40 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        {/* Iconos decorativos */}
        <Sun className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 text-sun animate-spin-slow" aria-hidden />
        <Cloud className="absolute top-16 left-12 w-12 h-12 md:w-16 md:h-16 text-white/70 animate-float" aria-hidden />
        <Cloud className="absolute bottom-24 right-24 w-10 h-10 md:w-14 md:h-14 text-white/60 animate-float" style={{ animationDelay: "1.5s" }} aria-hidden />
        <Star className="absolute bottom-16 left-20 w-8 h-8 text-sun animate-wiggle fill-sun" aria-hidden />
        <Heart className="absolute top-24 right-1/3 w-7 h-7 text-white/80 animate-bounce-slow fill-white/60" aria-hidden />

        {/* Emojis grandes flotantes */}
        <span className="absolute top-32 left-1/4 text-5xl md:text-6xl animate-bounce-slow" aria-hidden>🎨</span>
        <span className="absolute bottom-12 left-1/2 text-4xl md:text-5xl animate-wiggle" aria-hidden>🪁</span>
        <span className="absolute top-1/2 right-16 text-4xl md:text-5xl animate-float" aria-hidden>🌈</span>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-5 py-2 text-sm font-bold animate-fade-up shadow-warm">
            <Sparkles className="w-4 h-4" /> Planeación Pedagógica Intercultural
            <Sparkles className="w-4 h-4" />
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight animate-fade-up drop-shadow-lg" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block animate-bounce-slow mr-2">🌟</span>
            {titulo}
            <span className="inline-block animate-bounce-slow ml-2" style={{ animationDelay: "0.5s" }}>🌟</span>
          </h1>
          <p className="mt-6 text-2xl md:text-3xl font-semibold opacity-95 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {estudiante}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full font-medium">
              <MapPin className="w-4 h-4" /> {contexto}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full font-medium">
              <BookOpen className="w-4 h-4" /> Primera infancia · 5 a 6 años
            </span>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full font-medium">
              🎒 Aula intercultural Wayuu
            </span>
          </div>
        </div>
        <svg className="block w-full h-16 text-background" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden>
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="currentColor" />
        </svg>
      </section>

      {/* Elementos del ciclo */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-3xl">
            <span className="animate-wiggle inline-block">🎈</span>
            <span className="animate-bounce-slow inline-block">📚</span>
            <span className="animate-wiggle inline-block" style={{ animationDelay: "0.3s" }}>🎨</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Elementos del ciclo</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-lg">
            Explora cada pregunta orientadora de la planeación. ¡Haz clic para descubrir la propuesta! ✨
          </p>
        </div>

        <div className="grid gap-5">
          {acciones.map((a, idx) => {
            const isOpen = openId === a.id;
            return (
              <article
                key={a.id}
                className="bg-card rounded-3xl shadow-card border-2 border-border overflow-hidden transition-all hover:shadow-warm hover:-translate-y-1 hover:border-primary/40 animate-fade-up relative"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <span className="absolute top-3 right-3 text-2xl animate-wiggle opacity-70" aria-hidden>
                  {["🌈", "🌻", "⭐", "🎵"][idx % 4]}
                </span>
                <button
                  onClick={() => setOpenId(isOpen ? null : a.id)}
                  className="w-full text-left p-6 md:p-7 flex items-start gap-5 group"
                  aria-expanded={isOpen}
                >
                  <div className="text-5xl md:text-6xl shrink-0 transition-transform group-hover:scale-125 group-hover:rotate-12 bg-gradient-to-br from-sun/40 to-accent/30 rounded-2xl p-3 shadow-card">
                    {a.icono}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full shadow-sm">
                        ✦ Elemento {idx + 1}
                      </span>
                      <span className="inline-block text-xs font-semibold text-accent-foreground bg-accent/40 px-3 py-1 rounded-full">
                        {a.tema}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{a.pregunta}</h3>
                    <p className="mt-1.5 text-sm md:text-base text-muted-foreground">
                      <span className="font-semibold text-earth">Acciones que requiere:</span> {a.acciones}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-7 h-7 text-primary shrink-0 transition-transform duration-300 mt-2 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-7 pt-2 border-t-2 border-dashed border-border/60">
                      <div className="bg-gradient-to-br from-secondary/60 to-accent/20 rounded-2xl p-5 md:p-6 relative">
                        <span className="absolute -top-3 -left-2 text-3xl animate-bounce-slow" aria-hidden>💡</span>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-earth mb-2 ml-8">
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
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                                  activeMomento === i
                                    ? "bg-gradient-earth text-earth-foreground shadow-warm scale-105"
                                    : "bg-muted text-muted-foreground hover:bg-accent/40 hover:scale-105"
                                }`}
                              >
                                {["🌅", "🎵", "🌙"][i]} {m.titulo}
                              </button>
                            ))}
                          </div>
                          <div className="bg-card border-2 border-primary/20 rounded-2xl p-5 md:p-6 shadow-card relative overflow-hidden">
                            <div className="absolute -top-6 -right-6 text-7xl opacity-10" aria-hidden>
                              {["🌅", "🎵", "🌙"][activeMomento]}
                            </div>
                            <div className="flex items-center gap-3 mb-3 relative">
                              <span className="w-12 h-12 rounded-full bg-gradient-hero text-primary-foreground inline-flex items-center justify-center font-bold text-lg shadow-warm">
                                {activeMomento + 1}
                              </span>
                              <h5 className="text-2xl font-bold text-foreground">
                                {a.momentos[activeMomento].titulo}
                              </h5>
                            </div>
                            <p className="text-foreground/90 leading-relaxed relative">
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
      <footer className="bg-gradient-earth text-earth-foreground mt-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 text-4xl flex justify-around items-center" aria-hidden>
          <span className="animate-float">🌵</span>
          <span className="animate-bounce-slow">🦙</span>
          <span className="animate-float" style={{ animationDelay: "1s" }}>🌞</span>
          <span className="animate-bounce-slow" style={{ animationDelay: "0.5s" }}>🏜️</span>
          <span className="animate-float" style={{ animationDelay: "1.5s" }}>🌵</span>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12 text-center relative">
          <div className="text-4xl mb-3">💛 🤍 ❤️</div>
          <p className="text-2xl font-bold">Anaa akua'ipa · Buen vivir Wayuu</p>
          <p className="mt-2 text-sm opacity-90">
            Planeación pedagógica · {estudiante} · {contexto}
          </p>
        </div>
      </footer>
    </main>
  );
}
