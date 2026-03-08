import React from 'react';
import { motion } from 'framer-motion';
import { Send, Cpu, Layers, MousePointer2 } from 'lucide-react';

const CustomProject = () => {
    const logos = [
        'LASWELL', 'ROBOCON', 'STEELWORKS', 'NEURALINK', 'VORTEX', 'AEROFORM'
    ];

    return (
        <section id="custom" className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Decorative lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-brand-accent/20 to-transparent" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-brand-text">
                        Start a <br />
                        <span className="text-brand-accent">Custom Project</span>
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
                                <div className="w-10 h-10 rounded-sm bg-brand-glass flex items-center justify-center text-brand-accent border border-brand-accent/20">
                                    <item.icon size={18} />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest text-brand-text/80">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card p-8 md:p-12 relative rounded-sm overflow-hidden">
                    {/* Internal Corner Accents for technical depth */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-accent/40" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-accent/40" />
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Full Name</label>
                            <input
                                type="text"
                                placeholder="Laswell Commander"
                                className="w-full bg-brand-glass border border-brand-border p-4 focus:border-brand-accent outline-none transition-colors text-brand-text placeholder:text-brand-muted/30 rounded-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Project Type</label>
                            <select className="w-full bg-brand-glass border border-brand-border p-4 focus:border-brand-accent outline-none transition-colors text-brand-text rounded-sm appearance-none">
                                <option className="bg-brand-bg">Robotics & Engineering</option>
                                <option className="bg-brand-bg">Premium Streetwear</option>
                                <option className="bg-brand-bg">Other Fusion</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">Brief Description</label>
                            <textarea
                                rows="4"
                                placeholder="Tell us about the mission..."
                                className="w-full bg-brand-glass border border-brand-border p-4 focus:border-brand-accent outline-none transition-colors text-brand-text placeholder:text-brand-muted/30 rounded-sm resize-none"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0, 247, 255, 0.5)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-brand-accent text-brand-bg font-bold uppercase tracking-widest flex items-center justify-center gap-3 rounded-sm"
                        >
                            Initiate Transmission <Send size={16} />
                        </motion.button>
                    </form>
                </div>
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

            {/* Newsletter */}
            <div className="max-w-2xl mx-auto mt-32 text-center">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-brand-text">Join the Vanguard</h4>
                <p className="text-brand-muted text-sm mb-8">Weekly drops, engineering deep-dives, and exclusive early access.</p>
                <div className="flex gap-2 p-1 glass rounded-sm">
                    <input
                        type="email"
                        placeholder="operator@laswell.io"
                        className="flex-1 bg-transparent px-4 py-2 outline-none text-brand-text text-sm"
                    />
                    <button className="bg-brand-text text-brand-bg hover:opacity-90 px-8 py-2 text-xs font-bold uppercase tracking-widest transition-opacity rounded-sm">
                        Secure
                    </button>

                </div>
            </div>

        </section>
    );
};

export default CustomProject;
