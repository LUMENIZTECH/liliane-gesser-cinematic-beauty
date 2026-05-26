import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block transition-[width,height,opacity] duration-300 ease-out mix-blend-difference"
        style={{
          left: pos.x, top: pos.y,
          width: hover ? 56 : 10, height: hover ? 56 : 10,
          transform: "translate(-50%, -50%)",
          borderRadius: 999,
          background: hover ? "transparent" : "oklch(0.92 0.04 80)",
          border: hover ? "1px solid oklch(0.92 0.04 80)" : "none",
        }}
      />
      <div
        className="pointer-events-none fixed z-[99] hidden md:block"
        style={{
          left: pos.x, top: pos.y,
          width: 600, height: 600,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, oklch(0.82 0.08 75 / 0.08), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
