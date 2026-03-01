"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, cx = 0, cy = 0;
    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const loop = () => {
      cx += (x - cx) * 0.08;
      cy += (y - cy) * 0.08;
      glow.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9998] w-[400px] h-[400px] rounded-full opacity-[0.04] mix-blend-screen hidden md:block"
      style={{ background: "radial-gradient(circle, #F2F2F2 0%, transparent 70%)" }}
    />
  );
}
