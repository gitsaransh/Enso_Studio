'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import EnsoLogo from './EnsoLogo';

interface FooterProps {
    className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    const navigationLinks = [
        { label: 'Home', href: '/homepage' },
        { label: 'Showcase', href: '/product-showcase' },
        { label: 'Capabilities', href: '/capabilities-matrix' },
        { label: 'Process', href: '/process-methodology' },
        { label: 'Partnerships', href: '/client-partnerships' },
        { label: 'Contact', href: '/contact-sanctuary' },
    ];

    const socialLinks = [
        { name: 'GitHub', icon: 'CodeBracketIcon', href: '#' },
        { name: 'Twitter', icon: 'AtSymbolIcon', href: '#' },
        { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' },
        { name: 'Dribbble', icon: 'PaintBrushIcon', href: '#' },
    ];

    const resourceLinks = [
        { label: 'Mindful Development Framework', href: '#' },
        { label: 'Digital Philosophy Insights', href: '#' },
        { label: 'Open Source Tools', href: '#' },
        { label: 'Community Guidelines', href: '#' },
    ];

    return (
        <footer className={`bg-card border-t border-border ${className}`}>
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-13">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-13">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <EnsoLogo size={40} animated={false} />
                            <span className="font-orbitron text-lg font-bold tracking-wider text-foreground">
                                ENSO STUDIO
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-source leading-relaxed">
                            Quietly shipping focused digital products through mindful development and technical excellence.
                        </p>
                        <div className="flex items-center space-x-3 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-zen group"
                                    aria-label={social.name}
                                >
                                    <Icon name={social.icon as any} size={20} className="group-hover:scale-110 transition-zen" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-orbitron text-sm font-bold text-foreground mb-4 tracking-wide">Navigation</h3>
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-zen inline-flex items-center group"
                                    >
                                        <Icon name="ChevronRightIcon" size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-zen" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-orbitron text-sm font-bold text-foreground mb-4 tracking-wide">Resources</h3>
                        <ul className="space-y-2">
                            {resourceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-zen inline-flex items-center group"
                                    >
                                        <Icon name="ChevronRightIcon" size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-zen" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-orbitron text-sm font-bold text-foreground mb-4 tracking-wide">Newsletter</h3>
                        <p className="text-sm text-muted-foreground mb-4 font-source">
                            Subscribe to Digital Philosophy Insights for mindful development practices.
                        </p>
                        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-zen"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-rajdhani text-sm font-semibold hover:bg-primary/90 glow-primary transition-zen"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-13 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-muted-foreground font-source">
                            © {currentYear} ENSO Studio. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-zen">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-zen">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-zen">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
