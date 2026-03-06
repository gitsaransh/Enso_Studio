'use client';

import Icon from '@/components/ui/AppIcon';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TESTIMONIALS } from '@/constants/data';
import { IconName } from '@/components/ui/AppIcon';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-card/30 border-y border-input/50 relative z-10">
            <div className="container mx-auto px-4 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide">
                            What People <span className="text-primary">Say</span>
                        </h2>
                        <p className="text-xs text-muted-foreground/40 font-source italic mt-4">
                            Sample testimonials for demonstration purposes
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div
                                className="p-8 bg-background border border-input rounded-lg hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.08)] transition-zen flex flex-col h-full project-card-interactive"
                                data-cursor-hover
                            >
                                <div className="mb-6 opacity-40">
                                    <Icon name="ChatBubbleLeftEllipsisIcon" size={32} className="text-primary" />
                                </div>

                                <blockquote className="flex-grow text-muted-foreground font-source italic leading-relaxed mb-6 text-sm lg:text-base">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                <div className="pt-6 border-t border-input/50 flex items-center gap-4">
                                    {/* Avatar */}
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                                        <span className="font-orbitron text-xs font-bold text-background">
                                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-orbitron font-bold text-foreground text-sm tracking-wide">
                                            {testimonial.author}
                                        </h4>
                                        <p className="text-xs text-secondary mt-0.5 uppercase tracking-wider font-semibold">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
