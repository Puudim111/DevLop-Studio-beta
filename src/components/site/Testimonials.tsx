import { Quote } from "lucide-react";

const items = [
  { quote: "DevLop Studio reconstruiu nosso site de marketing e as conversões saltaram 240% em 6 semanas. Eles são o negócio real.", name: "Sarah Lin", role: "CEO, Northwind", initials: "SL" },
  { quote: "Facilmente o parceiro de design mais atencioso com quem trabalhamos. Cada detalhe foi intencional.", name: "Marcus Reyes", role: "Founder, Phantom", initials: "MR" },
  { quote: "Carregamentos em subsegundos, UI bonita e uma equipe que entrega. Vale cada centavo — e mais.", name: "Anya Petrova", role: "CTO, Eclipse", initials: "AP" },
  { quote: "Do início ao lançamento em 5 semanas. O novo site se tornou nosso melhor representante de vendas da noite para o dia.", name: "Daniel Okafor", role: "CMO, Lumecto", initials: "DO" },
];

export const Testimonials = () => (
  <section id="testimonials" className="relative py-28">
    <div className="container">
      <div className="reveal mx-auto max-w-2xl text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">Amado por fundadores</div>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">O que os clientes <span className="text-gradient-brand">dizem.</span></h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {items.map((t, i) => (
          <figure key={t.name} className="reveal card-hover relative rounded-3xl border border-border bg-surface/60 p-8" data-delay={i * 80}>
            <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/30" />
            <blockquote className="text-lg leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-white">{t.initials}</div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
