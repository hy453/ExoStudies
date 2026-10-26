import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import * as THREE from 'three';

const BRAND_BLUE = '#3B82F6';
const BRAND_BLUE_LIGHT = '#60A5FA';
const BG_NAVY = '#0B1020';

export function NEETIllustration() {
  const [mounted, setMounted] = useState(false);

  return (
    <div className="illustration-3d-container" style={{ width: '100%', height: '100%', minHeight: 160 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setMounted(true)}
        style={{ outline: 'none' }}
      >
        <color attach="background" args={[BG_NAVY]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />
        <directionalLight position={[-2, -1, 1]} intensity={0.5} color="#1e3a5f" />

        <group>
          <DNAHelix />
          <CellMembrane />
        </group>

        {mounted && <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.3} />}
      </Canvas>
    </div>
  );
}

function DNAHelix() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <Strand color={BRAND_BLUE} phase={0} />
      <Strand color={BRAND_BLUE_LIGHT} phase={Math.PI} />
      <Rungs />
    </group>
  );
}

function Strand({ color, phase }: { color: string; phase: number }) {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= 50; i++) {
    const t = (i / 50) * Math.PI * 4 - Math.PI * 2;
    const x = Math.sin(t + phase) * 0.5;
    const y = (i / 50) * 3 - 1.5;
    const z = Math.cos(t + phase) * 0.3;
    points.push(new THREE.Vector3(x, y, z));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9 });
  const line = new THREE.Line(geometry, material);

  return <primitive object={line} />;
}

function Rungs() {
  const rungs: THREE.Vector3[][] = [];
  for (let i = 0; i <= 12; i++) {
    const y = (i / 12) * 3 - 1.5;
    const t = y * Math.PI * 4 / 3;
    const x1 = Math.sin(t) * 0.5;
    const x2 = Math.sin(t + Math.PI) * 0.5;
    const z1 = Math.cos(t) * 0.3;
    const z2 = Math.cos(t + Math.PI) * 0.3;
    rungs.push([
      new THREE.Vector3(x1, y, z1),
      new THREE.Vector3(x2, y, z2),
    ]);
  }

  return (
    <group>
      {rungs.map(([start, end], i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        const material = new THREE.LineBasicMaterial({ color: BRAND_BLUE_LIGHT, transparent: true, opacity: 0.8 });
        const line = new THREE.Line(geometry, material);
        return <primitive key={i} object={line} />;
      })}
    </group>
  );
}

function CellMembrane() {
  return (
    <mesh
      geometry={new THREE.SphereGeometry(1.2, 32, 32)}
      material={new THREE.MeshBasicMaterial({
        color: BRAND_BLUE,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      })}
    />
  );
}