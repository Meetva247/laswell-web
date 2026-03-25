import React from 'react';

const AnimMasterText = ({ text, className = "" }) => {
    const chars = text.split('');

    return (
        <span className={`group relative inline-block leading-none cursor-pointer ${className}`}>
            <span className="relative z-10 inline-block whitespace-nowrap text-current">
                {chars.map((char, i) => (
                    <span 
                        key={i} 
                        className="inline-block transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-[0.05em]" 
                        style={{ transitionDelay: `${i * 30}ms` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </span>
            <span 
                className="absolute inset-0 z-20 inline-block whitespace-nowrap pointer-events-none"
                style={{
                    WebkitTextStroke: '1px currentColor',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    transform: 'skewX(-6deg)'
                }}
            >
                {chars.map((char, i) => (
                    <span 
                        key={i} 
                        className="inline-block transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-0 translate-y-[0.15em] group-hover:opacity-100 group-hover:-translate-y-[0.05em]" 
                        style={{ transitionDelay: `${i * 30}ms` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </span>
        </span>
    );
};

export default AnimMasterText;
