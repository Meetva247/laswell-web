import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    User,
    Settings,
    Shield,
    Award,
    Cpu,
    Mail,
    Briefcase,
    Calendar,
    LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileStat = ({ icon: Icon, label, value, color }) => (
    <div className="p-6 glass border border-brand-border rounded-sm hover:border-brand-accent/30 transition-all group">
        <div className={`w-12 h-12 rounded-sm mb-4 flex items-center justify-center border border-${color}/20 bg-${color}/5 text-${color}`}>
            <Icon size={20} />
        </div>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-muted mb-1">{label}</p>
        <p className="text-xl font-display font-bold text-brand-text uppercase">{value}</p>
    </div>
);

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('laswell_user_data');
        if (data) {
            setUser(JSON.parse(data));
        } else {
            navigate('/auth');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('laswell_auth');
        localStorage.removeItem('laswell_user');
        localStorage.removeItem('laswell_user_data');
        window.dispatchEvent(new Event('authChange'));
        navigate('/');
    };

    if (!user) return null;

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen text-brand-text px-6 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blueprint/5 blur-[120px] rounded-full -ml-64 -mb-64" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass border border-brand-border p-8 md:p-12 rounded-sm mb-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-accent to-brand-bg opacity-50" />

                    <div className="w-32 h-32 rounded-sm border-2 border-brand-accent p-1 bg-brand-bg relative group">
                        <div className="w-full h-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-105 transition-transform duration-500">
                            <User size={64} />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-brand-accent text-brand-bg p-2 rounded-full border-2 border-brand-bg">
                            <Shield size={16} />
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-2">
                            {user.name || 'Anonymous Operator'}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <span className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                                {user.role}
                            </span>
                            <span className="flex items-center gap-2 text-brand-muted text-xs font-mono">
                                <Mail size={12} /> {user.email}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleLogout}
                            className="p-4 border border-brand-secondary/20 text-brand-secondary hover:bg-brand-secondary/10 transition-colors flex items-center gap-3 text-xs font-bold uppercase tracking-widest rounded-sm"
                        >
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </motion.div>

                {/* Grid Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <ProfileStat icon={Award} label="Safety Status" value="Certified" color="brand-blueprint" />
                    <ProfileStat icon={Cpu} label="Compute Tokens" value="482.5 XP" color="brand-accent" />
                    <ProfileStat icon={Briefcase} label="Active Quotes" value="03" color="brand-secondary" />
                    <ProfileStat icon={Calendar} label="Join Date" value="Mar 2024" color="brand-muted" />
                </div>

                {/* Secondary Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 glass border border-brand-border p-8 rounded-sm">
                        <h2 className="text-xl font-display font-bold uppercase mb-8 flex items-center gap-3">
                            <Settings size={20} className="text-brand-accent" /> Account Authorization
                        </h2>
                        <div className="space-y-6 max-w-md">
                            <div>
                                <p className="text-[10px] font-mono uppercase tracking-widest text-brand-muted mb-2">Primary Identifier</p>
                                <p className="p-4 bg-brand-bg/50 border border-brand-border text-sm font-mono text-brand-text rounded-sm">
                                    {user.email}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] font-mono uppercase tracking-widest text-brand-muted mb-2">Designation</p>
                                <p className="p-4 bg-brand-bg/50 border border-brand-border text-sm font-mono text-brand-text rounded-sm uppercase">
                                    {user.role}
                                </p>
                            </div>
                            <button className="px-8 py-3 bg-brand-accent/10 border border-brand-accent text-brand-accent text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-brand-bg transition-all">
                                Update Credentials
                            </button>
                        </div>
                    </div>

                    <div className="glass border border-brand-border p-8 rounded-sm relatives overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-lg font-display font-bold uppercase mb-6">Support Portal</h3>
                            <p className="text-sm text-brand-muted font-mono mb-8 leading-relaxed">
                                Need technical assistance or a custom manufacturing quote revision? Open a support ticket below.
                            </p>
                            <button className="w-full py-4 border border-brand-border text-brand-text hover:border-brand-accent hover:text-brand-accent transition-all text-xs font-bold uppercase tracking-widest">
                                Open Ticket
                            </button>
                        </div>
                        <Cpu size={120} className="absolute bottom-[-40px] right-[-40px] text-brand-accent/5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
