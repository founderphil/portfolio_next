"use client";

import { useEffect, useRef } from "react";

// Adapted from the "Timeline Intelligence" canvas on boardlens.ai (BL-web version_two
// animations): glass lenses above a Q1–Q4 timeline, documents below, knowledge flowing
// from documents up into lenses, and insight alerts flashing between related documents.
// Rescaled to fill whatever box it is dropped into.

const BG = "#eff2fe";
const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
const INSIGHT_COLORS = ["#059669", "#DC2626", "#7C3AED", "#2563EB", "#EA580C"];
const NUM_DOCS = 20;
const NUM_LENSES = 5;
const NUM_ALERTS = 10;
// Simulate ~4s before the first paint so the card opens on a built scene, not an empty one.
const PREWARM_STEPS = 240;

type Rgb = { r: number; g: number; b: number };

const hexToRgb = (hex: string): Rgb => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
});

const mix = (a: Rgb, b: Rgb, t: number): Rgb => ({
  r: Math.round(a.r + (b.r - a.r) * t),
  g: Math.round(a.g + (b.g - a.g) * t),
  b: Math.round(a.b + (b.b - a.b) * t),
});

const rgba = ({ r, g, b }: Rgb, a: number) => `rgba(${r}, ${g}, ${b}, ${a})`;

const LENS_A = hexToRgb("#7079E5");
const LENS_B = hexToRgb("#1A2FC8");

type Doc = { x: number; y: number; w: number; rot: number; color: Rgb; delay: number; age: number; spawned: boolean; alpha: number; pulse: number };
type Lens = { x: number; r: number; c1: Rgb; c2: Rgb; delay: number; age: number; spawned: boolean; progress: number };
type Flow = { doc: number; lens: number; delay: number; age: number; spawned: boolean; t: number; alpha: number };
type Alert = { a: Doc; b: Doc; delay: number; age: number; spawned: boolean; alpha: number; pulse: number };
type Scene = { docs: Doc[]; lenses: Lens[]; flows: Flow[]; alerts: Alert[] };

function createScene(): Scene {
  const docs: Doc[] = Array.from({ length: NUM_DOCS }, (_, i) => ({
    x: 0.15 + (i / (NUM_DOCS - 1)) * 0.7,
    y: 0.52 + Math.random() * 0.36,
    w: 22 + Math.random() * 10,
    rot: (Math.random() - 0.5) * 0.2,
    color: hexToRgb(INSIGHT_COLORS[Math.floor(Math.random() * INSIGHT_COLORS.length)]),
    delay: i * 6,
    age: 0,
    spawned: false,
    alpha: 0,
    pulse: Math.random() * Math.PI * 2,
  }));

  const lenses: Lens[] = [];
  for (let i = 0; i < NUM_LENSES; i++) {
    let x = 0.5;
    for (let attempt = 0; attempt < 50; attempt++) {
      x = 0.12 + Math.random() * 0.76;
      if (lenses.every((l) => Math.abs(l.x - x) >= 0.14)) break;
    }
    const m = Math.random();
    lenses.push({
      x,
      r: 40 + Math.random() * 25,
      c1: mix(LENS_A, LENS_B, m),
      c2: mix(LENS_A, LENS_B, Math.min(m + 0.3, 1)),
      delay: 60 + i * 15,
      age: 0,
      spawned: false,
      progress: 0,
    });
  }

  const flows: Flow[] = docs.map((_, i) => ({ doc: i, lens: i % NUM_LENSES, delay: 120 + i * 5, age: 0, spawned: false, t: 0, alpha: 0 }));

  const alerts: Alert[] = Array.from({ length: NUM_ALERTS }, (_, i) => {
    const a = Math.floor(Math.random() * NUM_DOCS);
    let b = Math.floor(Math.random() * NUM_DOCS);
    while (b === a) b = Math.floor(Math.random() * NUM_DOCS);
    return { a: docs[a], b: docs[b], delay: 180 + i * 80, age: 0, spawned: false, alpha: 0, pulse: Math.random() * Math.PI * 2 };
  });

  return { docs, lenses, flows, alerts };
}

