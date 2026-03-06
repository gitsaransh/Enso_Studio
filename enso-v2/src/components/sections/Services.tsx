'use client';

import Icon from '@/components/ui/AppIcon';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SERVICES } from '@/constants/data';
import { IconName } from '@/components/ui/AppIcon';

const Services = () => {
    return (
        <section id="services" className="py-20 bg-card/50 relative z-10">
            <div className="container mx-auto px-4 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide">
                            What We <span className="text-secondary">Build</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 80}>
                            <div
                                className="p-8 bg-card border border-input rounded-lg hover:border-primary/50 transition-zen group hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] h-full skill-card-interactive"
                                data-cursor-hover
                            >
                                <div className="w-12 h-12 mb-6 text-secondary group-hover:text-primary transition-zen">
                                    <Icon name={service.icon as IconName} size={48} />
                                </div>
                                <h3 className="text-xl font-orbitron font-bold text-foreground mb-3 group-hover:text-primary transition-zen">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground font-source leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
