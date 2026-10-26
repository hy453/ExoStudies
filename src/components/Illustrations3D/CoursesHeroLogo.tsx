import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const BG_NAVY = '#0B1020';

export function CoursesHeroLogo() {
  return (
    <div className="illustration-3d-container" style={{ width: '100%', height: '100%', minHeight: 160 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ outline: 'none' }}
      >
        <color attach="background" args={[BG_NAVY]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />
        <directionalLight position={[-2, -1, 1]} intensity={0.5} color="#1e3a5f" />

        <ExoLogo />

      </Canvas>
    </div>
  );
}

function ExoLogo() {
  return (
    <Html
      transform
      position={[0, -0.3, 0]}
      style={{
        pointerEvents: 'none',
        filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))',
      }}
    >
      <img
        src="/images/EXO.png"
        alt="ExoStudies"
        style={{
          width: '140px',
          height: '140px',
          objectFit: 'contain',
        }}
      />
    </Html>
  );
}