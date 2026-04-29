import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const items = [
  { img: p1, title: "Lumecto Store", category: "Comércio Eletrônico", span: "md:col-span-2" },
  { img: p2, title: "Eclipse Analytics", category: "Plataforma SaaS", span: "md:col-span-1" },
  { img: p3, title: "Phantom Wallet", category: "App Fintech", span: "md:col-span-1" },
  { img: p4, title: "Portoria Studio", category: "Editorial", span: "md:col-span-2" },
];

export const Portfolio = () => (
  <section id="portfolio" className="relative py-28">
    <div className="container">
      <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Trabalhos selecionados</div>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Projetos dos quais nos <span className="text-gradient-brand">orgulhamos.</span></h2>
        </div>
        <p className="max-w-md text-muted-foreground">Um punhado de colaborações recentes com fundadores, fintechs e marcas que definem categorias.</p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {items.map((p, i) => (
          <a key={p.title} href="#" className={`reveal group relative overflow-hidden rounded-3xl border border-border/60 ${p.span}`} data-delay={i * 100}>
            <div className="aspect-[4/3] overflow-hidden bg-surface">
              <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">{p.category}</div>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground md:text-2xl">{p.title}</h3>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
