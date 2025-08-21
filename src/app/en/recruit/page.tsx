'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AbstractBackground from '@/components/AbstractBackground';

const recruitPositions = [
  {
    id: 1,
    category: 'TECHNICAL',
    title: 'Technical Development Member',
    subtitle: 'OIC Students Welcome (All Majors)',
    description: 'We are recruiting technical members to work on the development of Nom!Nom!. Students from all majors, not just Information Science and Engineering, are welcome! Even programming beginners can grow together with us if they have the motivation to learn.',
    requirements: [
      'Interest in programming',
      'Desire to learn about websites and app mechanisms',
      'Interest in team-based product creation',
      'Motivation to learn new technologies'
    ],
    preferredSkills: [
      'Basic knowledge of HTML/CSS/JavaScript',
      'Learning experience with React, Next.js',
      'TypeScript basics',
      'GitHub usage experience'
    ],
    whatYouLearn: [
      'Latest web development technologies',
      'Team development processes',
      'User-oriented service design',
      'Real product development processes'
    ],
    highlights: [
      'Perfect for gaku-chika',
      'Real product development experience',
      'Opportunities to learn cutting-edge technology',
      'Open to all majors and grades'
    ],
    color: 'from-accent-neon to-accent-glow',
    icon: '💻'
  },
  {
    id: 2,
    category: 'DESIGN & MARKETING',
    title: 'Design & PR Representative',
    subtitle: 'Creative Students Wanted',
    description: 'Responsible for branding, UI/UX design, and SNS management of Nom!Nom!. Even without design experience, if you have a good sense and motivation, you\'ll be fine! Let\'s communicate the appeal of our service together.',
    requirements: [
      'Interest in design and marketing',
      'Daily use of social media',
      'Ability to think about user feelings',
      'Good communication skills'
    ],
    preferredSkills: [
      'Experience with design tools like Figma, Canva',
      'Experience managing SNS like Instagram, Twitter',
      'Basic knowledge of Photoshop, Illustrator',
      'Basic marketing knowledge'
    ],
    whatYouLearn: [
      'UI/UX design basics',
      'Branding strategy',
      'SNS marketing',
      'User research methods'
    ],
    highlights: [
      'Design experience with real services',
      'Experience in corporate partnerships',
      'Marketing practice',
      'Portfolio creation'
    ],
    color: 'from-accent-highlight to-accent-abstract',
    icon: '🎨'
  },
  {
    id: 3,
    category: 'BUSINESS',
    title: 'Corporate Partnership & Sales Representative',
    subtitle: 'Students Good at Corporate Communication',
    description: 'Responsible for building relationships with food truck operators and partner companies. Perfect for students aiming for sales or planning positions in the future! You can experience real business negotiations.',
    requirements: [
      'Good at communicating with people',
      'Interest in business',
      'Sense of responsibility',
      'Ability to enjoy meeting new people'
    ],
    preferredSkills: [
      'Presentation experience',
      'Basic knowledge of Excel, PowerPoint',
      'Sales or customer service part-time job experience',
      'Basic business manners knowledge'
    ],
    whatYouLearn: [
      'Corporate negotiation skills',
      'Overall business processes',
      'Presentation techniques',
      'Project management'
    ],
    highlights: [
      'Real corporate negotiation experience',
      'Business skill improvement',
      'Networking opportunities',
      'Directly relevant to future career'
    ],
    color: 'from-white to-gray-400',
    icon: '🤝'
  }
];

const projectBenefits = [
  {
    id: 1,
    title: 'University-Approved Project',
    description: 'Operating as an approved project at Ritsumeikan University OIC Campus',
    icon: '🏛️'
  },
  {
    id: 2,
    title: 'Corporate Attention',
    description: 'Multiple companies have shown interest in the project, promising great future potential',
    icon: '🚀'
  },
  {
    id: 3,
    title: 'Perfect for Gaku-chika',
    description: 'You can gain concrete achievements and experiences to talk about in job hunting',
    icon: '📈'
  },
  {
    id: 4,
    title: 'Real Product Development',
    description: 'Experience developing services that are actually used, not just theoretical exercises',
    icon: '⚡'
  }
];

