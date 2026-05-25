"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float, PresentationControls, Environment, ContactShadows, Center } from "@react-three/drei";
import * as THREE from "three";

function Model({ mousePos }: { mousePos: { x: number; y: number } }) {
  const { scene } = useGLTF("/geniotto.glb");
  const group = useRef<THREE.Group>(null);
  const headNodes = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    headNodes.current = [];
    scene.traverse((node) => {
      const name = node.name.toLowerCase();
      // Ricerca ultra-ampia per identificare la testa
      if (
        name.includes("head") || 
        name.includes("neck") || 
        name.includes("testa") || 
        name.includes("collo") || 
        name.includes("face") || 
        name.includes("viso") || 
        name.includes("occhi") || 
        name.includes("eye") ||
        name.includes("capo")
      ) {
        headNodes.current.push(node);
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!group.current) return;
    
    const t = state.clock.getElapsedTime();
    
    // 1. ROTAZIONE TOTALE (Reattiva e fluida)
    // Facciamo ruotare tutto il robot così siamo sicuri che segua il mouse
    const targetRotY = mousePos.x * 0.6; // Rotazione laterale
    const targetRotX = -mousePos.y * 0.3; // Inclinazione avanti/dietro

    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.05);

    // 2. EFFETTO PROFONDITÀ (Z) - Si sporge leggermente
    const dist = Math.sqrt(mousePos.x ** 2 + mousePos.y ** 2);
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, dist * 0.4, 0.05);
    
    // 3. RESPIRAZIONE
    group.current.position.y = Math.sin(t * 1.5) * 0.04;
  });

  return (
    <Center>
      <primitive 
        ref={group} 
        object={scene} 
        scale={2.5} 
        position={[0, 0, 0]} 
      />
    </Center>
  );
}

export default function Geniotto3D({ mousePos }: { mousePos: { x: number; y: number } }) {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <PresentationControls
              global
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Model mousePos={mousePos} />
            </PresentationControls>
          </Float>
          
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Pre-caricamento del modello
useGLTF.preload("/geniotto.glb");
