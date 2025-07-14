'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Greeting() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative">
        
        {/* 左側：挨拶文とボタン */}
        <div className="md:w-2/3 relative">
          {/* 黒枠部分：右上にボタン配置 */}
          <div className="absolute top-0 right-0">
            <Link
              href="/about"
              className="inline-block px-6 py-2 border border-gray-700 text-gray-800 rounded hover:bg-gray-100 transition text-sm font-medium"
            >
              ⇨会社情報へ
            </Link>
          </div>

          {/* 挨拶文 */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            代表者挨拶
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            私たちの会社は、技術と情熱を持って社会課題を解決し、革新を生み出すことを使命としています。
            お客様と社会の期待に応えるべく、挑戦を恐れず、常に未来を見据えて進化し続けます。
            今後とも変わらぬご支援を賜りますよう、お願い申し上げます。
            <br /><br />
            <strong>代表取締役　山田 太郎</strong>
          </motion.p>
        </div>

        {/* 右側：写真 */}
        <div className="md:w-1/3 flex justify-center items-start">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/president.jpg" // ← 適切な画像パスに変更してください
              alt="代表写真"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}