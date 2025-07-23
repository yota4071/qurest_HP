//実績紹介・サービス紹介
'use client';

import { motion } from 'framer-motion';

const services = [
    {
        id: 1,
        title: 'AIソリューション開発',
        description: '企業向けに最適化されたAIアルゴリズムの開発や実装を行っています。',
        image: '/images/ai-solution.jpg',
        features: ['機械学習モデル', 'データ分析', '予測アルゴリズム'],
    },
    {
        id: 2,
        title: 'IoTシステム構築',
        description: 'センサーやエッジデバイスを活用したスマートな社会インフラを提案・導入しています。',
        image: '/images/iot-system.jpg',
        features: ['センサー統合', 'リアルタイムモニタリング', 'クラウド連携'],
    },
    {
        id: 3,
        title: 'Webアプリケーション制作',
        description: 'UX設計から保守運用まで、包括的なWebアプリ開発を支援しています。',
        image: '/images/web-app.jpg',
        features: ['レスポンシブデザイン', 'パフォーマンス最適化', 'セキュリティ強化'],
    },
];

export default function ServicePage() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          事業・実績紹介
        </motion.h1>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}