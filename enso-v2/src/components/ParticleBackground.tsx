'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        camera.position.z = 5;

        // Create particles
        const particlesCount = 1200;
        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 12;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const material = new THREE.PointsMaterial({
            size: 0.018,
            color: 0x00ffcc,
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const particlesMesh = new THREE.Points(geometry, material);
        scene.add(particlesMesh);

        // Lerp target rotations (fix accumulative drift bug)
        let targetRotX = 0;
        let targetRotY = 0;
        let baseRotX = 0;
        let baseRotY = 0;

        const onMouseMove = (e: MouseEvent) => {
            targetRotX = -(e.clientY / window.innerHeight - 0.5) * 0.6;
            targetRotY = (e.clientX / window.innerWidth - 0.5) * 0.6;
        };
        document.addEventListener('mousemove', onMouseMove);

        let animId: number;
        const animate = () => {
            animId = requestAnimationFrame(animate);

            // Gentle auto-rotation
            baseRotY += 0.0008;
            baseRotX += 0.0003;

            // Lerp toward mouse target
            particlesMesh.rotation.y += (targetRotY + baseRotY - particlesMesh.rotation.y) * 0.04;
            particlesMesh.rotation.x += (targetRotX + baseRotX - particlesMesh.rotation.x) * 0.04;

            renderer.render(scene, camera);
        };
        animate();

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(animId);
            document.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ParticleBackground;
