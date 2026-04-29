import { useEffect, useState } from "react";

export const Loader = () => {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 900);
    const t2 = setTimeout(() => setGone(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (gone) return null;
  return (
    <div className={`fixed inset-0 z-[10000] flex items-center justify-center bg-background transition-opacity duration-500 ${hide ? "opacity-0" : "opacity-100"}`}>
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-accent animate-spin" />
        </div>
        <div className="font-display text-sm tracking-[0.4em] text-gradient-brand">DevLop STUDIO</div>
      </div>
    </div>
  );
};
