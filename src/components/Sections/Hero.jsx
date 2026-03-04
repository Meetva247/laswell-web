import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-height-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
            {/* All-Side Color Flex Frame */}
            <div className="absolute inset-0 border-[1px] opacity-10 pointer-events-none color-flex-border" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-vibrant opacity-20" />
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-brand-vibrant via-brand-secondary to-brand-accent opacity-20" />
            <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-brand-accent via-brand-secondary to-brand-vibrant opacity-20" />
            <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-brand-vibrant via-brand-secondary to-brand-accent opacity-20" />

            {/* Dynamic Background Blobs (Color Flex) */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[140px] animate-blob opacity-50" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[140px] animate-blob opacity-50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-vibrant/10 rounded-full blur-[160px] animate-blob opacity-30" style={{ animationDelay: '4s' }} />

            <div className="relative z-10 text-center max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-syncopate font-bold leading-tight mb-6"
                >
                    Robotics, Automation & <br />
                    <span className="color-flex-text text-3xl md:text-6xl uppercase">On-Demand Manufacturing</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-brand-muted mb-12 font-medium tracking-wide uppercase font-mono"
                >
                    Professional manufacturing solutions for your next innovation
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#services">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 209, 255, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-brand-accent text-brand-bg font-bold rounded-sm uppercase tracking-widest transition-all text-xs"
                        >
                            Explore Services
                        </motion.button>
                    </a>
                    <a href="#custom">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "#9333ea" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-brand-border text-brand-text font-bold rounded-sm uppercase tracking-widest transition-all backdrop-blur-sm text-xs"
                        >
                            Request a Quote
                        </motion.button>
                    </a>
                </motion.div>
            </div>

            {/* Floating T-Shirt Mockup Placeholder with Color Flex Border */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="mt-20 relative z-10 flex justify-center"
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-vibrant rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-brand-bg/90 border border-white/10 rounded-lg flex items-center justify-center glass shadow-2xl overflow-hidden">
                        <span className="text-brand-muted/30 font-syncopate text-xs uppercase tracking-[1em] rotate-90 absolute">Technical Protocol</span>

                        <div className="w-40 h-40 md:w-56 md:h-56 border-2 border-dashed border-brand-accent/20 rounded-full flex items-center justify-center animate-spin-slow">
                            <div className="w-10 h-10 bg-gradient-to-tr from-brand-accent to-brand-vibrant rounded-full animate-pulse shadow-[0_0_20px_rgba(0,209,255,0.5)]" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};


export default Hero;
