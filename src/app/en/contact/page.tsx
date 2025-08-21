'use client';

import { motion } from 'framer-motion';
import AbstractBackground from '@/components/AbstractBackground';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AbstractBackground intensity="low" />
      
      <div className="relative z-20">
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
                CONTACT US
              </span>
            </motion.div>
            
            <motion.h1
              className="font-display text-5xl lg:text-7xl font-black mb-8 text-gradient-abstract"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              GET IN TOUCH
            </motion.h1>
            
            <motion.div
              className="font-bangers text-6xl lg:text-8xl mb-8 text-accent-neon"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Nom!Nom!
            </motion.div>

            <motion.p
              className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              For inquiries about the Nom!Nom! project,<br />
              please contact us at the email address below
            </motion.p>

            <motion.div
              className="luxury-card p-12 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-highlight/5 to-accent-glow/5" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl font-black mb-6 text-gradient-primary">
                  EMAIL ADDRESS
                </h2>
                
                <motion.a
                  href="mailto:sales@qurest.tech"
                  className="inline-block text-2xl lg:text-3xl font-bold text-accent-glow hover:text-white transition-colors duration-300 mb-8"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  sales@qurest.tech
                </motion.a>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💼</div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">Business Partnership</h3>
                    <p className="text-white/60 text-sm">Inquiries about corporate partnerships</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">Member Recruitment</h3>
                    <p className="text-white/60 text-sm">Inquiries about project participation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">Other Inquiries</h3>
                    <p className="text-white/60 text-sm">Questions about the project</p>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/50 text-sm font-display tracking-wider">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-white/60 text-sm mb-6">
                For more details about the project, please also see:
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/en/about"
                  className="btn-secondary px-8 py-3 text-sm font-bold tracking-[0.1em] uppercase"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ABOUT US
                </motion.a>
                <motion.a
                  href="/en/service"
                  className="btn-secondary px-8 py-3 text-sm font-bold tracking-[0.1em] uppercase"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  OUR PROJECTS
                </motion.a>
                <motion.a
                  href="/en/recruit"
                  className="btn-secondary px-8 py-3 text-sm font-bold tracking-[0.1em] uppercase"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  JOIN US
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}