// app/page.tsx

'use client';

import Hero from "@/sections/Hero";
import Greeting from "@/sections/Greeting";
import NewsPage from "@/app/news/page";
import RecruitPreview from "@/components/RecruitPreview";
import AnimatedCounter from "@/components/AnimatedCounter";
import FloatingElements from "@/components/FloatingElements";
import ParallaxWrapper from "@/components/ParallaxWrapper";
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
      <Hero />
      
      {/* ニュースセクション */}
      <NewsPage />

      {/* メインコンテンツ */}
      <main className="relative bg-white">
        {/* 代表挨拶セクション */}
        <Greeting />

        {/* 提供サービスセクション */}
        <section className="section-padding bg-gradient-to-br from-warm-gray via-white to-accent-platinum/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-block px-4 py-2 bg-accent-gold/10 text-accent-gold font-medium rounded-full mb-6 text-sm">
                OUR SERVICES
              </span>
              <h2 className="font-display responsive-text-4xl lg:responsive-text-5xl font-bold mb-8 text-gradient-elegant">
                提供サービス
              </h2>
              <p className="responsive-text-lg text-charcoal/70 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
                最先端技術と高度な専門知識で、お客様のビジネスを
                <br className="hidden md:block" />
                次のステージへと導くプレミアムソリューション
              </p>
            </motion.div>

            <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 mb-20">
              {topServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="luxury-card rounded-3xl p-10 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -12 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-gold/10 to-transparent rounded-full -mr-16 -mt-16" />
                  <div className="text-center mb-8 relative z-10">
                    <motion.div 
                      className="text-7xl mb-6 filter drop-shadow-lg"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="font-display text-3xl font-bold mb-4 text-deep-navy">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed text-lg font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div className="flex flex-wrap gap-3 justify-center">
                      {service.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${service.color} shadow-lg`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/service">
                <motion.button
                  className="bg-gradient-to-r from-accent-gold to-yellow-400 text-deep-navy px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-accent-gold/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  サービス詳細を見る
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section className="section-padding bg-gradient-to-b from-white to-warm-gray">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-deep-navy/10 text-deep-navy font-medium rounded-full mb-6 text-sm">
                OUR STRENGTHS
              </span>
              <h2 className="font-display responsive-text-4xl lg:responsive-text-5xl font-bold mb-8 text-gradient-luxury">
                Qurestの強み
              </h2>
              <p className="responsive-text-lg text-charcoal/70 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
                長年の経験と最先端技術で築いた信頼と実績をもとに、
                <br className="hidden md:block" />
                お客様のプロジェクトを確実に成功へと導きます
              </p>
            </motion.div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="text-center p-8 rounded-2xl luxury-card group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-gold/5 to-transparent rounded-full -mr-12 -mt-12" />
                  <motion.div 
                    className="text-6xl mb-6 filter drop-shadow-lg relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-deep-navy relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed font-light relative z-10">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 実績数値セクション */}
        <section className="section-padding bg-gradient-to-br from-deep-navy via-charcoal to-deep-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-accent-gold/20 text-accent-gold font-medium rounded-full mb-6 text-sm">
                ACHIEVEMENTS
              </span>
              <h2 className="font-display responsive-text-4xl lg:responsive-text-5xl font-bold mb-8 text-white">
                数字で見るQurest
              </h2>
              <p className="responsive-text-lg text-white/70 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
                これまでの実績とお客様からの信頼が、私たちの品質を物語っています
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: '100+', label: 'プロジェクト完了', color: 'text-yellow-300' },
                { number: '98%', label: '顧客満足度', color: 'text-green-300' },
                { number: '5年', label: '平均サポート期間', color: 'text-blue-300' },
                { number: '24h', label: 'レスポンス時間', color: 'text-pink-300' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="font-display text-6xl lg:text-7xl font-bold mb-4 filter drop-shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedCounter 
                      value={stat.number} 
                      className={stat.color}
                      duration={2 + index * 0.3}
                    />
                  </motion.div>
                  <div className="text-white/90 text-lg font-medium group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                  <div className="w-12 h-0.5 bg-accent-gold mx-auto mt-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 人材募集セクション */}
        <div className="relative">
          <FloatingElements />
          <ParallaxWrapper offset={30}>
            <RecruitPreview />
          </ParallaxWrapper>
        </div>

        {/* CTAセクション */}
        <section className="section-padding bg-gradient-to-br from-warm-gray via-accent-platinum/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/5 to-transparent" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-block px-4 py-2 bg-accent-gold/10 text-accent-gold font-medium rounded-full mb-6 text-sm">
                GET STARTED
              </span>
              <h2 className="font-display responsive-text-4xl lg:responsive-text-5xl font-bold mb-8 text-gradient-elegant">
                プロジェクトを始めませんか？
              </h2>
              <p className="responsive-text-lg text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
                お客様のビジネス課題や目標をお聞かせください。
                <br className="hidden md:block" />
                最適なソリューションをカスタマイズしてご提案いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <motion.button
                    className="bg-gradient-to-r from-accent-gold to-yellow-400 text-deep-navy px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-accent-gold/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    お問い合わせ
                  </motion.button>
                </Link>
                <Link href="/service">
                  <motion.button
                    className="border-2 border-deep-navy text-deep-navy px-12 py-5 rounded-full font-bold text-lg hover:bg-deep-navy hover:text-white transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
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
        <footer className="bg-gradient-to-br from-deep-navy via-charcoal to-deep-navy text-white py-16 px-6 sm:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4af37%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-4xl font-bold mb-4 text-gradient-gold">Qurest Inc.</h3>
              <p className="text-xl text-white/70 font-light">正しい未来を創造する</p>
              <div className="w-24 h-0.5 bg-accent-gold mx-auto mt-6" />
            </motion.div>
            <motion.div 
              className="border-t border-white/10 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-white/60 text-sm font-light">
                © 2025 Qurest Inc. All rights reserved.
              </p>
            </motion.div>
          </div>
        </footer>
      </main>
    </>
  );
}