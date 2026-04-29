import { Award, Clock, Headphones, ShieldCheck, Trophy, Zap } from "lucide-react";

const features = [
  { icon: Zap, title: "Performance Incrível", desc: "Carregamentos em subsegundos. Pontuações Lighthouse de 95+. Sempre." },
  { icon: Award, title: "Design Premiável", desc: "Destaque em Awwwards, CSSDA e Behance." },
  { icon: ShieldCheck, title: "Segurança Empresarial", desc: "Práticas alinhadas com SOC 2 incorporadas em cada build." },
  { icon: Headphones, title: "Suporte Concierge", desc: "Slack direto com engenheiros seniores. Sem tickets." },
  { icon: Clock, title: "No prazo, sempre", desc: "98% dos projetos entregues no prazo ou antes." },
  { icon: Trophy, title: "Obcecado por Conversão", desc: "Cada pixel justificado por dados e intenção." },
];

export const WhyUs = () => (
  <section id="why" className="relative py-28">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-10 blur-[120px]" />
    </div>
    <div className="container">
      <div className="reveal mx-auto max-w-2xl text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">Por que DevLop Studio</div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Construído diferente. <span className="text-gradient-brand">De propósito.</span></h2>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border/60 md:grid-cols-3">
        {features.map((f, i) => (
          <div key={f.title} className="reveal group relative bg-background p-8 transition-colors duration-300 hover:bg-surface" data-delay={i * 60}>
            <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-accent transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_hsl(264_100%_62%/0.4)]">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
