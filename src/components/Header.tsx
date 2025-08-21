'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'ja' | 'en'>('ja');
  const router = useRouter();

  const handleLanguageToggle = () => {
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    setCurrentLang(newLang);
    
    // Navigate to the appropriate language version
    const currentPath = window.location.pathname;
    if (newLang === 'en') {
      router.push(`/en${currentPath}`);
    } else {
      // Remove /en prefix if switching back to Japanese
      const jaPath = currentPath.replace(/^\/en/, '') || '/';
      router.push(jaPath);
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 sm:px-8 py-4 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="w-full max-w-7xl glass-morphism rounded-2xl shadow-xl border border-white/30 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between">

        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/Qurest.png" alt="Logo" width={40} height={40} />
          </motion.div>
          <div className="flex flex-col text-sm">
            <span className="font-bangers text-lg text-accent-neon group-hover:opacity-80 transition-opacity">
              Nom!Nom!
            </span>
            <span className="text-xl font-display font-bold text-gradient-abstract">
              QUREST
            </span>
          </div>
        </Link>

        {/* モバイルハンバーガーメニュー */}
        <button
          className="sm:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* デスクトップメニュー */}
        <div className="hidden sm:flex sm:items-center gap-6 text-sm">
          {/* ナビゲーションリンク */}
          <nav className="flex gap-6">
            <Link href="/news" className="text-white/80 hover:text-accent-glow transition-all duration-300 font-medium relative group">
              <span>News</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-glow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-white/80 hover:text-accent-glow transition-all duration-300 font-medium relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-glow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/service" className="text-white/80 hover:text-accent-glow transition-all duration-300 font-medium relative group">
              <span>Projects</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-glow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/recruit" className="text-white/80 hover:text-accent-glow transition-all duration-300 font-medium relative group">
              <span>Recruit</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-glow transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* 右側メニュー */}
          <div className="flex items-center gap-4">
            <span className="text-white/80 text-xs font-medium px-4 py-2 glass-morphism border border-white/20 font-display tracking-wider">
              STUDENT PROJECT
            </span>
            <div className="flex items-center gap-2 text-xs">
              <button 
                onClick={handleLanguageToggle}
                className={`px-2 py-1 font-medium transition-colors ${
                  currentLang === 'ja' 
                    ? 'bg-accent-glow/20 text-accent-glow border border-accent-glow/30' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                JP
              </button>
              <span className="text-white/40">|</span>
              <button 
                onClick={handleLanguageToggle}
                className={`px-2 py-1 font-medium transition-colors ${
                  currentLang === 'en' 
                    ? 'bg-accent-glow/20 text-accent-glow border border-accent-glow/30' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                EN
              </button>
            </div>
            <Link href="/contact">
              <motion.button 
                className="btn-primary px-6 py-2 text-sm font-bold tracking-[0.1em] uppercase"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMobileMenuOpen && (
          <motion.div
            className="sm:hidden absolute top-full left-0 right-0 mt-2 glass-morphism border border-white/20 p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col gap-4 mb-6">
              <Link href="/news" className="text-white/80 hover:text-accent-glow transition-colors font-medium">
                News
              </Link>
              <Link href="/about" className="text-white/80 hover:text-accent-glow transition-colors font-medium">
                About
              </Link>
              <Link href="/service" className="text-white/80 hover:text-accent-glow transition-colors font-medium">
                Projects
              </Link>
              <Link href="/recruit" className="text-white/80 hover:text-accent-glow transition-colors font-medium">
                Recruit
              </Link>
            </nav>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm font-display tracking-wider">STUDENT PROJECT</span>
                <div className="flex items-center gap-2 text-xs">
                  <button 
                    onClick={handleLanguageToggle}
                    className={`px-2 py-1 transition-colors ${
                      currentLang === 'ja' 
                        ? 'bg-accent-glow/20 text-accent-glow border border-accent-glow/30' 
                        : 'text-white/60'
                    }`}
                  >
                    JP
                  </button>
                  <span className="text-white/40">|</span>
                  <button 
                    onClick={handleLanguageToggle}
                    className={`px-2 py-1 transition-colors ${
                      currentLang === 'en' 
                        ? 'bg-accent-glow/20 text-accent-glow border border-accent-glow/30' 
                        : 'text-white/60'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
              <Link href="/contact" className="w-full">
                <button className="w-full btn-primary font-medium">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}