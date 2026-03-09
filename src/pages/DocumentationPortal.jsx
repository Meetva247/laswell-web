import React, { useState } from 'react';
import { Search, Copy, Check, Terminal, FileCode, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CodeSnippet = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-6 border border-brand-border rounded-sm overflow-hidden text-sm">
            <div className="flex justify-between items-center bg-black/60 px-4 py-2 border-b border-brand-border">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-text-muted">
                    <Terminal size={14} /> PYTHON_SDK
                </div>
                <button
                    onClick={handleCopy}
                    className="text-brand-text-muted hover:text-brand-text transition-colors flex items-center gap-1 text-[10px] font-mono tracking-widest"
                >
                    {copied ? <><Check size={14} className="text-brand-accent" /> COPIED</> : <><Copy size={14} /> COPY CODE</>}
                </button>
            </div>
            <pre className="p-4 bg-[#0A0A0A] overflow-x-auto text-brand-text/80 font-mono text-xs leading-relaxed">
                <code>{code}</code>
            </pre>
        </div>
    );
};

const DocumentationPortal = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const sidebarLinks = [
        { title: "GETTING STARTED", links: ["Installation", "Quickstart", "Authentication"] },
        { title: "CORE CONCEPTS", links: ["Kinematic Models", "Telemetry Webhooks", "Safety Protocols"] },
        { title: "API REFERENCE", links: ["REST Endpoints", "WebSocket Streams", "Error Codes"] }
    ];

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

                {/* Sidebar */}
                <aside className="lg:col-span-1 border-r border-brand-border/50 pr-6 hidden lg:block">
                    <div className="relative mb-8">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-text-muted" size={16} />
                        <input
                            type="text"
                            placeholder="Search Documentation..."
                            className="w-full bg-black/40 border border-brand-border pl-10 pr-4 py-2 text-xs font-mono text-brand-text outline-none focus:border-brand-accent transition-colors rounded-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="space-y-8">
                        {sidebarLinks.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="text-[10px] font-bold font-mono tracking-widest text-brand-text-muted mb-3 uppercase">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link, ldx) => (
                                        <li key={ldx}>
                                            <a href="#" className="text-sm text-brand-text hover:text-brand-accent transition-colors flex items-center gap-2 group">
                                                <ChevronRight size={14} className="text-brand-border group-hover:text-brand-accent transition-colors opacity-0 group-hover:opacity-100 -ml-4" />
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-3 lg:pl-6">
                    <div className="mb-12 border-b border-brand-border pb-8">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-2 py-1 border border-brand-accent/20">
                                V 2.4.0
                            </span>
                            <span className="text-[10px] font-mono tracking-widest text-brand-text-muted flex items-center gap-1">
                                <Clock size={12} /> UPDATED: 2 DAYS AGO
                            </span>
                        </div>
                        <h1 className="text-4xl font-display font-bold text-brand-text mb-4">Initializing Telemetry</h1>
                        <p className="text-brand-text-muted text-sm md:text-base font-mono leading-relaxed">
                            To establish a real-time data connection with the MODEL-X9 hardware,
                            you must instantiate a WebSocket tunnel using the native Laswell SDK.
                            Ensure that safety protocols are engaged prior to sending move commands.
                        </p>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-xl font-display font-bold text-brand-text mb-4 mt-8 flex items-center gap-2">
                            <FileCode size={20} className="text-brand-blueprint" /> 1. Configuration
                        </h3>
                        <p className="text-sm font-mono text-brand-text-muted leading-relaxed mb-4">
                            First, import the SDK and initialize the client with your access token. The endpoint will default to your localized manufacturing hub if not explicitly specified.
                        </p>

                        <CodeSnippet code={`import laswell_sdk
from laswell_sdk.models import ModelX9
from laswell_sdk.auth import DefaultCredentials

# Initialize credentials
creds = DefaultCredentials()

# Connect to the hardware node
robot = ModelX9(
    endpoint="wss://node.na-east.laswell.io",
    credentials=creds,
    auto_reconnect=True
)

robot.connect()`} />

                        <h3 className="text-xl font-display font-bold text-brand-text mb-4 mt-12 flex items-center gap-2">
                            <FileCode size={20} className="text-brand-blueprint" /> 2. Stream Consumption
                        </h3>
                        <p className="text-sm font-mono text-brand-text-muted leading-relaxed mb-4">
                            Once connected, you can subscribe to specific telemetry topics. The response payload will be delivered as a serialized JSON object at 100Hz.
                        </p>

                        <CodeSnippet code={`@robot.on_telemetry(topics=["kinematics", "power_draw"])
def handle_telemetry(payload):
    print(f"TCP Position: {payload.kinematics.tcp_pos}")
    print(f"Current Draw: {payload.power_draw.total_amps}A")
    
    if payload.power_draw.total_amps > 15.0:
        robot.trigger_emergency_stop()`} />

                        <div className="mt-16 p-6 border-l-2 border-brand-accent bg-brand-accent/5">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-2">Version History Logs</h4>
                            <ul className="space-y-3 font-mono text-xs text-brand-text-muted">
                                <li><span className="text-brand-text font-bold">v2.4.0</span> - Added auto_reconnect parameter to core SDK.</li>
                                <li><span className="text-brand-text font-bold">v2.3.5</span> - Deprecated REST polling in favor of absolute WebSockets.</li>
                                <li><span className="text-brand-text font-bold">v2.3.0</span> - Initial release of ModelX9 endpoint support.</li>
                            </ul>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default DocumentationPortal;
