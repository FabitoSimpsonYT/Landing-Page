import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Float, MeshDistortMaterial, Environment } from '@react-three/drei';

// Modelo mejorado de microbus
function PlaceholderVehicle() {
  const group = useRef();
  
  return (
    <group ref={group}>
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            {/* Chasis/Carrocería principal */}
            <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.8, 1.2, 3.5]} />
                <meshStandardMaterial color="#0066cc" roughness={0.3} metalness={0.6} />
            </mesh>
            
            {/* Cabina (frente del bus) */}
            <mesh position={[0, 0.6, -1.3]} castShadow receiveShadow>
                <boxGeometry args={[1.8, 1, 1.2]} />
                <meshStandardMaterial color="#004499" roughness={0.3} metalness={0.5} />
            </mesh>
            
            {/* Ventanas delanteras */}
            <mesh position={[-0.5, 0.7, -1.4]} castShadow receiveShadow>
                <boxGeometry args={[0.6, 0.5, 0.1]} />
                <meshStandardMaterial color="#87ceeb" opacity={0.7} transparent roughness={0.1} metalness={0.3} />
            </mesh>
            <mesh position={[0.5, 0.7, -1.4]} castShadow receiveShadow>
                <boxGeometry args={[0.6, 0.5, 0.1]} />
                <meshStandardMaterial color="#87ceeb" opacity={0.7} transparent roughness={0.1} metalness={0.3} />
            </mesh>
            
            {/* Ventanas laterales */}
            <mesh position={[-0.95, 0.6, -0.3]} castShadow receiveShadow>
                <boxGeometry args={[0.1, 0.6, 1.2]} />
                <meshStandardMaterial color="#87ceeb" opacity={0.6} transparent roughness={0.1} metalness={0.3} />
            </mesh>
            <mesh position={[0.95, 0.6, -0.3]} castShadow receiveShadow>
                <boxGeometry args={[0.1, 0.6, 1.2]} />
                <meshStandardMaterial color="#87ceeb" opacity={0.6} transparent roughness={0.1} metalness={0.3} />
            </mesh>
            
            {/* Ruedas delanteras */}
            <mesh position={[-0.7, 0.2, -1]} castShadow receiveShadow>
                <cylinderGeometry args={[0.25, 0.25, 0.15, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#333333" roughness={0.8} metalness={0.2} />
            </mesh>
            <mesh position={[0.7, 0.2, -1]} castShadow receiveShadow>
                <cylinderGeometry args={[0.25, 0.25, 0.15, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#333333" roughness={0.8} metalness={0.2} />
            </mesh>
            
            {/* Ruedas traseras */}
            <mesh position={[-0.7, 0.2, 1]} castShadow receiveShadow>
                <cylinderGeometry args={[0.25, 0.25, 0.15, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#333333" roughness={0.8} metalness={0.2} />
            </mesh>
            <mesh position={[0.7, 0.2, 1]} castShadow receiveShadow>
                <cylinderGeometry args={[0.25, 0.25, 0.15, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#333333" roughness={0.8} metalness={0.2} />
            </mesh>
            
            {/* Techo */}
            <mesh position={[0, 1.05, 0.2]} castShadow receiveShadow>
                <boxGeometry args={[1.8, 0.1, 3.5]} />
                <meshStandardMaterial color="#003366" roughness={0.4} metalness={0.4} />
            </mesh>
            
            {/* Parachoques delantero */}
            <mesh position={[0, 0.15, -1.8]} castShadow receiveShadow>
                <boxGeometry args={[2, 0.15, 0.15]} />
                <meshStandardMaterial color="#333333" roughness={0.5} metalness={0.3} />
            </mesh>
        </Float>
    </group>
  );
}

export default function Bus3DViewer() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px', cursor: 'grab', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(10,10,12,0.8), rgba(20,20,25,0.8))' }}>
      <Canvas shadows camera={{ position: [0, 1, 2.5], fov: 50 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 10, 7]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
        <spotLight position={[-5, 5, -5]} angle={0.2} penumbra={1} intensity={0.8} />
        <Stage autoCenter intensity={0.5} adjustCamera={false} scale={0.8}>
            <PlaceholderVehicle />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
}
