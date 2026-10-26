import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

// Brand colors matching the unified design system
const BRAND_BLUE = '#3B82F6';
const BRAND_BLUE_LIGHT = '#60A5FA';
const BRAND_YELLOW = '#FFD43B';
const BG_NAVY = '#0B1020';

export function JEEIllustration() {
  const groupRef = useRef<THREE.Group>(null);
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

        <group ref={groupRef}>
          <TriangleWireframe />
          <Formulas />
        </group>

        {mounted && <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.3} />}
      </Canvas>
    </div>
  );
}

function TriangleWireframe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes.position"
          args={[new Float32Array([
            0, 1.2, 0,
            -1, -1, 0,
            1, -1, 0,
          ]), 3]}
        />
        <bufferAttribute
          attach="attributes.normal"
          args={[new Float32Array([
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
          ]), 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial
        attach="material"
        color={BRAND_BLUE}
        linewidth={2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

function Formulas() {
  return (
    <group>
      <Html
        transform
        position={[0, -1.5, 0]}
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, monospace',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: BRAND_BLUE,
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        sin²θ + cos²θ = 1
      </Html>
      <Html
        transform
        position={[0, -1.85, 0]}
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, monospace',
          fontSize: '0.65rem',
          fontWeight: 500,
          color: BRAND_BLUE_LIGHT,
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        F = m·a
      </Html>
      <Html
        transform
        position={[0, -2.15, 0]}
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, monospace',
          fontSize: '0.6rem',
          fontWeight: 500,
          color: BRAND_YELLOW,
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        E = mc²
      </Html>
    </group>
  );
}