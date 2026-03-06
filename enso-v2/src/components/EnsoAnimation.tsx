'use client';

import { useState, useEffect } from 'react';

interface EnsoAnimationProps {
    onInteraction?: () => void;
    size?: number;
}

const EnsoAnimation = ({ onInteraction, size = 400 }: EnsoAnimationProps) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [ripples, setRipples] = useState<number[]>([]);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const handleClick = () => {
        if (!isHydrated) return;
        setHasInteracted(true);
        onInteraction?.();
        // Add ripple
        const id = Date.now();
        setRipples((prev) => [...prev, id]);
        setTimeout(() => setRipples((prev) => prev.filter((r) => r !== id)), 1200);
    };

    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            {/* Outer ambient glow */}
            <div
                className={`absolute inset-0 rounded-full transition-zen-slow pointer-events-none ${isHovered
                    ? 'opacity-100 scale-110'
                    : 'opacity-40 scale-100'
                    }`}
                style={{
                    background:
                        'radial-gradient(circle at center, rgba(0,255,204,0.12) 0%, transparent 70%)',
                }}
            />

            {/* Ripple rings on click */}
            {ripples.map((id) => (
                <div
                    key={id}
                    className="absolute inset-0 rounded-full border border-primary pointer-events-none animate-ripple"
                />
            ))}

            {/* Main SVG */}
            <div
                className={`relative cursor-pointer select-none transition-zen ${isHovered ? 'scale-105' : 'scale-100'
                    }`}
                style={{ width: size, height: size }}
                onMouseEnter={() => isHydrated && setIsHovered(true)}
                onMouseLeave={() => isHydrated && setIsHovered(false)}
                onClick={handleClick}
                data-cursor-hover
            >
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="ensoGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00ffcc" />
                            <stop offset="50%" stopColor="#20b2aa" />
                            <stop offset="100%" stopColor="#00ffcc" />
                        </linearGradient>
                        <linearGradient id="ensoGradientInner" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#20b2aa" />
                            <stop offset="50%" stopColor="#00ffff" />
                            <stop offset="100%" stopColor="#20b2aa" />
                        </linearGradient>
                        <linearGradient id="ensoGradientCore" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00ffcc" />
                            <stop offset="100%" stopColor="#ff6b35" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="glowStrong" x="-30%" y="-30%" width="160%" height="160%">
                            <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Outermost decorative ring (slow, subtle) */}
                    <circle
                        cx="200"
                        cy="200"
                        r="190"
                        fill="none"
                        stroke="rgba(0,255,204,0.08)"
                        strokeWidth="1"
                        strokeDasharray="8 14"
                        className="animate-enso-rotate"
                        style={{ animationDuration: '40s', animationDirection: 'reverse' }}
                    />

                    {/* Main enso ring */}
                    <circle
                        cx="200"
                        cy="200"
                        r="170"
                        fill="none"
                        stroke="url(#ensoGradientMain)"
                        strokeWidth={isHovered ? '10' : '7'}
                        strokeLinecap="round"
                        strokeDasharray="1000 120"
                        filter="url(#glow)"
                        className="animate-enso-rotate transition-all duration-300"
                        style={{ animationDuration: '10s' }}
                    />

                    {/* Inner ring */}
                    <circle
                        cx="200"
                        cy="200"
                        r="140"
                        fill="none"
                        stroke="url(#ensoGradientInner)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="780 90"
                        opacity="0.65"
                        className="animate-enso-rotate"
                        style={{ animationDirection: 'reverse', animationDuration: '15s' }}
                    />

                    {/* Core ring — accent accent color gradient */}
                    <circle
                        cx="200"
                        cy="200"
                        r="110"
                        fill="none"
                        stroke="url(#ensoGradientCore)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="560 70"
                        opacity="0.45"
                        className="animate-enso-rotate"
                        style={{ animationDuration: '22s' }}
                    />

                    {/* Center dot */}
                    <circle
                        cx="200"
                        cy="188"
                        r={isHovered ? '6' : '4'}
                        fill="#00ffcc"
                        filter="url(#glowStrong)"
                        className="transition-all duration-300"
                        opacity="0.9"
                    />


                </svg>

                {/* Interaction ping */}
                {hasInteracted && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-4 h-4 bg-primary rounded-full animate-ping opacity-60" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnsoAnimation;
