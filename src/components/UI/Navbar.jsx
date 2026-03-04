import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
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
                <span className="text-xl font-syncopate font-bold text-brand-text tracking-tighter">
                    INKVIBE <span className="text-brand-accent">X</span> LASWELL
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
                <ThemeToggle />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-brand-accent text-brand-bg font-bold text-xs uppercase tracking-widest rounded-sm"
                >
                    Portal
                </motion.button>
            </div>
        </nav>
    );
};

export default Navbar;
