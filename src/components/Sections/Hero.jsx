import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-bg text-center">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[1.1] tracking-wider text-brand-text mb-8">
                        ROBOTICS,<br />
                        AUTOMATION &<br />
                        <span className="text-color-flex">ON-DEMAND</span><br />
                        <span className="text-color-flex">MANUFACTURING</span>
                    </h1>

                    <p className="font-mono text-brand-text/60 text-xs md:text-sm tracking-widest uppercase mb-12 font-bold max-w-2xl text-center">
                        PROFESSIONAL MANUFACTURING SOLUTIONS FOR YOUR NEXT INNOVATION
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-8 py-3 bg-brand-accent text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.1em] rounded-sm transition-all hover:brightness-110">
                            EXPLORE SERVICES
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-white/10 text-brand-text font-bold text-xs uppercase tracking-[0.1em] rounded-sm transition-all hover:bg-white/5">
                            REQUEST A QUOTE
                        </button>
                    </div>
                </motion.div>

                {/* Optional dark gradient placeholder at the bottom representing the edge of the next section */}
                <div className="absolute bottom-[-100px] w-full max-w-3xl h-[200px] bg-brand-purple/20 blur-[100px] rounded-[100%] pointer-events-none z-0"></div>
            </div>

        </section>
    );
};

export default Hero;
