import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 – Page Not Found | Enso Studio',
    description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
            {/* Decorative ring */}
            <div className="relative mb-12">
                <svg
                    viewBox="0 0 200 200"
                    width="160"
                    height="160"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-enso-rotate opacity-60"
                >
                    <defs>
                        <linearGradient id="nf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00ffcc" />
                            <stop offset="100%" stopColor="#20b2aa" />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="100"
                        cy="100"
                        r="85"
                        fill="none"
                        stroke="url(#nf-grad)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="480 60"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-orbitron font-bold text-4xl text-primary">
                    404
                </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide mb-4">
                Page Not Found
            </h1>
            <p className="text-muted-foreground font-source text-lg mb-10 max-w-md leading-relaxed">
                The page you are looking for does not exist or has been moved.
            </p>

            <Link href="/" className="btn-glass px-8 py-4 text-base">
                Return Home
            </Link>
        </div>
    );
}
