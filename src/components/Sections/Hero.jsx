import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={targetRef} className="relative min-height-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden urban-noise">
            {/* All-Side Color Flex Frame */}
            <div className="absolute inset-0 border-[1px] opacity-10 pointer-events-none color-flex-border" />

            {/* Enhanced Neon Blobs with Parallax */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[140px] animate-blob opacity-60"
            />
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [0, 100]),
                    animationDelay: '2s'
                }}
                className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-[140px] animate-blob opacity-60"
            />

            <motion.div style={{ y: yContent, opacity: opacityContent }} className="relative z-10 text-center max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 mix-blend-difference"
                >
                    <div className="flex flex-col items-center mb-4">
                        <span className="text-3xl md:text-5xl font-thin tracking-[0.15em] uppercase color-flex-text">Robotics,</span>
                        <span className="text-3xl md:text-5xl font-thin tracking-[0.15em] uppercase color-flex-text">Automation &</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl md:text-4xl font-light tracking-[0.25em] uppercase color-flex-text">On-Demand</span>
                        <span className="text-4xl md:text-6xl font-light tracking-[0.35em] uppercase color-flex-text">
                            Manufacturing
                        </span>
                    </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0.1em" }}
                    animate={{ opacity: 1, letterSpacing: "0.3em" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-xs md:text-sm text-white/50 mb-12 font-bold font-mono uppercase bg-white/5 px-4 py-2 rounded-full inline-block backdrop-blur-md"
                >
                    Professional manufacturing solutions for your next innovation
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 240, 255, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-brand-accent text-black font-black rounded-sm uppercase tracking-widest transition-all text-xs"
                    >
                        Explore Services
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "#FF006B" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 border border-white/20 text-white font-black rounded-sm uppercase tracking-widest transition-all backdrop-blur-md text-xs"
                    >
                        Request a Quote
                    </motion.button>
                </div>
            </motion.div>

            {/* Floating Mockup with Enhanced Parallax */}
            <motion.div
                style={{ scale: scaleImage, y: useTransform(scrollYProgress, [0, 1], [80, 0]) }}
                className="mt-20 relative z-10 flex justify-center w-full max-w-2xl px-6"
            >
                <div className="relative group w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-vibrant rounded-lg blur opacity-40 group-hover:opacity-80 transition duration-1000 animate-pulse"></div>
                    <div className="relative aspect-[16/9] md:aspect-[21/9] bg-black/80 border border-white/10 rounded-lg flex items-center justify-center glass shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                        <span className="text-white/10 font-display text-[10vw] font-black uppercase tracking-[0.1em] absolute select-none">LASWELL</span>

                        <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-dashed border-brand-accent/20 rounded-full flex items-center justify-center animate-spin-slow">
                            <div className="w-12 h-12 bg-gradient-to-tr from-brand-accent to-brand-vibrant rounded-full shadow-[0_0_40px_rgba(0,240,255,0.6)] animate-pulse" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};


export default Hero;
