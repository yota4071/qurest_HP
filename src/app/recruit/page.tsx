'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AbstractBackground from '@/components/AbstractBackground';
import { LaptopIcon, PaletteIcon, HandshakeIcon, BuildingIcon, RocketIcon, ChartIcon, BoltIcon } from '@/components/icons';

const recruitPositions = [
  {
    id: 1,
    category: 'TECHNICAL',
    title: '技術開発メンバー',
    subtitle: 'OIC学生歓迎（全学部対象）',
    description: 'Nom!Nom!の開発に携わる技術メンバーを募集しています。情報理工学部以外の学生も大歓迎！プログラミング初心者でも学習意欲があれば一緒に成長できます。',
    requirements: [
      'プログラミングに興味がある',
      'Webサイトやアプリの仕組みを学びたい',
      'チームでのものづくりに興味がある',
      '新しい技術を学ぶ意欲がある'
    ],
    preferredSkills: [
      'HTML/CSS/JavaScriptの基礎知識',
      'React、Next.jsの学習経験',
      'TypeScriptの基礎',
      'GitHubの使用経験'
    ],
    whatYouLearn: [
      '最新のWeb開発技術',
      'チーム開発の進め方',
      'ユーザー目線でのサービス設計',
      '実際のプロダクト開発プロセス'
    ],
    highlights: [
      'ガクチカとして最適',
      '実際のプロダクト開発経験',
      '最新技術の学習機会',
      '学部・学年不問'
    ],
    color: 'from-accent-neon to-accent-glow',
    icon: <LaptopIcon size={32} className="text-current" />
  },
  {
    id: 2,
    category: 'DESIGN & MARKETING',
    title: 'デザイン・広報担当',
    subtitle: 'クリエイティブな学生求む',
    description: 'Nom!Nom!のブランディング、UI/UXデザイン、SNS運用を担当。デザイン経験がなくても、センスとやる気があれば大丈夫！一緒にサービスの魅力を伝えましょう。',
    requirements: [
      'デザインやマーケティングに興味がある',
      'SNSを日常的に使用している',
      'ユーザーの気持ちを考えられる',
      'コミュニケーション能力がある'
    ],
    preferredSkills: [
      'Figma、Canva等のデザインツール使用経験',
      'Instagram、Twitter等のSNS運用経験',
      'Photoshop、Illustratorの基礎',
      'マーケティングの基礎知識'
    ],
    whatYouLearn: [
      'UI/UXデザインの基礎',
      'ブランディング戦略',
      'SNSマーケティング',
      'ユーザーリサーチ手法'
    ],
    highlights: [
      '実際のサービスでデザイン経験',
      '企業との連携経験',
      'マーケティング実践',
      'ポートフォリオ作成'
    ],
    color: 'from-accent-highlight to-accent-abstract',
    icon: <PaletteIcon size={32} className="text-current" />
  },
  {
    id: 3,
    category: 'BUSINESS',
    title: '企業連携・営業担当',
    subtitle: '企業とのコミュニケーションが得意な学生',
    description: 'キッチンカー事業者や協力企業との関係構築を担当。将来営業職や企画職を目指す学生に最適！実際のビジネス交渉を経験できます。',
    requirements: [
      '人とのコミュニケーションが得意',
      'ビジネスに興味がある',
      '責任感がある',
      '新しい人との出会いを楽しめる'
    ],
    preferredSkills: [
      'プレゼンテーション経験',
      'Excel、PowerPointの基礎',
      '営業・接客のアルバイト経験',
      'ビジネスマナーの基礎知識'
    ],
    whatYouLearn: [
      '企業との交渉スキル',
      'ビジネスプロセス全体',
      'プレゼンテーション技術',
      'プロジェクト管理'
    ],
    highlights: [
      '実際の企業との交渉経験',
      'ビジネススキル向上',
      'ネットワーキング機会',
      '将来のキャリアに直結'
    ],
    color: 'from-white to-gray-400',
    icon: <HandshakeIcon size={32} className="text-current" />
  }
];

const projectBenefits = [
  {
    id: 1,
    title: '大学公認プロジェクト',
    description: '立命館大学OICキャンパスの公認プロジェクトとして活動',
    icon: <BuildingIcon size={32} className="text-current" />
  },
  {
    id: 2,
    title: '企業からの注目',
    description: '複数の企業がプロジェクトに興味を示しており、将来性抜群',
    icon: <RocketIcon size={32} className="text-current" />
  },
  {
    id: 3,
    title: 'ガクチカに最適',
    description: '就活で話せる具体的な成果と経験を積むことができる',
    icon: <ChartIcon size={32} className="text-current" />
  },
  {
    id: 4,
    title: '実際のプロダクト開発',
    description: '机上の空論ではなく、実際に使われるサービスの開発経験',
    icon: <BoltIcon size={32} className="text-current" />
  }
];

