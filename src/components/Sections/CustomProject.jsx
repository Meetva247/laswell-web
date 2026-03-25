import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layers, MousePointer2 } from 'lucide-react';
import AnimatedSubmitButton from '../UI/AnimatedSubmitButton';

const CustomProject = () => {
    const logos = ['LASWELL', 'INKVIBE', 'ROBOCON', 'STEELWORKS', 'NEURALINK', 'VORTEX'];
    const [submitState, setSubmitState] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitState !== 'idle') return;
        
        setSubmitState('loading');
        
        setTimeout(() => {
            setSubmitState('success');
            setTimeout(() => {
                setSubmitState('idle');
            }, 3000);
        }, 2000);
    };

    return (
        <section id="custom" className="py-24 px-6 border-t border-brand-border relative overflow-hidden">
            {/* Decorative lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-brand-accent/20 to-transparent" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-brand-text">
                        Start a <br />
                        <span className="text-neon-gradient">Custom Project</span>
                    </h2>
                    <p className="text-brand-muted mb-12 text-lg">
                        From industrial engineering to high-performance streetwear. Bring your most ambitious ideas to life with our precision design and manufacturing pipeline.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: Layers, label: '3D Modeling & Mesh Optimization' },
                            { icon: Cpu, label: 'Hardware-Software Integration' },
                            { icon: MousePointer2, label: 'Custom Engraving & Aesthetic Tuning' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-none bg-brand-glass flex items-center justify-center text-brand-accent border border-brand-accent/20">
                                    <item.icon size={18} />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest text-brand-text/80">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div whileHover={{ scale: 1.02, borderColor: "var(--color-brand-accent)", boxShadow: "0 0 30px rgba(0,216,255,0.1)" }} className="enterprise-glass p-8 md:p-12 relative rounded-sm overflow-hidden transition-all duration-300">
                    {/* Internal Corner Accents for technical depth */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-accent/40" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-accent/40" />
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Full Name</label>
                            <input
                                type="text"
                                placeholder="Laswell Commander"
                                className="w-full bg-brand-bg border border-brand-border p-4 focus:border-white transition-colors text-brand-text placeholder:text-brand-text/30 rounded-none outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text/50">Project Type</label>
                            <select className="w-full bg-brand-bg border border-brand-border p-4 focus:border-white transition-colors text-brand-text rounded-none appearance-none outline-none">
                                <option className="bg-brand-bg">Robotics & Engineering</option>
                                <option className="bg-brand-bg">Premium Streetwear</option>
                                <option className="bg-brand-bg">Other Fusion</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text/50">Brief Description</label>
                            <textarea
                                rows="4"
                                placeholder="Tell us about the mission..."
                                className="w-full bg-brand-bg border border-brand-border p-4 focus:border-white transition-colors text-brand-text placeholder:text-brand-text/30 rounded-none resize-none outline-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-center w-full">
                            <AnimatedSubmitButton state={submitState} />
                        </div>
                    </form>
                </motion.div>
            </div>

            {/* Scrolling Logos */}
            <div className="mt-32 border-y border-brand-border py-12 overflow-hidden flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 items-center px-10"
                >
                    {[...logos, ...logos].map((logo, i) => (
                        <span key={i} className="text-2xl font-display font-bold text-brand-text/10 hover:text-brand-text/20 transition-colors tracking-tighter cursor-default">
                            {logo}
                        </span>
                    ))}
                </motion.div>
            </div>



        </section >
    );
};

export default CustomProject;
