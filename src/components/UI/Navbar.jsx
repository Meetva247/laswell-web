import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoreVertical, UserPlus, LogIn, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const checkAuth = () => {
            const auth = localStorage.getItem('laswell_auth') === 'true';
            setIsLoggedIn(auth);
            setUserName(localStorage.getItem('laswell_user') || '');
        };

        checkAuth();
        window.addEventListener('authChange', checkAuth);
        return () => window.removeEventListener('authChange', checkAuth);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('laswell_auth');
        localStorage.removeItem('laswell_user');
        setIsLoggedIn(false);
        setIsMenuOpen(false);
        window.dispatchEvent(new Event('authChange'));
    };
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#about' },
        { name: 'Services', path: '/services' },
        { name: 'Shop', path: '/shop' },
        { name: 'Custom', path: '/#custom' },
    ];

    return (
        <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center glass border-none">
            <Link to="/" className="flex items-center gap-2">
                <span className="text-xl font-display font-bold text-brand-text tracking-tighter">
                    LASWELL
                </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    link.path.startsWith('/#') ? (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-sm font-medium text-brand-text/70 hover:text-brand-accent transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ) : (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-sm font-medium text-brand-text/70 hover:text-brand-accent transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    )
                ))}
            </div>


            <div className="flex items-center gap-4">
                <Link to="/build">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden lg:flex px-6 py-2 btn-color-flex text-brand-bg font-bold text-xs uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all"
                    >
                        Build Your Project
                    </motion.button>
                </Link>
                <ThemeToggle />

                <div className="relative">
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-brand-text hover:text-brand-accent transition-colors rounded-full"
                        aria-label="More options"
                    >
                        <MoreVertical size={20} />
                    </motion.button>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 mt-2 w-48 glass rounded-sm shadow-xl border border-brand-accent/20 overflow-hidden"
                            >
                                <div className="py-1">
                                    {!isLoggedIn ? (
                                        <>
                                            <Link
                                                to="/auth"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-brand-text hover:bg-brand-accent/10 flex items-center gap-3 transition-colors group"
                                            >
                                                <UserPlus size={14} className="group-hover:text-brand-accent transition-colors" />
                                                Signup
                                            </Link>
                                            <Link
                                                to="/auth"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-brand-text hover:bg-brand-accent/10 flex items-center gap-3 transition-colors group"
                                            >
                                                <LogIn size={14} className="group-hover:text-brand-accent transition-colors" />
                                                Login
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <div className="px-4 py-2 border-b border-brand-border mb-1">
                                                <p className="text-[8px] font-mono text-brand-muted uppercase tracking-tighter">Active Session</p>
                                                <p className="text-[10px] font-bold text-brand-accent truncate uppercase">{userName}</p>
                                            </div>
                                            <Link
                                                to="/profile"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-brand-text hover:bg-brand-accent/10 flex items-center gap-3 transition-colors group"
                                            >
                                                <User size={14} className="group-hover:text-brand-accent transition-colors" />
                                                Profile
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-brand-secondary hover:bg-brand-secondary/10 flex items-center gap-3 transition-colors group"
                                            >
                                                <LogOut size={14} className="group-hover:text-brand-secondary transition-colors" />
                                                Logout
                                            </button>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
