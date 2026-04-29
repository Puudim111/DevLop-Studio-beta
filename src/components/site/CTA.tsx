import { ArrowRight } from "lucide-react";

export const CTA = () => (
  <section className="relative py-24">
    <div className="container">
      <div className="reveal relative overflow-hidden rounded-[40px] border border-primary/30 p-12 md:p-20">
        <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-90" />
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="absolute -inset-20 -z-10 animate-pulse-glow rounded-full bg-primary/40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Pronto para construir algo <em className="not-italic underline decoration-white/40 underline-offset-8">inesquecível?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/85 md:text-lg">
            Vamos projetar uma experiência digital que transforma seus visitantes em clientes — e clientes em fãs.
          </p>
          <a href="#contact" className="btn-shine mt-10 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground shadow-2xl transition-transform hover:scale-[1.04]">
            Agende sua chamada estratégica gratuita <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
