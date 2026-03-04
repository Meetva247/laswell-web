import React from 'react';
import { motion } from 'framer-motion';

const shopItems = [
    { name: 'Motors', category: 'Actuators', price: '$120.00' },
    { name: 'Sensors', category: 'Perception', price: '$45.00' },
    { name: 'Batteries', category: 'Power', price: '$89.00' },
    { name: 'Controllers', category: 'Processing', price: '$199.00' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    },
};

const ShopItem = ({ item }) => {
    return (
        <motion.div
            variants={itemVariants}
            className="relative glass p-6 aspect-[4/5] flex flex-col group cursor-not-allowed rounded-sm overflow-hidden"
        >
            {/* "Coming Soon" Overlay */}
            <div className="absolute inset-0 z-20 glass-frosted opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <div className="border border-white/20 p-4">
                    <span className="text-xs font-syncopate uppercase tracking-widest font-bold">Stocking Soon</span>
                </div>
            </div>

            <div className="bg-white/5 aspect-square rounded-sm mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="w-16 h-1 bg-white/10" />
            </div>

            <div className="mt-auto">
                <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold mb-1 block">{item.category}</span>
                <h4 className="text-lg font-bold mb-2 text-brand-text">{item.name}</h4>
                <span className="text-brand-muted font-medium">{item.price}</span>
            </div>

        </motion.div>
    );
};

const ShopGrid = () => {
    return (
        <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-brand-text">Robotics <span className="text-brand-accent">&</span> Electronics</h2>
                    <p className="text-brand-muted uppercase tracking-widest text-xs">Curated Hardware for Builders</p>
                </div>

                <div className="text-brand-accent text-sm font-bold uppercase tracking-tighter">View Catalog // 04</div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {shopItems.map((item, index) => (
                    <ShopItem key={index} item={item} />
                ))}
            </motion.div>
        </section>
    );
};

export default ShopGrid;
