import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#services", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#why", label: "Por que nós" },
  { href: "#testimonials", label: "Clientes" },
  { href: "#contact", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <nav className={`container flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? "glass shadow-[0_10px_40px_-10px_hsl(264_100%_30%/0.5)]" : "bg-transparent"}`}>
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span><span className="text-gradient">DevLop</span> <span className="text-foreground">Studio</span></span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-brand transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-shine hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_hsl(264_100%_62%/0.7)] transition-transform hover:scale-[1.03]">
          Começar
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="container md:hidden">
          <div className="glass mt-2 rounded-2xl p-5 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="text-foreground/80">{l.label}</a></li>
              ))}
              <li><a href="#contact" onClick={() => setOpen(false)} className="inline-block rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white">Começar</a></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
