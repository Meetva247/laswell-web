import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <section className="presentation-slide min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-bg text-center">
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img 
                        src="/robot_hero_bg_v2.png" 
                        alt="Robotic Explorer Background" 
                        className="w-full h-full object-cover brightness-90 animate-pulse-slow"
                    />
                </motion.div>
                {/* Gradient Overlays for readability and depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-transparent to-brand-bg" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-brand-bg opacity-60" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="max-w-5xl mx-auto flex flex-col items-center cursor-default group"
                >
                    <div className="flex flex-col items-center gap-2 md:gap-4 overflow-hidden py-10 w-full">
                        <motion.div 
                            whileInView={{ x: [-40, 40, -40] }}
                            transition={{ 
                                duration: isHovered ? 0.6 : 1.2, 
                                repeat: Infinity, 
                                ease: "linear",
                                repeatType: "mirror" 
                            }}
                            viewport={{ once: false }}
                            className="flex flex-col items-center gap-4 white-space-nowrap"
                        >
                            <div className="text-center text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
                                <span className="text-white">Robotics, </span>
                                <span className="text-white">Automation &</span>
                            </div>
                            <div className="text-center text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
                                <span className="text-color-flex">On-Demand </span>
                                <span className="text-color-flex">Manufacturing</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-8">
                        <span className="text-[#9DB2FF] bg-gradient-to-r from-[#00D8FF] to-[#B026FF] bg-clip-text text-transparent">
                            Join the Robotics Revolution
                        </span>
                    </div>

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
