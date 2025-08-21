'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AbstractBackground from '@/components/AbstractBackground';

const projectValues = [
  {
    id: 1,
    title: 'Student First',
    subtitle: 'Students Priority',
    description: 'We prioritize student needs and challenges, providing truly useful solutions',
    icon: '🎓',
    color: 'from-accent-neon to-accent-glow'
  },
  {
    id: 2,
    title: 'Community',
    subtitle: 'Building Connections',
    description: 'We value connections within campus and facilitate student interactions',
    icon: '🤝',
    color: 'from-accent-highlight to-accent-abstract'
  },
  {
    id: 3,
    title: 'Innovation',
    subtitle: 'Creative Solutions',
    description: 'We create experiences that enrich student life through new technology and creativity',
    icon: '💡',
    color: 'from-accent-glow to-accent-neon'
  },
  {
    id: 4,
    title: 'Growth',
    subtitle: 'Continuous Development',
    description: 'We continue to grow both as students and engineers through our projects',
    icon: '🌱',
    color: 'from-accent-abstract to-accent-highlight'
  }
];

const projectHistory = [
  {
    year: 'Fall 2024',
    title: 'Project Conception',
    description: 'Identified the lack of food truck information at OIC Campus and conceived the Nom!Nom! project'
  },
  {
    year: 'October 2024',
    title: 'Team Formation',
    description: 'Team members who met in research labs and classes formed a team and began prototype development'
  },
  {
    year: 'December 2024',
    title: 'Prototype Completion',
    description: 'Completed prototype with basic functionality and conducted initial usability testing'
  },
  {
    year: 'January 2025',
    title: 'Platform Completion',
    description: 'Completed implementation of full-scale features including review system and search functionality'
  },
  {
    year: 'February 2025',
    title: 'Launch Preparation',
    description: 'Currently conducting final testing and system adjustments for official launch'
  },
  {
    year: 'Spring 2025',
    title: 'Service Launch (Planned)',
    description: 'Planned official launch of Nom!Nom! with parallel mobile app development'
  }
];

const team = [
  {
    name: 'Oz',
    position: 'Project Leader',
    description: 'Handles planning and operation of the Nom!Nom! project. From product ideation to business strategy, he manages a wide range of activities and determines the overall direction of the project. He also plays a central role in corporate partnerships and business development.',
    image: '/team/ceo.jpg',
    expertise: ['Product Planning', 'Business Strategy', 'Business Development']
  },
  {
    name: 'Waka',
    position: 'Technical Leader',
    description: 'Responsible for technical development of Nom!Nom!. Covers a wide range of technical domains from system design to frontend and backend development, supporting the technical realization of the project.',
    image: '/team/cto.jpg',
    expertise: ['System Design', 'Web Development', 'Technical Strategy']
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AbstractBackground intensity="low" />
      
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
                ABOUT US
              </span>
            </motion.div>
            
            <motion.h1
              className="font-display text-5xl lg:text-7xl font-black mb-8 text-gradient-abstract"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              QUREST
            </motion.h1>
            
            <motion.div
              className="font-bangers text-6xl lg:text-8xl mb-8 text-accent-neon"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nom!Nom!
            </motion.div>

            <motion.p
              className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A project team founded by students at Ritsumeikan University OIC Campus.<br />
              We develop and operate the food truck rating platform &quot;Nom!Nom!&quot;.
            </motion.p>
          </div>
        </section>

        {/* Project Values Section */}
        <section className="section-padding bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-20">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-black mb-6 text-gradient-abstract">
                OUR VALUES
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Four core values that guide the Nom!Nom! project
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {projectValues.map((value, index) => (
                <motion.div
                  key={value.id}
                  className="luxury-card p-8 hover-lift group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className="text-center relative z-20">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2 text-white group-hover:text-gradient-abstract transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm font-medium text-white/60 mb-4">
                      {value.subtitle}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project History Section */}
        <section className="section-padding bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-20">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-black mb-6 text-gradient-primary">
                PROJECT HISTORY
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                The journey and growth trajectory of the Nom!Nom! project
              </p>
            </motion.div>

            <div className="space-y-8">
              {projectHistory.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="luxury-card p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-gradient-to-r from-accent-highlight to-accent-glow text-black px-4 py-2 font-bold text-lg">
                          {item.year}
                        </span>
                        <h3 className="font-display text-xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="w-full h-48 glass-morphism border border-white/10 flex items-center justify-center">
                      <span className="text-6xl opacity-50">📅</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-black relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-20">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-black mb-6 text-gradient-abstract">
                PROJECT TEAM
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Core members leading the Nom!Nom! project
              </p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="luxury-card p-8 hover-lift group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="text-center mb-6 relative z-20">
                    <div className="w-32 h-32 glass-morphism border border-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-5xl">👤</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-white group-hover:text-gradient-abstract transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-accent-glow font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/10 text-white/80 text-sm border border-white/20 group-hover:bg-white/20 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="section-padding bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-20">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-black mb-6 text-gradient-primary">
                PROJECT OVERVIEW
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Basic information about the Nom!Nom! project
              </p>
            </motion.div>

            <motion.div
              className="luxury-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {[
                  { label: 'Project Name', value: 'Nom!Nom!' },
                  { label: 'Start Date', value: 'Fall 2024' },
                  { label: 'Project Leader', value: 'Oz' },
                  { label: 'Technical Leader', value: 'Waka' },
                  { label: 'Team Size', value: 'Approximately 6 members' },
                  { label: 'Status', value: 'Launch Preparation' },
                  { label: 'Target Campus', value: 'Ritsumeikan University OIC Campus' },
                  { label: 'Service Content', value: 'Development and operation of food truck rating platform' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-6 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} border-b border-white/10 last:border-b-0`}
                  >
                    <dt className="text-sm font-medium text-white/60 mb-2">
                      {item.label}
                    </dt>
                    <dd className="text-lg font-semibold text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* University Partnership Information */}
            <motion.div
              className="mt-12 luxury-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-2xl font-bold mb-6 text-white text-center">
                UNIVERSITY CONNECTION
              </h3>
              <div className="text-center">
                <div className="space-y-2 text-white/70">
                  <p className="text-lg font-semibold text-accent-neon">Ritsumeikan University, College of Information Science and Engineering</p>
                  <p>Composed of members who met in research labs and classes</p>
                  <p>A student-led project with university cooperation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-highlight/10 to-accent-glow/10" />
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-black mb-6 text-gradient-abstract">
                JOIN OUR PROJECT
              </h2>
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                The Nom!Nom! project is recruiting passionate student members.<br />
                Would you like to enrich student life with your skills?
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
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}