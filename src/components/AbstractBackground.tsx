'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingElementProps {
  index: number;
  total: number;
}

const FloatingElement = ({ index, total }: FloatingElementProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    // Use deterministic position based on index to avoid hydration mismatch
    const x = ((index * 37) % 100);
    const y = ((index * 73 + 23) % 100);
    setPosition({ x, y });
  }, [index]);

  const shapes = [
    // Circle
    <div key="circle" className="w-full h-full border border-white/10 rounded-full" />,
    // Triangle
    <div key="triangle" className="w-full h-full border border-accent-glow/20" 
         style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />,
    // Square
    <div key="square" className="w-full h-full border border-accent-highlight/15" />,
    // Hexagon
    <div key="hexagon" className="w-full h-full border border-accent-abstract/20" 
         style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />,
    // Diamond
    <div key="diamond" className="w-full h-full border border-accent-neon/15 rotate-45" />,
  ];

  const size = 12 + (index % 3) * 8; // Varying sizes: 12px, 20px, 28px

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 10, 0],
        rotate: [0, 360],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 8 + (index % 4) * 2,
        delay: (index * 0.5) % 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {shapes[index % shapes.length]}
    </motion.div>
  );
};

interface AbstractBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function AbstractBackground({ intensity = 'medium', className = '' }: AbstractBackgroundProps) {
  const elementCount = {
    low: 15,
    medium: 30,
    high: 50
  }[intensity];

  const elements = Array.from({ length: elementCount }, (_, i) => i);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      {/* Abstract overlays */}
      <div className="absolute inset-0 abstract-overlay-1" />
      <div className="absolute inset-0 abstract-overlay-2" />
      
      {/* Floating elements */}
      {elements.map((index) => (
        <FloatingElement key={index} index={index} total={elementCount} />
      ))}
      
      {/* Large background shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-accent-glow/30 to-accent-highlight/30 blur-3xl" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-5"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-accent-abstract/40 to-accent-neon/30 blur-2xl" 
             style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
      </motion.div>
      
      {/* Particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-glow rounded-full"
            style={{
              left: `${((i * 47 + 13) % 100)}%`,
              top: `${((i * 83 + 29) % 100)}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 6,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}