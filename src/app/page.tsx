// app/page.tsx

'use client';

import Link from "next/link";
import DesignIcon from "@/components/icons/DesignIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import AnalyticsIcon from "@/components/icons/AnalyticsIcon";
import InnovationIcon from "@/components/icons/InnovationIcon";
import QurestLogo from "@/components/icons/QurestLogo";
import NomNomText from "@/components/NomNomText";

const news = [
  {
    date: '2025-08-15',
    title: 'Nom!Nom! プロジェクト始動',
    content: '立命館大学OICキャンパスのキッチンカー評価プラットフォームの開発を開始しました。'
  },
  {
    date: '2025-07-20',
    title: 'チーム結成',
    content: '学生による開発チームが正式に結成され、プロジェクトの企画段階に入りました。'
  },
  {
    date: '2025-06-10',
    title: '市場調査完了',
    content: 'キャンパス内での食事に関する学生のニーズ調査が完了しました。'
  }
];

const projects = [
  {
    title: 'Nom!Nom!',
    description: '立命館大学OICキャンパスのキッチンカー評価プラットフォーム',
    features: ['キッチンカー検索', 'レビューシステム', '学生コミュニティ'],
    status: 'ローンチ予定',
    useBangers: true
  },
  {
    title: 'Nom!Nom! Mobile App',
    description: 'モバイルアプリ版の開発でより便利なユーザー体験を実現',
    features: ['プッシュ通知', 'オフライン閲覧', '位置情報連携'],
    status: '開発中',
    useBangers: true
  },
  {
    title: 'Nom!Nom! 全国版',
    description: '全国の大学キャンパスで利用可能な拡張バージョン',
    features: ['マルチキャンパス対応', 'スケーラブル設計', '大学連携機能'],
    status: '計画中',
    useBangers: true
  }
];

const approaches = [
  {
    title: 'ユーザー体験設計',
    description: '学生にとって使いやすいインターフェースと機能を追求'
  },
  {
    title: 'コミュニティ構築',
    description: '学生間の情報共有とコミュニケーションを促進'
  },
  {
    title: 'データ活用',
    description: 'ユーザーレビューを分析してサービスを改善'
  },
  {
    title: '技術革新',
    description: '最新のウェブ技術とモバイル技術を組み合わせ'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <QurestLogo className="w-12 h-12 text-gray-800 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">QUREST</h1>
          </div>
          <p className="text-lg mb-8 text-gray-600 max-w-3xl mx-auto">立命館大学OICキャンパスのキッチンカー評価プラットフォーム「<NomNomText className="text-xl" />」を開発中</p>
          <div className="flex gap-4 justify-center">
            <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors">
              プロジェクトを見る
            </Link>
            <Link href="#contact" className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-3 rounded transition-colors">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">最新情報</h2>
            <p className="text-gray-600">最新のプロジェクト情報をお届けします</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-sm mb-2 font-medium">{item.date}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">私たちについて</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6 text-gray-700 text-center">
                私たちQURESTは、学生生活をより便利で楽しいものにするためのサービス開発に取り組んでいます。
                現在開発中の「<NomNomText />」は、キャンパス内のキッチンカー情報を学生同士で共有できるプラットフォームです。
              </p>
              <p className="text-center text-blue-600 font-medium text-lg">
                学生の、学生による、学生のためのサービスを目指して。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">プロジェクト</h2>
            <p className="text-gray-600">現在進行中のプロジェクトをご紹介します</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                <h3 className={`text-xl font-semibold mb-3 text-gray-800 ${project.useBangers ? 'font-bangers text-blue-600' : ''}`}>{project.title}</h3>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                  project.status === 'ローンチ予定' ? 'bg-green-100 text-green-800' :
                  project.status === '開発中' ? 'bg-orange-100 text-orange-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.status}
                </span>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <ul className="space-y-3 text-left">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">私たちのアプローチ</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                  {index === 0 ? <DesignIcon className="w-8 h-8" /> : 
                   index === 1 ? <TeamIcon className="w-8 h-8" /> : 
                   index === 2 ? <AnalyticsIcon className="w-8 h-8" /> : 
                   <InnovationIcon className="w-8 h-8" />}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">プロジェクト進捗</h2>
            <p className="text-gray-600">現在のプロジェクト状況をお知らせします</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold mb-2"><NomNomText /></div>
              <div className="text-sm font-medium text-gray-600 mb-2">メインプロジェクト</div>
              <div className="text-gray-500">立命館大学OIC向け</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-sm font-medium text-gray-600 mb-2">進行中プロジェクト</div>
              <div className="text-gray-500">アプリ化・全国展開</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">?</div>
              <div className="text-sm font-medium text-gray-600 mb-2">ユーザー数</div>
              <div className="text-gray-500">ローンチ前のため未定</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              プロジェクトのご相談やお問い合わせはこちらから<br />
              新しいアイデアをお待ちしています
            </p>
          </div>
          <div className="text-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors mr-4 inline-block">
              お問い合わせフォーム
            </Link>
            <Link href="#about" className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-3 rounded transition-colors inline-block">
              私たちについて
            </Link>
          </div>
        </div>
      </section>

      {/* Recruit Section */}
      <section id="recruit" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">採用情報</h2>
            <p className="text-gray-600">一緒にプロジェクトを作り上げていく仲間を募集しています</p>
          </div>
          <div className="text-center">
            <Link href="/recruit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors">
              採用に関するお問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-3">QUREST</h3>
          <p className="text-gray-400 mb-8">学生のためのデジタルソリューションを創造</p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">© 2025 QUREST. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}