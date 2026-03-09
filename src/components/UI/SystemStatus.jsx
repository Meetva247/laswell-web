import React from 'react';

const SystemStatus = () => {
    return (
        <div className="flex items-center space-x-2 border border-brand-border px-3 py-1 bg-brand-bg/50 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-text-muted">
                System: Optimal
            </span>
        </div>
    );
};

export default SystemStatus;
