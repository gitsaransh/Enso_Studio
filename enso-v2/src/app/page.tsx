'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnsoAnimation from '@/components/EnsoAnimation';
import Philosophy from '@/components/sections/Philosophy';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Testimonials from '@/components/sections/Testimonials';
import StudioCredit from '@/components/sections/StudioCredit';

export default function Home() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow flex flex-col relative pt-16">

                {/* Hero Section */}
                <section id="hero" className="w-full max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 min-h-[calc(100vh-64px)]">
                    <div className="order-2 lg:order-1 space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <div>
                            <h1 className="text-4xl lg:text-7xl font-orbitron font-bold text-foreground leading-tight mb-6">
                                ENSO <br className="hidden lg:block" />
                                STUDIO
                            </h1>
                            <p className="text-xl lg:text-2xl text-primary font-rajdhani font-semibold tracking-wide mb-4">
                                Quietly shipping focused digital products.
                            </p>
                            <p className="text-lg text-muted-foreground font-source max-w-xl leading-relaxed">
                                Apps, games, and intelligent systems built through focus, clarity, and disciplined execution.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#work" className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-rajdhani text-lg font-bold hover:bg-primary/90 glow-primary transition-zen shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                                VIEW WORK
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center items-center h-[400px] lg:h-[600px] animate-fade-in">
                        <EnsoAnimation />
                    </div>
                </section>

                {/* Sections */}
                <Philosophy />
                <Services />
                <Work />
                <About />
                <Testimonials />
                <StudioCredit />

            </main>

            <Footer />
        </div>
    );
}
