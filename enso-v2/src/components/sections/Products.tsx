'use client';

import Icon from '@/components/ui/AppIcon';
import { PRODUCTS } from '@/constants/data';
import { IconName } from '@/components/ui/AppIcon';

const Products = () => {
    return (
        <section id="products" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-foreground tracking-wide mb-4">
                            Digital <span className="text-secondary">Assets</span>
                        </h2>
                        <p className="text-muted-foreground font-source max-w-xl">
                            Specialized tools, systems, and templates designed to enhance productivity and clarity.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="group relative p-8 bg-card border border-input rounded-lg flex flex-col h-full hover:border-secondary/50 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-xs font-jetbrains text-muted-foreground uppercase tracking-widest mb-2 block">
                                        {product.category}
                                    </span>
                                    <h3 className="text-xl font-orbitron font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                                        {product.title}
                                    </h3>
                                </div>
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${product.statusColor}`}>
                                    {product.status}
                                </span>
                            </div>

                            <p className="text-muted-foreground font-source mb-6 text-sm leading-relaxed flex-grow">
                                {product.description}
                            </p>

                            <div className="space-y-4">
                                <ul className="space-y-2 mb-6">
                                    {product.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-xs text-muted-foreground">
                                            <Icon name="CheckIcon" size={14} className="mr-2 text-secondary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                    <span className="text-2xl font-orbitron font-bold text-foreground">
                                        ${product.price}
                                    </span>
                                    <button className="flex items-center space-x-2 px-4 py-2 bg-secondary/10 hover:bg-secondary text-secondary hover:text-secondary-foreground rounded-md text-sm font-bold transition-all duration-300">
                                        <span>Get Now</span>
                                        <Icon name="ArrowLongRightIcon" size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                <Icon name="BriefcaseIcon" size={40} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
