import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useState } from 'react';
import * as THREE from 'three';

const BRAND_BLUE = '#3B82F6';
const BRAND_BLUE_LIGHT = '#60A5FA';
const BRAND_YELLOW = '#FFD43B';
const BG_NAVY = '#0B1020';

export function FoundationIllustration() {
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
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />
        <directionalLight position={[-2, 1, 1]} intensity={0.5} color="#1e3a5f" />

        <group>
          <TriangleShape />
          <SquareShape />
          <CircleShape />
          <Formula />
        </group>

        {mounted && <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.25} />}
      </Canvas>
    </div>
  );
}

function TriangleShape() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[-1.5, 1.2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <mesh
        geometry={new THREE.ConeGeometry(0.7, 1.2, 3)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_BLUE, roughness: 0.4, metalness: 0.1 })}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={new THREE.ConeGeometry(0.72, 1.22, 3)}
        material={new THREE.MeshBasicMaterial({ color: BRAND_BLUE_LIGHT, wireframe: true, transparent: true, opacity: 0.4 })}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

function SquareShape() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[1.5, 1.2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <mesh
        geometry={new THREE.BoxGeometry(1, 1, 1)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_BLUE_LIGHT, roughness: 0.4, metalness: 0.1 })}
      />
      <mesh
        geometry={new THREE.BoxGeometry(1.02, 1.02, 1.02)}
        material={new THREE.MeshBasicMaterial({ color: BRAND_BLUE, wireframe: true, transparent: true, opacity: 0.4 })}
      />
    </group>
  );
}

function CircleShape() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[0, -1.2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <mesh
        geometry={new THREE.CylinderGeometry(0.7, 0.7, 0.15, 32)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_BLUE, roughness: 0.4, metalness: 0.1 })}
      />
      <mesh
        geometry={new THREE.TorusGeometry(0.7, 0.03, 16, 32)}
        material={new THREE.MeshBasicMaterial({ color: BRAND_YELLOW, transparent: true, opacity: 0.6 })}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

function Formula() {
  return (
    <Html
      transform
      position={[0, -2.3, 0]}
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, monospace',
        fontSize: '0.8rem',
        fontWeight: 600,
        color: BRAND_BLUE_LIGHT,
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      a² + b² = c²
    </Html>
  );
}