const workingStyle = [
  {
    id: 1,
    aspect: '活動時間',
    detail: '週3〜5時間程度（授業との両立可能）',
    flexible: true
  },
  {
    id: 2,
    aspect: '活動場所',
    detail: 'OICキャンパス内 + オンライン（ハイブリッド）',
    flexible: true
  },
  {
    id: 3,
    aspect: '期間',
    detail: '最低3ヶ月〜（長期歓迎）',
    flexible: false
  },
  {
    id: 4,
    aspect: '報酬',
    detail: 'プロジェクトの成果に応じて検討',
    flexible: true
  }
];

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AbstractBackground intensity="medium" />
      
      <div className="relative z-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block px-8 py-4 glass-morphism border border-white/10 text-sm font-bold tracking-[0.3em] uppercase text-white/90 font-display mb-8">
                JOIN OUR TEAM
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-black mb-8 text-gradient-abstract">
                BUILD THE FUTURE
              </h1>
              <div className="font-bangers text-6xl lg:text-8xl mb-8 text-accent-neon">
                Nom!Nom!
              </div>
              <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
                立命館大学OICキャンパスから始まる革新的なプロジェクト
                <br className="hidden md:block" />
                私たちと一緒に学生生活を変える体験を作りませんか？
              </p>
            </motion.div>

            {/* Project Benefits */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="font-display text-3xl font-bold text-center mb-12 text-gradient-primary">
                なぜNom!Nom!に参加するべきか
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    className="luxury-card p-8 text-center group hover-lift"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <div className="text-white/90 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-gradient-abstract transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recruitment Positions */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="font-display text-4xl font-black text-center mb-4 text-gradient-abstract">
                RECRUITMENT POSITIONS
              </h2>
              <p className="text-center text-white/70 mb-16 text-lg">
                あなたの興味や得意分野に合わせて活躍できるポジションを用意しています
              </p>
              
              <div className="space-y-12">
                {recruitPositions.map((position, index) => (
                  <motion.div
                    key={position.id}
                    className="luxury-card p-12 group relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div className={`w-full h-full bg-gradient-to-br ${position.color} blur-2xl`} />
                    </div>
                    
                    <div className="relative z-20">
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <div className="flex items-center gap-4 mb-2">
                            <div className="text-white/90">{position.icon}</div>
                            <span className="px-4 py-2 bg-white/10 text-white/80 text-xs font-bold tracking-wider uppercase border border-white/20">
                              {position.category}
                            </span>
                          </div>
                          <h3 className="font-display text-3xl font-black text-white mb-2 group-hover:text-gradient-abstract transition-colors duration-300">
                            {position.title}
                          </h3>
                          <p className="text-accent-glow text-lg font-bold mb-4">{position.subtitle}</p>
                          <p className="text-white/80 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                            {position.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-4 gap-8">
                        <div>
                          <h4 className="font-display text-lg font-bold text-white mb-4">必要な素質</h4>
                          <div className="space-y-2">
                            {position.requirements.map((req, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-white/70">
                                <div className="w-1.5 h-1.5 bg-accent-glow rounded-full mt-2 flex-shrink-0" />
                                <span>{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-display text-lg font-bold text-white mb-4">歓迎スキル</h4>
                          <div className="space-y-2">
                            {position.preferredSkills.map((skill, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-white/70">
                                <div className="w-1.5 h-1.5 bg-accent-highlight rounded-full mt-2 flex-shrink-0" />
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-display text-lg font-bold text-white mb-4">学べること</h4>
                          <div className="space-y-2">
                            {position.whatYouLearn.map((learn, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-white/70">
                                <div className="w-1.5 h-1.5 bg-accent-neon rounded-full mt-2 flex-shrink-0" />
                                <span>{learn}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-display text-lg font-bold text-white mb-4">特別ポイント</h4>
                          <div className="space-y-3">
                            {position.highlights.map((highlight, idx) => (
                              <motion.div
                                key={idx}
                                className="px-3 py-2 glass-morphism border border-white/10 text-sm text-white/80 group-hover:border-accent-glow/30 transition-colors duration-300"
                                whileHover={{ x: 5, scale: 1.02 }}
                              >
                                {highlight}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Working Style */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl font-black text-center mb-12 text-gradient-primary">
                WORKING STYLE
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workingStyle.map((style, index) => (
                  <motion.div
                    key={style.id}
                    className="luxury-card p-6 text-center group hover-lift"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-gradient-abstract transition-colors duration-300">
                      {style.aspect}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                      {style.detail}
                    </p>
                    {style.flexible && (
                      <span className="px-3 py-1 bg-accent-neon/20 text-accent-neon text-xs font-bold tracking-wider uppercase border border-accent-neon/30">
                        FLEXIBLE
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Application Process */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl font-black text-center mb-12 text-gradient-abstract">
                APPLICATION PROCESS
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { step: '01', title: 'エントリー', desc: 'お問い合わせフォームから応募' },
                    { step: '02', title: 'カジュアル面談', desc: 'プロジェクトの詳細説明と質疑応答' },
                    { step: '03', title: '参加決定', desc: 'チーム参加とプロジェクト開始' }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      className="text-center group"
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 mx-auto mb-6 border-2 border-accent-glow flex items-center justify-center group-hover:border-accent-highlight transition-colors duration-300">
                        <span className="font-display text-2xl font-black text-accent-glow group-hover:text-accent-highlight transition-colors duration-300">
                          {process.step}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gradient-abstract transition-colors duration-300">
                        {process.title}
                      </h3>
                      <p className="text-white/70 text-sm">{process.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="text-center luxury-card p-16 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-highlight/10 to-accent-glow/10" />
              <div className="relative z-10">
                <h2 className="font-display text-4xl font-black mb-6 text-gradient-abstract">
                  READY TO JOIN?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  あなたの学生生活を変える、特別なプロジェクトへの参加をお待ちしています。<br />
                  まずはお気軽にお話ししましょう！
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <motion.button
                      className="btn-primary px-16 py-6 text-lg font-black tracking-[0.15em]"
                      whileHover={{ scale: 1.08, y: -5 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      APPLY NOW
                    </motion.button>
                  </Link>
                  <Link href="/service">
                    <motion.button
                      className="btn-secondary px-16 py-6 text-lg font-black tracking-[0.15em]"
                      whileHover={{ scale: 1.08, y: -5 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      LEARN MORE
                    </motion.button>
                  </Link>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/50 text-sm font-display tracking-wider">
                    QUESTIONS? CONTACT US ANYTIME
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}