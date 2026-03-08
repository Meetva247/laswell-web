import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Printer,

    Cpu,
    Scissors,
    Layers,
    Layout,
    Settings2,
    ArrowRight
} from 'lucide-react';

const services = [
    {
        title: '3D Printing',
        specs: ['FDM/SLA Technology', '0.1-0.3mm Layer Height', '300mm Build Volume'],
        icon: Printer,
        size: 'md:col-span-2 md:row-span-2',
        bgClass: 'bg-blueprint',
        isFeature: true
    },
    {
        title: 'Designing & Modeling',
        specs: ['CAD Architecture', 'DFM Optimization', 'Photolayer Rendering'],
        icon: Layout,
        size: 'md:col-span-1 md:row-span-1',
        bgClass: 'bg-tech-grid',
    },
    {
        title: 'Machining Services',
        specs: ['CNC 3/4-Axis', 'Alu/Steel/Delrin', '±0.05mm Tolerance'],
        icon: Scissors,
        size: 'md:col-span-1 md:row-span-1',
        bgClass: 'bg-tech-grid',
    },
    {
        title: 'Laser Cutting',
        specs: ['CO2/Fiber Source', '600x400mm Operating Area', 'Stainless/Acrylic'],
        icon: Layers,
        size: 'md:col-span-1 md:row-span-1',
        bgClass: 'bg-tech-grid',
    },
    {
        title: 'Custom PCB Design',
        specs: ['6-Layer Stackup', 'Schematic Capture', 'Impedance Control'],
        icon: Cpu,
        size: 'md:col-span-1 md:row-span-1',
        bgClass: 'bg-tech-grid',
    },
    {
        title: 'Custom Projects',
        specs: ['Turnkey Development', 'Custom Firmware', 'System Integration'],
        icon: Settings2,
        size: 'md:col-span-2 md:row-span-1',
        bgClass: 'bg-blueprint',
        isCTA: true
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    return (
        <div
            className="flex-shrink-0 w-[400px] relative overflow-hidden group border border-brand-border glass rounded-sm p-8 flex flex-col justify-between transition-all duration-500 neon-border-hover mx-2 h-[300px]"
        >
            {/* Background Pattern */}
            <div className={`absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none ${service.bgClass}`} />

            {/* Content */}
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 bg-brand-accent/5 rounded-sm flex items-center justify-center text-brand-accent group-hover:bg-brand-accent/20 transition-colors duration-500 border border-brand-accent/10">
                        <Icon size={20} />
                    </div>
                </div>

                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-accent transition-colors uppercase">
                    {service.title}
                </h3>

                <ul className="space-y-1.5 mb-6">
                    {service.specs.slice(0, 3).map((spec, i) => (
                        <li key={i} className="flex items-center gap-2 text-[10px] font-mono text-brand-muted tracking-widest whitespace-nowrap">
                            <span className="w-1 h-1 bg-brand-accent/40 rounded-full" />
                            {spec}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative z-10 mt-auto">
                <Link to="/services" className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-brand-accent group/btn">
                    Details
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

const ServicesGrid = () => {
    // Duplicate services to create a seamless loop
    const doubledServices = [...services, ...services];

    return (
        <section id="services" className="py-32 bg-brand-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center md:justify-start gap-4 mb-4"
                >
                    <div className="h-[1px] w-12 bg-brand-accent" />
                    <span className="text-xs font-mono uppercase tracking-[0.5em] text-brand-accent font-bold">Systems Architecture</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold mb-6"
                >
                    Engineering <span className="text-brand-accent">Excellence</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-brand-muted max-w-2xl text-lg font-mono tracking-tight"
                >
                    Precision manufacturing and high-performance design pipeline running in continuous synchronization.
                </motion.p>
            </div>

            {/* Ticker Container */}
            <div className="relative w-full flex overflow-hidden py-10">
                <motion.div
                    className="flex"
                    animate={{
                        x: [0, -1 * (400 + 16) * services.length],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    style={{ width: 'max-content' }}
                >
                    {doubledServices.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* View All Services Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex justify-center"
                >
                    <Link to="/services">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 209, 255, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-12 py-4 bg-transparent border border-brand-accent/30 text-brand-accent font-bold uppercase tracking-[0.4em] text-[10px] overflow-hidden transition-colors hover:border-brand-accent"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                View Full Capability Matrix
                                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </span>
                            <div className="absolute inset-0 bg-brand-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesGrid;

