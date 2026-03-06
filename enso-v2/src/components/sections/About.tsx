'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

const About = () => {
    return (
        <section id="about" className="py-20 bg-background border-t border-input/30">
            <div className="container mx-auto px-4 lg:px-8">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide">
                            About <span className="text-primary">Enso Studio</span>
                        </h2>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-accent/5 blur-xl rounded-full -z-10" />
                            <p className="text-lg md:text-xl text-muted-foreground font-source leading-relaxed">
                                Enso Studio is a solo development practice by <span className="text-foreground font-semibold">Saransh Biswal</span>, a Business Analyst who builds digital products for continuous improvement and creative exploration. Each project represents an experiment in focused, mindful development—building for the joy of building, learning through iteration, and practicing the craft of thoughtful software creation.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default About;

