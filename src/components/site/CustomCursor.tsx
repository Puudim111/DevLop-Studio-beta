import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", move);

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) {
        ring.current?.classList.add("scale-150", "bg-accent/10");
      } else {
        ring.current?.classList.remove("scale-150", "bg-accent/10");
      }
    };
    window.addEventListener("mouseover", over);

    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block -ml-4 -mt-4 h-8 w-8 rounded-full border border-primary/60 transition-[transform,background] duration-200 ease-out mix-blend-screen" />
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_hsl(192_100%_50%/0.9)]" />
    </>
  );
};