/** Advances the scene one 60fps frame. */
function step(s: Scene) {
  for (const d of s.docs) {
    d.age++;
    if (!d.spawned) {
      if (d.age < d.delay) continue;
      d.spawned = true;
      d.age = 0;
    }
    d.alpha = Math.min(d.alpha + 0.04, 1);
    d.pulse += 0.02;
  }

  for (const l of s.lenses) {
    l.age++;
    if (!l.spawned) {
      if (l.age < l.delay) continue;
      l.spawned = true;
      l.age = 0;
    }
    l.progress = Math.min(l.progress + 0.03, 1);
  }

  for (const f of s.flows) {
    f.age++;
    if (!f.spawned) {
      if (f.age < f.delay) continue;
      f.spawned = true;
      f.age = 0;
    }
    if (f.t < 1) {
      f.t = Math.min(f.t + 0.015, 1);
      f.alpha = Math.min(f.t * 2, 1);
    } else {
      f.alpha = Math.max(f.alpha - 0.02, 0);
      if (f.alpha <= 0) f.t = 0;
    }
  }

  for (const a of s.alerts) {
    a.age++;
    if (!a.spawned) {
      if (a.age >= a.delay && a.a.alpha > 0.5 && a.b.alpha > 0.5) {
        a.spawned = true;
        a.age = 0;
      }
      continue;
    }
    if (a.age < 20) a.alpha = Math.min(a.alpha + 0.05, 1);
    if (a.age > 150) a.alpha = Math.max(a.alpha - 0.033, 0);
    if (a.age > 180 && a.alpha <= 0) {
      a.spawned = false;
      a.age = 0;
      a.delay = 200 + Math.random() * 300;
    }
    a.pulse += 0.05;
  }
}

function circle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
}

