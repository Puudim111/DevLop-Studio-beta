import { useCountUp } from "@/hooks/useCountUp";

const Stat = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { val, ref } = useCountUp(value);
  return (
    <div className="reveal text-center">
      <div className="font-display text-5xl font-bold md:text-6xl">
        <span className="text-gradient-brand">+<span ref={ref}>{val}</span>{suffix}</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
};

export const Stats = () => (
  <section className="relative py-20">
    <div className="container">
      <div className="glass grid grid-cols-1 gap-10 rounded-3xl p-10 md:grid-cols-3">
        <Stat value={300} suffix="" label="Projetos Entregues" />
        <Stat value={200} suffix="" label="Clientes Satisfeitos" />
        <Stat value={100} suffix="%" label="Taxa de Satisfação" />
      </div>
    </div>
  </section>
);
