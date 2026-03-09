import React from 'react';
import { motion } from 'framer-motion';
import {
    Printer,
    Cpu,
    Scissors,
    Layers,
    Layout,
    Settings2,
    CheckCircle2,
    ShieldCheck,
    Zap
} from 'lucide-react';

// Import images (using the paths generated)
const serviceImages = {
    printing: "/service_3d_printing.png",
    designing: "/service_design_modeling.png",
    machining: "/service_machining_cnc.png",
    laser: "/service_laser_cutting.png",
    pcb: "/service_pcb_design.png",
    projects: "/service_custom_projects.png"
};


const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const ServiceSection = ({ title, subtitle, description, highlights, specs, icon: Icon, bgClass, image, isReversed }) => (
    <motion.div
        id={createSlug(title)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden border border-brand-border glass rounded-sm p-8 md:p-12 mb-12 group transition-all duration-500 neon-border-hover"
    >
        <div className={`absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none ${bgClass}`} />

        <div className="relative z-10">
            <div className={`flex flex-col lg:flex-row gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Area */}
                <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-brand-accent/5 rounded-sm flex items-center justify-center text-brand-accent border border-brand-accent/10">
                            <Icon size={28} />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase">{title}</h2>
                            <p className="text-brand-accent text-[10px] font-mono tracking-[0.4em] mt-1">{subtitle}</p>
                        </div>
                    </div>

                    <p className="text-brand-text/80 text-lg mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={16} className="text-brand-accent mt-1 shrink-0" />
                                <span className="text-xs text-brand-muted tracking-wider">{highlight}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-bg/50 border border-brand-border p-6 rounded-sm">
                        <h3 className="text-[10px] font-display font-bold uppercase tracking-widest mb-4 pb-2 border-b border-brand-border text-brand-accent">Technical Specs</h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {Object.entries(specs).map(([key, value]) => (
                                <div key={key}>
                                    <dt className="text-[9px] font-mono tracking-wider text-brand-muted mb-1">{key}</dt>
                                    <dd className="text-[11px] font-bold text-brand-text tracking-tight font-mono">{value}</dd>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Area */}
                <div className="lg:w-1/2 relative">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-border group-hover:border-brand-accent/30 transition-colors duration-500">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                    </div>
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-accent/40 -m-1" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-accent/40 -m-1" />
                </div>
            </div>
        </div>
    </motion.div>
);

const ServicesPage = () => {
    return (
        <div className="pt-32 pb-24 px-6 bg-brand-bg min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 border border-brand-accent/20 bg-brand-accent/5 rounded-full mb-6"
                    >
                        <span className="text-[10px] font-mono tracking-[0.5em] text-brand-accent font-bold">Comprehensive Capabilities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-display font-bold mb-8 uppercase"
                    >
                        Our <span className="text-brand-accent">Services</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-muted max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-mono tracking-tight"
                    >
                        From concept to production, we combine CAD, machining, additive manufacturing, electronics and firmware to deliver end‑to‑end solutions.
                    </motion.p>
                </div>

                {/* 3D Printing */}
                <ServiceSection
                    title="3D Printing"
                    subtitle="Additive Systems"
                    description="High-quality additive manufacturing for rapid prototyping and production. We utilize industrial-grade SLS and FDM systems to bring your complex geometries to life with precision."
                    icon={Printer}
                    bgClass="bg-blueprint"
                    image={serviceImages.printing}
                    isReversed={false}
                    highlights={[
                        "FDM (PLA/ABS/PETG/TPU/Nylon) & SLA (engineering resins)",
                        "Layer height 0.1–0.3 mm, typical tolerance ±0.2 mm or ±0.2%",
                        "Post-processing: sanding, priming, painting, vapor smoothing",
                        "Lead time: 1–3 business days"
                    ]}
                    specs={{
                        "Technologies": "FDM, SLA",
                        "Materials": "PLA, ABS, PETG, TPU, Nylon, Resins",
                        "Max Build": "300 × 300 × 300 mm",
                        "Tolerance": "±0.2 mm or ±0.2%"
                    }}
                />

                {/* Designing & Modeling */}
                <ServiceSection
                    title="Designing & Modeling"
                    subtitle="CAD & Engineering"
                    description="Professional CAD design and 3D modeling services tailored for manufacturing. We specialize in DFM (Design for Manufacturing) optimization to ensure your projects are production-ready."
                    icon={Layout}
                    bgClass="bg-tech-grid"
                    image={serviceImages.designing}
                    isReversed={true}
                    highlights={[
                        "Design from sketches or reference models",
                        "DFM optimization and tolerance analysis",
                        "Photorealistic rendering for presentations",
                        "Manufacturing drawings (GD&T) package"
                    ]}
                    specs={{
                        "Tools": "Fusion 360, SolidWorks, Blender",
                        "Deliverables": "STEP, STL, IGES, DXF, PDF",
                        "NDA": "Available upon request"
                    }}
                />

                {/* Machining Services */}
                <ServiceSection
                    title="Machining Services"
                    subtitle="Subtractive Systems"
                    description="Precision CNC machining for metal and plastic parts. Our high-speed milling and turning centers deliver aerospace-grade tolerances for the most demanding applications."
                    icon={Scissors}
                    bgClass="bg-tech-grid"
                    image={serviceImages.machining}
                    isReversed={false}
                    highlights={[
                        "3-axis and 4-axis milling, CNC turning",
                        "Materials: Aluminum, Steel, Brass, Delrin, Acrylic",
                        "Typical tolerance ±0.05 mm",
                        "Finishes: bead blast, anodize, powder coat"
                    ]}
                    specs={{
                        "Max Envelope": "250 × 250 × 100 mm (milling)",
                        "Tolerances": "±0.05 mm typical",
                        "Surface Finish": "Ra 1.6–3.2 µm (as-machined)"
                    }}
                />

                {/* Laser Cutting & Engraving */}
                <ServiceSection
                    title="Laser Cutting & Engraving"
                    subtitle="Photon Processing"
                    description="High-precision laser cutting and engraving services across multiple material types. Quick turnaround for intricate flat-pattern parts and decorative engraving."
                    icon={Layers}
                    bgClass="bg-blueprint"
                    image={serviceImages.laser}
                    isReversed={true}
                    highlights={[
                        "CO2 (non-metals) & fiber laser (metals)",
                        "Acrylic up to 10mm; plywood up to 8mm; stainless up to 1.5mm",
                        "Engraving resolution 300–1000 DPI",
                        "Batch and serial engraving supported"
                    ]}
                    specs={{
                        "Work Area": "600 × 400 mm",
                        "Resolution": "300–1000 DPI",
                        "File Types": "DXF, SVG, AI, PDF"
                    }}
                />

                {/* Custom PCB Design */}
                <ServiceSection
                    title="Custom PCB Design"
                    subtitle="Electronics Engineering"
                    description="Professional PCB design and prototyping. We handle the entire hardware stack from schematic capture to final board bring-up and validation."
                    icon={Cpu}
                    bgClass="bg-tech-grid"
                    image={serviceImages.pcb}
                    isReversed={false}
                    highlights={[
                        "Schematic capture, layout, BOM & DFM checks",
                        "Up to 6 layers, 6/6 mil trace/space typical",
                        "High-speed constraints, impedance control",
                        "Prototype assembly (SMD/THT)"
                    ]}
                    specs={{
                        "Layers": "2–6",
                        "Trace/Space": "6/6 mil typical",
                        "Deliverables": "Gerbers, BoM, Pick&Place, Schematics"
                    }}
                />

                {/* Custom Projects */}
                <ServiceSection
                    title="Custom Projects"
                    subtitle="System Integration"
                    description="Turnkey product development and one‑off automation. We act as your primary engineering partner from initial discovery to final handover."
                    icon={Settings2}
                    bgClass="bg-blueprint"
                    image={serviceImages.projects}
                    isReversed={true}
                    highlights={[
                        "Discovery & requirements definition",
                        "System design: mechanics, electronics, control",
                        "Fabrication, firmware development, and integration",
                        "Testing, validation and complete documentation"
                    ]}
                    specs={{
                        "Deliverables": "CAD, PCB, Firmware, BOM, Manuals",
                        "Engagement": "Fixed bid or Time & Materials",
                        "NDA": "Available on request"
                    }}
                />

                {/* Bottom Grid: Why Choose & Engagement */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass border border-brand-border p-10 rounded-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="text-brand-accent" size={24} />
                            <h3 className="text-xl font-display font-bold uppercase">Why choose Laswell</h3>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "Single vendor from design to parts to assembly",
                                "Transparent pricing and fast, realistic lead times",
                                "Quality control on every batch and test reports on request"
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-[10px] text-brand-accent font-bold">{i + 1}</span>
                                    </div>
                                    <span className="text-brand-muted text-xs tracking-tight">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass border border-brand-border p-10 rounded-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Zap className="text-brand-accent" size={24} />
                            <h3 className="text-xl font-display font-bold uppercase">Engagement models</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { label: "Fixed-bid", desc: "For well-defined project scope" },
                                { label: "Time & Materials", desc: "For iterative R&D and discovery" },
                                { label: "NDA & IP", desc: "Full IP assignment available" }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-brand-border last:border-0">
                                    <span className="font-bold text-brand-text text-xs tracking-widest">{row.label}</span>
                                    <span className="text-brand-muted text-xs font-mono">{row.desc}</span>
                                </div>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center glass border border-brand-accent/20 p-16 rounded-sm bg-gradient-to-b from-brand-accent/5 to-transparent"
                >
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 uppercase">Ready to Start?</h2>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 209, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-brand-accent text-brand-bg font-bold uppercase tracking-[0.4em] text-sm rounded-sm"
                    >
                        Initiate Project Transformation
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
