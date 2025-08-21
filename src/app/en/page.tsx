'use client';

import Hero from "@/sections/Hero";
import Greeting from "@/sections/Greeting";
import NewsPage from "@/app/en/news/page";
import AbstractBackground from "@/components/AbstractBackground";
import ScrollReveal, { ScrollRevealStagger } from "@/components/ScrollReveal";
import Link from "next/link";
import { motion } from "framer-motion";

const realServices = [
  {
    id: 1,
    title: 'Nom!Nom!',
    description: 'Food truck rating platform for Ritsumeikan University OIC Campus',
    abstractElement: (
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-accent-highlight/40 to-accent-glow/40 blur-xl" />
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-accent-glow animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-accent-highlight/60 rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bangers text-2xl text-accent-neon/50">Nom!</div>
      </div>
    ),
    features: ['Food Truck Search', 'Review System', 'Student Community'],
    status: 'Launch Ready'
  },
  {
    id: 2,
    title: 'Nom!Nom! Mobile App',
    description: 'Mobile app development for better user experience',
    abstractElement: (
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-accent-abstract/40 to-accent-neon/40 blur-2xl" />
        <div className="absolute top-1/3 right-1/3 w-12 h-20 border-2 border-accent-abstract/50 rounded" />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-2 bg-accent-neon/40 rounded" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bangers text-xl text-accent-glow/50">Mobile</div>
      </div>
    ),
    features: ['Push Notifications', 'Offline Viewing', 'Location Integration'],
    status: 'In Development'
  },
  {
    id: 3,
    title: 'Nom!Nom! Nationwide',
    description: 'Scalable version for university campuses nationwide',
    abstractElement: (
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-white/20 to-gray-400/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/30 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white animate-ping" />
        <div className="absolute bottom-1/4 left-1/4 font-bangers text-lg text-white/50">Nation</div>
      </div>
    ),
    features: ['Multi-Campus Support', 'Scalable Design', 'University Partnerships'],
    status: 'Planned'
  },
];

