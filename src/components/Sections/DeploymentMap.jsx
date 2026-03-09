import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// SVG map representation - simplified for the example
const DeploymentMap = () => {
    const [hubs, setHubs] = useState([
        { id: 'NA', name: 'N. AMERICA SECTOR', cx: 25, cy: 30, active: true },
        { id: 'EU', name: 'EUROPE SECTOR', cx: 55, cy: 25, active: true },
        { id: 'AS', name: 'ASIA PACIFIC', cx: 75, cy: 35, active: true },
        { id: 'SA', name: 'S. AMERICA SECTOR', cx: 35, cy: 65, active: false }
    ]);

    useEffect(() => {
        // Randomly "ping" hubs
        const interval = setInterval(() => {
            setHubs(prev => prev.map(hub => {
                if (Math.random() > 0.7) {
                    return { ...hub, ping: true };
                }
                return { ...hub, ping: false };
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 relative bg-[#050505] border-t border-brand-border">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-brand-accent"></div>
                        <span className="font-mono text-brand-accent text-xs tracking-[0.2em] font-bold">GLOBAL NETWORK</span>
                        <div className="w-8 h-[1px] bg-brand-accent"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-brand-text uppercase">
                        Deployment Framework
                    </h2>
                </div>

                <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] enterprise-glass border-brand-border p-6 rounded-sm">
                    {/* Simplified Map Visualization */}
                    <div className="absolute inset-0 bg-transparent opacity-20"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}>
                    </div>

                    {/* SVG Map Container */}
                    <svg className="w-full h-full relative z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Connecting Lines */}
                        <path d="M 25 30 L 55 25 L 75 35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="1,1" className="animate-pulse" />

                        {hubs.map(hub => (
                            <g key={hub.id}>
                                {/* Pulse Effect */}
                                {hub.ping && (
                                    <circle cx={hub.cx} cy={hub.cy} r="4" fill="none" stroke="#FF6B00" strokeWidth="0.5">
                                        <animate attributeName="r" from="1" to="8" dur="1s" begin="0s" fill="freeze" />
                                        <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0s" fill="freeze" />
                                    </circle>
                                )}

                                <circle
                                    cx={hub.cx}
                                    cy={hub.cy}
                                    r="1.5"
                                    fill={hub.active ? "#0047AB" : "#1E1E1E"}
                                    stroke={hub.active ? "#00d1ff" : "#333"}
                                    strokeWidth="0.5"
                                />
                                <text
                                    x={hub.cx + 3}
                                    y={hub.cy + 1}
                                    fill={hub.active ? "#FFF" : "#666"}
                                    fontSize="2"
                                    fontFamily="JetBrains Mono, monospace"
                                    letterSpacing="0.1em"
                                >
                                    {hub.name}
                                </text>
                                <text
                                    x={hub.cx + 3}
                                    y={hub.cy + 3.5}
                                    fill={hub.active ? "#FF6B00" : "#444"}
                                    fontSize="1.5"
                                    fontFamily="JetBrains Mono, monospace"
                                >
                                    {hub.active ? "STATUS: OPERATIONAL" : "STATUS: OFFLINE"}
                                </text>
                            </g>
                        ))}
                    </svg>

                    <div className="absolute bottom-6 left-6 z-20">
                        <div className="p-4 bg-black/80 border border-brand-border font-mono text-xs text-brand-text-muted">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-[#0047AB] rounded-full"></div>
                                <span>ACTIVE HUBS: 3</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                                <span>TRANSMISSION: LIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeploymentMap;
