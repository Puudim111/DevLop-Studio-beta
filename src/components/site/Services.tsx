import { Code2, Palette, Rocket, Search, ShoppingBag, Smartphone } from "lucide-react";

const services = [
  { icon: Code2, title: "Desenvolvimento Web", desc: "Sites ultrarrápidos construídos com stacks modernas. Perfeitos em pixels, prontos para SEO, escaláveis." },
  { icon: Palette, title: "Design UI / UX", desc: "Interfaces distintas que transformam visitantes de primeira vez em clientes fiéis." },
  { icon: ShoppingBag, title: "Comércio Eletrônico", desc: "Vitrines projetadas para conversão — Shopify, Stripe, checkouts personalizados." },
  { icon: Smartphone, title: "Mobile-First", desc: "Experiências impecáveis de 320px a 4K. Testadas em dispositivos reais." },
  { icon: Search, title: "SEO e Performance", desc: "Carregamentos em subsegundos, Core Web Vitals verdes e rankings que se acumulam." },
  { icon: Rocket, title: "Lançamento e Crescimento", desc: "Estratégia, testes A/B, analytics. Não apenas lançamos — escalamos." },
];

export const Services = () => (
  <section id="services" className="relative py-28">
    <div className="container">
      <div className="reveal mx-auto max-w-2xl text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">O que fazemos</div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
          Criado para <span className="text-gradient-brand">converter.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">Um conjunto completo de serviços para levar sua marca de uma tela em branco a líder de categoria.</p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title} className="reveal card-hover group relative overflow-hidden rounded-3xl border border-border/60 bg-surface/60 p-8" data-delay={i * 80}>
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
            <div className="relative">
              <div className="mb-6 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-soft border border-primary/20">
                <s.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
