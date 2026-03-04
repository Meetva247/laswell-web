import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Search, ReceiptText, Factory, Truck, ArrowRight } from 'lucide-react';

const StepCard = ({ number, title, description, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        className="relative group flex flex-col items-center"
    >
        {/* Connection Line (Desktop) */}
        {index < 4 && (
            <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-brand-accent/40 to-transparent z-0" />
        )}

        {/* content */}
        <div className="relative z-10 flex flex-col items-center text-center">
            {/* Number and Icon Container */}
            <div className="relative mb-8">
                <div className="w-20 h-20 bg-brand-bg border border-brand-border rounded-sm flex items-center justify-center text-brand-accent group-hover:border-brand-accent/50 transition-all duration-500 glass shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <Icon size={32} />
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-accent text-brand-bg font-syncopate font-bold text-[10px] flex items-center justify-center rounded-sm shadow-lg">
                    {number}
                </div>
            </div>

            <h3 className="text-lg font-syncopate font-bold uppercase mb-3 tracking-tight group-hover:text-brand-accent transition-colors">
                {title}
            </h3>
            <p className="text-brand-muted text-xs font-mono uppercase tracking-tight leading-relaxed max-w-[200px]">
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
        <section id="process" className="py-32 px-6 bg-brand-bg relative overflow-hidden">
            {/* Technical Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
                <div className="absolute top-0 left-10 w-[1px] h-full bg-brand-accent" />
                <div className="absolute top-20 left-0 w-full h-[1px] bg-brand-accent" />
                <div className="absolute top-0 right-10 w-[1px] h-full bg-brand-accent" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-8 bg-brand-accent" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-brand-accent font-bold">Execution Protocol</span>
                        <div className="h-[1px] w-8 bg-brand-accent" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-syncopate font-bold uppercase mb-6"
                    >
                        How We <span className="text-brand-accent">Work</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-muted max-w-xl text-sm font-mono uppercase tracking-tight"
                    >
                        From initial concept to final component delivery, our process is engineered for speed, accuracy, and uncompromising quality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4 relative">
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
                    className="mt-24 text-center"
                >
                    <a href="#custom" className="inline-flex items-center gap-4 group">
                        <span className="text-xs font-mono uppercase tracking-widest text-brand-muted group-hover:text-brand-accent transition-colors italic">Ready to start step 01?</span>
                        <div className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg transition-all">
                            <ArrowRight size={16} />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
