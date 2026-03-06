'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // fire once
                }
            },
            {
                threshold: options.threshold ?? 0.15,
                rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return { ref, isVisible };
};

// Convenience wrapper component for scroll reveal with staggered children 
interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // ms
    direction?: 'up' | 'left' | 'right';
}

export const ScrollReveal = ({
    children,
    className = '',
    delay = 0,
    direction = 'up',
}: ScrollRevealProps) => {
    const { ref, isVisible } = useScrollReveal();

    const initialTransform = {
        up: 'translateY(40px)',
        left: 'translateX(-40px)',
        right: 'translateX(40px)',
    }[direction];

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate(0)' : initialTransform,
                transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};
