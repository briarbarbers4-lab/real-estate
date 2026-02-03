"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader, Vector2, Color } from "three"
import { useMemo, useRef, Suspense } from "react"
import { vertexShader, fragmentShader } from "@/lib/shaders/liquidGold"

function LiquidPlane() {
    const meshRef = useRef<any>(null)

    // Load the hero image
    const texture = useLoader(TextureLoader, "/images/hero-cinematic.jpg")

    // Uniforms
    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uTime: { value: 0 },
            uMouse: { value: new Vector2(0, 0) },
            uResolution: { value: new Vector2(1, 1) },
            uHover: { value: 0 },
            uGoldColor: { value: new Color("#C5A059") }
        }),
        [texture]
    )

    useFrame((state) => {
        const { clock, pointer } = state
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime()
            // Smoothly interpolate mouse position
            // Pointer is normalized (-1 to 1)
            const targetX = pointer.x * 0.5 + 0.5
            const targetY = pointer.y * 0.5 + 0.5

            meshRef.current.material.uniforms.uMouse.value.lerp(
                new Vector2(targetX, targetY),
                0.1
            )
        }
    })

    return (
        <mesh ref={meshRef} scale={[2, 2, 1]}>
            <planeGeometry args={[2, 2, 32, 32]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
            />
        </mesh>
    )
}

export default function LiquidHero() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <LiquidPlane />
                </Suspense>
            </Canvas>
        </div>
    )
}
