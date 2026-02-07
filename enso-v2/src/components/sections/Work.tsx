'use client';

import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { PROJECTS } from '@/constants/data';

const Work = () => {

    return (
        <section id="work" className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide mb-4">
                            Selected <span className="text-accent">Work</span>
                        </h2>
                        <p className="text-muted-foreground font-source max-w-xl">
                            A collection of our live products, experiments, and ongoing developments.
                        </p>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-primary hover:text-primary/80 font-rajdhani font-semibold transition-zen uppercase tracking-wider">
                        View All Projects <Icon name="ArrowRightIcon" size={16} className="ml-2" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="group relative p-8 bg-card border border-input rounded-lg overflow-hidden hover:border-accent/50 transition-zen cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-sm font-jetbrains text-muted-foreground uppercase tracking-widest mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-orbitron font-bold text-foreground group-hover:text-accent transition-zen">
                                        {project.title}
                                    </h3>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${project.statusColor}`}>
                                    {project.status}
                                </span>
                            </div>

                            <p className="text-muted-foreground font-source mb-8 leading-relaxed max-w-md">
                                {project.description}
                            </p>

                            <div className="flex items-center text-sm font-semibold text-foreground group-hover:text-accent transition-zen">
                                <Link href={`/work/${project.id}`} className="flex items-center">
                                    View Case Study <Icon name="ArrowRightIcon" size={16} className="ml-2 transform group-hover:translate-x-1 transition-zen" />
                                </Link>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-zen pointer-events-none" />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-rajdhani font-semibold transition-zen uppercase tracking-wider">
                        View All Projects <Icon name="ArrowRightIcon" size={16} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Work;
