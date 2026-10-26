import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const BRAND_BLUE = '#3B82F6';
const BRAND_BLUE_LIGHT = '#60A5FA';
const BG_NAVY = '#0B1020';

export function PhysicsIllustration() {
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
          <AtomModel />
        </group>

        {mounted && <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.3} />}
      </Canvas>
    </div>
  );
}

function AtomModel() {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <Orbit radius={1.4} color={BRAND_BLUE} />
      <Orbit radius={1.0} color={BRAND_BLUE_LIGHT} />
      <Orbit radius={0.6} color={BRAND_BLUE} />

      <Electron orbitRadius={1.4} speed={0.8} color={BRAND_BLUE} />
      <Electron orbitRadius={1.0} speed={1.2} color={BRAND_BLUE_LIGHT} initialAngle={Math.PI * 2 / 3} />
      <Electron orbitRadius={0.6} speed={1.8} color={BRAND_BLUE} initialAngle={Math.PI * 4 / 3} />

      <mesh
        geometry={new THREE.SphereGeometry(0.25, 32, 32)}
        material={new THREE.MeshStandardMaterial({ color: BG_NAVY, roughness: 0.2, metalness: 0.3, emissive: BRAND_BLUE, emissiveIntensity: 0.3 })}
      />
      <mesh
        geometry={new THREE.SphereGeometry(0.27, 32, 32)}
        material={new THREE.MeshBasicMaterial({ color: BRAND_BLUE, wireframe: true, transparent: true, opacity: 0.4 })}
      />
    </group>
  );
}

function Orbit({ radius, color }: { radius: number; color: string }) {
  return (
    <mesh
      geometry={new THREE.RingGeometry(radius - 0.02, radius + 0.02, 128)}
      material={new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.3 })}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
}

function Electron({ orbitRadius, speed, color, initialAngle = 0 }: { orbitRadius: number; speed: number; color: string; initialAngle?: number }) {
  const angleRef = useRef(initialAngle);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state: unknown, delta: number) => {
    angleRef.current += delta * speed;
    const angle = angleRef.current;
    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle * 0.5) * 0.3;
    const z = Math.sin(angle) * orbitRadius;
    if (meshRef.current) {
      meshRef.current.position.set(x, y, z);
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={new THREE.SphereGeometry(0.1, 16, 16)}
      material={new THREE.MeshStandardMaterial({ color, roughness: 0.2, metalness: 0.5, emissive: color, emissiveIntensity: 0.5 })}
      position={[orbitRadius, 0, 0]}
    />
  );
}