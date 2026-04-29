import { Github, Instagram, Linkedin, Sparkles, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/60 py-12">
    <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
      <a href="#top" className="flex items-center gap-2 font-display font-bold">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand"><Sparkles className="h-4 w-4 text-white" /></span>
        <span><span className="text-gradient">DevLop</span> Studio</span>
      </a>
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DevLop Studio. Criado com obsessão.</p>
      <div className="flex items-center gap-3">
        {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
          <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:text-foreground hover:shadow-[0_0_20px_hsl(264_100%_62%/0.4)]">
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
