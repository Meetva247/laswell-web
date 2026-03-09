import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const TechnicalButton = ({ children, onClick, className, variant = 'primary', ...props }) => {
    const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest transition-colors duration-200 border";

    const variants = {
        primary: "bg-brand-accent text-[#0A0A0A] border-brand-accent hover:bg-[#CC5500] shadow-[0_4px_0_0_#A04300] active:shadow-none active:translate-y-[4px]",
        secondary: "bg-transparent text-brand-text border-brand-border hover:border-brand-text hover:bg-white/5 active:bg-white/10",
        blueprint: "bg-brand-blueprint text-white border-brand-blueprint hover:bg-[#003380] shadow-[0_4px_0_0_#002255] active:shadow-none active:translate-y-[4px]"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            transition={{ type: "tween", duration: 0.05 }}
            className={twMerge(clsx(baseStyles, variants[variant], className))}
            onClick={onClick}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            {/* Decorative corners */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-30"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-30"></span>
        </motion.button>
    );
};

export default TechnicalButton;
