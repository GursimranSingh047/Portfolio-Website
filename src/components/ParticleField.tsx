import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT_DESKTOP = 180;
const PARTICLE_COUNT_MOBILE = 60;
const CONNECTION_DISTANCE = 2.5;
const FIELD_SIZE = 12;

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const isMobile = size.width < 768;
  const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * FIELD_SIZE;
      pos[i * 3 + 1] = (Math.random() - 0.5) * FIELD_SIZE;
      pos[i * 3 + 2] = (Math.random() - 0.5) * FIELD_SIZE * 0.5;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return [pos, vel];
  }, [count]);

  const linePositions = useMemo(() => {
    // Max possible line segments
    const maxLines = count * 4;
    return new Float32Array(maxLines * 6);
  }, [count]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame(() => {
    if (!meshRef.current || !linesRef.current) return;

    const posArray = meshRef.current.geometry.attributes.position
      .array as Float32Array;

    // Update particle positions
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      posArray[ix] += velocities[ix];
      posArray[ix + 1] += velocities[ix + 1];
      posArray[ix + 2] += velocities[ix + 2];

      // Subtle mouse parallax
      posArray[ix] += mouse.current.x * 0.0003;
      posArray[ix + 1] += mouse.current.y * 0.0003;

      // Bounce at boundaries
      for (let axis = 0; axis < 3; axis++) {
        const bound = axis === 2 ? FIELD_SIZE * 0.25 : FIELD_SIZE * 0.5;
        if (Math.abs(posArray[ix + axis]) > bound) {
          velocities[ix + axis] *= -1;
          posArray[ix + axis] = Math.sign(posArray[ix + axis]) * bound;
        }
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // Draw connections between nearby particles
    const lineArray = linesRef.current.geometry.attributes.position
      .array as Float32Array;
    let lineIndex = 0;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE && lineIndex < linePositions.length - 6) {
          lineArray[lineIndex++] = posArray[i * 3];
          lineArray[lineIndex++] = posArray[i * 3 + 1];
          lineArray[lineIndex++] = posArray[i * 3 + 2];
          lineArray[lineIndex++] = posArray[j * 3];
          lineArray[lineIndex++] = posArray[j * 3 + 1];
          lineArray[lineIndex++] = posArray[j * 3 + 2];
        }
      }
    }

    // Zero out unused portion
    for (let i = lineIndex; i < lineArray.length; i++) {
      lineArray[i] = 0;
    }

    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
  });

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.03 : 0.04}
          color="#c2a4ff"
          transparent
          opacity={0.5}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.08}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  );
}

const ParticleField = () => {
  return (
    <div
      className="particle-field"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleField;
