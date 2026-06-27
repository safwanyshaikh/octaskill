"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

/**
 * Ambient "living global intelligence network" — a 2D canvas of slowly
 * drifting nodes joined by faint gold filaments. Purely decorative
 * (aria-hidden); the hero headline above is the real LCP text.
 *
 * Performance guards: DPR capped at 2, loop paused when offscreen or when
 * the tab is hidden, node count scaled to viewport. Under reduced-motion a
 * single static frame is drawn and no animation loop runs.
 */
export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let running = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 640 ? 26 : width < 1100 ? 44 : 64;
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const linkDist = Math.min(width, height) * 0.22;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.5;
            ctx.strokeStyle = `rgba(184, 145, 80, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = "rgba(205, 171, 109, 0.85)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
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

    if (!prefersReduced) {
      const io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? start() : stop()),
        { threshold: 0 },
      );
      io.observe(canvas);

      const onVisibility = () =>
        document.hidden ? stop() : start();
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
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      role="presentation"
      className="absolute inset-0 h-full w-full"
    />
  );
}
