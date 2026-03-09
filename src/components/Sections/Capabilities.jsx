import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Cpu } from 'lucide-react';

const EdgeCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, borderColor: "var(--color-brand-accent)" }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="p-8 bg-brand-secondary border border-brand-border rounded-sm transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,216,255,0.1)]"
    >
        <div className="w-12 h-12 bg-[#0047AB]/20 rounded-sm flex items-center justify-center text-brand-accent mb-8 border border-brand-accent/20 group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-display font-bold uppercase mb-4 tracking-widest text-brand-text">{title}</h3>
        <p className="text-brand-text/50 text-[10px] uppercase leading-loose tracking-widest font-mono">
            {description}
        </p>
    </motion.div>
);

const StatItem = ({ value, label, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="text-center p-8 border-r border-brand-border last:border-r-0"
    >
        <div className="text-4xl md:text-5xl font-display font-bold text-brand-accent mb-3 tracking-tighter">
            {value}
        </div>
        <div className="text-[10px] uppercase font-mono tracking-widest text-brand-text/50 font-bold">
            {label}
        </div>
    </motion.div>
);

const Capabilities = () => {
    const edges = [
        {
            icon: Cpu,
            title: "Engineering-first",
            description: "Design reviews and DFM by practicing engineers with years of core manufacturing experience."
        },
        {
            icon: Clock,
            title: "Reliable timelines",
            description: "Clear schedules and proactive communication. We treat your deadlines as our own command."
        },
        {
            icon: ShieldCheck,
            title: "Quality built-in",
            description: "Stringent material checks and QC inspection on every single batch before it leaves the floor."
        }
    ];

    const stats = [
        { value: "50+", label: "Projects Delivered" },
        { value: "2.3d", label: "Avg. Lead Time" },
        { value: "4.9/5", label: "Customer Rating" },
        { value: "70%", label: "Repeat Clients" }
    ];

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 border-t border-brand-border pt-20">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-12 bg-gradient-to-r from-brand-accent to-transparent" />
                            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-brand-accent font-bold">Value Proposition</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-wider text-brand-text leading-[1.1]">
                            OUR <span className="text-brand-accent">EDGE</span>
                        </h2>
                    </div>
                    <p className="text-brand-text/50 max-w-sm text-[10px] uppercase tracking-widest font-mono leading-loose pb-2">
                        PROPELLING HARDWARE INNOVATION THROUGH RIGOROUS DESIGN STANDARDS AND HIGH-FIDELITY PRODUCTION PIPELINES.
                    </p>
                </div>

                {/* Edges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {edges.map((edge, i) => (
                        <EdgeCard key={i} {...edge} index={i} />
                    ))}
                </div>

                {/* Capabilities Stats Section */}
                <div className="relative border border-brand-border rounded-sm overflow-hidden bg-brand-secondary">
                    <div className="p-4 border-b border-brand-border flex items-center justify-between px-8 bg-brand-bg">
                        <span className="text-[9px] font-mono tracking-widest uppercase text-brand-text/40">OPERATIONAL METRICS // ALPHA-01</span>
                        <div className="flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/30" />
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/60" />
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
                        {stats.map((stat, i) => (
                            <StatItem key={i} {...stat} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Capabilities;
