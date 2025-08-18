'use client';
import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';

/**
 * Lightweight canvas “constellation”: orbits projects around three poles: AI, XR, Data.
 * No heavy libs, 60fps on laptop/phone, respects reduced motion.
 */
export default function WorkConstellation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    function resize(){
      const { width } = canvas.getBoundingClientRect();
      canvas.width = width * DPR;
      canvas.height = (width * 0.5) * DPR;
      canvas.style.height = `${canvas.height / DPR}px`;
    }
    resize(); window.addEventListener('resize', resize);

    const centers = ['AI','XR','Data'].map((label, i)=>({label, x: (i+1)*(canvas.width/4), y: canvas.height/2}));

    function draw(t:number){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      // poles
      ctx.globalAlpha = 0.8;
      centers.forEach(c => {
        ctx.beginPath(); ctx.arc(c.x, c.y, 6, 0, Math.PI*2); ctx.fillStyle = '#fff'; ctx.fill();
        ctx.font = `${12*DPR}px system-ui`; ctx.fillText(c.label, c.x+10, c.y-10);
      });

      // nodes
      projects.slice(0, 12).forEach((p, idx) => {
        const bias = p.tags.includes('AI') ? 0 : p.tags.includes('XR') ? 1 : 2;
        const center = centers[bias];
        const r = 80*DPR + (idx%4)*24*DPR;
        const speed = 0.0003 + (idx%5)*0.0001;
        const angle = t*speed + idx;
        const x = center.x + Math.cos(angle)*r;
        const y = center.y + Math.sin(angle)*r;

        ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI*2); ctx.fillStyle = '#9ca3af'; ctx.fill();
        // subtle link line
        ctx.beginPath(); ctx.moveTo(center.x, center.y); ctx.lineTo(x,y);
        ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.stroke();
      });

      raf = requestAnimationFrame(draw);
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) raf = requestAnimationFrame(draw);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={ref} className="w-full rounded-2xl border border-neutral-800" aria-label="Work constellation visualization" role="img" />;
}
