'use client';

import Link from 'next/link';

const positions = [
  {
    title: 'Frontend Developer',
    subtitle: 'フロントエンド開発者',
    description: 'React/Next.jsを使用したWebアプリケーション開発',
    requirements: ['React/Next.jsの基礎知識', 'TypeScriptの理解', 'レスポンシブデザインへの理解', '学習意欲とチームワーク'],
    benefits: ['実践的な開発経験', 'ポートフォリオ作成支援', '技術メンタリング', 'ガクチカとしての経験']
  },
  {
    title: 'Backend Developer',
    subtitle: 'バックエンド開発者', 
    description: 'API設計・開発とデータベース設計',
    requirements: ['Node.js/TypeScriptの基礎知識', 'データベースの基本理解', 'RESTful APIの理解', 'コードレビューへの積極性'],
    benefits: ['サーバーサイド開発経験', 'データベース設計スキル', 'セキュリティに関する知識', 'システム設計の経験']
  },
  {
    title: 'UI/UX Designer',
    subtitle: 'UI/UXデザイナー',
    description: 'ユーザーインターフェースとユーザー体験の設計',
    requirements: ['デザインツール（Figma等）の使用経験', 'ユーザー中心設計への理解', 'プロトタイピング経験', 'フィードバックを活かす姿勢'],
    benefits: ['デザインシステム構築経験', 'ユーザーリサーチスキル', 'プロダクトデザインの実践', '実際のユーザーからのフィードバック']
  },
  {
    title: 'Project Manager',
    subtitle: 'プロジェクトマネージャー',
    description: 'プロジェクト全体の進行管理と品質保証',
    requirements: ['プロジェクト管理への興味', 'コミュニケーション能力', '課題解決思考', 'リーダーシップ経験'],
    benefits: ['プロジェクト管理手法の習得', 'チームマネジメント経験', 'ステークホルダー調整スキル', 'ビジネススキル向上']
  }
];

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded text-sm font-bold uppercase tracking-wide mb-4 inline-block">
            Join Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">採用情報</h1>
          <p className="text-xl text-white opacity-90 max-w-4xl mx-auto">
            一緒にプロジェクトを作り上げていく仲間を募集しています
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Why Join Us */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">なぜQURESTで働くのか</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg border">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🚀
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">実際のプロダクト開発</h3>
              <p className="text-sm text-gray-600">理論だけでなく、実際にユーザーが使用するプロダクトの開発に携わることができます</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👥
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">チーム開発経験</h3>
              <p className="text-sm text-gray-600">Git、コードレビュー、アジャイル開発など、実務で必要なチーム開発スキルを習得できます</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                📈
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">成長機会</h3>
              <p className="text-sm text-gray-600">技術的な成長だけでなく、ビジネス感覚やプロダクト思考も身に付けることができます</p>
            </div>
          </div>
        </div>

        {/* Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">募集職種</h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border shadow-sm">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{position.title}</h3>
                    <p className="text-gray-600 text-lg mb-4">{position.subtitle}</p>
                    <p className="text-gray-700 mb-6">{position.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">求める人物像</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">得られる経験</h4>
                    <div className="space-y-3">
                      {position.benefits.map((benefit, idx) => (
                        <div key={idx} className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">応募の流れ</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">エントリー</h3>
              <p className="text-sm text-gray-600">下記フォームまたはメールからご応募ください</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">カジュアル面談</h3>
              <p className="text-sm text-gray-600">プロジェクトや志望動機についてお話しします</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">技術面談</h3>
              <p className="text-sm text-gray-600">技術レベルの確認と今後の学習プランを相談</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">参加決定</h3>
              <p className="text-sm text-gray-600">プロジェクトへの参加とオンボーディング</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">今すぐ応募する</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Nom!Nom!プロジェクトで、あなたの技術力とアイデアを活かしませんか？<br />
            一緒に学生生活をより良くするサービスを作りましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-bold uppercase transition-colors">
              採用に関するお問い合わせ
            </Link>
            <a href="mailto:recruit@qurest.com" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded font-bold uppercase transition-colors">
              直接メール
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}