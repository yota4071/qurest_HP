//会社の紹介と理念
'use client';

import { motion } from 'framer-motion';

export default function CompanyIntroduction() {
  return (
    <section 
    className="bg-white text-gray-800 py-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          会社紹介
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg leading-relaxed text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          私たちQurestは、「正しい未来をつくる」ことを使命に掲げ、テクノロジーと創造性を融合させた社会貢献を目指しています。
          <br />
          信頼と挑戦を軸に、多様なサービスを展開し、持続可能な社会の実現に貢献します。
        </motion.p>
      </div>
    </section>
  );
}