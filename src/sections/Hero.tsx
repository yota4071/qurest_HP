// src/sections/Hero.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/hero-bg.jpg"
        alt="青空背景"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* テキスト */}
      <motion.div
        className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
          未来を創る、あなたの会社
        </h1>
        <p className="text-sm sm:text-lg text-white/90">
          革新的なテクノロジーとデザインで、世界に価値を届けます。
        </p>
      </motion.div>
    </section>
  );
}