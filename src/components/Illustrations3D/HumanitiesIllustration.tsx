import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import * as THREE from 'three';

const BRAND_BLUE = '#3B82F6';
const BRAND_BLUE_LIGHT = '#60A5FA';
const BRAND_YELLOW = '#FFD43B';
const BG_NAVY = '#0B1020';
const CARD_NAVY = '#121B30';

export function HumanitiesIllustration() {
  const [mounted, setMounted] = useState(false);

  return (
    <div className="illustration-3d-container" style={{ width: '100%', height: '100%', minHeight: 160 }}>
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setMounted(true)}
        style={{ outline: 'none' }}
      >
        <color attach="background" args={[BG_NAVY]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />
        <directionalLight position={[-2, 1, 1]} intensity={0.5} color="#1e3a5f" />

        <group>
          <BookStack />
          <Globe />
        </group>

        {mounted && <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.2} />}
      </Canvas>
    </div>
  );
}

function BookStack() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[-1.8, -0.5, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <mesh
        geometry={new THREE.BoxGeometry(1.4, 0.15, 1.0)}
        material={new THREE.MeshStandardMaterial({ color: CARD_NAVY, roughness: 0.7, metalness: 0.1 })}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial attach="material" color={CARD_NAVY} roughness={0.7} metalness={0.1} />
      </mesh>
      <mesh
        geometry={new THREE.BoxGeometry(1.35, 1.2, 0.95)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_BLUE, roughness: 0.6, metalness: 0.05 })}
        position={[0, 0.6, 0]}
      />
      <mesh
        geometry={new THREE.BoxGeometry(1.3, 0.08, 0.9)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_BLUE_LIGHT, roughness: 0.3, metalness: 0.2 })}
        position={[0, 1.25, 0]}
      />
      <mesh
        geometry={new THREE.BoxGeometry(1.25, 0.8, 0.85)}
        material={new THREE.MeshStandardMaterial({ color: '#1e3a5f', roughness: 0.7, metalness: 0.1 })}
        position={[0, 1.9, 0]}
      />
      <mesh
        geometry={new THREE.BoxGeometry(1.2, 0.06, 0.8)}
        material={new THREE.MeshStandardMaterial({ color: BRAND_YELLOW, roughness: 0.3, metalness: 0.2 })}
        position={[0, 2.35, 0]}
      />
    </group>
  );
}

function Globe() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[1.5, 0.2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <mesh
        geometry={new THREE.SphereGeometry(1.1, 32, 32)}
        material={new THREE.MeshStandardMaterial({
          color: BG_NAVY,
          roughness: 0.5,
          metalness: 0.1,
        })}
      />
      <mesh
        geometry={new THREE.SphereGeometry(1.12, 32, 32)}
        material={new THREE.MeshBasicMaterial({
          color: BRAND_BLUE,
          wireframe: true,
          transparent: true,
          opacity: 0.3,
        })}
      />
      <group>
        <mesh
          geometry={new THREE.RingGeometry(1.3, 1.32, 64)}
          material={new THREE.MeshBasicMaterial({ color: BRAND_YELLOW, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={new THREE.RingGeometry(1.3, 1.32, 64)}
          material={new THREE.MeshBasicMaterial({ color: BRAND_YELLOW, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          geometry={new THREE.RingGeometry(1.3, 1.32, 64)}
          material={new THREE.MeshBasicMaterial({ color: BRAND_YELLOW, side: THREE.DoubleSide, transparent: true, opacity: 0.4 })}
          rotation={[0, Math.PI / 4, 0]}
        />
      </group>
    </group>
  );
}