import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Factory, Clock } from 'lucide-react';

const AboutFeature = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.02, borderColor: "var(--color-brand-accent)" }}
        className="flex gap-4 p-5 bg-brand-bg border border-brand-border rounded-sm transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,216,255,0.1)]"
    >
        <div className="w-8 h-8 rounded-sm flex items-center justify-center text-brand-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon size={18} strokeWidth={1.5} className="text-brand-accent" />
        </div>
        <div>
            <h3 className="text-xs font-display font-bold uppercase mb-1 tracking-widest text-brand-text">{title}</h3>
            <p className="text-brand-text/50 text-[10px] uppercase leading-relaxed tracking-widest font-mono">{description}</p>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 border-t border-brand-border pt-20">
                {/* Intro Header */}
                <div className="mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-gradient-to-r from-brand-accent to-transparent" />
                        <span className="text-[10px] font-mono shadow-sm uppercase tracking-[0.4em] text-brand-accent font-bold">START YOUR PROJECT</span>
                        <div className="h-[1px] flex-1 max-w-[200px] bg-gradient-to-l from-brand-purple to-transparent opacity-50" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase mb-6 leading-[1.1] tracking-wider text-brand-text">
                        READY TO BRING YOUR <br />
                        <span className="text-brand-purple">IDEAS TO </span>
                        <span className="text-brand-accent">LIFE?</span>
                    </h2>
                    <p className="text-brand-text/50 font-mono uppercase text-[10px] tracking-[0.2em]">GET IN TOUCH WITH OUR TEAM TODAY.</p>
                </div>

                {/* 3 Column Grid Setup */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">

                    {/* Column 1: About Us Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg flex items-center gap-3 font-display font-bold uppercase mb-8 text-brand-text">
                            <span className="w-1 h-5 bg-brand-accent block"></span>
                            ABOUT US
                        </h3>
                        <div className="space-y-6 text-brand-text/70 font-mono text-[11px] leading-loose tracking-widest uppercase">
                            <p>
                                LASWELL ROBOTICS IS A LEADING PROVIDER OF ON-DEMAND MANUFACTURING, ROBOTICS, AND AUTOMATION SERVICES. WE TRANSFORM INNOVATIVE IDEAS INTO REALITY THROUGH PRECISION ENGINEERING AND MODERN FABRICATION TECHNOLOGY.
                            </p>
                            <p>
                                FROM RAPID PROTOTYPING TO SMALL-BATCH PRODUCTION, OUR TEAM COMBINES DESIGN-FOR-MANUFACTURE EXPERTISE WITH DEPENDABLE DELIVERY SO YOU CAN MOVE FROM CONCEPT TO PRODUCT WITH CONFIDENCE.
                            </p>
                        </div>
                    </motion.div>

                    {/* Column 2: Quick Stats Boxes */}
                    <div className="flex flex-col gap-4">
                        <AboutFeature
                            icon={Factory}
                            title="50+ PROJECTS"
                            description="HIGH-FIDELITY UNITS DELIVERED ACROSS VARIOUS INDUSTRIAL SECTORS."
                            index={0}
                        />
                        <AboutFeature
                            icon={MapPin}
                            title="2 LOCATIONS"
                            description="OPERATIONS ACTIVE ACROSS AHMEDABAD & SURAT FACILITIES."
                            index={1}
                        />
                        <AboutFeature
                            icon={Clock}
                            title="24H RESPONSE"
                            description="AVERAGE TURNAROUND FOR INITIAL DESIGN REVIEW AND QUOTING."
                            index={2}
                        />
                    </div>

                    {/* Column 3: Contact Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 border border-brand-border bg-brand-bg flex flex-col justify-center h-full"
                    >
                        <h3 className="text-lg font-display font-bold uppercase mb-8 text-brand-text tracking-widest">GET IN TOUCH</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <Mail size={16} className="text-brand-accent mt-1" />
                                <div>
                                    <p className="text-[10px] font-mono uppercase text-brand-text/40 tracking-widest mb-1">EMAIL</p>
                                    <p className="text-xs font-mono text-brand-text font-bold uppercase tracking-wider">LASWELLROBOTICS@GMAIL.COM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone size={16} className="text-brand-accent mt-1" />
                                <div>
                                    <p className="text-[10px] font-mono uppercase text-brand-text/40 tracking-widest mb-1">PHONE</p>
                                    <p className="text-xs font-mono text-brand-text font-bold uppercase tracking-wider">+91 84698 02004</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin size={16} className="text-brand-accent mt-1" />
                                <div>
                                    <p className="text-[10px] font-mono uppercase text-brand-text/40 tracking-widest mb-1">LOCATION</p>
                                    <p className="text-xs font-mono text-brand-text font-bold uppercase tracking-wider">AHMEDABAD & SURAT</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
