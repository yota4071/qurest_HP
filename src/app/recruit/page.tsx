//人材募集・インターン募集
'use client';

import { motion } from 'framer-motion';

const internOpenings = [
  {
    id: 1,
    title: 'AIエンジニアインターン',
    compensation: '時給2,500円～（スキルに応じて応相談）',
    description:
      '生成AI・自然言語処理の応用プロジェクトに携わっていただきます。Python, PyTorch の知識歓迎。',
  },
  {
    id: 2,
    title: 'フロントエンド開発インターン',
    compensation: '時給2,000円～（交通費全額支給）',
    description:
      'Next.js + TypeScript によるWebアプリ開発の実務体験。デザイン志向のある方歓迎。',
  },
];

export default function RecruitPage() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          インターン募集
        </motion.h1>
        <p className="text-gray-600 mb-12 text-sm sm:text-base">
          Qurestでは、未来を共に創る仲間を募集しています。実務に近い形で活躍できる高待遇のインターン制度を用意しています。
        </p>

        <div className="grid gap-6 sm:grid-cols-2 text-left">
          {internOpenings.map((intern) => (
            <motion.div
              key={intern.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-2">{intern.title}</h2>
              <p className="text-gray-700 mb-1">{intern.compensation}</p>
              <p className="text-gray-600 text-sm">{intern.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            応募・お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
}