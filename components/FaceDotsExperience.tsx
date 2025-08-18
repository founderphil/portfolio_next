import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';
import dots from '../phil_face_dots.json';

const DOTS = dots.dots;

export default function FaceDotsExperience({ onEnter }: { onEnter: () => void }) {
  const router = useRouter();
  const mountRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const [fade, setFade] = useState(0);
  const [dotsLoaded, setDotsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1000;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1);

    mountRef.current.appendChild(renderer.domElement);
    setDotsLoaded(true);

    // Dots
    const dotGeometry = new THREE.SphereGeometry(2, 16, 16);
    const dots: THREE.Mesh[] = [];
    const originalPositions: { x: number; y: number }[] = [];
    const xSum = DOTS.reduce((sum, dot) => sum + dot.x, 0);
    const ySum = DOTS.reduce((sum, dot) => sum + dot.y, 0);
    const count = DOTS.length;
    const xCenter = count > 0 ? xSum / count : 0;
    const yCenter = count > 0 ? ySum / count : 0;

    // Add face dots
    DOTS.forEach(dot => {
      const brightness = dot.area !== undefined ? Math.min(dot.area * 10, 100) : 50;
      const color = new THREE.Color(`hsl(0, 0%, ${100 - brightness}%)`);
      const material = new THREE.MeshBasicMaterial({ color });
      const mesh = new THREE.Mesh(dotGeometry, material);
      const px = dot.x - xCenter;
      const py = -(dot.y - yCenter);
      mesh.position.set(px, py, 0);
      scene.add(mesh);
      dots.push(mesh);
      originalPositions.push({ x: px, y: py });
    });

    // Add background grid dots
    const gridSpacing = 20; 
    const gridColor = new THREE.Color('hsl(0, 0%, 90%)');
    const gridMaterial = new THREE.MeshBasicMaterial({ color: gridColor });
    const gridWidth = window.innerWidth;
    const gridHeight = window.innerHeight;
    const minDist = 20;
    for (let gx = -gridWidth / 2; gx < gridWidth / 2; gx += gridSpacing) {
      for (let gy = -gridHeight / 2; gy < gridHeight / 2; gy += gridSpacing) {
        let tooClose = false;
        for (let i = 0; i < originalPositions.length; i++) {
          const dx = gx - originalPositions[i].x;
          const dy = gy - originalPositions[i].y;
          if (Math.sqrt(dx * dx + dy * dy) < minDist) {
            tooClose = true;
            break;
          }
        }
        if (!tooClose) {
          const mesh = new THREE.Mesh(dotGeometry, gridMaterial.clone());
          mesh.position.set(gx, gy, 0);
          scene.add(mesh);
          dots.push(mesh);
          originalPositions.push({ x: gx, y: gy });
        }
      }
    }

    // Mousy clicky
    let mouse = { x: 0, y: 0 };
    let lastMouse = { x: 0, y: 0 };
    let mouseDelta = { x: 0, y: 0 };
    let pushing = false;
    let painting = false;

    function onPointerMove(e: MouseEvent | TouchEvent) {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      mouseDelta.x = clientX - mouse.x;
      mouseDelta.y = clientY - mouse.y;
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = clientX;
      mouse.y = clientY;
      pushing = Math.abs(mouseDelta.x) > 0.5 || Math.abs(mouseDelta.y) > 0.5;
    }
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove);

    // dot velocity 
    const velocities: { x: number; y: number }[] = dots.map(() => ({ x: 0, y: 0 }));

    function animate() {
      dots.forEach((dot, i) => {
        const vector = dot.position.clone();
        vector.project(camera);
        const screenX = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const screenY = (-vector.y * 0.5 + 0.5) * window.innerHeight;

        const dx = screenX - mouse.x;
        const dy = screenY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const pushRadius = 80;
        if (pushing && dist < pushRadius) {
          const force = 0.7;
          const proximity = 1 - dist / pushRadius;
          velocities[i].x += mouseDelta.x * force * proximity;
          velocities[i].y += mouseDelta.y * force * proximity;
        }
        dot.position.x += velocities[i].x;
        dot.position.y += velocities[i].y;
        const returnStrength = 0.02;
        velocities[i].x += (originalPositions[i].x - dot.position.x) * returnStrength;
        velocities[i].y += (originalPositions[i].y - dot.position.y) * returnStrength;
        // Damping
        velocities[i].x *= 0.85;
        velocities[i].y *= 0.85;

        dot.position.z += (0 - dot.position.z) * 0.05;
        dot.scale.set(1, 1, 1);
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    function paintDotsAt(x: number, y: number) {
      const dotScreenPositions = dots.map(dot => {
        const vector = dot.position.clone();
        vector.project(camera);
        const screenX = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const screenY = (-vector.y * 0.5 + 0.5) * window.innerHeight;
        return { dot, screenX, screenY };
      });
      const distances = dotScreenPositions.map((pos, i) => {
        const dx = pos.screenX - x;
        const dy = pos.screenY - y;
        return { index: i, dist: Math.sqrt(dx * dx + dy * dy) };
      });
      const nearest = distances.sort((a, b) => a.dist - b.dist).slice(0, 30);
      nearest.forEach((entry, idx) => {
        const dot = dots[entry.index];
        if (dot.material && 'color' in dot.material) {
          const lightness = 70 - idx * 1.3;
          (dot.material as THREE.MeshBasicMaterial).color.set(`hsl(210, 100%, ${lightness}%)`);
          (dot.material as THREE.MeshBasicMaterial).needsUpdate = true;
        }
      });
    }

    function onPointerDown(e: MouseEvent | TouchEvent) {
      painting = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      paintDotsAt(clientX, clientY);
    }
    function onPointerUp() {
      painting = false;
    }
    function onPointerMovePaint(e: MouseEvent | TouchEvent) {
      if (!painting) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      paintDotsAt(clientX, clientY);
    }

    renderer.domElement.addEventListener('mousedown', onPointerDown);
    renderer.domElement.addEventListener('touchstart', onPointerDown);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);
    renderer.domElement.addEventListener('mousemove', onPointerMovePaint);
    renderer.domElement.addEventListener('touchmove', onPointerMovePaint);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      renderer.domElement.removeEventListener('mousedown', onPointerDown);
      renderer.domElement.removeEventListener('touchstart', onPointerDown);
      renderer.domElement.removeEventListener('mousemove', onPointerMovePaint);
      renderer.domElement.removeEventListener('touchmove', onPointerMovePaint);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  // Fade logic
  useEffect(() => {
    if (fade === 1) {
      const timeout = setTimeout(() => setFade(2), 2500);
      return () => clearTimeout(timeout);
    }
    if (fade === 2) {
      const timeout = setTimeout(() => {
        if (onEnter) onEnter();
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [fade, onEnter]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10,
        background: 'white',
        overflow: 'hidden',
        opacity: fade === 2 ? 0 : 1,
        transition: 'opacity 1.2s',
        pointerEvents: fade === 2 ? 'none' : 'auto',
      }}
    >
      <div
        ref={mountRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2,
        }}
      />
      {!entered && (
        <button
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '3rem',
            zIndex: 3,
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            borderRadius: '999px',
            background: 'rgba(30,30,30,0.8)',
            color: '#fff',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            transform: 'translateX(-50%)',
          }}
          onClick={() => {
            setEntered(true);
            setFade(2);
          }}
        >
          ENTER
        </button>
      )}
    </div>
  );
}
