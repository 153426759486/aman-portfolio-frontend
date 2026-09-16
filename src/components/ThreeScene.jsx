import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Shape() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh rotation={[0.4, 0.4, 0]}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          wireframe
        />
      </mesh>
    </Float>
  );
}

function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <Shape />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}

export default ThreeScene;