import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const randomRange = (min, max) => Math.random() * (max - min) + min;

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
    const canvasRef = useRef(null);
    const buttonRef = useRef(null);
    const requestRef = useRef();

    useEffect(() => {
        if (state === 'success' && canvasRef.current && buttonRef.current) {
            triggerConfetti();
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [state]);

    const triggerConfetti = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const buttonRect = buttonRef.current.getBoundingClientRect();
        const btnX = buttonRect.left + buttonRect.width / 2;
        const btnY = buttonRect.top + buttonRect.height / 2;

        const confettiCount = 20;
        const sequinCount = 10;
        const gravityConfetti = 0.3;
        const gravitySequins = 0.55;
        const dragConfetti = 0.075;
        const dragSequins = 0.02;
        const terminalVelocity = 3;

        const colors = [
          { front : '#7b5cff', back: '#6245e0' },
          { front : '#b3c7ff', back: '#8fa5e5' },
          { front : '#5c86ff', back: '#345dd1' },
          { front : '#00D8FF', back: '#00A3CC' } 
        ];

        let confetti = [];
        let sequins = [];

        const initConfettoVelocity = (xRange, yRange) => {
            const x = randomRange(xRange[0], xRange[1]);
            const range = yRange[1] - yRange[0] + 1;
            let y = yRange[1] - Math.abs(randomRange(0, range) + randomRange(0, range) - range);
            if (y >= yRange[1] - 1) {
                y += (Math.random() < .25) ? randomRange(1, 3) : 0;
            }
            return { x: x, y: -y };
        };

        class Confetto {
            constructor() {
                this.randomModifier = randomRange(0, 99);
                this.color = colors[Math.floor(randomRange(0, colors.length))];
                this.dimensions = { x: randomRange(5, 9), y: randomRange(8, 15) };
                this.position = {
                    x: randomRange(btnX - buttonRect.width/4, btnX + buttonRect.width/4),
                    y: randomRange(btnY + 8, btnY + 24)
                };
                this.rotation = randomRange(0, 2 * Math.PI);
                this.scale = { x: 1, y: 1 };
                this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
            }
            update() {
                this.velocity.x -= this.velocity.x * dragConfetti;
                this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity);
                this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
                this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
            }
        }

        class Sequin {
            constructor() {
                this.color = colors[Math.floor(randomRange(0, colors.length))].back;
                this.radius = randomRange(1, 2);
                this.position = {
                    x: randomRange(btnX - buttonRect.width/3, btnX + buttonRect.width/3),
                    y: randomRange(btnY + 8, btnY + 24)
                };
                this.velocity = { x: randomRange(-6, 6), y: randomRange(-8, -12) };
            }
            update() {
                this.velocity.x -= this.velocity.x * dragSequins;
                this.velocity.y += gravitySequins;
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
            }
        }

        for (let i = 0; i < confettiCount; i++) confetti.push(new Confetto());
        for (let i = 0; i < sequinCount; i++) sequins.push(new Sequin());

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            confetti.forEach((confetto) => {
                let width = confetto.dimensions.x * confetto.scale.x;
                let height = confetto.dimensions.y * confetto.scale.y;
                ctx.translate(confetto.position.x, confetto.position.y);
                ctx.rotate(confetto.rotation);
                confetto.update();
                ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
                ctx.fillRect(-width / 2, -height / 2, width, height);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            });

            sequins.forEach((sequin) => {
                ctx.translate(sequin.position.x, sequin.position.y);
                sequin.update();
                ctx.fillStyle = sequin.color;
                ctx.beginPath();
                ctx.arc(0, 0, sequin.radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            });

            confetti = confetti.filter(c => c.position.y < canvas.height);
            sequins = sequins.filter(s => s.position.y < canvas.height);

            if (confetti.length > 0 || sequins.length > 0) {
                requestRef.current = requestAnimationFrame(render);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        };
        render();
    };

    return (
        <>
            <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]" />
            <motion.button
                ref={buttonRef}
                type="submit"
                whileHover={state === 'idle' ? { scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0, 216, 255, 0.5)" } : {}}
                whileTap={state === 'idle' ? { scale: 0.98 } : {}}
                className="relative w-full h-[56px] bg-transparent border-none overflow-hidden rounded-sm cursor-pointer outline-none flex items-center justify-center font-bold tracking-widest uppercase text-[#0a0a0a] z-10 hover:brightness-110 transition-all"
            >
                {/* Expanding Background Drop */}
                <motion.div 
                    className="absolute h-full rounded-sm z-0"
                    initial={{ width: "100%", backgroundColor: "#00D8FF" }}
                    animate={{ 
                        width: state === 'loading' ? '80%' : '100%', 
                        backgroundColor: state === 'success' ? '#10B981' : '#00D8FF' 
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ left: "50%", x: "-50%" }}
                />

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                        {state === 'idle' && (
                            <motion.div key="idle" className="flex items-center gap-2 absolute" exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}>
                                <motion.svg 
                                    initial={{ y: 20, opacity: 0 }} 
                                    animate={{ y: 0, opacity: 1 }} 
                                    transition={{ duration: 0.4 }}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12.2" className="w-[14px] text-[#0a0a0a] stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <polyline points="2,7.1 6.5,11.1 11,7.1 "/>
                                    <line x1="6.5" y1="1.2" x2="6.5" y2="10.3"/>
                                </motion.svg>
                                <SplitText text="SUBMIT" variant={letterUp} />
                            </motion.div>
                        )}

                        {state === 'loading' && (
                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.3 }} className="flex items-center absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" className="w-[22px] fill-[#0a0a0a] overflow-visible">
                                    <motion.circle cx="2.2" cy="10" r="1.6" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0 }} />
                                    <motion.circle cx="9.5" cy="10" r="1.6" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.1 }} />
                                    <motion.circle cx="16.8" cy="10" r="1.6" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.2 }} />
                                </svg>
                            </motion.div>
                        )}

                        {state === 'success' && (
                            <motion.div key="success" className="flex items-center gap-2 absolute" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <motion.svg 
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11" className="w-[14px] text-[#0a0a0a] stroke-current fill-none font-bold" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
        </>
    );
};

export default AnimatedSubmitButton;
