import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoreVertical, UserPlus, LogIn, LogOut, User } from 'lucide-react';
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
        localStorage.removeItem('laswell_user_data');
        setIsLoggedIn(false);
        setIsMenuOpen(false);
        window.dispatchEvent(new Event('authChange'));
    };
    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/#about' },
        { name: 'SERVICES', path: '/services' },
        { name: 'SHOP', path: '/shop' },
        { name: 'CUSTOM', path: '/#custom' },
    ];

    return (
        <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-transparent pointer-events-none">
            <Link to="/" className="flex items-center gap-2 pointer-events-auto">
                <span className="text-xl font-display font-bold text-brand-text tracking-tighter">
                    LASWELL
                </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 pointer-events-auto">
                {navLinks.map((link) => (
                    link.path.startsWith('/#') ? (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-xs font-bold text-brand-text/70 hover:text-brand-text transition-colors tracking-widest uppercase"
                        >
                            {link.name}
                        </a>
                    ) : (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-xs font-bold text-brand-text/70 hover:text-brand-text transition-colors tracking-widest uppercase"
                        >
                            {link.name}
                        </Link>
                    )
                ))}
            </div>


            <div className="flex items-center gap-4 pointer-events-auto">
                <Link
                    to="/build"
                    className="hidden md:flex items-center gap-2 px-4 py-2 bg-brand-accent text-[#0a0a0a] text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all border border-brand-accent shadow-[0_0_15px_rgba(0,216,255,0.2)] hover:shadow-[0_0_25px_rgba(0,216,255,0.4)]"
                >
                    Build Your Project
                </Link>
                <ThemeToggle />

                <div className="relative">
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-brand-text hover:text-brand-accent transition-colors rounded-full"
                        aria-label={isLoggedIn ? "User Profile" : "More options"}
                    >
                        {isLoggedIn ? <User size={20} /> : <MoreVertical size={20} />}
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
                                    {/* Mobile Navigation Links */}
                                    <div className="md:hidden border-b border-brand-accent/20 pb-1 mb-1">
                                        {navLinks.map((link) => (
                                            link.path.startsWith('/#') ? (
                                                <a
                                                    key={link.name}
                                                    href={link.path}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="block w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-brand-text hover:bg-brand-accent/10 transition-colors"
                                                >
                                                    {link.name}
                                                </a>
                                            ) : (
                                                <Link
                                                    key={link.name}
                                                    to={link.path}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="block w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-brand-text hover:bg-brand-accent/10 transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            )
                                        ))}
                                        <Link
                                            to="/build"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-brand-accent hover:bg-brand-accent/10 transition-colors"
                                        >
                                            BUILD YOUR PROJECT
                                        </Link>
                                    </div>

                                    {!isLoggedIn ? (
                                        <>
                                            <Link
                                                to="/auth"
                                                state={{ isSignup: true }}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-brand-text hover:bg-brand-accent/10 flex items-center gap-3 transition-colors group"
                                            >
                                                <UserPlus size={14} className="group-hover:text-brand-accent transition-colors" />
                                                Signup
                                            </Link>
                                            <Link
                                                to="/auth"
                                                state={{ isSignup: false }}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-brand-text hover:bg-brand-accent/10 flex items-center gap-3 transition-colors group"
                                            >
                                                <LogIn size={14} className="group-hover:text-brand-accent transition-colors" />
                                                Login
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <div className="px-4 py-2 border-b border-brand-accent/10">
                                                <p className="text-[10px] text-brand-text/50 uppercase tracking-tighter">Logged in as</p>
                                                <p className="text-xs font-bold text-brand-accent truncate">{userName || 'Member'}</p>
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
                                                className="w-full px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-red-500/80 hover:bg-red-500/10 hover:text-red-500 flex items-center gap-3 transition-colors group"
                                            >
                                                <LogOut size={14} className="group-hover:text-red-500 transition-colors" />
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
