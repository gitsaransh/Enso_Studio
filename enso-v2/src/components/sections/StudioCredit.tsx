'use client';

const StudioCredit = () => {
    return (
        <section id="credit" className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-2xl mx-auto text-center p-8 border border-input/50 rounded-lg bg-card/20">
                    <h2 className="text-xl font-orbitron font-bold text-foreground tracking-wide mb-4">
                        Studio Credit
                    </h2>
                    <p className="text-muted-foreground font-source mb-6">
                        Products developed by ENSO Studio may display the following credits:
                    </p>
                    <div className="inline-block px-6 py-3 bg-black border border-input font-jetbrains text-primary rounded text-sm md:text-base">
                        "Developed by ENSO Studio"
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudioCredit;
