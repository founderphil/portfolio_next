
import React, { useEffect, useRef, useState } from 'react';

/**
 * SocialPlayground — lightweight canvas toy
 * Mechanics: click to add players; drag to move; players attract softly; when clusters form, 
 * labels appear (Co‑presence, Co‑creation, Flair). This demonstrates simple rules → emergent social feeling.
 */
export default function SocialPlayground() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [seed, setSeed] = useState(() => Math.random()*1e6);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    function resize(){
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * DPR;
      canvas.height = Math.max(260, rect.width * 0.5) * DPR;
      canvas.style.height = `${canvas.height / DPR}px`;
    }
    resize();
    window.addEventListener('resize', resize);

    type Node = { id:number; x:number; y:number; vx:number; vy:number; r:number; drag:boolean };
    const nodes: Node[] = [];

    let dragging: Node | null = null;
    let raf = 0;

    const rand = mulberry32(seed);

    function addNode(x:number, y:number){
      const n: Node = { id: Date.now()+Math.floor(rand()*1e6), x, y, vx: 0, vy: 0, r: 8*DPR, drag:false };
      nodes.push(n);
    }

    // Seed a few
    for (let i=0;i<5;i++) addNode(canvas.width*0.3 + i*30, canvas.height*0.5 + (i%2?15:-15));

    function pointerPos(e: MouseEvent | TouchEvent){
      const rect = canvas.getBoundingClientRect();
      if (e instanceof TouchEvent){
        const t = e.touches[0] || e.changedTouches[0];
        return { x: (t.clientX - rect.left) * DPR, y: (t.clientY - rect.top) * DPR };
        } else {
        const m = e as MouseEvent;
        return { x: (m.clientX - rect.left) * DPR, y: (m.clientY - rect.top) * DPR };
      }
    }

    function onDown(e: MouseEvent | TouchEvent){
      const p = pointerPos(e);
      let grabbed = false;
      for (let i=nodes.length-1;i>=0;i--){
        const n = nodes[i];
        const d2 = (n.x - p.x)**2 + (n.y - p.y)**2;
        if (d2 < (n.r+6*DPR)**2){ dragging = n; n.drag = true; grabbed = true; break; }
      }
      if (!grabbed){ addNode(p.x, p.y); }
    }
    function onMove(e: MouseEvent | TouchEvent){
      if (!dragging) return;
      const p = pointerPos(e);
      dragging.x = p.x; dragging.y = p.y; dragging.vx = 0; dragging.vy = 0;
    }
    function onUp(){ if (dragging) dragging.drag = false; dragging = null; }

    canvas.addEventListener('mousedown', onDown);
    canvas.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    canvas.addEventListener('touchstart', (e)=>{ onDown(e); }, { passive: true });
    canvas.addEventListener('touchmove', (e)=>{ onMove(e); }, { passive: true });
    window.addEventListener('touchend', onUp, { passive: true });

    function tick(){
      ctx.clearRect(0,0,canvas.width,canvas.height);

      // Soft attraction and damping
      for (let i=0;i<nodes.length;i++){
        const a = nodes[i];
        for (let j=i+1;j<nodes.length;j++){
          const b = nodes[j];
          const dx = b.x - a.x; const dy = b.y - a.y; const dist = Math.hypot(dx,dy) || 1;
          const desire = 90*DPR; // preferred distance
          const force = (dist - desire) * 0.0006; // spring
          const fx = (dx/dist) * force; const fy = (dy/dist) * force;
          if (!a.drag){ a.vx += fx; a.vy += fy; }
          if (!b.drag){ b.vx -= fx; b.vy -= fy; }

          // draw subtle edges
          if (dist < 160*DPR){
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${Math.max(0, 0.12 - dist/(160*DPR)*0.12)})`;
            ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }

      // integrate + bounds
      for (const n of nodes){
        if (!n.drag){ n.vx *= 0.98; n.vy *= 0.98; n.x += n.vx*3; n.y += n.vy*3; }
        if (n.x < n.r) { n.x = n.r; n.vx *= -0.5; }
        if (n.y < n.r) { n.y = n.r; n.vy *= -0.5; }
        if (n.x > canvas.width - n.r) { n.x = canvas.width - n.r; n.vx *= -0.5; }
        if (n.y > canvas.height - n.r) { n.y = canvas.height - n.r; n.vy *= -0.5; }
      }

      // draw nodes
      for (const n of nodes){
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
        ctx.fillStyle = n.drag ? '#ffffff' : '#9ca3af';
        ctx.fill();
        // flair sparkle when nodes are clustered
        const close = nodes.filter(o => o!==n && Math.hypot(o.x-n.x,o.y-n.y) < 75*DPR).length;
        if (close >= 2){
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r+2, 0, Math.PI*2);
          ctx.strokeStyle = 'rgba(255,255,255,0.35)';
          ctx.stroke();
        }
      }

      // Labels when clusters form
      const clusters = findClusters(nodes, 110*DPR);
      ctx.font = `${12*DPR}px ui-sans-serif, system-ui`;
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      clusters.forEach((c, idx) => {
        const centroid = c.reduce((acc, n)=>({x:acc.x+n.x, y:acc.y+n.y}), {x:0,y:0});
        centroid.x /= c.length; centroid.y /= c.length;
        const label = c.length >= 5 ? 'Co‑creation' : c.length >= 3 ? 'Co‑presence' : 'Divergent Thinker';
        ctx.fillText(`${label} (${c.length})`, centroid.x+8, centroid.y-8);
      });

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', onDown);
      canvas.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      canvas.removeEventListener('touchstart', onDown as any);
      canvas.removeEventListener('touchmove', onMove as any);
      window.removeEventListener('touchend', onUp as any);
    }
  }, [seed]);

  return (
    <div className="group border border-neutral-900 rounded-2xl overflow-hidden">
      <canvas ref={ref} className="w-full bg-neutral-950" aria-label="Social play interactive" />
      <div className="flex items-center justify-between p-3 border-t border-neutral-900 text-xs text-neutral-400">
        <div className="flex gap-3">
          <span>Click = add player</span>
          <span>Drag = move player</span>
        </div>
        <button onClick={()=>location.reload()} className="underline hover:text-white">Reset</button>
      </div>
    </div>
  );
}

function findClusters(nodes: {x:number;y:number;}[], threshold:number){
  const visited = new Set<number>();
  const clusters: number[][] = [];
  function dfs(i:number, bucket:number[]){
    visited.add(i); bucket.push(i);
    for (let j=0;j<nodes.length;j++){
      if (visited.has(j)) continue;
      const a = nodes[i], b = nodes[j];
      if (Math.hypot(a.x-b.x, a.y-b.y) <= threshold){ dfs(j, bucket); }
    }
  }
  for (let i=0;i<nodes.length;i++){
    if (!visited.has(i)){
      const bucket: number[] = []; dfs(i, bucket); clusters.push(bucket);
    }
  }
  // map to node arrays
  return clusters.map(ids => ids.map(i => nodes[i] as any));
}

function mulberry32(a:number){
  return function(){
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}


