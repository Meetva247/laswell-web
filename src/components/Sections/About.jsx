import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    Target,
    Cpu,
    Zap,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    Clock,
    Layers,
    Factory
} from 'lucide-react';

const AboutFeature = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex gap-4 p-4 glass border border-brand-border rounded-sm hover:border-brand-accent/30 transition-all duration-500"
    >
        <div className="w-10 h-10 bg-brand-accent/5 rounded-sm flex items-center justify-center text-brand-accent shrink-0 border border-brand-accent/10">
            <Icon size={20} />
        </div>
        <div>
            <h3 className="text-[10px] font-display font-bold uppercase mb-1 tracking-wider">{title}</h3>
            <p className="text-brand-muted text-[10px] leading-relaxed tracking-tight font-mono">{description}</p>
        </div>
    </motion.div>
);

const InfoList = ({ title, items }) => (
    <div className="space-y-4">
        <h4 className="text-xs font-display font-bold uppercase tracking-[0.2em] text-brand-accent border-b border-brand-accent/20 pb-2">{title}</h4>
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 group cursor-default">
                    <ChevronRight size={12} className="text-brand-accent/40 group-hover:text-brand-accent transition-colors" />
                    <span className="text-[10px] font-mono tracking-tight text-brand-muted group-hover:text-brand-text transition-colors">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const About = () => {
    return (
        <section id="about" className="py-32 px-6 bg-brand-bg relative overflow-hidden">
            {/* Dynamic Background Decorative Tech Element (Color Flex) */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none select-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--brand-accent)_1px,_transparent_1px)] bg-[size:30px_30px]" />
            </div>

            {/* All-Side Color Flex Frame */}
            <div className="absolute inset-0 border-[1px] opacity-10 pointer-events-none color-flex-border" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-vibrant opacity-30" />
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-brand-vibrant via-brand-secondary to-brand-accent opacity-30" />
            <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-brand-accent via-brand-secondary to-brand-vibrant opacity-30" />
            <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-brand-vibrant via-brand-secondary to-brand-accent opacity-30" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Intro Header */}
                <div className="mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[2px] w-12 bg-gradient-to-r from-brand-accent to-brand-vibrant" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-brand-accent font-bold">Start Your Project</span>
                    </motion.div>
                    <h2 className="text-2xl md:text-4xl font-display font-bold uppercase mb-4 max-w-2xl leading-tight">
                        Ready to bring your <span className="text-brand-accent text-2xl md:text-4xl">Ideas to Life?</span>
                    </h2>
                    <p className="text-brand-muted font-mono uppercase text-xs tracking-widest italic">Get in touch with our team today.</p>

                    {/* Top-Right Corner Decal with Color Flex */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 border-t-2 border-r-2 border-brand-accent/20 border-t-brand-vibrant/40 opacity-50 hidden lg:block" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 relative">
                    {/* Decals with Color Flex */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-brand-accent/30 opacity-40 animate-pulse pointer-events-none" style={{ borderColor: 'transparent', borderTopColor: '#00d1ff', borderLeftColor: '#9333ea' }} />

                    {/* Main Content Area */}
                    <div className="lg:col-span-12 xl:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-display font-bold uppercase mb-8 border-l-4 border-brand-accent pl-6 group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
                                    About Us
                                </h3>
                                <div className="space-y-6 text-brand-text/80 font-mono text-sm leading-relaxed tracking-tight">
                                    <p>
                                        Laswell Robotics is a leading provider of on-demand manufacturing, robotics, and automation services. We transform innovative ideas into reality through precision engineering and modern fabrication technology.
                                    </p>
                                    <p>
                                        From rapid prototyping to small-batch production, our team combines design-for-manufacture expertise with dependable delivery so you can move from concept to product with confidence.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-1 gap-4 h-fit">
                                <AboutFeature
                                    icon={Factory}
                                    title="50+ Projects"
                                    description="High-fidelity units delivered across various industrial sectors."
                                    index={0}
                                />
                                <AboutFeature
                                    icon={MapPin}
                                    title="2 Locations"
                                    description="Operations active across Ahmedabad & Surat facilities."
                                    index={1}
                                />
                                <AboutFeature
                                    icon={Clock}
                                    title="24h Response"
                                    description="Average turnaround for initial design review and quoting."
                                    index={2}
                                />
                            </div>
                        </div>

                        {/* Capability Lists Grid with Color Flex Background */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 p-8 glass border border-brand-accent/20 rounded-sm relative overflow-hidden group">
                            {/* Grid Background with Multi-color Nodes */}
                            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-flex-cyan)_1px,_transparent_1px)] bg-[size:30px_30px] group-hover:bg-[radial-gradient(circle_at_center,_var(--color-flex-purple)_1px,_transparent_1px)] transition-colors duration-1000" />

                            <InfoList
                                title="What we do"
                                items={[
                                    "Rapid prototyping & small‑batch production",
                                    "End‑to‑end product development",
                                    "Custom jigs & automation fixtures",
                                    "Design reviews & DFM consulting"
                                ]}
                            />
                            <InfoList
                                title="How we work"
                                items={[
                                    "Brief & requirements analysis",
                                    "Proposal with technical specs",
                                    "Precision build & quality checks",
                                    "Delivery and strategic support"
                                ]}
                            />
                            <InfoList
                                title="Core capabilities"
                                items={[
                                    "3D Printing (FDM/SLA)",
                                    "CNC Milling & Turning",
                                    "Laser Cutting & Engraving",
                                    "CAD Design & Simulation",
                                    "PCB Design & Assembly",
                                    "System Integration"
                                ]}
                            />
                        </div>
                    </div>

                    {/* Contact & CTA Area */}
                    <div className="lg:col-span-12 xl:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 border-2 border-brand-accent glass rounded-sm flex flex-col justify-between h-full bg-brand-accent/5 group hover:border-brand-vibrant transition-colors duration-700 overflow-hidden relative"
                        >
                            {/* Internal Accent Line */}
                            <div className="absolute top-0 right-0 w-[4px] h-full bg-brand-vibrant translate-y-full group-hover:translate-y-0 transition-transform duration-700" />

                            <div className="relative z-10">
                                <h3 className="text-xl font-display font-bold uppercase mb-8 tracking-widest text-brand-accent transition-colors">Get in Touch</h3>

                                <div className="space-y-6 mb-12">
                                    <div className="flex items-center gap-4 group/contact">
                                        <div className="w-10 h-10 bg-brand-bg border border-brand-border rounded-sm flex items-center justify-center text-brand-accent group-hover/contact:border-brand-vibrant transition-colors">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-mono uppercase text-brand-muted tracking-widest mb-1">Email</p>
                                            <p className="text-xs font-mono text-brand-text font-bold uppercase">laswellrobotics@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group/contact">
                                        <div className="w-10 h-10 bg-brand-bg border border-brand-border rounded-sm flex items-center justify-center text-brand-accent group-hover/contact:border-brand-accent transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-mono uppercase text-brand-muted tracking-widest mb-1">Phone</p>
                                            <p className="text-xs font-mono text-brand-text font-bold uppercase">+91 84698 02004</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group/contact">
                                        <div className="w-10 h-10 bg-brand-bg border border-brand-border rounded-sm flex items-center justify-center text-brand-accent group-hover/contact:border-brand-secondary transition-colors">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-mono uppercase text-brand-muted tracking-widest mb-1">Location</p>
                                            <p className="text-xs font-mono text-brand-text font-bold uppercase">Ahmedabad & Surat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="#custom" className="relative z-10">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(147, 51, 234, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-4 bg-gradient-to-r from-brand-accent to-brand-vibrant text-brand-bg font-bold uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 transition-all"
                                >
                                    REQUEST A QUOTE
                                    <Zap size={14} />
                                </motion.button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
