import React from 'react';
import { motion } from 'framer-motion';
import {
    Package,
    Truck,
    ShieldCheck,
    BookOpen,
    Headphones,
    ArrowRight,
    Sparkles
} from 'lucide-react';

const ShopCategory = ({ title, description, image, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative overflow-hidden aspect-square glass border border-brand-border rounded-sm hover:border-brand-accent/50 transition-all duration-500"
    >
        {/* Background Image */}
        <div className="absolute inset-0">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
            <h3 className="text-lg font-display font-bold uppercase mb-1">{title}</h3>
            <p className="text-[10px] text-brand-muted tracking-widest font-mono group-hover:text-brand-accent transition-colors">
                {description}
            </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Sparkles size={16} className="text-brand-accent animate-pulse" />
        </div>
    </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="p-8 glass border border-brand-border flex flex-col items-center text-center group hover:border-brand-accent/30 transition-colors">
        <div className="w-16 h-16 bg-brand-accent/5 rounded-sm flex items-center justify-center mb-6 text-brand-accent border border-brand-accent/10 group-hover:scale-110 transition-transform">
            <Icon size={32} />
        </div>
        <h4 className="text-lg font-display font-bold uppercase mb-4">{title}</h4>
        <p className="text-brand-muted text-sm leading-relaxed max-w-[250px]">
            {description}
        </p>
    </div>
);

const ShopPage = () => {
    const categories = [
        { title: "Motors", description: "Servo and stepper motors", image: "/shop_motors.png" },
        { title: "Sensors", description: "Temperature, distance, motion", image: "/shop_sensors.png" },
        { title: "Batteries", description: "LiPo, NiMH, and more", image: "/shop_batteries.png" },
        { title: "Cameras", description: "Vision systems", image: "/shop_cameras.png" },
        { title: "Controllers", description: "Microcontrollers & boards", image: "/shop_controllers.png" },
        { title: "Power Supply", description: "Regulators and converters", image: "/shop_power.png" },
        { title: "Mechanical", description: "Gears, wheels, chassis", image: "/shop_mechanical.png" },
        { title: "Kits", description: "Complete robot kits", image: "/shop_kits.png" },
    ];

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen text-brand-text">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="relative p-12 md:p-20 text-center overflow-hidden border border-brand-accent/20 rounded-sm">
                    {/* Animated Background Mesh */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-accent)_1px,_transparent_1px)] bg-[size:40px_40px]" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative z-10"
                    >
                        <span className="inline-block px-4 py-1 bg-brand-accent/10 text-brand-accent border border-brand-accent/20 rounded-full text-[10px] font-mono tracking-[0.5em] mb-8 font-bold animate-pulse">
                            Coming Soon
                        </span>
                        <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tighter">
                            Robotics & <span className="text-brand-accent">Electronics</span> Store
                        </h1>
                        <p className="text-brand-muted max-w-2xl mx-auto text-base md:text-lg font-mono tracking-tight leading-relaxed mb-12">
                            Your one-stop shop for robotics components, electronics, and maker supplies. We're curating the world's finest engineering components.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 209, 255, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-brand-accent text-brand-bg font-bold uppercase tracking-widest text-xs"
                            >
                                Notify Me on Launch
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border border-brand-accent/30 text-brand-accent font-bold uppercase tracking-widest text-xs hover:bg-brand-accent/5"
                            >
                                Browse Preview
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Category Grid */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="flex items-center justify-between mb-12 border-b border-brand-border pb-6">
                    <h2 className="text-2xl font-display font-bold uppercase">Preview Categories</h2>
                    <div className="flex items-center gap-2 text-brand-muted text-[10px] tracking-widest font-mono">
                        <span>Scroll to Explore</span>
                        <ArrowRight size={12} className="text-brand-accent" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((cat, i) => (
                        <ShopCategory key={i} {...cat} index={i} />
                    ))}
                </div>
            </div>

            {/* Value Propositions */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <h2 className="text-3xl font-display font-bold uppercase mb-16 text-center">What to <span className="text-brand-accent">Expect</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <FeatureCard
                        icon={Truck}
                        title="Fast Shipping"
                        description="Quick processing and reliable delivery to get your projects moving without delay."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Quality Products"
                        description="Curated selection of reliable components from trusted global manufacturers."
                    />
                    <FeatureCard
                        icon={BookOpen}
                        title="Documentation"
                        description="Detailed specs, datasheets, and example code for every product in our catalog."
                    />
                    <FeatureCard
                        icon={Headphones}
                        title="Expert Support"
                        description="Technical assistance from our experienced in-house robotics engineering team."
                    />
                </div>
            </div>

            {/* Footer CTA */}
            <div className="max-w-3xl mx-auto px-6 text-center">
                <div className="glass border border-brand-border p-12 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
                    <h3 className="text-xl font-display font-bold uppercase mb-4">Want Early Access?</h3>
                    <p className="text-brand-muted text-sm font-mono mb-8">Join the waitlist for exclusive discounts and beta tester privileges.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="ENGINEER@COMPANY.COM"
                            className="flex-1 bg-brand-bg border border-brand-border px-6 py-3 text-xs font-mono focus:border-brand-accent outline-none transition-colors"
                        />
                        <button className="px-6 py-3 bg-brand-accent text-brand-bg font-bold uppercase tracking-widest text-[10px] whitespace-nowrap">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
