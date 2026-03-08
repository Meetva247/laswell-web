import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ShoppingBag, ArrowRight, Zap } from 'lucide-react';

const CTASection = ({ title, description, badge, buttonText, link, icon: Icon, isSecondary }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative group p-8 md:p-12 border border-brand-border glass rounded-sm overflow-hidden flex flex-col justify-between h-full ${isSecondary ? 'bg-brand-fusion/5 border-brand-fusion/20' : 'bg-brand-secondary/5 border-brand-secondary/20'
            }`}
    >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon size={120} />
        </div>

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center border ${isSecondary ? 'bg-brand-fusion text-brand-bg border-brand-fusion' : 'bg-brand-secondary text-brand-bg border-brand-secondary'
                    }`}>
                    <Icon size={20} />
                </div>
                {badge && (
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-xs ${isSecondary ? 'bg-brand-fusion/20 text-brand-fusion' : 'bg-brand-secondary/20 text-brand-secondary'
                        }`}>
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
                            ? 'bg-transparent border border-brand-fusion text-brand-fusion hover:bg-brand-fusion hover:text-brand-bg'
                            : 'bg-brand-secondary text-brand-bg shadow-lg shadow-brand-secondary/20'
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
                        <span className="text-[10px] font-mono text-brand-muted uppercase tracking-[0.2em] italic underline decoration-brand-accent/50 underline-offset-4 cursor-default">Laswell Technical Standards</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTAs;