const realCapabilities = [
  {
    id: 1,
    title: 'User Experience Design',
    description: 'Creating intuitive interfaces and features for students',
    abstractElement: (
      <div className="w-16 h-16 mx-auto mb-4 relative">
        <div className="absolute inset-0 border border-accent-glow rounded animate-pulse" />
        <div className="absolute inset-2 border border-accent-highlight rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute inset-4 bg-accent-abstract/40 rounded animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Community Building',
    description: 'Facilitating information sharing and communication among students',
    abstractElement: (
      <div className="w-16 h-16 mx-auto mb-4 relative">
        <div className="absolute top-2 left-2 w-3 h-3 bg-accent-neon/60 rounded-full animate-bounce" />
        <div className="absolute top-2 right-2 w-3 h-3 bg-accent-glow/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent-highlight/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white animate-ping" />
      </div>
    ),
  },
  {
    id: 3,
    title: 'Data Analysis',
    description: 'Analyzing user reviews to improve services',
    abstractElement: (
      <div className="w-16 h-16 mx-auto mb-4 relative">
        <div className="absolute inset-0 border-2 border-white/20" />
        <div className="absolute inset-2 bg-gradient-to-t from-accent-neon/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-glow animate-pulse" />
      </div>
    ),
  },
  {
    id: 4,
    title: 'Technology Innovation',
    description: 'Combining latest web and mobile technologies',
    abstractElement: (
      <div className="w-16 h-16 mx-auto mb-4 relative">
        <div className="absolute inset-0 border border-accent-highlight transform rotate-45 animate-spin" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-4 bg-accent-abstract/40 animate-pulse" />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* News Section */}
      <NewsPage />

      {/* Main Content */}
      <main className="relative bg-black">
        <AbstractBackground intensity="medium" />

        {/* Greeting Section */}
        <Greeting />

        {/* Services Section */}
        <section className="section-padding bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 abstract-overlay-1" />
          <div className="absolute inset-0 abstract-overlay-2" />
          
          {/* Large Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-accent-glow/30 to-accent-highlight/30 blur-3xl" />
          </div>
          <div className="absolute bottom-0 left-0 w-80 h-80 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-accent-abstract/30 to-accent-neon/30 blur-2xl" 
                 style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-20">
            <ScrollReveal className="text-center mb-20">
              <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
                OUR SERVICES
              </span>
              <h2 className="font-display responsive-text-4xl lg:responsive-text-5xl font-black mb-8 text-gradient-abstract heading-display">
                OUR PROJECTS
              </h2>
              <p className="responsive-text-lg text-white/70 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0 font-display tracking-wide">
                Current development projects and
                <br className="hidden md:block" />
                future service expansion plans
              </p>
            </ScrollReveal>

            <ScrollRevealStagger
              stagger={0.2}
              className="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 mb-20"
            >
              {realServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="luxury-card hover-lift p-12 group relative overflow-hidden cursor-pointer min-h-[400px] flex flex-col justify-between"
                  whileHover={{ y: -15, scale: 1.03, rotateY: 5 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {service.abstractElement}
                  
                  <div className="relative z-20">
                    <div className="text-center mb-8">
                      <h3 className="font-display text-2xl font-black mb-4 text-white group-hover:text-gradient-abstract transition-colors duration-300 tracking-wider">
                        {service.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-base font-light group-hover:text-white/90 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="mb-4">
                        <span className={`px-3 py-1 text-xs font-bold tracking-wider uppercase ${
                          service.status === 'Launch Ready' ? 'bg-accent-neon/20 text-accent-neon border border-accent-neon/30' :
                          service.status === 'In Development' ? 'bg-accent-highlight/20 text-accent-highlight border border-accent-highlight/30' :
                          'bg-accent-glow/20 text-accent-glow border border-accent-glow/30'
                        }`}>
                          {service.status}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="px-4 py-2 text-xs font-bold text-white/60 border border-white/20 font-display tracking-wider group-hover:border-accent-glow/50 group-hover:text-white/90 transition-all duration-300"
                            whileHover={{ x: 5, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </ScrollRevealStagger>

            <ScrollReveal delay={0.3} className="text-center">
              <Link href="/en/service">
                <motion.button
                  className="btn-primary px-16 py-6 text-lg font-black tracking-[0.15em]"
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.92 }}
                >
                  VIEW ALL PROJECTS
                </motion.button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section-padding bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 abstract-overlay-3" />
          
          {/* Floating Abstract Elements */}
          <div className="absolute top-1/4 left-10 w-32 h-32 opacity-20">
            <div className="w-full h-full border border-accent-glow animate-pulse" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          </div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 opacity-20">
            <div className="w-full h-full bg-accent-highlight/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-20">
            <ScrollReveal className="text-center mb-20">
              <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
                OUR APPROACH
              </span>
              <h2 className="font-display responsive-text-4xl lg:responsive-text-5xl font-black mb-8 text-gradient-primary heading-display">
                HOW WE WORK
              </h2>
              <p className="responsive-text-lg text-white/70 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0 font-display tracking-wide">
                User-centered service design and
                <br className="hidden md:block" />
                an approach combining cutting-edge technology
              </p>
            </ScrollReveal>

            <ScrollRevealStagger
              stagger={0.15}
              className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
              {realCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.id}
                  className="text-center p-10 luxury-card hover-lift group relative overflow-hidden cursor-pointer min-h-[300px] flex flex-col justify-center"
                  whileHover={{ y: -12, scale: 1.05, rotateX: 10 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="relative z-20">
                    {capability.abstractElement}
                    
                    <h3 className="text-lg font-black mb-4 text-white relative z-10 group-hover:text-gradient-abstract transition-colors duration-300 font-display tracking-wider">
                      {capability.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light relative z-10 group-hover:text-white/90 transition-colors duration-300">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </ScrollRevealStagger>
          </div>
        </section>

        {/* Current Status Section */}
        <section className="section-padding bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 particles-background" />
          
          {/* Large Abstract Visualization */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-accent-glow/20 to-accent-highlight/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-20">
            <ScrollReveal className="text-center mb-20">
              <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
                CURRENT STATUS
              </span>
              <h2 className="font-display responsive-text-4xl lg:responsive-text-5xl font-black mb-8 text-gradient-abstract heading-display">
                PROJECT PROGRESS
              </h2>
              <p className="responsive-text-lg text-white/70 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0 font-display tracking-wide">
                Current status of ongoing projects and
                <br className="hidden md:block" />
                future development plans
              </p>
            </ScrollReveal>

            <ScrollRevealStagger
              stagger={0.2}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"
            >
              <motion.div
                className="text-center group cursor-pointer relative"
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="luxury-card p-8 min-h-[200px] flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    className="font-bangers text-6xl lg:text-7xl font-black mb-4 filter drop-shadow-lg relative z-10"
                    whileHover={{ scale: 1.2, y: -5 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <span className="text-accent-neon group-hover:text-white transition-colors duration-300 neon-glow">
                      Nom!Nom!
                    </span>
                  </motion.div>
                  
                  <div className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-2 group-hover:text-white transition-colors duration-300 font-display">
                    MAIN PROJECT
                  </div>
                  
                  <div className="text-white/60 text-xs group-hover:text-white/90 transition-colors duration-300">
                    For Ritsumeikan University OIC
                  </div>
                  
                  <motion.div 
                    className="w-8 h-0.5 bg-gradient-to-r from-accent-glow to-accent-highlight mx-auto mt-4 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ width: '4rem', height: '2px' }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="text-center group cursor-pointer relative"
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="luxury-card p-8 min-h-[200px] flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    className="font-display text-4xl lg:text-5xl font-black mb-4 filter drop-shadow-lg relative z-10"
                    whileHover={{ scale: 1.2, y: -5 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <span className="text-accent-highlight group-hover:text-white transition-colors duration-300">
                      2
                    </span>
                  </motion.div>
                  
                  <div className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-2 group-hover:text-white transition-colors duration-300 font-display">
                    ACTIVE PROJECTS
                  </div>
                  
                  <div className="text-white/60 text-xs group-hover:text-white/90 transition-colors duration-300">
                    App Development & Nationwide Expansion
                  </div>
                  
                  <motion.div 
                    className="w-8 h-0.5 bg-gradient-to-r from-accent-glow to-accent-highlight mx-auto mt-4 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ width: '4rem', height: '2px' }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="text-center group cursor-pointer relative"
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="luxury-card p-8 min-h-[200px] flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    className="font-display text-4xl lg:text-5xl font-black mb-4 filter drop-shadow-lg relative z-10"
                    whileHover={{ scale: 1.2, y: -5 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <span className="text-accent-glow group-hover:text-white transition-colors duration-300">
                      ?
                    </span>
                  </motion.div>
                  
                  <div className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-2 group-hover:text-white transition-colors duration-300 font-display">
                    USER COUNT
                  </div>
                  
                  <div className="text-white/60 text-xs group-hover:text-white/90 transition-colors duration-300">
                    TBD - Pre-launch
                  </div>
                  
                  <motion.div 
                    className="w-8 h-0.5 bg-gradient-to-r from-accent-glow to-accent-highlight mx-auto mt-4 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ width: '4rem', height: '2px' }}
                  />
                </div>
              </motion.div>
            </ScrollRevealStagger>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 abstract-overlay-1" />
          
          <div className="max-w-7xl mx-auto relative z-20">
            <ScrollReveal className="text-center mb-16">
              <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
                GET IN TOUCH
              </span>
              <h2 className="font-display responsive-text-4xl lg:responsive-text-5xl font-black mb-8 text-gradient-abstract heading-display">
                CONNECT WITH US
              </h2>
              <p className="responsive-text-lg text-white/70 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0 font-display tracking-wide mb-12">
                Contact us for project inquiries
                <br className="hidden md:block" />
                We're waiting for your new ideas
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link href="/en/contact">
                  <motion.button
                    className="btn-primary px-16 py-6 text-lg font-black tracking-[0.15em]"
                    whileHover={{ scale: 1.08, y: -5 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    CONTACT US
                  </motion.button>
                </Link>
                <Link href="/en/about">
                  <motion.button
                    className="btn-secondary px-16 py-6 text-lg font-black tracking-[0.15em]"
                    whileHover={{ scale: 1.08, y: -5 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    ABOUT US
                  </motion.button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Abstract Footer */}
        <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 sm:px-12 relative overflow-hidden">
          <div className="absolute inset-0 abstract-overlay-3" />
          
          {/* Floating abstract elements */}
          <div className="absolute top-10 left-10 w-20 h-20 opacity-20">
            <div className="w-full h-full border border-accent-glow animate-spin" style={{ animationDuration: '10s' }} />
          </div>
          <div className="absolute bottom-10 right-10 w-16 h-16 opacity-20">
            <div className="w-full h-full bg-accent-highlight/30 rounded-full animate-pulse" />
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-20">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-display text-5xl font-black mb-6 text-gradient-abstract">QUREST</h3>
              <p className="text-lg text-white/70 font-light font-display tracking-[0.2em] uppercase">
                CREATING DIGITAL EXPERIENCES
              </p>
              <div className="w-32 h-0.5 bg-gradient-to-r from-accent-glow to-accent-highlight mx-auto mt-8" />
            </motion.div>
            
            <motion.div 
              className="border-t border-white/10 pt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-white/50 text-sm font-light font-display tracking-wider">
                © 2025 QUREST. ALL RIGHTS RESERVED.
              </p>
            </motion.div>
          </div>
        </footer>
      </main>
    </>
  );
}