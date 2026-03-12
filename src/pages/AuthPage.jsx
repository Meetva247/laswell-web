import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    User,
    Mail,
    Lock,
    ArrowRight,
    ShieldCheck,
    Cpu,
    UserPlus,
    LogIn
} from 'lucide-react';

const AuthInput = ({ icon: Icon, type, placeholder, value, onChange, label }) => (
    <div className="mb-6">
        <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-brand-muted mb-2 ml-1">
            {label}
        </label>
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted group-focus-within:text-brand-accent transition-colors">
                <Icon size={18} />
            </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full bg-brand-bg/50 border border-brand-border px-12 py-4 text-xs font-bold uppercase tracking-[0.1em] focus:border-brand-accent outline-none transition-all rounded-sm placeholder:text-brand-muted/30"
                required
            />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-brand-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
        </div>
    </div>
);

const AuthPage = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (location.state?.isSignup) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location]);

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        role: 'Student',
        otherRole: '',
        password: '',
        changePassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validatePassword = (pass) => {
        // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(pass);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!isLogin) {
            if (!validatePassword(formData.password)) {
                setError('Protocol rejection: Password must be 8+ characters and include uppercase, lowercase, numbers, and special symbols.');
                return;
            }
            if (formData.password !== formData.changePassword) {
                setError('Protocol mismatch: Passwords do not match.');
                return;
            }
        }

        // Simulate Auth Logic
        const userRole = formData.role === 'Other' ? formData.otherRole : formData.role;
        const userData = {
            name: formData.name || formData.username,
            email: formData.email,
            role: userRole,
            isLoggedIn: true
        };

        localStorage.setItem('laswell_auth', 'true');
        localStorage.setItem('laswell_user_data', JSON.stringify(userData));
        localStorage.setItem('laswell_user', formData.name || formData.username || formData.email);

        window.dispatchEvent(new Event('authChange'));
        navigate('/profile');
    };

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen text-brand-text flex items-center justify-center px-6">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full relative"
            >
                <div className="glass border border-brand-border p-8 md:p-12 rounded-sm relative overflow-hidden">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent" />

                    <div className="text-center mb-10">
                        <div className="inline-flex p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-sm mb-6 text-brand-accent">
                            {isLogin ? <LogIn size={24} /> : <UserPlus size={24} />}
                        </div>
                        <h1 className="text-2xl font-display font-bold uppercase tracking-tighter mb-2">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h1>
                        <p className="text-brand-muted text-xs font-mono tracking-widest uppercase italic">
                            {isLogin ? 'Access your engineering portal' : 'Join the LASWELL ecosystem'}
                        </p>
                        
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] uppercase font-bold tracking-tighter rounded-sm"
                            >
                                {error}
                            </motion.div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? 'login' : 'signup'}
                                initial={{ opacity: 0, x: isLogin ? -10 : 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isLogin ? 10 : -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {!isLogin && (
                                    <>
                                        <AuthInput
                                            label="Full Name"
                                            icon={User}
                                            type="text"
                                            placeholder="laswell operator"
                                            value={formData.name.toLowerCase()}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value.toLowerCase() })}
                                        />
                                        <AuthInput
                                            label="Email"
                                            icon={Mail}
                                            type="email"
                                            placeholder="auth@laswell.com"
                                            value={formData.email.toLowerCase()}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value.toLowerCase() })}
                                        />
                                        <div className="mb-6">
                                            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-brand-muted mb-2 ml-1">
                                                Role / Position
                                            </label>
                                            <div className="relative group">
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted group-focus-within:text-brand-accent transition-colors">
                                                    <Cpu size={18} />
                                                </div>
                                                <select
                                                    value={formData.role}
                                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                    className="w-full bg-brand-bg/50 border border-brand-border px-12 py-4 text-xs font-bold uppercase tracking-[0.1em] focus:border-brand-accent outline-none transition-all rounded-sm appearance-none"
                                                >
                                                    <option value="Student">Student</option>
                                                    <option value="Job person">Job person</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-brand-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
                                            </div>
                                        </div>
                                        {formData.role === 'Other' && (
                                            <AuthInput
                                                label="Please Specify Role"
                                                icon={UserPlus}
                                                type="text"
                                                placeholder="YOUR POSITION"
                                                value={formData.otherRole}
                                                onChange={(e) => setFormData({ ...formData, otherRole: e.target.value })}
                                            />
                                        )}
                                    </>
                                )}
                                {isLogin && (
                                    <AuthInput
                                        label="Email"
                                        icon={Mail}
                                        type="email"
                                        placeholder="auth@laswell.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value.toLowerCase() })}
                                    />
                                )}
                                <AuthInput
                                    label="Password"
                                    icon={Lock}
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                {!isLogin && (
                                    <AuthInput
                                        label="Change Password"
                                        icon={ShieldCheck}
                                        type="password"
                                        placeholder="••••••••"
                                        value={formData.changePassword}
                                        onChange={(e) => setFormData({ ...formData, changePassword: e.target.value })}
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255,107,0,0.15)" }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-4 bg-brand-accent text-brand-bg font-bold uppercase tracking-[0.1em] text-xs flex items-center justify-center gap-3 mt-4"
                        >
                            {isLogin ? 'Initialize Session' : 'Register Protocol'}
                            <ArrowRight size={14} />
                        </motion.button>
                    </form>

                    <div className="mt-8 text-center border-t border-brand-border pt-8">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-[10px] font-mono uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors"
                        >
                            {isLogin ? "Don't have an account? Sign Up" : "Already registered? Login"}
                        </button>
                    </div>

                    {/* Bottom Decorative Element */}
                    <div className="absolute bottom-4 right-4 opacity-10">
                        <Cpu size={40} className="text-brand-accent" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthPage;
