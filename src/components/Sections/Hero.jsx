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
        <section className="presentation-slide min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black text-center relative border-b border-[#333333]">
            
            {/* Brutalist Engineering Crosshairs [+] */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#555] opacity-80" />
            <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#555] opacity-80" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#555] opacity-80" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#555] opacity-80" />

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

                    <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-8 border-y-2 border-white py-4 w-[110%] -ml-[5%]">
                        <span className="text-white tracking-widest">
                            JOIN THE HARDWARE REVOLUTION
                        </span>
                    </div>

                    <p className="font-mono text-[#888888] text-xs md:text-sm tracking-[0.2em] uppercase my-12 font-bold max-w-2xl text-center">
                        [CLASSIFIED] HARDWARE MANUFACTURING SCHEMATICS // LEVEL 04
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        <button className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] rounded-none transition-all hover:bg-[#aaaaaa] border-2 border-white">
                            EXPLORE SERVICES
                        </button>
                        <button className="px-8 py-4 bg-black border-2 border-white text-white font-bold text-xs uppercase tracking-[0.2em] rounded-none transition-all hover:bg-white hover:text-black">
                            REQUEST A QUOTE
                        </button>
                    </div>
                </motion.div>

                {/* Brutalist Grid Background Overlay */}
                <div className="absolute inset-0 pointer-events-none z-[-1]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

        </section>
    );
};

export default Hero;
