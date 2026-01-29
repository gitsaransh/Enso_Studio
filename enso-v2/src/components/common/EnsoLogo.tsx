'use client';

import { useState } from 'react';

interface EnsoLogoProps {
    size?: number;
    className?: string;
    animated?: boolean;
    onClick?: () => void;
}

const EnsoLogo = ({ size = 200, className = '', animated = true, onClick }: EnsoLogoProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative ${className}`}
            style={{ width: size, height: size }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <svg
                viewBox="0 0 200 200"
                className={`w-full h-full ${animated ? 'animate-enso-rotate' : ''} ${isHovered ? 'scale-105' : ''
                    } transition-zen cursor-pointer`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="url(#ensoGradientLogo)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="500 60"
                    className={`${isHovered ? 'stroke-[8]' : ''} transition-zen`}
                />

                <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="url(#ensoGradientInner)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="400 40"
                    opacity="0.5"
                    className={`${animated ? 'animate-enso-rotate' : ''}`}
                    style={{ animationDirection: 'reverse', animationDuration: '12s' }}
                />

                <defs>
                    <linearGradient id="ensoGradientLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ffff" />
                        <stop offset="50%" stopColor="#20b2aa" />
                        <stop offset="100%" stopColor="#00ffff" />
                    </linearGradient>
                    <linearGradient id="ensoGradientInner" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#20b2aa" />
                        <stop offset="100%" stopColor="#00ffff" />
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
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
        </div>
    );
};

export default EnsoLogo;
