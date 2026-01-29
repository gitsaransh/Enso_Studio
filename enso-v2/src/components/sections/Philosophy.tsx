'use client';

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
                    <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide">
                        <span className="text-primary">Our</span> Philosophy
                    </h2>

                    <div className="space-y-6 text-lg text-muted-foreground font-source leading-relaxed">
                        <p>
                            ENSO Studio operates as a system-driven studio, prioritizing <span className="text-foreground font-semibold">focus over volume</span>,
                            iteration over perfection, and clarity over complexity.
                        </p>
                        <p>
                            We build digital products through disciplined execution and long-term thinking. Each project
                            reflects our commitment to simplicity, functional design, and sustainable development practices.
                        </p>
                        <p>
                            Our approach is rooted in <span className="text-foreground font-semibold">repetition and refinement</span> — the continuous cycle of building, testing,
                            and improving until the solution is both elegant and effective.
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
};

export default Philosophy;
