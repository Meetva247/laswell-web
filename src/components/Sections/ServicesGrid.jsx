import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Printer, PenTool, Settings, Zap, Cpu, Wrench, ArrowRight } from 'lucide-react';

const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const ServiceCard = ({ icon: Icon, title, description, features, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, borderColor: "var(--color-brand-accent)" }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="p-8 bg-brand-secondary border border-brand-border rounded-sm flex flex-col transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,216,255,0.1)]"
    >
        <div className="w-12 h-12 bg-brand-accent/10 rounded-sm flex items-center justify-center text-brand-accent mb-6 border border-brand-accent/20 group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-display font-bold uppercase mb-3 tracking-widest text-brand-text group-hover:text-brand-accent transition-colors">{title}</h3>
        <p className="text-brand-text/50 text-[11px] font-mono tracking-widest uppercase mb-6 leading-relaxed">
            {description}
        </p>

        <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 border-b border-brand-border pb-3 last:border-0 last:pb-0">
                    <div className="w-1 h-1 bg-brand-accent rounded-full mt-1.5 shrink-0" />
                    <span className="text-[10px] text-brand-text/70 uppercase font-mono tracking-widest leading-relaxed">
                        {feature}
                    </span>
                </li>
            ))}
        </ul>

        <Link to={`/services#${createSlug(title)}`} className="flex items-center gap-2 group/btn mt-auto">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent font-mono group-hover/btn:text-white transition-colors">Learn more</span>
            <ArrowRight size={14} className="text-brand-accent group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
        </Link>
    </motion.div>
);

const ServicesGrid = () => {
    const services = [
        {
            title: "3D Printing",
            description: "High-quality additive manufacturing for rapid prototyping and production",
            icon: Printer,
            features: [
                "FDM (PLA/ABS/PETG/TPU/Nylon) & SLA (engineering resins)",
                "Layer height 0.1–0.3 mm, typical tolerance ±0.2 mm or ±0.2%",
                "Build volume up to 300 × 300 × 300 mm"
            ]
        },
        {
            title: "Designing & Modeling",
            description: "Professional CAD design and 3D modeling services",
            icon: PenTool,
            features: [
                "Design from sketches or reference models",
                "DFM optimization and tolerance analysis",
                "Photorealistic rendering for presentations"
            ]
        },
        {
            title: "Machining Services",
            description: "Precision CNC machining for metal and plastic parts",
            icon: Settings,
            features: [
                "3-axis and 4-axis milling, CNC turning",
                "Materials: Aluminum, Steel, Brass, Copper, Delrin, Acrylic",
                "Typical tolerance ±0.05 mm"
            ]
        },
        {
            title: "Laser Cutting & Engraving",
            description: "High-precision laser cutting and engraving services",
            icon: Zap,
            features: [
                "CO2 (non-metals) & fiber laser (metals)",
                "Work area up to 600 × 400 mm",
                "Acrylic up to 10 mm; plywood up to 8 mm; stainless up to 1.5 mm"
            ]
        },
        {
            title: "Custom PCB Design",
            description: "Professional PCB design and prototyping",
            icon: Cpu,
            features: [
                "Schematic capture, layout, BOM & DFM checks",
                "Up to 6 layers, 6/6 mil trace/space typical",
                "High-speed constraints, impedance control"
            ]
        },
        {
            title: "Custom Projects",
            description: "Turnkey product development and one‑off automation",
            icon: Wrench,
            features: [
                "Discovery & requirements definition",
                "System design: mechanics, electronics, control",
                "Fabrication, integration and firmware"
            ]
        }
    ];

    return (
        <section id="services" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto border-t border-brand-border pt-20">

                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-accent" />
                        <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-brand-accent font-bold">CAPABILITIES</span>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-accent" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-wider text-brand-text leading-[1.1]"
                    >
                        OUR <span className="text-brand-accent">SERVICES</span>
                    </motion.h2>
                </div>

                <div className="relative w-full overflow-hidden flex py-4 group">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex gap-6 w-max items-stretch"
                    >
                        {[...services, ...services].map((service, i) => (
                            <div key={i} className="w-[320px] md:w-[400px] shrink-0 flex">
                                <ServiceCard {...service} index={i} />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ServicesGrid;
