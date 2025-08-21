'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

const AbstractParticles = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-accent-glow rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 6,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-white/10 geometric-shape"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="absolute top-60 right-20 w-16 h-16 border border-accent-highlight/20 geometric-shape"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          rotate: -360,
          y: [-10, 10, -10],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 border border-accent-glow/30 geometric-shape rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default function Hero() {
  const controls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await controls.start('visible');
    };
    sequence();
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Abstract Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0" />
      <div className="absolute inset-0 abstract-overlay-1 z-5" />
      <div className="absolute inset-0 abstract-overlay-2 z-5" />
      <div className="absolute inset-0 abstract-overlay-3 z-5" />
      
      {/* Dynamic Elements */}
      <AbstractParticles />
      <GeometricShapes />

      {/* Large Abstract Images */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 opacity-20"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-accent-highlight/30 to-accent-glow/30 blur-3xl rounded-full" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 opacity-15"
          initial={{ opacity: 0, scale: 0, rotate: 180 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-accent-abstract/40 to-accent-neon/30 blur-2xl" 
               style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-30 flex flex-col justify-center items-center h-full text-white text-center px-6 max-w-6xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            Student Innovation Project
          </motion.span>
        </motion.div>
        
        <motion.h1 
          className="font-display responsive-text-4xl lg:responsive-text-5xl xl:text-9xl font-black mb-12 leading-tight heading-display text-balance"
          variants={titleVariants}
        >
          <motion.div 
            className="block font-bangers text-accent-neon mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Nom!Nom!
          </motion.div>
          <motion.div 
            className="block text-white text-4xl lg:text-6xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            QUREST
          </motion.div>
        </motion.h1>
        
        <motion.p 
          className="responsive-text-lg sm:responsive-text-xl text-white/70 max-w-4xl leading-relaxed font-light px-4 sm:px-0 mb-8 font-display tracking-wider"
          variants={itemVariants}
        >
          立命館大学OICキャンパスのキッチンカー評価プラットフォーム
          <br className="hidden sm:block" />
          学生による、学生のためのプロジェクト
        </motion.p>
        
        <motion.div
          className="flex items-center gap-6 text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-16 font-display"
          variants={itemVariants}
        >
          <div className="w-16 h-px bg-accent-glow"></div>
          <span>Student • Community • Innovation</span>
          <div className="w-16 h-px bg-accent-highlight"></div>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-8 px-4 sm:px-0"
          variants={itemVariants}
        >
          <motion.button
            className="btn-primary px-12 py-6 text-base font-black tracking-[0.15em]"
            whileHover={{ scale: 1.08, y: -6 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.3 }}
          >
            EXPLORE
          </motion.button>
          <motion.button
            className="btn-secondary px-12 py-6 text-base font-black tracking-[0.15em]"
            whileHover={{ scale: 1.08, y: -6 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.3 }}
          >
            DISCOVER
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Abstract Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-white/30 rounded-none flex justify-center relative overflow-hidden"
          animate={{ 
            borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,0,102,0.8)', 'rgba(0,255,255,0.8)', 'rgba(255,255,255,0.3)']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-4 bg-white rounded-full mt-2"
            animate={{ y: [0, 16, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}