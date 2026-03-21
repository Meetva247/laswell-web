import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Award, ShieldCheck, Download, Settings, Mail, Github } from 'lucide-react';
import arduinoV2 from '../assets/kit/arduino_uno.png';
import driverV2 from '../assets/kit/l298n_driver.png';
import irSensorV2 from '../assets/kit/ir_sensor.png';
import batteryV2 from '../assets/kit/lipo_battery.png';
import chassisV2 from '../assets/kit/chassis.png';
import DataCard from '../components/UI/DataCard';
import TechnicalButton from '../components/UI/TechnicalButton';

const specsData = [
    {
        id: "kinetics",
        title: "KINETIC PARAMETERS",
        content: [
            { label: "Payload Capacity", value: "15.5 kg" },
            { label: "Maximum Reach", value: "1450 mm" },
            { label: "Repeatability", value: "±0.01 mm" },
            { label: "Max Speed (TCP)", value: "3.2 m/s" }
        ]
    },
    {
        id: "environmental",
        title: "ENVIRONMENTAL RATINGS",
        content: [
            { label: "IP Classification", value: "IP67 (Standard)" },
            { label: "Operating Temp", value: "0°C to 45°C" },
            { label: "Humidity Range", value: "5% - 95% RH" },
            { label: "Cleanroom Class", value: "ISO Class 5" }
        ]
    },
    {
        id: "architecture",
        title: "SYSTEM ARCHITECTURE",
        content: [
            { label: "Controller Module", value: "OMEGA-CX V2" },
            { label: "Fieldbus Protocols", value: "EtherCAT, PROFINET" },
            { label: "Power Requirements", value: "200-240 VAC, 50/60 Hz" },
            { label: "Safety Integrity", value: "SIL 2 / PL d" }
        ]
    }
];

