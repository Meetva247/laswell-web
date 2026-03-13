import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Github, Box, Cpu, Zap, ShieldCheck } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import RobotModel from '../components/Sections/RobotModel';
import TechnicalButton from '../components/UI/TechnicalButton';

const projectsData = {
    'line-follower': {
        title: "Line Follower Robot",
        description: "An autonomous platform engineered for high-precision path tracking using infrared reflectance sensors and PID-modulated speed control.",
        schematic: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", // Placeholder for industrial schematic
        codeSnippet: `// MODEL-X9 LINE FOLLOWER CORE
void loop() {
  int left = digitalRead(IR_LEFT);
  int right = digitalRead(IR_RIGHT);
  
  if(left && right) moveForward(BASE_SPEED);
  else if(!left) pivotRight(CORRECTION_FORCE);
  else if(!right) pivotLeft(CORRECTION_FORCE);
}`,
        specs: [
            { icon: <Cpu size={18} />, label: "Controller", value: "ATmega328P" },
            { icon: <Zap size={18} />, label: "Voltage", value: "7.4V - 11.1V" },
            { icon: <Box size={18} />, label: "Sensors", value: "5-Channel IR" },
            { icon: <ShieldCheck size={18} />, label: "Integrity", value: "Industrial Grade" }
        ],
        deepDetails: "The Line Follower Robot utilizes a multi-sensor array to detect high-contrast paths. By processing reflectance digital signals, the onboard MCU calculates differential steering commands to maintain a precise center-track alignment even at high velocities."
    }
};

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId] || projectsData['line-follower'];
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Back Navigation */}
                <Link to="/build" className="inline-flex items-center gap-2 text-brand-text/50 hover:text-brand-accent transition-colors mb-12 group">
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Back to Project Hub</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Visuals & Code */}
                    <div className="space-y-12">
                        <div 
                            className="enterprise-glass p-2 relative group overflow-hidden rounded-xl border-brand-accent/20 cursor-move"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="aspect-video bg-white relative overflow-hidden rounded-lg">
                                <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
                                    <RobotModel mousePos={mousePos} />
                                </Canvas>
                                <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none" />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 border border-brand-border rounded-full pointer-events-none">
                                    <span className="text-[10px] font-mono text-brand-bg tracking-widest uppercase font-bold">INTERACTIVE_3D_MODEL_V2.0</span>
                                </div>
                                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-brand-bg/40 uppercase tracking-[0.2em] pointer-events-none font-bold">
                                    Hover to Tilt
                                </div>
                            </div>
                        </div>

                        <div className="enterprise-glass p-6 rounded-xl border-brand-border/40">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-sm font-display font-bold uppercase tracking-widest text-brand-text">Core Implementation</h3>
                                <Github size={16} className="text-brand-text/50" />
                            </div>
                            <pre className="bg-black/60 p-6 rounded border border-brand-border overflow-x-auto">
                                <code className="text-xs font-mono text-brand-accent/80 leading-relaxed">
                                    {project.codeSnippet}
                                </code>
                            </pre>
                        </div>
                    </div>

                    {/* Right: Technical Details */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[2px] bg-brand-accent" />
                            <span className="text-xs font-mono text-brand-accent tracking-[0.3em] font-bold uppercase">Technical Deep-Dive</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-text uppercase mb-8 tracking-tighter">
                            {project.title}
                        </h1>

                        <p className="text-lg text-brand-text-muted mb-12 leading-relaxed max-w-xl font-mono">
                            {project.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-12">
                            {project.specs.map((spec, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 border border-brand-border/50 bg-brand-glass/30 rounded-lg hover:border-brand-accent/30 transition-colors">
                                    <div className="text-brand-accent">{spec.icon}</div>
                                    <div>
                                        <p className="text-[10px] text-brand-text/40 uppercase tracking-widest mb-1">{spec.label}</p>
                                        <p className="text-xs font-bold text-brand-text">{spec.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 border-l-2 border-brand-accent bg-brand-accent/5 rounded-r-xl">
                            <p className="text-sm text-brand-text/80 leading-relaxed font-medium">
                                {project.deepDetails}
                            </p>
                        </div>

                        <div className="mt-12">
                            <TechnicalButton variant="primary" className="w-full md:w-auto px-12 py-4 rounded-full">
                                Request Quote for Kit
                            </TechnicalButton>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetailPage;
