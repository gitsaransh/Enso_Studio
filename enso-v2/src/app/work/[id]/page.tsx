
import { PROJECTS } from '@/constants/data';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import React from 'react';

// This is correct for Next.js 15+ App Router
export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    // Unwrap the params promise using await
    const { id } = await params;
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header className="bg-background/80 backdrop-blur-md border-b border-border/20" />
                <div className="flex-grow flex flex-col items-center justify-center text-foreground">
                    <h1 className="text-4xl font-orbitron mb-4">404</h1>
                    <p className="font-source text-muted-foreground">Project not found.</p>
                    <Link href="/" className="mt-8 px-6 py-2 bg-primary text-primary-foreground rounded-md font-rajdhani transition-zen hover:shadow-lg">
                        Return Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header className="bg-background/80 backdrop-blur-md border-b border-border/20" />

            <main className="flex-grow pt-32 pb-20 px-4 lg:px-8">
                <article className="max-w-4xl mx-auto animate-fade-in">
                    {/* Header */}
                    <div className="mb-12">
                        <Link href="/#work" className="inline-flex items-center text-muted-foreground hover:text-primary transition-zen mb-8 group font-rajdhani uppercase tracking-wider text-sm">
                            <Icon name="ArrowLeftIcon" size={16} className="mr-2 transform group-hover:-translate-x-1 transition-zen" />
                            Back to Work
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-input/30 pb-6">
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-orbitron font-bold text-foreground tracking-wide mb-2">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-primary font-rajdhani font-semibold tracking-wide">
                                    {project.category}
                                </p>
                            </div>
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border self-start md:self-auto ${project.statusColor}`}>
                                {project.status}
                            </span>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                        {/* Main Description */}
                        <div className="lg:col-span-2 space-y-12">
                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4 flex items-center">
                                    <Icon name="InformationCircleIcon" size={24} className="mr-3 text-secondary" />
                                    Overview
                                </h3>
                                <p className="text-lg text-muted-foreground font-source leading-relaxed">
                                    {project.longDescription}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center">
                                    <Icon name="SparklesIcon" size={24} className="mr-3 text-accent" />
                                    Key Features
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.features?.map((feature, idx) => (
                                        <div key={idx} className="p-4 bg-card/50 border border-input rounded-lg hover:border-primary/30 transition-zen flex items-start group">
                                            <Icon name="CheckCircleIcon" size={20} className="text-primary mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-zen" />
                                            <span className="text-muted-foreground font-source group-hover:text-foreground transition-zen">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Details */}
                        <div className="space-y-6">
                            <div className="p-6 bg-card border border-input rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-zen">
                                <h3 className="text-sm font-jetbrains font-bold text-muted-foreground uppercase tracking-widest mb-4 border-b border-input/50 pb-2">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-background border border-input rounded text-xs font-jetbrains text-secondary hover:text-primary hover:border-primary transition-zen cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 bg-card border border-input rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-zen">
                                <h3 className="text-sm font-jetbrains font-bold text-muted-foreground uppercase tracking-widest mb-4 border-b border-input/50 pb-2">
                                    Role
                                </h3>
                                <div className="flex items-center text-foreground font-source font-semibold">
                                    <Icon name="UserCircleIcon" size={20} className="mr-3 text-primary" />
                                    {project.role}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}

// Separate generateStaticParams to ensure static export works
export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        id: project.id,
    }));
}
