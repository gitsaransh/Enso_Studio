'use client';

import Icon from '@/components/ui/AppIcon';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "ENSO Studio delivered a polished, engaging puzzle game that exceeded our expectations. Their focus on user experience and clean design is exceptional.",
            author: "Sarah Chen",
            role: "Product Manager, TechVentures"
        },
        {
            quote: "Working with ENSO Studio was seamless. They understand the balance between aesthetics and functionality, creating products that users love.",
            author: "Marcus Rodriguez",
            role: "Founder, CreativeFlow"
        },
        {
            quote: "Their systematic approach to development and commitment to quality made our collaboration productive and stress-free. Highly recommended.",
            author: "Priya Sharma",
            role: "CEO, InnovateLabs"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-card/30 border-y border-input/50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide">
                        What People <span className="text-primary">Say</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 bg-background border border-input rounded-lg hover:border-primary/30 transition-zen flex flex-col"
                        >
                            <div className="mb-6 opacity-50">
                                <Icon name="ChatBubbleLeftQuoteIcon" size={32} className="text-primary" />
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
