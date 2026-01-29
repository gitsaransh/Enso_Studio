'use client';

import Icon from '@/components/ui/AppIcon';

const Services = () => {
    const services = [
        {
            title: 'Mobile Apps',
            description: 'Practical, focused digital utilities designed for everyday use.',
            icon: 'DevicePhoneMobileIcon'
        },
        {
            title: 'Games',
            description: 'Hyper-casual and puzzle experiences that challenge the mind.',
            icon: 'PuzzlePieceIcon'
        },
        {
            title: 'AI Tools',
            description: 'Intelligent, lightweight systems for enhanced productivity.',
            icon: 'CpuChipIcon'
        },
        {
            title: 'Automation',
            description: 'Streamlined internal and external workflows.',
            icon: 'ArrowPathIcon'
        },
        {
            title: 'Experiments',
            description: 'Controlled product explorations and R&D.',
            icon: 'BeakerIcon'
        }
    ];

    return (
        <section id="services" className="py-20 bg-card/50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide">
                        What We <span className="text-secondary">Build</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 bg-card border border-input rounded-lg hover:border-primary/50 transition-zen group hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                        >
                            <div className="w-12 h-12 mb-6 text-secondary group-hover:text-primary transition-zen">
                                <Icon name={service.icon} size={48} />
                            </div>
                            <h3 className="text-xl font-orbitron font-bold text-foreground mb-3 group-hover:text-primary transition-zen">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground font-source leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
