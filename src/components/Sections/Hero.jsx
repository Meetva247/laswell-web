import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="presentation-slide min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-bg text-center">

            {/* Clean dark background */}

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto flex flex-col items-center cursor-default group"
                >
                    <div className="flex flex-col items-center gap-2 md:gap-4 py-10 w-full">
                        <div className="flex flex-col items-center w-full px-4 h-[80px] sm:h-[120px] md:h-[150px] lg:h-[200px] xl:h-[220px] relative overflow-hidden my-4">
                            <AnimatePresence>
                                {currentSlide === 0 && (
                                    <motion.h1 
                                        key="slide1"
                                        initial={{ y: '100%', opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: '-100%', opacity: 0 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                        className="absolute inset-0 flex flex-col items-center justify-center text-center font-black tracking-tighter uppercase leading-[1.1] w-full max-w-7xl mx-auto gap-2"
                                    >
                                        <span className="text-color-flex whitespace-nowrap text-[3vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] leading-[1.2] w-full">
                                            Start from zero in
                                        </span>
                                        <span className="text-color-flex whitespace-nowrap text-[3vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] leading-[1.2] w-full">
                                            competitive robotics.
                                        </span>
                                    </motion.h1>
                                )}
                                {currentSlide === 1 && (
                                    <motion.h1 
                                        key="slide2"
                                        initial={{ y: '100%', opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: '-100%', opacity: 0 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                        className="absolute inset-0 flex flex-col items-center justify-center text-center font-black tracking-tighter uppercase leading-[1.1] w-full max-w-7xl mx-auto gap-2"
                                    >
                                        <span className="text-color-flex whitespace-nowrap text-[3vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] leading-[1.2] w-full">
                                            Build your way to national and
                                        </span>
                                        <span className="text-color-flex whitespace-nowrap text-[3vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] leading-[1.2] w-full">
                                            international competitions.
                                        </span>
                                    </motion.h1>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-8">
                        <span className="text-[#9DB2FF] bg-gradient-to-r from-[#00D8FF] to-[#B026FF] bg-clip-text text-transparent">
                            Join the Robotics Revolution
                        </span>
                    </div>

                    <p className="font-mono text-brand-text/60 text-xs md:text-sm tracking-widest uppercase mb-12 font-bold max-w-2xl text-center">
                        PROFESSIONAL MANUFACTURING SOLUTIONS FOR YOUR NEXT INNOVATION
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-8 py-3 bg-neon-gradient text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.1em] rounded-sm transition-all hover:brightness-110">
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
