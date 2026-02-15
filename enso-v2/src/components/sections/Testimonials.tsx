'use client';

import Icon from '@/components/ui/AppIcon';

import { TESTIMONIALS } from '@/constants/data';
import { IconName } from '@/components/ui/AppIcon';

const Testimonials = () => {

    return (
        <section id="testimonials" className="py-20 bg-card/30 border-y border-input/50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide">
                        What People <span className="text-primary">Say</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1 md:col-span-3 text-center mb-8">
                        <p className="text-xs text-muted-foreground/50 font-source italic">
                            Sample testimonials for demonstration purposes
                        </p>
                    </div>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 bg-background border border-input rounded-lg hover:border-primary/30 transition-zen flex flex-col"
                        >
                            <div className="mb-6 opacity-50">
                                <Icon name="ChatBubbleLeftEllipsisIcon" size={32} className="text-primary" />
                            </div>

                            <blockquote className="flex-grow text-muted-foreground font-source italic leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </blockquote>

                            <div className="pt-6 border-t border-input/50">
                                <h4 className="font-orbitron font-bold text-foreground text-sm tracking-wide">
                                    {testimonial.author}
                                </h4>
                                <p className="text-xs text-secondary mt-1 uppercase tracking-wider font-semibold">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
