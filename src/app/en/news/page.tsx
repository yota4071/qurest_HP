'use client';

import { motion } from 'framer-motion';

const realNews = [
  {
    id: 1,
    title: 'Nom!Nom! Platform Development Completed',
    date: 'January 15, 2025',
    summary: 'The development of "Nom!Nom!", a food truck rating platform for Ritsumeikan University OIC Campus, has been completed. We aim to provide students with a better food truck experience.',
    status: 'Completed',
    category: 'Product'
  },
  {
    id: 2,
    title: 'Nom!Nom! Mobile App Project Started',
    date: 'January 20, 2025',
    summary: 'We have started the development project for the mobile app version of Nom!Nom!. We will expand features to make food truck information more accessible.',
    status: 'In Progress',
    category: 'Product'
  },
  {
    id: 3,
    title: 'Nom!Nom! Nationwide Expansion Development Started',
    date: 'January 25, 2025',
    summary: 'Following the success at Ritsumeikan University OIC Campus, we have started developing a version that can be used at university campuses nationwide.',
    status: 'In Progress',
    category: 'Product'
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-accent-highlight/30 to-accent-glow/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-accent-abstract/20 to-accent-neon/20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-20 max-w-6xl mx-auto py-32 px-6 sm:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
            COMPANY UPDATES
          </span>
          <h1 className="font-display text-5xl lg:text-7xl font-black mb-8 text-gradient-abstract">
            NEWS & UPDATES
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Latest project progress updates from Qurest
          </p>
        </motion.div>

        <div className="space-y-8">
          {realNews.map((news, index) => (
            <motion.div
              key={news.id}
              className="luxury-card hover-lift p-8 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-4 py-2 text-xs font-bold tracking-wider uppercase ${
                      news.status === 'Completed' 
                        ? 'bg-accent-neon/20 text-accent-neon border border-accent-neon/30' 
                        : 'bg-accent-highlight/20 text-accent-highlight border border-accent-highlight/30'
                    }`}>
                      {news.status}
                    </span>
                    <span className="px-4 py-2 bg-white/10 text-white/80 text-xs font-bold tracking-wider uppercase border border-white/20">
                      {news.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient-abstract transition-all duration-300">
                    {news.title}
                  </h2>
                  
                  <p className="text-white/70 leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {news.summary}
                  </p>
                  
                  <p className="text-sm text-white/50 font-display tracking-wider">
                    {news.date}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-accent-glow/50 transition-colors duration-300"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-br from-accent-glow to-accent-highlight blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nom!Nom! Special Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="luxury-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-highlight/5 to-accent-glow/5" />
            <div className="relative z-10">
              <h2 className="font-bangers text-6xl lg:text-8xl mb-6 text-gradient-abstract" style={{ letterSpacing: '0.1em' }}>
                Nom!Nom!
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                Food truck rating platform for Ritsumeikan University OIC Campus
                <br />
                A gourmet guide by students, for students
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="px-6 py-3 glass-morphism border border-white/20">
                  <span className="text-sm text-white/60">Status:</span>
                  <span className="ml-2 text-accent-neon font-bold">Launch Preparation</span>
                </div>
                <div className="px-6 py-3 glass-morphism border border-white/20">
                  <span className="text-sm text-white/60">Target:</span>
                  <span className="ml-2 text-white font-bold">Ritsumeikan University OIC Campus</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}