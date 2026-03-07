'use client';

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Don't show custom cursor on touch devices
        if ('ontouchstart' in window) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;
        if (!cursor || !follower) return;

        let posX = 0, posY = 0;
        let followerX = 0, followerY = 0;
        let animId: number;

        const onMove = (e: MouseEvent) => {
            posX = e.clientX;
            posY = e.clientY;
            // Main cursor snaps immediately
            cursor.style.transform = `translate(calc(${posX}px - 50%), calc(${posY}px - 50%))`;
        };
        document.addEventListener('mousemove', onMove);

        // Animate follower with smooth lerp (no setTimeout jitter)
        const animateFollower = () => {
            animId = requestAnimationFrame(animateFollower);
            followerX += (posX - followerX) * 0.12;
            followerY += (posY - followerY) * 0.12;
            follower.style.transform = `translate(calc(${followerX}px - 50%), calc(${followerY}px - 50%))`;
        };
        animateFollower();

        // Event delegation — works for dynamically added elements (scroll reveals, etc.)
        const INTERACTIVE = 'a, button, .project-card-interactive, .skill-card-interactive, [data-cursor-hover]';

        const onOver = (e: MouseEvent) => {
            if ((e.target as Element).closest(INTERACTIVE)) {
                cursor.classList.add('cursor-hover');
                follower.classList.add('cursor-hover');
            }
        };
        const onOut = (e: MouseEvent) => {
            if ((e.target as Element).closest(INTERACTIVE)) {
                cursor.classList.remove('cursor-hover');
                follower.classList.remove('cursor-hover');
            }
        };

        document.addEventListener('mouseover', onOver);
        document.addEventListener('mouseout', onOut);

        // Show cursor
        cursor.style.opacity = '1';
        follower.style.opacity = '1';

        return () => {
            cancelAnimationFrame(animId);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
};

export default CustomCursor;