function drawLens(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, p: number, c1: Rgb, c2: Rgb) {
  if (r < 0.5) return;

  const glass = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
  glass.addColorStop(0, `rgba(255, 255, 255, ${0.08 * p})`);
  glass.addColorStop(0.5, rgba(c1, 0.12 * p));
  glass.addColorStop(1, rgba(c2, 0.05 * p));
  ctx.fillStyle = glass;
  circle(ctx, cx, cy, r);
  ctx.fill();

  const hx = cx - r * 0.3;
  const hy = cy - r * 0.3;
  const highlight = ctx.createRadialGradient(hx, hy, 0, hx, hy, r * 0.6);
  highlight.addColorStop(0, `rgba(255, 255, 255, ${0.18 * p})`);
  highlight.addColorStop(0.5, rgba(c1, 0.08 * p));
  highlight.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = highlight;
  circle(ctx, cx, cy, r);
  ctx.fill();

  circle(ctx, cx, cy, r);
  ctx.strokeStyle = rgba(c2, 0.35 * p);
  ctx.lineWidth = 2;
  ctx.stroke();

  if (r > 4) {
    circle(ctx, cx, cy, r - 3);
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * p})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  if (p > 0.5) {
    const inner = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.95);
    inner.addColorStop(0, "rgba(255, 255, 255, 0)");
    inner.addColorStop(0.8, "rgba(255, 255, 255, 0)");
    inner.addColorStop(1, `rgba(255, 255, 255, ${0.08 * (p - 0.5) * 2})`);
    ctx.fillStyle = inner;
    circle(ctx, cx, cy, r * 0.95);
    ctx.fill();
  }

  const sx = cx + r * 0.3;
  const sy = cy + r * 0.3;
  const shadow = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 0.7);
  shadow.addColorStop(0, `rgba(0, 0, 0, ${0.06 * p})`);
  shadow.addColorStop(0.5, `rgba(0, 0, 0, ${0.02 * p})`);
  shadow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = shadow;
  circle(ctx, cx, cy, r);
  ctx.fill();

  // Aperture blades
  if (r > 10) {
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * p})`;
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const blade = r * 0.35;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(angle) * (r - blade), cy + Math.sin(angle) * (r - blade));
      ctx.lineTo(cx + Math.cos(angle) * (r - 8), cy + Math.sin(angle) * (r - 8));
      ctx.stroke();
    }
  }

  // Light refraction along the top edge
  if (r > 2) {
    ctx.beginPath();
    ctx.arc(cx, cy, r - 2, -Math.PI * 0.7, -Math.PI * 0.3);
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.22 * p})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function draw(ctx: CanvasRenderingContext2D, s: Scene, w: number, h: number) {
  // Original was tuned for roughly a 900x560 canvas; scale sizes to the box.
  const k = Math.max(0.45, Math.min(w / 900, h / 560));
  const ty = h * 0.36;
  const lensY = ty - 70 * k;
  const docPos = (d: Doc) => ({ x: w * d.x, y: h * d.y });

  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, w, h);

  // Timeline backbone
  const x0 = w * 0.075;
  const x1 = w * 0.925;
  const qw = (x1 - x0) / 4;
  ctx.strokeStyle = "rgba(99, 102, 241, 0.25)";
  ctx.lineWidth = Math.max(1, 2 * k);
  ctx.beginPath();
  ctx.moveTo(x0, ty);
  ctx.lineTo(x1, ty);
  ctx.stroke();

  ctx.font = `${Math.max(10, 16 * k)}px system-ui, -apple-system, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  QUARTERS.forEach((q, i) => {
    const x = x0 + i * qw + qw / 2;
    ctx.fillStyle = "rgba(99, 102, 241, 0.4)";
    circle(ctx, x, ty, 6 * k);
    ctx.fill();
    ctx.fillStyle = "rgba(30, 41, 59, 0.6)";
    ctx.fillText(q, x, ty + 25 * k);
  });

  // Webbed connections between documents
  const visible = s.docs.filter((d) => d.spawned && d.alpha > 0.5);
  const reach = 150 * k;
  ctx.strokeStyle = "rgba(99, 102, 241, 0.6)";
  ctx.lineWidth = Math.max(1, 1.5 * k);
  for (let i = 0; i < visible.length; i++) {
    for (let j = i + 1; j < visible.length; j++) {
      const a = docPos(visible[i]);
      const b = docPos(visible[j]);
      const dist = Math.hypot(b.x - a.x, b.y - a.y);
      if (dist >= reach) continue;
      ctx.globalAlpha = Math.min(visible[i].alpha, visible[j].alpha) * (1 - dist / reach) * 0.2;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;

  // Documents
  for (const d of s.docs) {
    if (!d.spawned) continue;
    const { x, y } = docPos(d);
    const dw = d.w * k * 1.2;
    const dh = dw * 1.3;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(d.rot);
    ctx.globalAlpha = d.alpha * (Math.sin(d.pulse) * 0.1 + 0.9);
    ctx.fillStyle = rgba(d.color, 0.15);
    ctx.fillRect(-dw / 2, -dh / 2, dw, dh);
    ctx.strokeStyle = rgba(d.color, 0.6);
    ctx.lineWidth = Math.max(0.75, k);
    for (let i = 1; i < 3; i++) {
      const ly = -dh / 2 + (i * 4 + 3) * k * 1.2;
      ctx.beginPath();
      ctx.moveTo(-dw / 2 + 2 * k, ly);
      ctx.lineTo(dw / 2 - 2 * k, ly);
      ctx.stroke();
    }
    ctx.strokeStyle = rgba(d.color, 0.8);
    ctx.lineWidth = Math.max(1, 1.5 * k);
    ctx.strokeRect(-dw / 2, -dh / 2, dw, dh);
    ctx.restore();
  }

  // Lenses
  for (const l of s.lenses) {
    if (!l.spawned) continue;
    drawLens(ctx, w * l.x, lensY, l.r * k * 1.15 * l.progress, l.progress, l.c1, l.c2);
  }

  // Knowledge flowing from documents up into lenses
  for (const f of s.flows) {
    if (!f.spawned || f.alpha <= 0) continue;
    const d = s.docs[f.doc];
    const l = s.lenses[f.lens];
    if (!d.spawned || !l.spawned) continue;
    const from = docPos(d);
    const px = from.x + (w * l.x - from.x) * f.t;
    const py = from.y + (lensY - from.y) * f.t;
    ctx.globalAlpha = f.alpha;
    ctx.fillStyle = "#6366F1";
    circle(ctx, px, py, 3 * k);
    ctx.fill();
    const glow = ctx.createRadialGradient(px, py, 0, px, py, 8 * k);
    glow.addColorStop(0, "rgba(99, 102, 241, 0.6)");
    glow.addColorStop(1, "rgba(99, 102, 241, 0)");
    ctx.fillStyle = glow;
    circle(ctx, px, py, 8 * k);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Insight alerts: dotted link between two documents with a pulsing spark
  for (const a of s.alerts) {
    if (!a.spawned || a.alpha <= 0) continue;
    const p1 = docPos(a.a);
    const p2 = docPos(a.b);
    const pulse = Math.sin(a.pulse) * 0.3 + 0.7;
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;
    ctx.save();
    ctx.globalAlpha = a.alpha * pulse * 0.7;
    ctx.strokeStyle = "#F59E0B";
    ctx.lineWidth = Math.max(1, 2 * k);
    ctx.setLineDash([6 * k, 6 * k]);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#F59E0B";
    circle(ctx, mx, my, (6 + pulse * 2) * k);
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = Math.max(1, 1.5 * k);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(mx - 2 * k, my - 3 * k);
    ctx.lineTo(mx + 1 * k, my);
    ctx.lineTo(mx - 1 * k, my);
    ctx.lineTo(mx + 2 * k, my + 3 * k);
    ctx.stroke();
    ctx.restore();
  }
}

/** Fills its positioned parent. Pauses offscreen; renders one still frame for reduced-motion users. */
export default function BoardLensTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;

    const scene = createScene();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    for (let i = 0; i < (reduceMotion ? 900 : PREWARM_STEPS); i++) step(scene);

    let w = 0;
    let h = 0;
    const resize = () => {
      // clientWidth/Height ignore the card's hover scale transform.
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(ctx, scene, w, h);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);
    resize();

    if (reduceMotion) return () => resizeObserver.disconnect();

    let raf = 0;
    let running = false;
    let last: number | undefined;
    const tick = (ts: number) => {
      const factor = last === undefined ? 1 : Math.min(Math.max((ts - last) / (1000 / 60), 0.5), 3);
      last = ts;
      for (let i = 0, n = Math.max(1, Math.round(factor)); i < n; i++) step(scene);
      draw(ctx, scene, w, h);
      raf = requestAnimationFrame(tick);
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        last = undefined;
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    visibilityObserver.observe(wrap);

    return () => {
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
