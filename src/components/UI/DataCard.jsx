import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const DataCard = ({ title, children, className, telemetry = null }) => {
    return (
        <div className={twMerge(clsx("enterprise-glass p-6 relative group overflow-hidden", className))}>
            {/* Background Accent Grid */}
            <div className="absolute inset-0 bg-hex-grid opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"></div>

            {/* Top Header Bar */}
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-brand-border relative z-10">
                <h3 className="text-xl text-brand-text font-display tracking-widest">
                    {title}
                </h3>
                {telemetry && (
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></div>
                        <span className="text-xs font-mono text-brand-accent">
                            {telemetry}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 font-mono text-sm text-brand-text-muted">
                {children}
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-brand-border to-transparent"></div>
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-brand-border to-transparent"></div>
            </div>
        </div>
    );
};

export default DataCard;
