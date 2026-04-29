import { ArrowRight, Play } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-accent/30 blur-[120px] animate-pulse-glow" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Agora agendando Q3 — 3 vagas restantes
          </div>

          <h1 className="reveal font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl" data-delay="80">
            Sites que <br className="hidden md:block" />
            <span className="text-gradient-brand animate-gradient">Vendem para Você.</span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl" data-delay="160">
            Projetamos e desenvolvemos experiências digitais de alta conversão para marcas ambiciosas.
            Artesanato premium. Resultados mensuráveis. Zero compromisso.
          </p>

          <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" data-delay="240">
            <a href="#contact" className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_15px_50px_-10px_hsl(264_100%_62%/0.6)] transition-transform hover:scale-[1.04]">
              Inicie seu projeto <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5">
              <Play className="h-4 w-4 text-accent" /> Veja nosso trabalho
            </a>
          </div>
        </div>

        {/* Mockup */}
        <div className="reveal relative mx-auto mt-20 max-w-5xl" data-delay="380">
          <div className="absolute -inset-10 -z-10 rounded-[40px] bg-gradient-brand opacity-20 blur-3xl" />
          <div className="glass animate-float rounded-3xl p-3 shadow-[0_30px_120px_-20px_hsl(264_100%_30%/0.7)]">
            <div className="overflow-hidden rounded-2xl bg-surface">
              <img src={heroMockup} alt="Mockup premium do painel" width={1280} height={896} className="w-full" />
            </div>
          </div>
          {/* Floating badges */}
          <div className="glass animate-float-slow absolute -left-4 top-1/4 hidden rounded-2xl px-4 py-3 md:block">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Conversão</div>
            <div className="font-display text-xl font-bold text-gradient-brand">+312%</div>
          </div>
          <div className="glass animate-float absolute -right-4 bottom-1/4 hidden rounded-2xl px-4 py-3 md:block" style={{ animationDelay: "1.2s" }}>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Carga Média</div>
            <div className="font-display text-xl font-bold text-gradient-brand">0.8s</div>
          </div>
        </div>
      </div>
    </section>
  );
};
