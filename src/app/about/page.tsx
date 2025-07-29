'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const values = [
  {
    id: 1,
    title: 'Innovation',
    subtitle: '革新性',
    description: '最新技術を駆使し、従来の枠を超えた革新的なソリューションを提供します',
    icon: '💡',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    title: 'Integrity',
    subtitle: '誠実性',
    description: '透明性と信頼性を重視し、お客様との長期的なパートナーシップを築きます',
    icon: '🤝',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 3,
    title: 'Excellence',
    subtitle: '卓越性',
    description: '品質と成果にこだわり、常に期待を上回る価値を提供し続けます',
    icon: '⭐',
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 4,
    title: 'Sustainability',
    subtitle: '持続可能性',
    description: '環境と社会に配慮した持続可能なビジネスモデルを追求します',
    icon: '🌱',
    color: 'from-green-400 to-emerald-500'
  }
];

const timeline = [
  {
    year: '2022',
    title: 'メンバーの出会い',
    description: '現メンバーが大学のサークルで出会う'
  },
  {
    year: '2021',
    title: '役員Wakaが落単',
    description: '役員Wakaが大学の単位を落とし、就職活動を断念。起業を決意'
  },
  {
    year: '2022',
    title: '事業化準備',
    description: '市場調査と事業計画の策定、初期資金の調達を実施'
  },
  {
    year: '2024/08',
    title: '研究室で新たな出会い',
    description: '大学の研究室で新たな出会いに恵まれる'
  },
  {
    year: '2025/08',
    title: 'サービス開始',
    description: 'キッチンカー管理アプリNomNomの正式サービス開始'
  },
  {
    year: '2025/03',
    title: '会社設立',
    description: 'Qurest Group正式設立、大阪支社開設'
  }
];

const team = [
  {
    name: 'Oz',
    position: '代表取締役CEO',
    description: '',
    image: '/team/ceo.jpg',
    expertise: ['事業戦略', 'テクノロジー', '要件定義']
  },
  {
    name: 'Waka',
    position: '取締役CTO',
    description: 'メモリ領域中心に高い技術力を持ち、システム設計から動的Webアプリ制作、IoT領域まで幅広い技術を自在に操るエンジニアリングの鬼才。これまで数々の開発プロジェクトを技術面から牽引し、圧倒的なスピードと品質でプロダクトを形にしてきた。Qurestでは、未来を見据えたテクノロジー戦略を主導しながら、若手エンジニアの育成にも尽力。常に開発現場の最前線に立ち続けており、今やQurestに絶対に欠かせない人材の一人。',
    image: '/team/cto.jpg',
    expertise: ['BadRam', 'システム設計', '技術戦略']
  }
];

export default function CompanyIntroduction() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Qurest Inc.
          </motion.h1>
          
          <motion.p
            className="text-2xl sm:text-3xl font-light mb-6 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            正しい未来を創造する
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            私たちQurestは、テクノロジーと創造性を融合させ、社会課題の解決に取り組む企業です。
            AI・IoT・Web技術を駆使して、持続可能で豊かな未来の実現を目指しています。
          </motion.p>
        </div>
      </section>

      {/* 企業価値観セクション */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              私たちの行動指針となる4つの価値観
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                    {value.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 沿革セクション */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Company History
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Qurestの歩みと成長の軌跡
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl opacity-50">📅</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* チームセクション */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Qurestを牽引するリーダーシップチーム
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-5xl">👤</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Company Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Qurestの基本情報
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {[
                { label: '会社名', value: 'Qurest Inc.' },
                { label: '設立', value: '2025年4月1日' },
                { label: '代表取締役', value: 'Oz' },
                { label: '取締役', value: 'Waka' },
                { label: '従業員数', value: '6名' },
                { label: '資本金', value: '1億円' },
                { label: '主要取引銀行', value: '三井住友銀行' },
                { label: '事業内容', value: 'AIソリューション開発・IoTシステム構築・Webアプリケーション開発' }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 last:border-b-0`}
                >
                  <dt className="text-sm font-medium text-gray-500 mb-2">
                    {item.label}
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {item.value}
                  </dd>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 所在地セクション */}
          <motion.div
            className="mt-12 bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
              Office Locations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-4 text-blue-600">本社</h4>
                <div className="space-y-2 text-gray-600">
                  <p>〒100-0000</p>
                  <p>東京都千代田区大手町1-1-1</p>
                  <p>大手町ビル 10F</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-4 text-blue-600">大阪支社</h4>
                <div className="space-y-2 text-gray-600">
                  <p>〒567-0123</p>
                  <p>大阪府大阪市北区梅田2-2-2</p>
                  <p>梅田センタービル 8F</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              一緒に未来を創りませんか？
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
              Qurestでは、志を共にする仲間を募集しています。
              あなたの力で、正しい未来を創造しましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recruit">
                <motion.button
                  className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  採用情報
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  お問い合わせ
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}