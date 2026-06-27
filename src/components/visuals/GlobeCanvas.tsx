"use client";

import { useEffect, useRef } from "react";

/**
 * Luminous rotating intelligence globe. Points are distributed on a sphere
 * (Fibonacci), rotated around the Y axis and projected to 2D, with depth
 * driving size and opacity so the globe reads as three-dimensional. Faint
 * gold filaments link nearby front-facing points.
 *
 * Decorative (aria-hidden). Performance guards: DPR capped at 2, loop paused
 * offscreen and when the tab is hidden. Under reduced-motion a single static
 * frame is drawn and no animation runs.
 */
export function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let radius = 0;
    let angle = 0;
    let raf = 0;
    let running = false;

    // Fibonacci sphere of unit points
    const COUNT = 460;
    const pts: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = Math.min(width, height) * 0.46;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      const projected: { sx: number; sy: number; depth: number }[] = [];
      for (const p of pts) {
        // rotate around Y, tilt slightly on X for a natural axis
        const rx = p.x * cos + p.z * sin;
        const rz = -p.x * sin + p.z * cos;
        const ry = p.y * 0.96 + rz * 0.06;
        projected.push({
          sx: cx + rx * radius,
          sy: cy + ry * radius,
          depth: rz, // -1 (back) .. 1 (front)
        });
      }

      // filaments between nearby front-facing points
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        if (a.depth < 0.1) continue;
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          if (b.depth < 0.1) continue;
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const d = dx * dx + dy * dy;
          if (d < (radius * 0.16) ** 2) {
            const alpha = 0.16 * Math.min(a.depth, b.depth);
            ctx.strokeStyle = `rgba(201, 162, 74, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // points
      for (const p of projected) {
        const front = (p.depth + 1) / 2; // 0..1
        const size = 0.5 + front * 1.7;
        const alpha = 0.18 + front * 0.7;
        ctx.fillStyle =
          p.depth > 0.55
            ? `rgba(226, 194, 113, ${alpha})`
            : `rgba(201, 162, 74, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      angle += 0.0016;
      draw();
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (running || prefersReduced) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    setup();
    draw();

    if (prefersReduced) return;

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setup();
        draw();
      }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      role="presentation"
      className="h-full w-full"
    />
  );
}
