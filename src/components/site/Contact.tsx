import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Obrigado! Entraremos em contato em até 24 horas.");
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Entre em contato</div>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Vamos construir sua <span className="text-gradient-brand">próxima grande coisa.</span></h2>
            <p className="mt-6 text-muted-foreground">Conte-nos sobre seu projeto. Respondemos a todas as consultas em 24 horas, muitas vezes muito mais rápido.</p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-accent"><Mail className="h-4 w-4" /></div>
                <div><div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div><div className="font-medium">hello@devwebstudio.io</div></div>
              </li>
              <li className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-accent"><MapPin className="h-4 w-4" /></div>
                <div><div className="text-xs uppercase tracking-wider text-muted-foreground">Estúdio</div><div className="font-medium">Lisboa · Remoto mundialmente</div></div>
              </li>
            </ul>

            <a href="https://wa.me/10000000000" target="_blank" rel="noreferrer" className="btn-shine mt-10 inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/5">
              <MessageCircle className="h-4 w-4 text-accent" /> Conversar no WhatsApp
            </a>
          </div>

          <form onSubmit={submit} className="reveal glass rounded-3xl p-8 md:p-10" data-delay="120">
            <div className="space-y-5">
              {(["name", "email"] as const).map((field) => (
                <div key={field} className="group relative">
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground">{field === "name" ? "Seu nome" : "Email"}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    maxLength={field === "email" ? 255 : 100}
                    className="mt-2 w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-foreground outline-none transition-all duration-300 focus:border-primary/60 focus:bg-surface focus:shadow-[0_0_0_4px_hsl(264_100%_62%/0.15)]"
                    placeholder={field === "name" ? "João Silva" : "voce@empresa.com"}
                  />
                </div>
              ))}
              <div className="group relative">
                <label className="block text-xs uppercase tracking-wider text-muted-foreground">Detalhes do projeto</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-surface/60 px-4 py-3 text-foreground outline-none transition-all duration-300 focus:border-primary/60 focus:bg-surface focus:shadow-[0_0_0_4px_hsl(264_100%_62%/0.15)]"
                  placeholder="Conte-nos sobre seus objetivos, prazo e orçamento..."
                />
              </div>
              <button type="submit" disabled={loading} className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_15px_50px_-10px_hsl(264_100%_62%/0.6)] transition-transform hover:scale-[1.02] disabled:opacity-60">
                {loading ? "Enviando…" : <>Enviar mensagem <Send className="h-4 w-4" /></>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
