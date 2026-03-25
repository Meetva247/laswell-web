import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Framer motion variants for letter staggering
const letterContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
    exit: { opacity: 0, transition: { staggerChildren: 0.03, staggerDirection: -1 } }
};

const letterUp = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "tween", ease: "easeOut", duration: 0.3 } },
    exit: { y: -15, opacity: 0, transition: { type: "tween", ease: "easeIn", duration: 0.2 } }
};

const letterLeft = {
    hidden: { x: 10, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "tween", ease: "easeOut", duration: 0.3 } },
    exit: { x: -10, opacity: 0, transition: { type: "tween", ease: "easeIn", duration: 0.2 } }
};

const SplitText = ({ text, variant }) => (
    <motion.span variants={letterContainer} initial="hidden" animate="visible" exit="exit" className="flex">
        {text.split('').map((char, i) => (
            <motion.span key={i} variants={variant} className="relative inline-block whitespace-pre">
                {char}
            </motion.span>
        ))}
    </motion.span>
);

const AnimatedSubmitButton = ({ state }) => {
    return (
        <motion.button
            type="submit"
            whileHover={state === 'idle' ? { backgroundColor: "#ffffff" } : {}}
            whileTap={state === 'idle' ? { scale: 0.98 } : {}}
            className="relative w-full h-[56px] bg-black border-2 border-white overflow-hidden rounded-none cursor-pointer outline-none flex items-center justify-center font-bold tracking-widest uppercase text-white hover:text-black z-10 transition-colors"
        >
            {/* Expanding Background Drop */}
            <motion.div 
                className="absolute h-full rounded-none z-0 bg-white"
                initial={{ width: "0%" }}
                animate={{ 
                    width: state === 'loading' ? '80%' : state === 'success' ? '100%' : '0%'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ left: "50%", x: "-50%" }}
            />

            <div className="relative z-10 w-full h-full flex items-center justify-center mix-blend-difference text-[#aaaaaa]">
                <AnimatePresence mode="popLayout">
                    {state === 'idle' && (
                        <motion.div key="idle" className="flex items-center gap-2 absolute" exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}>
                            <motion.svg 
                                initial={{ y: 20, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                transition={{ duration: 0.4 }}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12.2" className="w-[14px] stroke-white fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <polyline points="2,7.1 6.5,11.1 11,7.1 "/>
                                <line x1="6.5" y1="1.2" x2="6.5" y2="10.3"/>
                            </motion.svg>
                            <SplitText text="SUBMIT" variant={letterUp} />
                        </motion.div>
                    )}

                    {state === 'loading' && (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.3 }} className="flex items-center absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" className="w-[22px] fill-white overflow-visible">
                                <motion.circle cx="2.2" cy="10" r="1.6" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0 }} />
                                <motion.circle cx="9.5" cy="10" r="1.6" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.1 }} />
                                <motion.circle cx="16.8" cy="10" r="1.6" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.2 }} />
                            </svg>
                        </motion.div>
                    )}

                    {state === 'success' && (
                        <motion.div key="success" className="flex items-center gap-2 absolute" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <motion.svg 
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11" className="w-[14px] stroke-black fill-none font-bold" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <motion.polyline 
                                    points="1.4,5.8 5.1,9.5 11.6,2.1 " 
                                    initial={{ pathLength: 0 }} 
                                    animate={{ pathLength: 1 }} 
                                    transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }} 
                                />
                            </motion.svg>
                            <SplitText text="SUCCESS" variant={letterLeft} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.button>
    );
};

export default AnimatedSubmitButton;
