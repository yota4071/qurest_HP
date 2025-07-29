//実績紹介・サービス紹介
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: 'AIソリューション開発',
        description: '最新の機械学習技術を活用し、企業の課題を解決するカスタムAIソリューションを提供しています。',
        longDescription: 'データの収集・前処理から、モデルの設計・学習、本番環境への導入まで、AI開発の全工程をサポート。自然言語処理、画像認識、予測分析など、様々な領域での実績があります。',
        icon: '🤖',
        features: ['機械学習モデル開発', 'データ分析・可視化', '予測アルゴリズム構築', 'MLOps環境構築'],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'AWS SageMaker'],
        results: ['処理時間70%短縮', '予測精度95%達成', 'コスト削減50%'],
    },
    {
        id: 2,
        title: 'IoTシステム構築',
        description: 'センサーデータを活用したスマート社会インフラの構築で、効率的な運用管理を実現します。',
        longDescription: 'エッジコンピューティングからクラウド連携まで、IoTエコシステム全体を設計。リアルタイムデータ収集、異常検知、予防保全システムなど、用途に応じた最適なソリューションを提供します。',
        icon: '📡',
        features: ['センサーネットワーク構築', 'リアルタイムモニタリング', 'エッジコンピューティング', 'クラウド連携システム'],
        technologies: ['Raspberry Pi', 'Arduino', 'LoRaWAN', 'MQTT', 'AWS IoT', 'Azure IoT'],
        results: ['運用効率40%向上', '故障予測精度85%', '保守コスト30%削減'],
    },
    {
        id: 3,
        title: 'Webアプリケーション制作',
        description: 'モダンな技術スタックを用いて、スケーラブルで高性能なWebアプリケーションを開発します。',
        longDescription: 'フロントエンドからバックエンド、インフラまで一貫した開発体制で、ユーザー体験を重視したアプリケーションを構築。アジャイル開発手法により、迅速かつ柔軟な対応を実現します。',
        icon: '💻',
        features: ['レスポンシブUI/UX設計', 'RESTful API開発', 'データベース設計', 'CI/CDパイプライン構築'],
        technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
        results: ['ページ速度90%向上', 'ユーザー満足度95%', '開発効率60%向上'],
    },
];

const achievements = [
    {
        id: 1,
        client: '製造業A社',
        project: 'AI品質検査システム',
        description: 'カメラ画像を用いた製品不良検知システムの開発',
        results: ['検査精度99.2%達成', '検査時間50%短縮', '人的コスト70%削減'],
        period: '2023年4月 - 2023年12月',
        technologies: ['Computer Vision', 'TensorFlow', 'OpenCV', 'Python'],
    },
    {
        id: 2,
        client: '物流業B社',
        project: 'スマート農業システム',
        description: 'IoTセンサーを活用した農作物の生育管理システムの構築',
        results: ['農業100%の自動化', '燃料コスト25%削減', 'CO2排出量30%減'],
        period: '2023年1月 - 2023年8月',
        technologies: ['IoT Sensors', 'GPS Tracking', 'Machine Learning', 'AWS'],
    },
    {
        id: 3,
        client: '小売業C社',
        project: 'NomNomの制作',
        description: 'キッチンカー管理アプリの開発と運用支援',
        results: ['売上120%向上', 'CV率80%改善', 'サイト速度70%高速化'],
        period: '2022年10月 - 2023年3月',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'Vercel'],
    },
];

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState<'services' | 'achievements'>('services');
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            事業・実績紹介
          </motion.h1>
          
          <motion.p
            className="text-center text-gray-600 mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            最先端技術で企業のデジタル変革を推進し、持続可能な成長を支援します
          </motion.p>

          {/* タブナビゲーション */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'services'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                サービス紹介
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'achievements'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                実績紹介
              </button>
            </div>
          </div>

          {/* サービス紹介セクション */}
          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid gap-8 lg:grid-cols-3">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: service.id * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <h2 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h2>
                      <p className="text-gray-600">{service.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">主要機能</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">使用技術</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">導入効果</h3>
                        <ul className="space-y-1">
                          {service.results.map((result, index) => (
                            <li key={index} className="text-green-600 text-sm flex items-center">
                              <span className="mr-2">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => setExpandedService(
                          expandedService === service.id ? null : service.id
                        )}
                        className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {expandedService === service.id ? '詳細を閉じる' : '詳細を見る'}
                      </button>

                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-4 bg-gray-50 rounded-lg"
                        >
                          <p className="text-gray-700">{service.longDescription}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 実績紹介セクション */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid gap-8 lg:grid-cols-2">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: achievement.id * 0.1 }}
                  >
                    <div className="mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{achievement.project}</h2>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {achievement.client}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{achievement.description}</p>
                      <p className="text-sm text-blue-600 font-medium">{achievement.period}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">プロジェクト成果</h3>
                        <ul className="space-y-2">
                          {achievement.results.map((result, index) => (
                            <li key={index} className="text-green-600 flex items-center">
                              <span className="mr-2 text-green-500">📈</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">使用技術</h3>
                        <div className="flex flex-wrap gap-2">
                          {achievement.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 統計情報セクション */}
          <motion.div
            className="mt-20 bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Qurestの実績数値
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">プロジェクト完了</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">顧客満足度</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">3年</div>
                <div className="text-gray-600">平均サポート期間</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24h</div>
                <div className="text-gray-600">平均レスポンス時間</div>
              </div>
            </div>
          </motion.div>

          {/* CTA セクション */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">プロジェクトのご相談はこちら</h2>
            <p className="text-xl mb-8 opacity-90">
              お客様の課題に最適なソリューションをご提案いたします
            </p>
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                お問い合わせ
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}