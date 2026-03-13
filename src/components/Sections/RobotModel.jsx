import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RobotModel = ({ mousePos }) => {
    const groupRef = useRef();
    
    // Smooth rotation logic
    useFrame((state, delta) => {
        if (!groupRef.current) return;
        
        const targetRotationX = mousePos.y * 0.4;
        const targetRotationY = mousePos.x * 0.4;
        
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.1);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.1);
    });

    return (
        <group ref={groupRef} position={[0, -0.5, 0]}>
            {/* Front Wide Sensor Bar (Green) */}
            <mesh position={[0, 0.2, 3.2]}>
                <boxGeometry args={[6.5, 0.15, 0.4]} />
                <meshStandardMaterial color="#2d5a27" roughness={0.5} metalness={0.2} />
            </mesh>
            {/* Sensor Indicators (White dots on the green bar) */}
            {[-2.8, -2.1, -1.4, -0.7, 0, 0.7, 1.4, 2.1, 2.8].map((x, i) => (
                <mesh key={i} position={[x, 0.28, 3.3]}>
                    <boxGeometry args={[0.1, 0.02, 0.1]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
                </mesh>
            ))}

            {/* Main Contoured Chassis (White/Light Grey) */}
            <group position={[0, 0, 0.5]}>
                {/* Central Body */}
                <mesh position={[0, 0.1, 0]}>
                    <boxGeometry args={[3, 0.2, 5]} />
                    <meshStandardMaterial color="#f0f0f0" transparent opacity={0.9} />
                </mesh>
                {/* Side Wings / Contours */}
                <mesh position={[0, 0.05, 0]} rotation={[0, Math.PI / 4, 0]}>
                    <boxGeometry args={[4, 0.15, 3]} />
                    <meshStandardMaterial color="#f0f0f0" />
                </mesh>
                <mesh position={[0, 0.05, 1]} rotation={[0, -Math.PI / 4, 0]}>
                    <boxGeometry args={[4, 0.15, 3]} />
                    <meshStandardMaterial color="#f0f0f0" />
                </mesh>
            </group>

            {/* White Vertical Pillars */}
            {[
                [-1.2, 0.1, 1], [1.2, 0.1, 1],
                [-1.2, 0.1, -1], [1.2, 0.1, -1],
                [-0.8, 0.1, 2.2], [0.8, 0.1, 2.2],
                [0, 0.1, 2.8]
            ].map((p, i) => (
                <mesh key={i} position={[p[0], p[1] + 0.6, p[2]]}>
                    <cylinderGeometry args={[0.1, 0.1, 1.2, 16]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>
            ))}

            {/* Top MCU Board (Green PCB) */}
            <mesh position={[0, 1.3, -0.5]}>
                <boxGeometry args={[2.5, 0.1, 3]} />
                <meshStandardMaterial color="#2d5a27" />
            </mesh>
            {/* MCU Components (Small white/grey boxes) */}
            <mesh position={[0, 1.36, -0.5]}>
                <boxGeometry args={[0.8, 0.1, 0.8]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0.6, 1.36, 0.2]}>
                <boxGeometry args={[0.4, 0.1, 0.4]} />
                <meshStandardMaterial color="#cccccc" />
            </mesh>
            <mesh position={[-0.6, 1.36, 0.2]}>
                <boxGeometry args={[0.4, 0.1, 0.4]} />
                <meshStandardMaterial color="#cccccc" />
            </mesh>

            {/* Central Black Battery/Component */}
            <mesh position={[0, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.8, 0.8, 1.5, 32]} />
                <meshStandardMaterial color="#111111" roughness={1} />
            </mesh>

            {/* Motors and Wheels */}
            {[ -2.5, 2.5 ].map((x, i) => (
                <group key={i} position={[x, 0.3, -1.2]}>
                    {/* Motor Housing (White) */}
                    <mesh position={[x > 0 ? -0.4 : 0.4, 0, 0]}>
                        <boxGeometry args={[1, 0.8, 0.8]} />
                        <meshStandardMaterial color="#ffffff" />
                    </mesh>
                    {/* Wheel (Black Tire) */}
                    <group rotation={[0, 0, Math.PI / 2]}>
                        <mesh>
                            <cylinderGeometry args={[1.2, 1.2, 0.8, 24]} />
                            <meshStandardMaterial color="#222222" roughness={1} />
                        </mesh>
                        {/* Tire Treads (Simplified) */}
                        {[...Array(12)].map((_, j) => (
                            <mesh key={j} rotation={[0, (j * Math.PI * 2) / 12, 0]} position={[0, 1.25, 0]}>
                                <boxGeometry args={[0.2, 0.1, 0.8]} />
                                <meshStandardMaterial color="#111111" />
                            </mesh>
                        ))}
                    </group>
                </group>
            ))}

            {/* Light Settings for the model */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
            <pointLight position={[-5, 5, -5]} intensity={0.5} />
        </group>
    );
};

export default RobotModel;
