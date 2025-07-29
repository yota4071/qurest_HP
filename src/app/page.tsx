// app/page.tsx

'use client';

import Hero from "@/sections/Hero";
import Greeting from "@/sections/Greeting";
import NewsPage from "@/app/news/page";
import RecruitPreview from "@/components/RecruitPreview";
import Link from "next/link";
import { motion } from "framer-motion";

const topServices = [
  {
    id: 1,
    title: 'AIソリューション開発',
    description: '機械学習とディープラーニングを活用した革新的なAIソリューションを提供',
    icon: '🤖',
    features: ['自然言語処理', '画像認識', '予測分析'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'IoTシステム構築',
    description: 'スマートセンサーとクラウド連携でデジタル変革を加速',
    icon: '📡',
    features: ['リアルタイム監視', 'データ収集', '予防保全'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Webアプリケーション',
    description: 'モダンな技術スタックで高性能なWebアプリを構築',
    icon: '💻',
    features: ['レスポンシブデザイン', 'API開発', 'クラウド展開'],
    color: 'from-purple-500 to-pink-500'
  },
];

const features = [
  {
    id: 1,
    title: '最新技術への対応',
    description: '常に最新のテクノロジートレンドをキャッチアップし、お客様に最適なソリューションを提供',
    icon: '⚡',
  },
  {
    id: 2,
    title: '24/7サポート体制',
    description: '導入後も安心してご利用いただけるよう、充実したサポート体制を整備',
    icon: '🛡️',
  },
  {
    id: 3,
    title: 'カスタマイズ対応',
    description: 'お客様の業界・業務に合わせたオーダーメイドソリューションを開発',
    icon: '🎯',
  },
  {
    id: 4,
    title: 'コスト最適化',
    description: '効率的な開発プロセスにより、高品質なシステムを適正価格で提供',
    icon: '💰',
  },
];

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <Hero/>
      
      {/* ニュースセクション */}
      <NewsPage/>

      {/* メインコンテンツ */}
      <main className="relative bg-white">
        {/* 代表挨拶セクション */}
        <Greeting />

        {/* 提供サービスセクション */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                提供サービス
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                最先端技術を駆使して、お客様のビジネス課題を解決し、デジタル変革を推進します
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-3 mb-16">
              {topServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${service.color}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/service">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  サービス詳細を見る
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section className="py-24 px-6 sm:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                Questの強み
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                長年の経験と技術力で、お客様のプロジェクトを成功に導きます
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 実績数値セクション */}
        <section className="py-24 px-6 sm:px-12 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                数字で見るQuest
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                これまでの実績と信頼の証
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '100+', label: 'プロジェクト完了', color: 'text-yellow-300' },
                { number: '98%', label: '顧客満足度', color: 'text-green-300' },
                { number: '5年', label: '平均サポート期間', color: 'text-blue-300' },
                { number: '24h', label: 'レスポンス時間', color: 'text-pink-300' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`text-5xl lg:text-6xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-white text-lg font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 人材募集セクション */}
        <RecruitPreview />

        {/* CTAセクション */}
        <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                プロジェクトを始めませんか？
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                お客様のビジネス課題をお聞かせください。最適なソリューションをご提案いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    お問い合わせ
                  </motion.button>
                </Link>
                <Link href="/service">
                  <motion.button
                    className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    サービス詳細
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* フッター */}
        <footer className="bg-gray-900 text-white py-12 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Quest Inc.</h3>
              <p className="text-gray-400">正しい未来を創造する</p>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Quest Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}