'use client';

import { motion } from 'framer-motion';

export default function CompanyIntroduction() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">

        {/* タイトル */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          会社紹介
        </motion.h2>

        {/* 理念紹介 */}
        <motion.p
          className="text-base sm:text-lg leading-relaxed text-gray-600 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          私たちQurestは、「正しい未来をつくる」ことを使命に掲げ、テクノロジーと創造性を融合させた社会貢献を目指しています。
          <br />
          信頼と挑戦を軸に、多様なサービスを展開し、持続可能な社会の実現に貢献します。
        </motion.p>

        {/* 表形式の会社概要 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <table className="w-full table-auto border border-gray-300 text-left text-sm">
            <tbody>
              <tr className="border-t border-gray-300">
                <th className="bg-gray-100 px-4 py-3 w-1/4">会社名</th>
                <td className="px-4 py-3">Qurest Group</td>
              </tr>
              <tr className="border-t border-gray-300">
                <th className="bg-gray-100 px-4 py-3">設立</th>
                <td className="px-4 py-3">2025年4月1日</td>
              </tr>
              <tr className="border-t border-gray-300">
                <th className="bg-gray-100 px-4 py-3 align-top">所在地</th>
                <td className="px-4 py-3">
                  【本社】<br />
                  〒100-0000<br />
                  千代田区大手町<br />
                  <br />
                  【大阪支社】<br />
                  〒567-0123<br />
                  大阪府
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <th className="bg-gray-100 px-4 py-3">従業員数</th>
                <td className="px-4 py-3">6名</td>
              </tr>
              <tr className="border-t border-gray-300">
                <th className="bg-gray-100 px-4 py-3">資本金</th>
                <td className="px-4 py-3">1億円</td>
              </tr>
              <tr className="border-t border-gray-300">
                <th className="bg-gray-100 px-4 py-3">代表取締役</th>
                <td className="px-4 py-3">Shuta Wakamiya</td>
              </tr>
              <tr className="border-t border-gray-300">
                <th className="bg-gray-100 px-4 py-3">役員</th>
                <td className="px-4 py-3">取締役　Reiya</td>
              </tr>
              <tr className="border-t border-gray-300">
                <th className="bg-gray-100 px-4 py-3">主要取引銀行</th>
                <td className="px-4 py-3">三井住友銀行</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}