import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    Zap,
    Settings,
    Eye,
    BookOpen,
    CheckCircle2,
    ArrowRight,
    ShoppingBag,
    Wrench,
    Lightbulb
} from 'lucide-react';

const KitComponent = ({ icon: Icon, name, count }) => (
    <div className="flex items-center gap-3 p-3 glass border border-brand-border rounded-sm">
        <div className="text-brand-accent">
            <Icon size={16} />
        </div>
        <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-tighter">{name}</p>
            <p className="text-[10px] text-brand-muted font-mono">{count} Unit(s)</p>
        </div>
    </div>
);

const ProjectGuide = ({ title, difficulty, description, time }) => (
    <div className="p-8 glass border border-brand-border rounded-sm hover:border-brand-accent/30 transition-all group">
        <div className="flex justify-between items-start mb-6">
            <span className="px-3 py-1 bg-brand-vibrant/10 text-brand-vibrant border border-brand-vibrant/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {difficulty}
            </span>
            <span className="text-[10px] text-brand-muted font-mono">{time}</span>
        </div>
        <h3 className="text-xl font-display font-bold uppercase mb-4 text-brand-text group-hover:text-brand-vibrant transition-colors">{title}</h3>
        <p className="text-sm text-brand-muted leading-relaxed mb-8 font-mono">
            {description}
        </p>
        <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent group-hover:gap-4 transition-all">
            View Blueprint <ArrowRight size={12} />
        </button>
    </div >
);

const BuildPage = () => {
    const starterKit = [
        { icon: Cpu, name: "L-Control Unit", count: 1 },
        { icon: Zap, name: "High-Torque Servos", count: 4 },
        { icon: Settings, name: "Aluminum Chassis", count: 1 },
        { icon: Eye, name: "Ultrasonic Sensor", count: 2 },
    ];

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen text-brand-text">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="relative p-12 md:p-20 text-center overflow-hidden border border-brand-accent/20 rounded-sm bg-gradient-to-b from-brand-accent/5 to-transparent">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-1 bg-brand-accent/10 text-brand-accent border border-brand-accent/20 rounded-full text-[10px] font-mono tracking-[0.5em] mb-8 font-bold">
                            Educational Program
                        </span>
                        <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tighter">
                            Build Your <span className="text-brand-accent">Future</span>
                        </h1>
                        <p className="text-brand-muted max-w-2xl mx-auto text-base md:text-lg font-mono tracking-tight leading-relaxed mb-12 italic">
                            Everything you need to go from a beginner to an enthusiast. Professional kits designed for new robotics explorers.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* The Starter Kit Section */}
            <div className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-brand-vibrant" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-brand-vibrant font-bold">The Component KIT</span>
                    </div>
                    <h2 className="text-3xl font-display font-bold uppercase mb-8">Laser-V1 <span className="text-brand-vibrant">Foundation Kit</span></h2>
                    <p className="text-brand-muted text-sm leading-relaxed mb-12 max-w-lg">
                        We've hand-picked every component to ensure compatibility and ease of use. No soldering required, just pure engineering logic.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        {starterKit.map((item, i) => (
                            <KitComponent key={i} {...item} />
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 209, 255, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 px-8 py-4 bg-brand-accent text-brand-bg font-bold uppercase tracking-widest text-xs"
                    >
                        <ShoppingBag size={16} /> Purchase Kit // $149
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square glass border border-brand-border rounded-sm p-12 flex items-center justify-center group overflow-hidden"
                >
                    {/* Visual Placeholder for Kit Image */}
                    <div className="absolute inset-0 bg-brand-vibrant/5 opacity-50 blur-3xl group-hover:opacity-100 transition-opacity" />
                    <Wrench size={180} className="text-brand-vibrant opacity-20 group-hover:rotate-12 transition-transform duration-700" />
                    <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                        <div className="bg-brand-bg/50 backdrop-blur-sm self-start p-4 border border-brand-border">
                            <CheckCircle2 className="text-brand-vibrant mb-2" size={24} />
                            <p className="text-[10px] font-mono tracking-widest uppercase">Verified Quality</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Guides Section */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold uppercase mb-6">What You Can <span className="text-brand-accent">Make</span></h2>
                    <p className="text-brand-muted text-xs font-mono tracking-widest uppercase">From Simple Motion to Advanced Automation</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProjectGuide
                        title="Autonomous Rover"
                        difficulty="Beginner"
                        time=" ~ 2 Hours"
                        description="Build a robot that navigates environments by avoiding obstacles using ultrasonic perception logic."
                    />
                    <ProjectGuide
                        title="Smart Gripper"
                        difficulty="Intermediate"
                        time=" ~ 4 Hours"
                        description="Learn kinematic controls by building a servo-powered mechanical arm that interacts with physical objects."
                    />
                    <ProjectGuide
                        title="Vision System"
                        difficulty="Advanced"
                        time=" ~ 6 Hours"
                        description="Integrate camera components to build a robot that can track specific colors and follow human movement."
                    />
                </div>
            </div>

            {/* Beginner Protocol */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="glass border border-brand-border p-12 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl" />
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-20 h-20 bg-brand-accent/10 flex items-center justify-center rounded-full shrink-0">
                            <Lightbulb size={40} className="text-brand-accent animate-pulse" />
                        </div>
                        <div>
                            <h3 className="text-xl font-display font-bold uppercase mb-4">First time in robotics?</h3>
                            <p className="text-brand-muted text-sm font-mono leading-relaxed mb-6">
                                Don't worry about being "new." Every kit comes with a digital manual that explains the **WHY** behind every connection. We use Python and block-based programming options to make the logic as clear as glass.
                            </p>
                            <div className="flex gap-4">
                                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text">
                                    <CheckCircle2 size={12} className="text-brand-accent" /> No Soldering
                                </span>
                                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text">
                                    <CheckCircle2 size={12} className="text-brand-accent" /> Online Support
                                </span>
                                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text">
                                    <CheckCircle2 size={12} className="text-brand-accent" /> Video Tutorials
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildPage;
