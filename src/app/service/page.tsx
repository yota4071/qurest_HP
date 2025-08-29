'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    title: 'Nom!Nom!',
    description: '立命館大学OICキャンパス向けキッチンカー評価プラットフォーム',
    longDescription: '学生がキッチンカーを簡単に検索・評価できるプラットフォームです。立命館大学の協力のもと、学生のランチタイムをより充実させることを目的としています。多くの企業からも興味を示していただいており、学生の皆さんにとって素晴らしいガクチカにもなる注目のプロジェクトです。',
    status: 'ローンチ準備中',
    features: ['キッチンカー検索機能', 'レビュー・評価システム', '学生コミュニティ機能', 'お気に入り機能', '営業時間・位置情報表示'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    highlights: ['大学公認プロジェクト', '複数企業が興味を示している', '学生主導の開発', 'ガクチカに最適']
  },
  {
    title: 'Nom!Nom! Mobile App',
    description: 'iOS・Android対応のモバイルアプリケーション開発',
    longDescription: 'Webプラットフォームの成功を受けて、より便利なモバイル体験を提供するためのアプリ開発プロジェクトです。プッシュ通知やオフライン機能など、モバイル特有の機能を活用します。',
    status: '開発中',
    features: ['プッシュ通知', 'オフライン閲覧', '位置情報連携', 'カメラ機能', 'ソーシャル共有'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Push Notifications', 'Maps API'],
    highlights: ['クロスプラットフォーム開発', 'モバイルUX最適化', '最新技術の習得', 'アプリストア公開予定']
  },
  {
    title: 'Nom!Nom! 全国展開',
    description: '全国の大学キャンパス向けスケーラブル版の企画・開発',
    longDescription: 'OICキャンパスでの実績をもとに、全国の大学で利用できるプラットフォームへの拡張を計画しています。各大学の特色に合わせたカスタマイズや、大学間の連携機能も検討中です。',
    status: '企画中',
    features: ['マルチキャンパス対応', '大学個別カスタマイズ', '統合管理システム', '分析ダッシュボード', 'API提供'],
    technologies: ['Microservices', 'GraphQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
    highlights: ['スケーラビリティ設計', '企業との連携強化', 'データ分析活用', '全国規模展開']
  }
];

const developmentPhases = [
  {
    id: 1,
    title: 'プロトタイプ開発',
    description: '基本機能の実装とユーザビリティテスト',
    status: 'completed',
    duration: '2024年10月 - 12月',
    deliverables: ['基本UI実装', 'データベース設計', 'ユーザー認証機能', '初期テスト']
  },
  {
    id: 2,
    title: 'プラットフォーム完成',
    description: '本格的な機能実装とシステム最適化',
    status: 'completed',
    duration: '2025年1月 - 2月',
    deliverables: ['レビューシステム', '検索・フィルター機能', 'レスポンシブデザイン', 'セキュリティ強化']
  },
  {
    id: 3,
    title: 'ローンチ準備',
    description: 'プロダクション環境での最終テストと調整',
    status: 'in-progress',
    duration: '2025年2月 - 3月',
    deliverables: ['パフォーマンステスト', 'ユーザー受け入れテスト', '本番環境構築', 'ドキュメント整備']
  },
  {
    id: 4,
    title: 'モバイルアプリ開発',
    description: 'iOS・Android対応アプリケーション開発',
    status: 'planned',
    duration: '2025年3月 - 6月',
    deliverables: ['モバイルUI設計', 'ネイティブ機能実装', 'アプリストア申請', 'プッシュ通知システム']
  }
];

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'development'>('projects');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded text-sm font-bold uppercase tracking-wide mb-4 inline-block">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Projects & Development</h1>
          <p className="text-xl text-white opacity-90 max-w-4xl mx-auto">
            学生主導で進める革新的なプロジェクトと最新技術を活用した開発プロセス
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 font-bold text-sm uppercase rounded-md transition-all ${
                activeTab === 'projects'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Current Projects
            </button>
            <button
              onClick={() => setActiveTab('development')}
              className={`px-8 py-3 font-bold text-sm uppercase rounded-md transition-all ${
                activeTab === 'development'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Development Phases
            </button>
          </div>
        </div>

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border shadow-sm">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">
                          {project.title}
                        </h2>
                        <p className="text-gray-600 text-lg">
                          {project.description}
                        </p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase ${
                        project.status === 'ローンチ準備中' ? 'bg-green-100 text-green-800' :
                        project.status === '開発中' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="px-3 py-2 text-sm text-gray-700 border border-gray-200 rounded">
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Project Highlights</h3>
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded font-bold uppercase text-sm transition-colors"
                >
                  {expandedProject === index ? 'Close Details' : 'View Details'}
                </button>

                {expandedProject === index && (
                  <div className="mt-6 p-6 bg-gray-50 rounded border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>
                    <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Development Phases Section */}
        {activeTab === 'development' && (
          <div className="space-y-8">
            {developmentPhases.map((phase) => (
              <div key={phase.id} className={`bg-white rounded-lg p-8 border-l-4 shadow-sm ${
                phase.status === 'completed' ? 'border-green-500' :
                phase.status === 'in-progress' ? 'border-orange-500' :
                'border-gray-300'
              }`}>
                <div className="flex items-start gap-8">
                  <div className={`w-16 h-16 border-2 rounded-full flex items-center justify-center font-bold text-lg ${
                    phase.status === 'completed' ? 'border-green-500 bg-green-50 text-green-700' :
                    phase.status === 'in-progress' ? 'border-orange-500 bg-orange-50 text-orange-700' :
                    'border-gray-300 bg-gray-50 text-gray-500'
                  }`}>
                    {phase.id}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                      <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${
                        phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                        phase.status === 'in-progress' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {phase.status === 'completed' ? 'Completed' :
                         phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="text-sm text-gray-500 mb-4 font-medium">{phase.duration}</div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Deliverables:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className={`w-2 h-2 rounded-full ${
                              phase.status === 'completed' ? 'bg-green-500' :
                              phase.status === 'in-progress' ? 'bg-orange-500' :
                              'bg-gray-300'
                            }`} />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            私たちと一緒にNom!Nom!を成功に導きませんか？<br />
            技術力を磨きながら、実際のプロダクト開発に携わることができます
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/recruit" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-bold uppercase transition-colors">
              Join Us
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded font-bold uppercase transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}