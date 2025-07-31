// src/sections/Hero.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/hero-bg.jpg"
        alt="青空背景"
        fill
        className="object-cover object-center z-0 scale-105"
        priority
      />

      {/* 洗練されたオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/20 via-transparent to-transparent z-15" />

      {/* メインコンテンツ */}
      <motion.div
        className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white/90 mb-6">
            Next Generation Technology
          </span>
        </motion.div>
        
        <motion.h1 
          className="font-display responsive-text-4xl lg:responsive-text-5xl font-bold mb-6 leading-tight text-shadow-luxury"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-gradient-gold">
            未来を創造する
          </span>
          <br />
          <span className="text-white">
            テクノロジーパートナー
          </span>
        </motion.h1>
        
        <motion.p 
          className="responsive-text-lg sm:responsive-text-xl text-white/90 max-w-2xl leading-relaxed font-light px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          革新的なAI・IoT・Webソリューションで、
          <br className="hidden sm:block" />
          お客様のビジネスを次のステージへ導きます
        </motion.p>
        
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-gold to-yellow-400 text-deep-navy font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            プロジェクトを始める
          </motion.button>
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            実績を見る
          </motion.button>
        </motion.div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}