import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Users, Binary, Cpu, Workflow } from 'lucide-react';

const EdgeCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="p-8 glass border border-brand-border rounded-sm group hover:border-brand-accent/50 transition-all duration-500 overflow-hidden relative"
    >
        {/* Tech Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--brand-accent)_1px,_transparent_1px)] bg-[size:10px_10px]" />
        </div>

        <div className="w-14 h-14 bg-brand-accent/5 rounded-sm flex items-center justify-center text-brand-accent mb-6 border border-brand-accent/10 group-hover:scale-110 transition-transform duration-500">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-syncopate font-bold uppercase mb-4 tracking-tight">{title}</h3>
        <p className="text-brand-muted text-sm leading-relaxed uppercase tracking-tighter font-mono">
            {description}
        </p>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent group-hover:w-full transition-all duration-700" />
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
        <div className="text-4xl md:text-5xl font-syncopate font-bold text-brand-accent mb-2 tracking-tighter">
            {value}
        </div>
        <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-brand-muted font-bold">
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
            {/* Background Decorative Mesh */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,209,255,0.1)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(0,209,255,0.1)_1px,_transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-12 bg-brand-accent" />
                            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent font-bold">Value Proposition</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-syncopate font-bold uppercase tracking-tight">
                            Our <span className="text-brand-accent">Edge</span>
                        </h2>
                    </div>
                    <p className="text-brand-muted max-w-sm text-sm uppercase tracking-tight font-mono leading-relaxed">
                        Propelling hardware innovation through rigorous design standards and high-fidelity production pipelines.
                    </p>
                </div>

                {/* Edges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {edges.map((edge, i) => (
                        <EdgeCard key={i} {...edge} index={i} />
                    ))}
                </div>

                {/* Capabilities Stats Section */}
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-accent/5 blur-3xl opacity-20" />
                    <div className="relative glass border border-brand-border rounded-sm overflow-hidden">
                        <div className="p-4 border-b border-brand-border bg-white/[0.02] flex items-center justify-between px-8">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted">Operational Metrics // Alpha-01</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-accent/20" />
                                <div className="w-2 h-2 rounded-full bg-brand-accent/40" />
                                <div className="w-2 h-2 rounded-full bg-brand-accent" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat, i) => (
                                <StatItem key={i} {...stat} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
