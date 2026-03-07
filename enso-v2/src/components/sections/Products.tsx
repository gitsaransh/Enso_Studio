'use client';

import Icon from '@/components/ui/AppIcon';
import { PRODUCTS } from '@/constants/data';
import { IconName } from '@/components/ui/AppIcon';

const Products = () => {
    return (
        <section id="products" className="py-20 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide mb-4">
                            Digital <span className="text-secondary underline decoration-secondary/30 underline-offset-8">Assets</span>
                        </h2>
                        <p className="text-muted-foreground font-source max-w-xl text-lg">
                            High-performance templates and systems built to optimize your creative and technical workflows.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="group relative p-1 bg-gradient-to-br from-border/10 to-transparent rounded-2xl transition-all duration-500 hover:scale-[1.02]"
                        >
                            <div className="relative h-full p-8 bg-card/40 backdrop-blur-xl border border-white/5 rounded-2xl flex flex-col overflow-hidden">
                                {/* Category Badge */}
                                <div className="flex justify-between items-center mb-8">
                                    <span className="px-3 py-1 bg-muted/50 text-[10px] font-jetbrains font-bold text-secondary uppercase tracking-[0.2em] rounded-full border border-secondary/20">
                                        {product.category}
                                    </span>
                                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${product.statusColor} backdrop-blur-sm`}>
                                        {product.status}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4 group-hover:text-secondary transition-zen">
                                    {product.title}
                                </h3>

                                <p className="text-muted-foreground font-source mb-8 text-base leading-relaxed flex-grow">
                                    {product.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-4 mb-8">
                                    <p className="text-[10px] font-jetbrains font-bold text-muted-foreground/60 uppercase tracking-widest">Included Features</p>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {product.features.slice(0, 4).map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                                                <div className="mr-3 p-1 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-zen">
                                                    <Icon name="CheckIcon" size={10} />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Footer/Action */}
                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-jetbrains text-muted-foreground uppercase">Price</span>
                                        <span className="text-2xl font-orbitron font-bold text-foreground">
                                            ${product.price}
                                        </span>
                                    </div>
                                    <a
                                        href={product.link}
                                        target={product.link !== '#' ? '_blank' : undefined}
                                        rel={product.link !== '#' ? 'noopener noreferrer' : undefined}
                                        onClick={product.link === '#' ? (e) => e.preventDefault() : undefined}
                                        className={`btn-glass-secondary px-6 py-3 text-sm ${product.link === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        aria-disabled={product.link === '#'}
                                    >
                                        <span>{product.link === '#' ? 'Coming Soon' : 'Buy System'}</span>
                                        <Icon name={product.link === '#' ? 'LockClosedIcon' : 'ArrowRightIcon'} size={16} />
                                    </a>
                                </div>

                                {/* Visual Background Gradient */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Hover Shadow/Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