const workingStyle = [
  {
    id: 1,
    aspect: 'Working Hours',
    detail: 'About 3-5 hours per week (compatible with classes)',
    flexible: true
  },
  {
    id: 2,
    aspect: 'Working Location',
    detail: 'OIC Campus + Online (Hybrid)',
    flexible: true
  },
  {
    id: 3,
    aspect: 'Duration',
    detail: 'Minimum 3 months (long-term welcome)',
    flexible: false
  },
  {
    id: 4,
    aspect: 'Compensation',
    detail: 'To be considered based on project results',
    flexible: true
  }
];

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AbstractBackground intensity="medium" />
      
      <div className="relative z-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
                JOIN OUR TEAM
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-black mb-8 text-gradient-abstract">
                BUILD THE FUTURE
              </h1>
              <div className="font-bangers text-6xl lg:text-8xl mb-8 text-accent-neon">
                Nom!Nom!
              </div>
              <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
                An innovative project starting from Ritsumeikan University OIC Campus
                <br className="hidden md:block" />
                Would you like to create experiences that change student life with us?
              </p>
            </motion.div>

            {/* Project Benefits */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="font-display text-3xl font-bold text-center mb-12 text-gradient-primary">
                Why You Should Join Nom!Nom!
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    className="luxury-card p-8 text-center group hover-lift"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-gradient-abstract transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recruitment Positions */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="font-display text-4xl font-black text-center mb-4 text-gradient-abstract">
                RECRUITMENT POSITIONS
              </h2>
              <p className="text-center text-white/70 mb-16 text-lg">
                We have prepared positions where you can thrive according to your interests and strengths
              </p>
              
              <div className="space-y-12">
                {recruitPositions.map((position, index) => (
                  <motion.div
                    key={position.id}
                    className="luxury-card p-12 group relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div className={`w-full h-full bg-gradient-to-br ${position.color} blur-2xl`} />
                    </div>
                    
                    <div className="relative z-20">
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <div className="flex items-center gap-4 mb-2">
                            <span className="text-4xl">{position.icon}</span>
                            <span className="px-4 py-2 bg-white/10 text-white/80 text-xs font-bold tracking-wider uppercase border border-white/20">
                              {position.category}
                            </span>
                          </div>
                          <h3 className="font-display text-3xl font-black text-white mb-2 group-hover:text-gradient-abstract transition-colors duration-300">
                            {position.title}
                          </h3>
                          <p className="text-accent-glow text-lg font-bold mb-4">{position.subtitle}</p>
                          <p className="text-white/80 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                            {position.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-4 gap-8">
                        <div>
                          <h4 className="font-display text-lg font-bold text-white mb-4">Required Qualities</h4>
                          <div className="space-y-2">
                            {position.requirements.map((req, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-white/70">
                                <div className="w-1.5 h-1.5 bg-accent-glow rounded-full mt-2 flex-shrink-0" />
                                <span>{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-display text-lg font-bold text-white mb-4">Preferred Skills</h4>
                          <div className="space-y-2">
                            {position.preferredSkills.map((skill, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-white/70">
                                <div className="w-1.5 h-1.5 bg-accent-highlight rounded-full mt-2 flex-shrink-0" />
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-display text-lg font-bold text-white mb-4">What You&apos;ll Learn</h4>
                          <div className="space-y-2">
                            {position.whatYouLearn.map((learn, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-white/70">
                                <div className="w-1.5 h-1.5 bg-accent-neon rounded-full mt-2 flex-shrink-0" />
                                <span>{learn}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-display text-lg font-bold text-white mb-4">Special Points</h4>
                          <div className="space-y-3">
                            {position.highlights.map((highlight, idx) => (
                              <motion.div
                                key={idx}
                                className="px-3 py-2 glass-morphism border border-white/10 text-sm text-white/80 group-hover:border-accent-glow/30 transition-colors duration-300"
                                whileHover={{ x: 5, scale: 1.02 }}
                              >
                                {highlight}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Working Style */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl font-black text-center mb-12 text-gradient-primary">
                WORKING STYLE
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workingStyle.map((style, index) => (
                  <motion.div
                    key={style.id}
                    className="luxury-card p-6 text-center group hover-lift"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-gradient-abstract transition-colors duration-300">
                      {style.aspect}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                      {style.detail}
                    </p>
                    {style.flexible && (
                      <span className="px-3 py-1 bg-accent-neon/20 text-accent-neon text-xs font-bold tracking-wider uppercase border border-accent-neon/30">
                        FLEXIBLE
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Application Process */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl font-black text-center mb-12 text-gradient-abstract">
                APPLICATION PROCESS
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { step: '01', title: 'Entry', desc: 'Apply through contact form' },
                    { step: '02', title: 'Casual Interview', desc: 'Project details explanation and Q&A' },
                    { step: '03', title: 'Join Decision', desc: 'Team participation and project start' }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      className="text-center group"
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 mx-auto mb-6 border-2 border-accent-glow flex items-center justify-center group-hover:border-accent-highlight transition-colors duration-300">
                        <span className="font-display text-2xl font-black text-accent-glow group-hover:text-accent-highlight transition-colors duration-300">
                          {process.step}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gradient-abstract transition-colors duration-300">
                        {process.title}
                      </h3>
                      <p className="text-white/70 text-sm">{process.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="text-center luxury-card p-16 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-highlight/10 to-accent-glow/10" />
              <div className="relative z-10">
                <h2 className="font-display text-4xl font-black mb-6 text-gradient-abstract">
                  READY TO JOIN?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  We are waiting for your participation in this special project that will change your student life.<br />
                  Let&apos;s start by having a casual chat!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/en/contact">
                    <motion.button
                      className="btn-primary px-16 py-6 text-lg font-black tracking-[0.15em]"
                      whileHover={{ scale: 1.08, y: -5 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      APPLY NOW
                    </motion.button>
                  </Link>
                  <Link href="/en/service">
                    <motion.button
                      className="btn-secondary px-16 py-6 text-lg font-black tracking-[0.15em]"
                      whileHover={{ scale: 1.08, y: -5 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      LEARN MORE
                    </motion.button>
                  </Link>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/50 text-sm font-display tracking-wider">
                    QUESTIONS? CONTACT US ANYTIME
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}