const CollapsibleSpec = ({ spec }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-brand-border bg-black/40 mb-4 transition-colors hover:border-brand-accent/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 focus:outline-none"
            >
                <div className="flex items-center gap-3">
                    <span className="text-brand-accent">
                        {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </span>
                    <span className="font-display font-bold text-lg tracking-widest text-brand-text">
                        {spec.title}
                    </span>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-0 border-t border-brand-border/30">
                            <div className="space-y-3 mt-4">
                                {spec.content.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-end border-b border-brand-border/50 pb-2">
                                        <span className="text-xs font-mono text-brand-text-muted">{item.label}</span>
                                        <span className="text-sm font-bold text-brand-text">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProtocolButton = ({ label, icon, onClick }) => (
    <button 
        onClick={onClick}
        className="group relative flex items-center justify-between px-6 py-4 border border-brand-border rounded-xl overflow-hidden transition-all duration-500 shadow-lg bg-[#0a0a0a] text-brand-text hover:border-transparent"
    >
        {/* Color-Flex Filling Background - Unified for all buttons */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-color-flex z-0" />
        
        <span className="relative z-10 text-[10px] font-display font-bold uppercase tracking-[0.2em] group-hover:text-black transition-colors">
            {label}
        </span>
        <span className="relative z-10 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all group-hover:text-black">
            {icon}
        </span>
    </button>
);

const BuildPage = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-brand-border pb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[1px] bg-brand-blueprint"></div>
                            <span className="font-mono text-brand-blueprint text-xs tracking-[0.2em] font-bold">SYSTEM SPECS // MODEL-X9</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-brand-text uppercase">
                            Specs Engine
                        </h1>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 border border-brand-border px-4 py-2 bg-brand-glass">
                            <Award className="text-brand-accent" size={16} />
                            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-text">ISO 9001:2015</span>
                        </div>
                        <div className="flex items-center gap-2 border border-brand-border px-4 py-2 bg-brand-glass">
                            <ShieldCheck className="text-brand-accent" size={16} />
                            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-text">CE CERTIFIED</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Image & Highlights */}
                    <div>
                        <div className="enterprise-glass p-2 mb-8 relative group border-brand-accent/20">
                            {/* Simulated High-Res Industrial Photography Grid */}
                            <div className="aspect-[4/3] bg-[#050505] relative overflow-hidden border border-brand-border">
                                <div className="absolute inset-0 bg-blueprint opacity-20 z-0 mix-blend-screen"></div>
                                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-brand-accent/30 z-10 w-full transform -translate-y-1/2"></div>
                                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-brand-accent/30 z-10 h-full transform -translate-x-1/2"></div>
                                <div className="absolute w-64 h-64 border border-brand-accent/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                                <div className="absolute z-20 top-4 left-4 p-2 bg-black/60 border border-brand-border">
                                    <span className="text-[10px] text-brand-text-muted font-mono tracking-widest">OPTICAL_SENSOR: ONLINE</span>
                                </div>

                                {/* Placeholder for high-res photo, using CSS styles for tech look */}
                                <div className="absolute inset-0 z-30 flex items-center justify-center">
                                    <Settings size={120} className="text-brand-border animate-[spin_20s_linear_infinite]" />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <TechnicalButton variant="primary" className="flex-1">
                                <Download size={16} /> Download CAD
                            </TechnicalButton>
                            <TechnicalButton variant="secondary" className="flex-1">
                                View Datasheet
                            </TechnicalButton>
                        </div>
                    </div>

                    {/* Specs Collapsibles */}
                    <div>
                        <h3 className="text-xl font-display font-bold uppercase tracking-widest mb-6 text-brand-text border-l-2 border-brand-accent pl-4">
                            Technical Specifications
                        </h3>

                        {specsData.map((spec) => (
                            <CollapsibleSpec key={spec.id} spec={spec} />
                        ))}

                        <div className="mt-12 p-6 enterprise-glass border-brand-blueprint border">
                            <h4 className="font-mono text-sm tracking-widest text-brand-blueprint mb-4">REQUIRE CUSTOMIZATION?</h4>
                            <p className="text-brand-text-muted text-sm leading-relaxed mb-6 font-mono">
                                Our engineering teams can tailor the MODEL-X9 parameters for specific industrial use-cases, including clean-room adaptation and high-payload modifications.
                            </p>
                            <TechnicalButton variant="blueprint">Submit Request</TechnicalButton>
                        </div>
                    </div>
                </div>

                {/* Robotics Kits Section */}
                <div className="mt-24 border-t border-brand-border pt-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-[1px] bg-brand-accent"></div>
                        <span className="font-mono text-brand-accent text-xs tracking-[0.2em] font-bold">PROJECT HUB // KIT ECOSYSTEM</span>
                    </div>

                    <div className="enterprise-glass p-8 md:p-12 border-brand-accent/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-accent/5 blur-[100px] rounded-full" />
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-brand-text mb-4">Line Follower Robot</h2>
                            <p className="text-brand-text-muted font-mono text-sm max-w-2xl mb-10">
                                A classic robotics project designed for autonomous precision tracking using high-speed IR sensors and motor normalization logic.
                            </p>

                            {/* Kit Components Reel V2 */}
                            <div className="mb-16">
                                <p className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.3em] mb-6">Kit Architecture // Core Components</p>
                                <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scrollbar">
                                    {[
                                        { name: 'Arduino Uno', img: arduinoV2 },
                                        { name: 'L298N Driver', img: driverV2 },
                                        { name: 'IR Sensors', img: irSensorV2 },
                                        { name: 'Lipo Battery', img: batteryV2 },
                                        { name: 'Chassis', img: chassisV2 }
                                    ].map((comp, i) => (
                                        <div key={i} className="group relative overflow-hidden bg-brand-bg/50 border border-brand-border hover:border-brand-accent/50 transition-all duration-500 flex-none w-[140px] sm:w-[180px] md:flex-1 snap-start">
                                            <div className="aspect-square relative overflow-hidden">
                                                <img 
                                                    src={comp.img} 
                                                    alt={comp.name} 
                                                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                            </div>
                                            <div className="p-3 bg-brand-glass border-t border-brand-border group-hover:border-brand-accent/30 transition-colors">
                                                <span className="text-[8px] font-mono text-brand-text/70 uppercase tracking-widest">{comp.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Protocol Buttons - Dynamic Flex Presentation */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <ProtocolButton 
                                    label="Code" 
                                    icon={<Github size={16} />} 
                                    onClick={() => window.open('https://github.com', '_blank')}
                                />
                                <ProtocolButton 
                                    label="Details" 
                                    icon={<Settings size={16} />} 
                                    onClick={() => navigate('/project/line-follower')}
                                />
                                <ProtocolButton 
                                    label="Component Delivery" 
                                    icon={<ShieldCheck size={16} />} 
                                    onClick={() => alert("Protocol: INITIALIZING SECURE PROCUREMENT...")}
                                />
                                <ProtocolButton 
                                    label="Need Help" 
                                    icon={<Mail size={16} />} 
                                    onClick={() => window.location.href = 'mailto:robotics@laswell.com?subject=Line%20Follower%20Support'}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default BuildPage;
