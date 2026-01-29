'use client';

import { useState, useEffect } from 'react';

interface EnsoAnimationProps {
    onInteraction?: () => void;
}

const EnsoAnimation = ({ onInteraction }: EnsoAnimationProps) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const handleClick = () => {
        if (!isHydrated) return;
        setHasInteracted(true);
        onInteraction?.();
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div
                className={`relative cursor-pointer transition-zen ${isHovered ? 'scale-105' : 'scale-100'
                    }`}
                onMouseEnter={() => isHydrated && setIsHovered(true)}
                onMouseLeave={() => isHydrated && setIsHovered(false)}
                onClick={handleClick}
                style={{ width: '400px', height: '400px' }}
            >
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full animate-enso-rotate"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="200"
                        cy="200"
                        r="170"
                        fill="none"
                        stroke="url(#ensoGradientMain)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="1000 120"
                        className={`transition-zen ${isHovered ? 'stroke-[12]' : ''}`}
                        filter="url(#glow)"
                    />

                    <circle
                        cx="200"
                        cy="200"
                        r="140"
                        fill="none"
                        stroke="url(#ensoGradientInner)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="800 80"
                        opacity="0.6"
                        className="animate-enso-rotate"
                        style={{ animationDirection: 'reverse', animationDuration: '15s' }}
                    />

                    <circle
                        cx="200"
                        cy="200"
                        r="110"
                        fill="none"
                        stroke="url(#ensoGradientCore)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="600 60"
                        opacity="0.4"
                        className="animate-enso-rotate"
                        style={{ animationDuration: '20s' }}
                    />

                    <defs>
                        <linearGradient id="ensoGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00ffff" />
                            <stop offset="50%" stopColor="#20b2aa" />
                            <stop offset="100%" stopColor="#00ffff" />
                        </linearGradient>

                        <linearGradient id="ensoGradientInner" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#20b2aa" />
                            <stop offset="50%" stopColor="#00ffff" />
                            <stop offset="100%" stopColor="#20b2aa" />
                        </linearGradient>

                        <linearGradient id="ensoGradientCore" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00ffff" />
                            <stop offset="100%" stopColor="#20b2aa" />
                        </linearGradient>

                        <filter id="glow">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                {isHovered && (
                    <div className="absolute inset-0 rounded-full glow-primary animate-glow-pulse pointer-events-none" />
                )}

                {hasInteracted && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-3 h-3 bg-primary rounded-full animate-ping" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnsoAnimation;
