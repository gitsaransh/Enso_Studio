'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnsoAnimation from '@/components/EnsoAnimation';
import Philosophy from '@/components/sections/Philosophy';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Products from '@/components/sections/Products';
import Testimonials from '@/components/sections/Testimonials';
import StudioCredit from '@/components/sections/StudioCredit';

export default function Home() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow flex flex-col relative pt-16">

                {/* Hero Section */}
                <section
                    id="hero"
                    className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20 min-h-[calc(100vh-64px)]"
                >
                    <div
                        className="order-2 lg:order-1 space-y-8 animate-fade-in"
                        style={{ animationDelay: '0.1s' }}
                    >
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
                            <a
                                href="#work"
                                className="btn-glass px-8 py-4 text-lg"
                                data-cursor-hover
                            >
                                VIEW WORK
                            </a>
                            <a
                                href="#services"
                                className="btn-glass-secondary px-8 py-4 text-lg"
                                data-cursor-hover
                            >
                                OUR SERVICES
                            </a>
                        </div>
                    </div>

                    <div
                        className="order-1 lg:order-2 flex justify-center items-center h-[420px] lg:h-[500px] animate-fade-in"
                        style={{ animationDelay: '0.3s' }}
                    >
                        <EnsoAnimation size={380} />
                    </div>
                </section>

                {/* Rest of the page — add z-10 to ensure above particle canvas */}
                <div className="relative z-10">
                    <Philosophy />
                    <Services />
                    <Work />
                    <Products />
                    <About />
                    <Testimonials />
                    <StudioCredit />
                </div>

            </main>

            <Footer />
        </div>
    );
}
