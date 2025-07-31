'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 sm:px-8 py-4 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="w-full max-w-7xl glass-morphism rounded-2xl shadow-xl border border-white/30 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between">

        {/* ロゴとキャッチコピー */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/Qurest.png" alt="Logo" width={40} height={40} />
          </motion.div>
          <div className="flex flex-col text-sm">
            <span className="text-xs text-gradient-luxury font-medium group-hover:opacity-80 transition-opacity">
              正しい未来を
            </span>
            <span className="text-xl font-display font-bold text-gradient-elegant">
              Qurest
            </span>
          </div>
        </Link>

        {/* モバイルハンバーガーメニュー */}
        <button
          className="sm:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* デスクトップメニュー */}
        <div className="hidden sm:flex sm:items-center gap-6 text-sm">
          {/* ナビゲーションリンク */}
          <nav className="flex gap-6">
            <Link href="/news" className="text-charcoal hover:text-accent-gold transition-all duration-300 font-medium relative group">
              <span>News</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-charcoal hover:text-accent-gold transition-all duration-300 font-medium relative group">
              <span>Company</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/service" className="text-charcoal hover:text-accent-gold transition-all duration-300 font-medium relative group">
              <span>Service</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/recruit" className="text-charcoal hover:text-accent-gold transition-all duration-300 font-medium relative group">
              <span>Recruit</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* 右側メニュー */}
          <div className="flex items-center gap-4">
            <span className="text-charcoal text-xs font-medium px-4 py-2 bg-gradient-to-r from-accent-platinum to-warm-gray rounded-full border border-accent-platinum">
              Qurest Group
            </span>
            <div className="flex items-center gap-2 text-xs">
              <button className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">JP</button>
              <span className="text-gray-400">|</span>
              <button className="px-2 py-1 text-gray-500 hover:text-blue-600 transition-colors">EN</button>
            </div>
            <Link href="/contact">
              <motion.button 
                className="bg-gradient-to-r from-accent-gold to-yellow-400 text-deep-navy rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせ
              </motion.button>
            </Link>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMobileMenuOpen && (
          <motion.div
            className="sm:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col gap-4 mb-6">
              <Link href="/news" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                News
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Company
              </Link>
              <Link href="/service" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Service
              </Link>
              <Link href="/recruit" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Recruit
              </Link>
            </nav>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Qurest Group</span>
                <div className="flex items-center gap-2 text-xs">
                  <button className="px-2 py-1 bg-blue-100 text-blue-700 rounded">JP</button>
                  <span>|</span>
                  <button className="px-2 py-1 text-gray-500">EN</button>
                </div>
              </div>
              <Link href="/contact" className="w-full">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-3 font-medium">
                  お問い合わせ
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}