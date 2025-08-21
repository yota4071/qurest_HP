'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import AbstractBackground from '@/components/AbstractBackground';

const currentProjects = [
  {
    id: 1,
    title: 'Nom!Nom!',
    description: 'Food truck rating platform for Ritsumeikan University OIC Campus',
    longDescription: 'A platform that allows students to easily search and rate food trucks. With the cooperation of Ritsumeikan University, we aim to enrich students\' lunch time. Many companies have also shown interest, making it a notable project that serves as excellent material for job interviews (gaku-chika).',
    status: 'Launch Ready',
    features: ['Food Truck Search', 'Review & Rating System', 'Student Community Features', 'Favorites Function', 'Operating Hours & Location Display'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    highlights: ['University-approved project', 'Multiple companies showing interest', 'Student-led development', 'Perfect for gaku-chika'],
    color: 'from-accent-neon to-accent-glow',
    abstractElement: (
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-accent-neon/40 to-accent-glow/40 blur-2xl" />
        <div className="absolute top-1/4 left-1/4 w-12 h-12 border border-accent-neon animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-accent-glow rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bangers text-3xl text-accent-neon/60">Nom!</div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Nom!Nom! Mobile App',
    description: 'iOS & Android mobile application development',
    longDescription: 'Following the success of the web platform, we are developing a mobile app project to provide a more convenient mobile experience. We will utilize mobile-specific features such as push notifications and offline functionality.',
    status: 'In Development',
    features: ['Push Notifications', 'Offline Viewing', 'Location Integration', 'Camera Feature', 'Social Sharing'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Push Notifications', 'Maps API'],
    highlights: ['Cross-platform development', 'Mobile UX optimization', 'Learning cutting-edge technology', 'App store release planned'],
    color: 'from-accent-highlight to-accent-abstract',
    abstractElement: (
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-accent-highlight/40 to-accent-abstract/40 blur-xl" />
        <div className="absolute top-1/3 right-1/3 w-16 h-24 border-2 border-accent-highlight/50 rounded-lg" />
        <div className="absolute bottom-1/3 left-1/3 w-20 h-2 bg-accent-abstract/60 rounded" />
      </div>
    )
  },
  {
    id: 3,
    title: 'Nom!Nom! Nationwide',
    description: 'Planning and development of scalable version for university campuses nationwide',
    longDescription: 'Based on our success at OIC Campus, we are planning to expand to a platform that can be used at universities nationwide. We are also considering customization for each university\'s characteristics and inter-university collaboration features.',
    status: 'Planning',
    features: ['Multi-Campus Support', 'University-Specific Customization', 'Integrated Management System', 'Analytics Dashboard', 'API Provision'],
    technologies: ['Microservices', 'GraphQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
    highlights: ['Scalability design', 'Enhanced corporate partnerships', 'Data analytics utilization', 'Nationwide expansion'],
    color: 'from-white to-gray-400',
    abstractElement: (
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-white/30 to-gray-400/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/40 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white animate-ping" />
      </div>
    )
  }
];

const developmentPhases = [
  {
    id: 1,
    phase: 'Phase 1',
    title: 'Prototype Development',
    description: 'Implementation of basic features and usability testing',
    status: 'completed',
    duration: 'October - December 2024',
    deliverables: ['Basic UI implementation', 'Database design', 'User authentication', 'Initial testing']
  },
  {
    id: 2,
    phase: 'Phase 2',
    title: 'Platform Completion',
    description: 'Full-scale feature implementation and system optimization',
    status: 'completed',
    duration: 'January - February 2025',
    deliverables: ['Review system', 'Search & filter features', 'Responsive design', 'Security enhancement']
  },
  {
    id: 3,
    phase: 'Phase 3',
    title: 'Launch Preparation',
    description: 'Final testing and adjustments in production environment',
    status: 'in-progress',
    duration: 'February - March 2025',
    deliverables: ['Performance testing', 'User acceptance testing', 'Production environment setup', 'Documentation']
  },
  {
    id: 4,
    phase: 'Phase 4',
    title: 'Mobile App Development',
    description: 'iOS & Android application development',
    status: 'planned',
    duration: 'March - June 2025',
    deliverables: ['Mobile UI design', 'Native feature implementation', 'App store submission', 'Push notification system']
  }
];

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'development'>('projects');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <AbstractBackground intensity="low" />
      
      <div className="relative z-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
                OUR SERVICES
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-black mb-8 text-gradient-abstract">
                PROJECTS & DEVELOPMENT
              </h1>
              <p className="text-white/70 text-lg max-w-4xl mx-auto leading-relaxed font-display tracking-wide">
                Student-led innovative projects and
                <br className="hidden md:block" />
                development processes utilizing cutting-edge technology
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-16">
              <div className="glass-morphism border border-white/20 rounded-none p-2">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-8 py-4 font-bold tracking-[0.1em] uppercase transition-all ${
                    activeTab === 'projects'
                      ? 'bg-gradient-to-r from-accent-highlight to-accent-glow text-black'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  CURRENT PROJECTS
                </button>
                <button
                  onClick={() => setActiveTab('development')}
                  className={`px-8 py-4 font-bold tracking-[0.1em] uppercase transition-all ${
                    activeTab === 'development'
                      ? 'bg-gradient-to-r from-accent-highlight to-accent-glow text-black'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  DEVELOPMENT PHASES
                </button>
              </div>
            </div>

            {/* Projects Section */}
            {activeTab === 'projects' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="luxury-card hover-lift p-12 group relative overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    {project.abstractElement}
                    
                    <div className="relative z-20">
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Project Info */}
                        <div className="lg:col-span-2">
                          <div className="flex items-start justify-between mb-6">
                            <div>
                              <h2 className="font-display text-3xl font-black mb-2 text-white group-hover:text-gradient-abstract transition-colors duration-300">
                                {project.title}
                              </h2>
                              <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                {project.description}
                              </p>
                            </div>
                            <span className={`px-4 py-2 text-xs font-bold tracking-wider uppercase ${
                              project.status === 'Launch Ready' ? 'bg-accent-neon/20 text-accent-neon border border-accent-neon/30' :
                              project.status === 'In Development' ? 'bg-accent-highlight/20 text-accent-highlight border border-accent-highlight/30' :
                              'bg-accent-glow/20 text-accent-glow border border-accent-glow/30'
                            }`}>
                              {project.status}
                            </span>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="font-display text-lg font-bold text-white mb-3">FEATURES</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {project.features.map((feature, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="px-4 py-2 text-sm text-white/70 border border-white/20 group-hover:border-accent-glow/50 group-hover:text-white/90 transition-all duration-300"
                                    whileHover={{ x: 5, scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    {feature}
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="font-display text-lg font-bold text-white mb-3">TECHNOLOGIES</h3>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-white/10 text-white/80 text-sm font-bold border border-white/20 group-hover:bg-white/20 transition-colors duration-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h3 className="font-display text-lg font-bold text-white mb-4">PROJECT HIGHLIGHTS</h3>
                          <div className="space-y-3">
                            {project.highlights.map((highlight, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-3 p-3 glass-morphism border border-white/10 group-hover:border-accent-glow/30 transition-colors duration-300"
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-2 h-2 bg-accent-glow rounded-full animate-pulse" />
                                <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                                  {highlight}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <motion.button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className="mt-8 btn-secondary px-8 py-3 font-bold tracking-[0.1em] uppercase"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedProject === project.id ? 'CLOSE DETAILS' : 'VIEW DETAILS'}
                      </motion.button>

                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-8 p-8 glass-morphism border border-white/10"
                        >
                          <h3 className="font-display text-xl font-bold text-white mb-4">PROJECT DETAILS</h3>
                          <p className="text-white/80 leading-relaxed">{project.longDescription}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Development Phases Section */}
            {activeTab === 'development' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {developmentPhases.map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    className={`luxury-card p-8 relative overflow-hidden ${
                      phase.status === 'completed' ? 'border-accent-neon/30' :
                      phase.status === 'in-progress' ? 'border-accent-highlight/30' :
                      'border-white/20'
                    }`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-8">
                      <div className={`w-20 h-20 border-2 flex items-center justify-center ${
                        phase.status === 'completed' ? 'border-accent-neon bg-accent-neon/10' :
                        phase.status === 'in-progress' ? 'border-accent-highlight bg-accent-highlight/10' :
                        'border-white/30 bg-white/5'
                      }`}>
                        <span className={`font-display font-bold ${
                          phase.status === 'completed' ? 'text-accent-neon' :
                          phase.status === 'in-progress' ? 'text-accent-highlight' :
                          'text-white/60'
                        }`}>
                          {phase.id}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-display text-2xl font-bold text-white">{phase.title}</h3>
                          <span className={`px-3 py-1 text-xs font-bold tracking-wider uppercase ${
                            phase.status === 'completed' ? 'bg-accent-neon/20 text-accent-neon border border-accent-neon/30' :
                            phase.status === 'in-progress' ? 'bg-accent-highlight/20 text-accent-highlight border border-accent-highlight/30' :
                            'bg-white/10 text-white/70 border border-white/20'
                          }`}>
                            {phase.status === 'completed' ? 'COMPLETED' :
                             phase.status === 'in-progress' ? 'IN PROGRESS' : 'PLANNED'}
                          </span>
                        </div>
                        <p className="text-white/70 mb-4">{phase.description}</p>
                        <div className="text-sm text-white/50 mb-4 font-display tracking-wider">{phase.duration}</div>
                        
                        <div>
                          <h4 className="font-bold text-white mb-2">Deliverables:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
                                <div className={`w-2 h-2 rounded-full ${
                                  phase.status === 'completed' ? 'bg-accent-neon' :
                                  phase.status === 'in-progress' ? 'bg-accent-highlight' :
                                  'bg-white/30'
                                }`} />
                                {deliverable}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              className="mt-20 text-center luxury-card p-16 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-highlight/10 to-accent-glow/10" />
              <div className="relative z-10">
                <h2 className="font-display text-4xl font-black mb-6 text-gradient-abstract">
                  JOIN OUR TEAM
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  Would you like to lead Nom!Nom! to success with us?<br />
                  You can develop your technical skills while working on actual product development
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/en/recruit">
                    <motion.button
                      className="btn-primary px-12 py-4 text-base font-bold tracking-[0.1em] uppercase"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      JOIN US
                    </motion.button>
                  </Link>
                  <Link href="/en/contact">
                    <motion.button
                      className="btn-secondary px-12 py-4 text-base font-bold tracking-[0.1em] uppercase"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      CONTACT US
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}