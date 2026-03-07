'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import type { IconName } from '@/components/ui/AppIcon';
import EnsoLogo from './EnsoLogo';

interface FooterProps {
    className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    const socialLinks: { name: string; icon: IconName; href: string; live: boolean }[] = [
        { name: 'GitHub', icon: 'CodeBracketIcon', href: 'https://github.com/gitsaransh', live: true },
        { name: 'Twitter', icon: 'AtSymbolIcon', href: '#', live: false },
        { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#', live: false },
        { name: 'Dribbble', icon: 'PaintBrushIcon', href: '#', live: false },
    ];

    return (
        <footer className={`bg-card border-t border-border ${className}`}>
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4 max-w-sm">
                        <div className="flex items-center space-x-3">
                            <EnsoLogo size={40} animated={false} />
                            <span className="font-orbitron text-lg font-bold tracking-wider text-foreground">
                                ENSO STUDIO
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-source leading-relaxed">
                            Quietly shipping focused digital products through mindful development and technical excellence.
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target={social.live ? '_blank' : undefined}
                                rel={social.live ? 'noopener noreferrer' : undefined}
                                onClick={!social.live ? (e) => e.preventDefault() : undefined}
                                className={`p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-zen group ${!social.live ? 'opacity-40 cursor-not-allowed' : ''}`}
                                aria-label={social.live ? social.name : `${social.name} (coming soon)`}
                            >
                                <Icon name={social.icon} size={20} className="group-hover:scale-110 transition-zen" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <p className="text-sm text-muted-foreground font-source">
                            © {currentYear} ENSO Studio. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
