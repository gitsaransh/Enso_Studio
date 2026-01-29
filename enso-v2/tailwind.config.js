/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'var(--color-border)', /* cyan-500 */
                input: 'var(--color-input)', /* gray-800 */
                ring: 'var(--color-ring)', /* cyan-500 */
                background: 'var(--color-background)', /* gray-950 */
                foreground: 'var(--color-foreground)', /* white */
                primary: {
                    DEFAULT: 'var(--color-primary)', /* cyan-500 */
                    foreground: 'var(--color-primary-foreground)', /* gray-950 */
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary)', /* teal-500 */
                    foreground: 'var(--color-secondary-foreground)', /* white */
                },
                accent: {
                    DEFAULT: 'var(--color-accent)', /* orange-500 */
                    foreground: 'var(--color-accent-foreground)', /* white */
                },
                destructive: {
                    DEFAULT: 'var(--color-destructive)', /* red-500 */
                    foreground: 'var(--color-destructive-foreground)', /* white */
                },
                success: {
                    DEFAULT: 'var(--color-success)', /* green-400 */
                    foreground: 'var(--color-success-foreground)', /* gray-950 */
                },
                warning: {
                    DEFAULT: 'var(--color-warning)', /* amber-500 */
                    foreground: 'var(--color-warning-foreground)', /* gray-950 */
                },
                error: {
                    DEFAULT: 'var(--color-error)', /* red-500 */
                    foreground: 'var(--color-error-foreground)', /* white */
                },
                muted: {
                    DEFAULT: 'var(--color-muted)', /* gray-800 */
                    foreground: 'var(--color-muted-foreground)', /* gray-400 */
                },
                card: {
                    DEFAULT: 'var(--color-card)', /* gray-900 */
                    foreground: 'var(--color-card-foreground)', /* white */
                },
                popover: {
                    DEFAULT: 'var(--color-popover)', /* gray-900 */
                    foreground: 'var(--color-popover-foreground)', /* white */
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                source: ['Source Sans 3', 'sans-serif'],
                rajdhani: ['Rajdhani', 'sans-serif'],
                jetbrains: ['JetBrains Mono', 'monospace'],
            },
            spacing: {
                '13': '3.25rem',
                '21': '5.25rem',
                '34': '8.5rem',
                '55': '13.75rem',
            },
            keyframes: {
                'enso-rotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' },
                    '50%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' },
                },
            },
            animation: {
                'enso-rotate': 'enso-rotate 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            },
        },
    },
    plugins: [],
}
