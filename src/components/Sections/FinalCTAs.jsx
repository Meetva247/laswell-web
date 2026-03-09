import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ShoppingBag, ArrowRight, Zap } from 'lucide-react';

const CTASection = ({ title, description, badge, buttonText, link, icon: Icon, isSecondary }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, borderColor: "var(--color-brand-accent)", boxShadow: "0 0 30px rgba(0,216,255,0.1)" }}
        className={`relative group p-8 md:p-12 border border-brand-border bg-brand-secondary rounded-sm overflow-hidden flex flex-col justify-between h-full transition-all duration-300`}
    >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon size={120} />
        </div>

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center border bg-brand-accent/10 text-brand-accent border-brand-accent/20">
                    <Icon size={20} />
                </div>
                {badge && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-xs bg-brand-bg border border-brand-border text-brand-text/70">
                        {badge}
                    </span>
                )}
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 leading-tight">
                {title}
            </h3>
            <p className="text-brand-muted text-sm md:text-base font-mono tracking-tight leading-relaxed mb-8 max-w-sm">
                {description}
            </p>
        </div>

        <div className="relative z-10">
            <Link to={link}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 font-bold uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 rounded-sm transition-all ${isSecondary
                        ? 'bg-transparent border border-brand-border text-brand-text/70 hover:border-brand-accent hover:text-brand-accent'
                        : 'bg-brand-accent text-[#0A0A0A] shadow-lg shadow-brand-accent/10'
                        }`}
                >
                    {buttonText}
                    <ArrowRight size={16} />
                </motion.button>
            </Link>
        </div>
    </motion.div>
);

const FinalCTAs = () => {
    return (
        <section className="py-24 px-6 bg-brand-bg relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Quote CTA */}
                    <CTASection
                        title="Have a part, product or idea?"
                        description="Share your CAD or sketches and get a fast, actionable quote from our engineering team."
                        buttonText="Request a Quote"
                        link="/#custom"
                        icon={FileText}
                    />

                    {/* Shop CTA */}
                    <CTASection
                        title="Online Robotics & Electronics Shop"
                        description="Browse our curated selection of high-performance robotics components and maker electronics."
                        badge="Coming Soon!"
                        buttonText="Learn More"
                        link="/shop"
                        icon={ShoppingBag}
                        isSecondary={true}
                    />
                </div>

                {/* Decorative Status Bar Separator */}
                <div className="mt-24 border-t border-brand-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-brand-accent rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                        </div>
                        <span className="text-[10px] font-mono text-brand-muted uppercase tracking-[0.4em]">Ready for manufacturing cycle // 2024.v1</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap size={12} className="text-brand-accent" />
                        <span className="text-[10px] font-mono text-brand-text/50 uppercase tracking-[0.2em] italic underline decoration-brand-accent/50 underline-offset-4 cursor-default">InkVibe x Laswell Technical Standards</span>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="max-w-2xl mx-auto mt-24 mb-12 text-center">
                    <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-brand-text">Join the Vanguard</h4>
                    <p className="text-brand-text/50 text-sm mb-8 font-mono tracking-widest uppercase">Weekly drops, engineering deep-dives, and exclusive early access.</p>
                    <div className="flex gap-2 p-1 bg-brand-secondary border border-brand-border rounded-sm">
                        <input
                            type="email"
                            placeholder="operator@inkvibe.io"
                            className="flex-1 bg-transparent px-4 py-2 outline-none text-brand-text text-sm"
                        />
                        <button className="bg-brand-accent text-[#0A0A0A] hover:bg-brand-accent/90 px-8 py-2 text-xs font-bold uppercase tracking-widest transition-colors rounded-sm">
                            Secure
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTAs;
