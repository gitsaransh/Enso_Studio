'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

import { NAVIGATION_ITEMS, CONTACT_ITEM } from '@/constants/data';
import { IconName } from '@/components/ui/AppIcon';

interface HeaderProps {
    className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-zen ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md border-b border-border/20' : 'bg-transparent'
                    } ${className}`}
            >
                <div className="flex items-center justify-between h-20 px-4 lg:px-8 max-w-7xl mx-auto">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10">
                            <svg
                                viewBox="0 0 100 100"
                                className="w-full h-full animate-enso-rotate"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="url(#ensoGradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray="250 30"
                                    className="transition-zen group-hover:stroke-[4]"
                                />
                                <defs>
                                    <linearGradient id="ensoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00ffff" />
                                        <stop offset="100%" stopColor="#20b2aa" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="font-orbitron text-xl font-bold tracking-wider text-foreground group-hover:text-primary transition-zen">
                            ENSO STUDIO
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-1">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-source text-muted-foreground hover:text-foreground hover:bg-muted/10 transition-zen group"
                            >
                                <Icon name={item.icon as IconName} size={18} className="group-hover:text-primary transition-zen" />
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <Link
                            href={CONTACT_ITEM.href}
                            className="flex items-center space-x-2 px-6 py-2 bg-primary text-primary-foreground rounded-md font-rajdhani text-sm font-semibold hover:bg-primary/90 glow-primary hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-zen"
                        >
                            <Icon name={CONTACT_ITEM.icon as IconName} size={18} />
                            <span>{CONTACT_ITEM.label}</span>
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-zen"
                        aria-label="Toggle mobile menu"
                    >
                        <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
                    </button>
                </div>
            </header>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
                    <nav className="fixed top-20 left-0 right-0 bottom-0 bg-card overflow-y-auto border-t border-border">
                        <div className="flex flex-col p-4 space-y-2">
                            {NAVIGATION_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center space-x-3 px-4 py-4 rounded-md text-lg font-source text-muted-foreground hover:text-foreground hover:bg-muted transition-zen group border-b border-border/10"
                                >
                                    <Icon name={item.icon as IconName} size={24} className="group-hover:text-primary transition-zen" />
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                            <div className="pt-8 px-4">
                                <Link
                                    href={CONTACT_ITEM.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-primary-foreground rounded-md font-rajdhani text-lg font-semibold glow-primary transition-zen w-full"
                                >
                                    <Icon name={CONTACT_ITEM.icon as IconName} size={24} />
                                    <span>{CONTACT_ITEM.label}</span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;
