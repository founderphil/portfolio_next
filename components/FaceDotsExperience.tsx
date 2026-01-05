import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import dots from '../phil_face_dots.json';

const DOTS = dots.dots;

export default function FaceDotsExperience() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 1000;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 1);

    container.appendChild(renderer.domElement);

    const dotGeometry = new THREE.SphereGeometry(2, 16, 16);
    const dotMeshes: THREE.Mesh[] = [];
    const originalPositions: { x: number; y: number }[] = [];

    const xSum = DOTS.reduce((sum, dot) => sum + dot.x, 0);
    const ySum = DOTS.reduce((sum, dot) => sum + dot.y, 0);
    const count = DOTS.length;
    const xCenter = count > 0 ? xSum / count : 0;
    const yCenter = count > 0 ? ySum / count : 0;

    DOTS.forEach(dot => {
      const brightness = dot.area !== undefined ? Math.min(dot.area * 10, 100) : 50;
      const color = new THREE.Color(`hsl(0, 0%, ${100 - brightness}%)`);
      const material = new THREE.MeshBasicMaterial({ color });
      const mesh = new THREE.Mesh(dotGeometry, material);
      const px = dot.x - xCenter;
      const py = -(dot.y - yCenter);
      mesh.position.set(px, py, 0);
      scene.add(mesh);
      dotMeshes.push(mesh);
      originalPositions.push({ x: px, y: py });
    });

    const gridSpacing = 20;
    const gridColor = new THREE.Color('hsl(0, 0%, 90%)');
    const gridMaterial = new THREE.MeshBasicMaterial({ color: gridColor });
    const gridWidth = width;
    const gridHeight = height;
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
          dotMeshes.push(mesh);
          originalPositions.push({ x: gx, y: gy });
        }
      }
    }

    let mouse = { x: 0, y: 0 };
    let lastMouse = { x: 0, y: 0 };
    let mouseDelta = { x: 0, y: 0 };
    let pushing = false;
    let painting = false;

    function getLocalPointer(e: MouseEvent | TouchEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function onPointerMove(e: MouseEvent | TouchEvent) {
      const { x, y } = getLocalPointer(e);
      mouseDelta.x = x - mouse.x;
      mouseDelta.y = y - mouse.y;
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = x;
      mouse.y = y;
      pushing = Math.abs(mouseDelta.x) > 0.5 || Math.abs(mouseDelta.y) > 0.5;
    }

    renderer.domElement.addEventListener('mousemove', onPointerMove);
    renderer.domElement.addEventListener('touchmove', onPointerMove);

    const velocities: { x: number; y: number }[] = dotMeshes.map(() => ({ x: 0, y: 0 }));

    function animate() {
      dotMeshes.forEach((dot, i) => {
        const vector = dot.position.clone();
        vector.project(camera);
        const screenX = (vector.x * 0.5 + 0.5) * width;
        const screenY = (-vector.y * 0.5 + 0.5) * height;

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
      const dotScreenPositions = dotMeshes.map(dot => {
        const vector = dot.position.clone();
        vector.project(camera);
        const screenX = (vector.x * 0.5 + 0.5) * width;
        const screenY = (-vector.y * 0.5 + 0.5) * height;
        return { dot, screenX, screenY };
      });

      const distances = dotScreenPositions.map((pos, i) => {
        const dx = pos.screenX - x;
        const dy = pos.screenY - y;
        return { index: i, dist: Math.sqrt(dx * dx + dy * dy) };
      });

      const nearest = distances.sort((a, b) => a.dist - b.dist).slice(0, 30);
      nearest.forEach((entry, idx) => {
        const dot = dotMeshes[entry.index];
        if (dot.material && 'color' in dot.material) {
          const lightness = 70 - idx * 1.3;
          (dot.material as THREE.MeshBasicMaterial).color.set(`hsl(210, 100%, ${lightness}%)`);
          (dot.material as THREE.MeshBasicMaterial).needsUpdate = true;
        }
      });
    }

    function onPointerDown(e: MouseEvent | TouchEvent) {
      painting = true;
      const { x, y } = getLocalPointer(e);
      paintDotsAt(x, y);
    }

    function onPointerUp() {
      painting = false;
    }

    function onPointerMovePaint(e: MouseEvent | TouchEvent) {
      if (!painting) return;
      const { x, y } = getLocalPointer(e);
      paintDotsAt(x, y);
    }

    renderer.domElement.addEventListener('mousedown', onPointerDown);
    renderer.domElement.addEventListener('touchstart', onPointerDown);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);
    renderer.domElement.addEventListener('mousemove', onPointerMovePaint);
    renderer.domElement.addEventListener('touchmove', onPointerMovePaint);

    return () => {
      renderer.domElement.removeEventListener('mousemove', onPointerMove);
      renderer.domElement.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      renderer.domElement.removeEventListener('mousedown', onPointerDown);
      renderer.domElement.removeEventListener('touchstart', onPointerDown);
      renderer.domElement.removeEventListener('mousemove', onPointerMovePaint);
      renderer.domElement.removeEventListener('touchmove', onPointerMovePaint);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'white',
      }}
    />
  );
}
