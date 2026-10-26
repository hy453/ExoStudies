import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import * as THREE from 'three';

const BRAND_BLUE = '#3B82F6';
const BRAND_BLUE_LIGHT = '#60A5FA';
const BRAND_YELLOW = '#FFD43B';
const BG_NAVY = '#0B1020';

export function ChemistryIllustration() {
  const [mounted, setMounted] = useState(false);

  return (
    <div className="illustration-3d-container" style={{ width: '100%', height: '100%', minHeight: 160 }}>
      <Canvas
        camera={{ position: [0, 0.2, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setMounted(true)}
        style={{ outline: 'none' }}
      >
        <color attach="background" args={[BG_NAVY]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />
        <directionalLight position={[-2, 1, 1]} intensity={0.5} color="#1e3a5f" />

        <group>
          <MolecularModel />
          <Flask />
        </group>

        {mounted && <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.2} />}
      </Canvas>
    </div>
  );
}

function MolecularModel() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[-1.3, 0.5, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <Atom position={[-0.7, 0.5, 0]} color={BRAND_BLUE} />
      <Atom position={[0.7, 0.5, 0]} color={BRAND_BLUE_LIGHT} />
      <Atom position={[0, -0.4, 0]} color={BRAND_YELLOW} />

      <Bond start={[-0.7, 0.5, 0]} end={[0.7, 0.5, 0]} />
      <Bond start={[-0.7, 0.5, 0]} end={[0, -0.4, 0]} />
      <Bond start={[0.7, 0.5, 0]} end={[0, -0.4, 0]} />
    </group>
  );
}

function Atom({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <group position={position}>
      <mesh
        geometry={new THREE.SphereGeometry(0.45, 32, 32)}
        material={new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.1 })}
      />
      <mesh
        geometry={new THREE.SphereGeometry(0.47, 32, 32)}
        material={new THREE.MeshBasicMaterial({ color: '#ffffff', wireframe: true, transparent: true, opacity: 0.15 })}
      />
      <mesh
        geometry={new THREE.SphereGeometry(0.15, 16, 16)}
        material={new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.1, metalness: 0.5 })}
        position={[0.2, 0.2, 0.2]}
        scale={0.4}
      />
    </group>
  );
}

function Bond({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const midX = (start[0] + end[0]) / 2;
  const midY = (start[1] + end[1]) / 2;
  const midZ = (start[2] + end[2]) / 2;
  const length = Math.sqrt(
    Math.pow(end[0] - start[0], 2) +
    Math.pow(end[1] - start[1], 2) +
    Math.pow(end[2] - start[2], 2)
  );
  const dirX = (end[0] - start[0]) / length;
  const dirY = (end[1] - start[1]) / length;
  const dirZ = (end[2] - start[2]) / length;

  return (
    <mesh
      geometry={new THREE.CylinderGeometry(0.06, 0.06, length, 8)}
      material={new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.5, metalness: 0.1, transparent: true, opacity: 0.6 })}
      position={[midX, midY, midZ]}
      rotation={[
        Math.acos(dirY),
        0,
        Math.atan2(dirX, dirZ),
      ]}
    />
  );
}

function Flask() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[1.5, -0.5, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <mesh
        geometry={new THREE.SphereGeometry(0.7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_BLUE, roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0.8, side: THREE.DoubleSide })}
      />
      <mesh
        geometry={new THREE.CylinderGeometry(0.18, 0.18, 1.0, 16)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_BLUE, roughness: 0.2, metalness: 0.1 })}
        position={[0, 1.0, 0]}
      />
      <mesh
        geometry={new THREE.TorusGeometry(0.18, 0.03, 8, 16)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_BLUE_LIGHT, roughness: 0.2, metalness: 0.1 })}
        position={[0, 1.5, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={new THREE.SphereGeometry(0.68, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_BLUE_LIGHT, roughness: 0.1, metalness: 0.3, transparent: true, opacity: 0.5, side: THREE.DoubleSide })}
        position={[0, -0.15, 0]}
        scale={0.9}
      />
    </group>
  );
}