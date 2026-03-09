import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Search, ReceiptText, Factory, Truck, ArrowRight } from 'lucide-react';

const StepCard = ({ number, title, description, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        className="relative group flex flex-col items-center hover:scale-105 transition-transform duration-300"
    >
        {/* Connection Line (Desktop) */}
        {index < 4 && (
            <div className="hidden lg:block absolute top-[40px] left-[60%] w-[80%] h-[1px] bg-brand-accent/30 z-0" />
        )}

        {/* content */}
        <div className="relative z-10 flex flex-col items-center text-center">
            {/* Number and Icon Container */}
            <div className="relative mb-6">
                <div className="w-[80px] h-[80px] bg-brand-secondary border border-brand-border rounded-sm flex items-center justify-center text-brand-accent group-hover:border-brand-accent transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,216,255,0.1)] group-hover:scale-110">
                    <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-7 h-7 bg-brand-accent text-[#0a0a0a] font-mono font-bold text-[10px] flex items-center justify-center rounded-sm">
                    {number}
                </div>
            </div>

            <h3 className="text-sm font-display font-bold uppercase mb-3 tracking-widest text-brand-text">
                {title}
            </h3>
            <p className="text-brand-text/50 text-[10px] uppercase font-mono tracking-widest leading-loose max-w-[180px]">
                {description}
            </p>
        </div>
    </motion.div>
);

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Request",
            description: "Send CAD/specs via the Quote form for immediate assessment.",
            icon: FileDown
        },
        {
            number: "02",
            title: "Review",
            description: "DFM checks and quick engineering feedback within hours.",
            icon: Search
        },
        {
            number: "03",
            title: "Quote",
            description: "Transparent pricing and precision lead time calculations.",
            icon: ReceiptText
        },
        {
            number: "04",
            title: "Build",
            description: "High-fidelity manufacture and quality check protocols.",
            icon: Factory
        },
        {
            number: "05",
            title: "Deliver",
            description: "On-time global shipping or local pickup from our facility.",
            icon: Truck
        }
    ];

    return (
        <section id="process" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto border-t border-brand-border pt-20">

                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-accent" />
                        <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-brand-accent font-bold">EXECUTION PROTOCOL</span>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-accent" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase mb-8 tracking-wider text-brand-text leading-[1.1]"
                    >
                        HOW WE <span className="text-brand-accent">WORK</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-text/50 max-w-xl text-[10px] font-mono tracking-widest leading-loose uppercase"
                    >
                        FROM INITIAL CONCEPT TO FINAL COMPONENT DELIVERY, OUR PROCESS IS ENGINEERED FOR SPEED, ACCURACY, AND UNCOMPROMISING QUALITY.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4 relative px-4">
                    {steps.map((step, i) => (
                        <StepCard key={i} {...step} index={i} />
                    ))}
                </div>

                {/* Bottom Call to Action snippet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-32 text-center"
                >
                    <a href="#custom" className="inline-flex items-center gap-4 group">
                        <span className="text-[10px] font-mono tracking-widest text-brand-text/50 group-hover:text-brand-accent transition-colors uppercase italic font-bold">READY TO START STEP 01?</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-accent group-hover:border-brand-accent transition-all">
                            <ArrowRight size={16} strokeWidth={1.5} />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
