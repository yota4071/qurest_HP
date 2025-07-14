//お知らせなど'use client';

import { motion } from 'framer-motion';

const dummyNews = [
  {
    id: 1,
    title: '新サービス開始のお知らせ',
    date: '2025年07月10日',
    summary: 'Qurestは新たなクラウドサービスを提供開始しました。詳細はこちらをご覧ください。',
  },
  {
    id: 2,
    title: 'オフィス移転のお知らせ',
    date: '2025年06月25日',
    summary: '2025年7月より、新オフィスに移転いたします。',
  },
  {
    id: 3,
    title: '年末年始の営業について',
    date: '2024年12月10日',
    summary: '年末年始期間の営業日についてご案内いたします。',
  },
];

export default function NewsPage() {
  return (
    <section className="bg-white max-w-4xl mx-auto py-16 px-6 sm:px-12 text-black">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        お知らせ一覧
      </motion.h1>

      <div className="space-y-6">
        {dummyNews.map((news) => (
          <motion.div
            key={news.id}
            className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold">{news.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{news.date}</p>
            <p className="text-gray-700">{news.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}