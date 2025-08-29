'use client';

import Link from 'next/link';

const positions = [
  {
    title: 'Technical Member',
    subtitle: 'エンジニア・技術メンバー',
    description: '技術やプログラミングに興味があり、学習意欲のある方を歓迎します',
    requirements: [
      '技術・プログラミングへの強い興味と学習意欲',
      '一から学ぶ大変さを「好き」で乗り越えられる方',
      '自分から積極的に学習する姿勢',
      'AI活用スキル（ChatGPT、GitHub Copilotなど）も歓迎'
    ],
    benefits: ['実践的な技術経験', '先輩メンバーによるサポート', '最新技術への触れ合い', '個人の学習スタイルに応じた指導'],
    note: '情報理工学部でなくても、数学が苦手でも、文系でも問題ありません！好きで耐えられる気持ちが一番大切です。',
    count: '募集人数：1〜2名'
  },
  {
    title: 'Business Development',
    subtitle: '営業・ビジネス開発',
    description: '周辺の居酒屋やスポンサーとの窓口となり、ビジネス関係を構築していただきます',
    requirements: [
      'コミュニケーション能力',
      '営業・交渉への興味',
      'ビジネス感覚',
      '地域のお店との関係構築に意欲がある方'
    ],
    benefits: ['実際のビジネス交渉経験', 'ネットワーキングスキル', '営業スキルの向上', '地域ビジネスへの理解'],
    note: '大学周辺の居酒屋やお店とのパートナーシップを築く、重要な役割です。',
    count: '募集人数：1〜2名'
  },
  {
    title: 'Visual Designer',
    subtitle: 'デザイナー',
    description: 'ポスター、サイネージ、アプリUIなどのデザイン制作をお任せします',
    requirements: [
      'デザインツール（Figma、Photoshop、Illustratorなど）の使用経験',
      'ビジュアルデザインへの興味',
      'ブランディングやUI/UX設計への理解',
      'フィードバックを受け入れ改善する姿勢'
    ],
    benefits: ['実際のプロダクトデザイン経験', 'ブランド構築への参加', 'ポートフォリオ作成', 'デザイン思考の実践'],
    note: '私たちはデザインの知識が全くないので、デザインの力でプロジェクトを支えてください！',
    count: '募集人数：1〜2名'
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
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-gray-800">なぜQURESTで働くのか</h2>
          <div className="overflow-x-auto lg:overflow-x-visible">
            <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 min-w-max lg:min-w-0">
            <div className="text-center p-4 lg:p-6 bg-white rounded-lg border shadow-sm flex-shrink-0 w-64 lg:w-auto">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <img src="https://www.svgrepo.com/show/535558/pencil.svg" alt="ガクチカ" className="w-6 h-6 lg:w-8 lg:h-8 filter brightness-0 invert" />
              </div>
              <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-3 text-gray-800">ガクチカに最強</h3>
              <p className="text-xs lg:text-sm text-gray-600">
                <strong>「0から1を創る」経験</strong>で就活無双！実際のユーザーを持つサービスを企画〜開発〜運用まで担当できます
              </p>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white rounded-lg border shadow-sm flex-shrink-0 w-64 lg:w-auto">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <img src="https://www.svgrepo.com/show/483596/idea-man-person.svg" alt="アイデア" className="w-6 h-6 lg:w-8 lg:h-8 filter brightness-0 invert" />
              </div>
              <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-3 text-gray-800">あなたの意見が形になる</h3>
              <p className="text-xs lg:text-sm text-gray-600">
                始まったばかりのチームだからこそ、<strong>一人ひとりの提案が製品に直結</strong>。大きな裁量権を持って主体的に活動できます
              </p>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white rounded-lg border shadow-sm flex-shrink-0 w-64 lg:w-auto">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <img src="https://www.svgrepo.com/show/498972/people.svg" alt="チーム" className="w-6 h-6 lg:w-8 lg:h-8 filter brightness-0 invert" />
              </div>
              <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-3 text-gray-800">フラットな組織</h3>
              <p className="text-xs lg:text-sm text-gray-600">
                年次や経験に関係なく、<strong>全員の意見を平等に尊重</strong>。あなたのアイデアがプロジェクトの方向性を決めることも
              </p>
            </div>
            <div className="text-center p-4 lg:p-6 bg-white rounded-lg border shadow-sm flex-shrink-0 w-64 lg:w-auto">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <img src="https://www.svgrepo.com/show/510170/rocket.svg" alt="成長" className="w-6 h-6 lg:w-8 lg:h-8 filter brightness-0 invert" />
              </div>
              <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-3 text-gray-800">リーダーシップ経験</h3>
              <p className="text-xs lg:text-sm text-gray-600">
                各自が責任を持って領域をリード。<strong>「この機能は〇〇さんが作った」</strong>と言える、オーナーシップ溢れる経験を積めます
              </p>
            </div>
            </div>
          </div>
        </div>

        {/* Gakuchika Benefits */}
        <div className="mb-12 lg:mb-16 bg-gradient-to-r from-yellow-50 to-orange-50 p-4 lg:p-8 rounded-lg border-2 border-orange-200">
          <div className="text-center mb-6 lg:mb-8">
            <div className="flex items-center justify-center gap-2 lg:gap-3 mb-4">
              <img src="https://www.svgrepo.com/show/510288/trophy.svg" alt="トロフィー" className="w-6 h-6 lg:w-8 lg:h-8" />
              <h3 className="text-lg lg:text-2xl font-bold text-orange-800">ガクチカとして最強な理由</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <img src="https://www.svgrepo.com/show/483421/business-bag-that-can-be-used-for.svg" alt="ビジネス" className="w-4 h-4 lg:w-5 lg:h-5" />
                <h4 className="text-base lg:text-lg font-bold text-gray-800">就活で差がつくポイント</h4>
              </div>
              <ul className="space-y-2 text-xs lg:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>課題発見力：</strong>「大学生の昼食問題」を発見・定義した経験</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>企画力：</strong>0からサービスを企画・設計した経験</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>実行力：</strong>技術・営業・デザインを組み合わせて実現</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>リーダーシップ：</strong>チームを牽引し、結果を出した経験</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <img src="https://www.svgrepo.com/show/520756/graph-up.svg" alt="グラフ" className="w-4 h-4 lg:w-5 lg:h-5" />
                <h4 className="text-base lg:text-lg font-bold text-gray-800">具体的な成果・数字</h4>
              </div>
              <ul className="space-y-2 text-xs lg:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <img src="https://www.svgrepo.com/show/520756/graph-up.svg" alt="成長" className="w-4 h-4 mt-0.5 text-blue-500" />
                  <span>「月間○○人のユーザーが利用するサービスを開発」</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="https://www.svgrepo.com/show/520850/money-bag.svg" alt="収益" className="w-4 h-4 mt-0.5 text-blue-500" />
                  <span>「○店舗との提携を実現し、売上○○万円に貢献」</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="https://www.svgrepo.com/show/509956/gear.svg" alt="機能" className="w-4 h-4 mt-0.5 text-blue-500" />
                  <span>「○○の機能開発を担当し、UX改善を実現」</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="https://www.svgrepo.com/show/521876/target.svg" alt="目標" className="w-4 h-4 mt-0.5 text-blue-500" />
                  <span>「チームをまとめ、○ヶ月でMVPをリリース」</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
            <div className="flex items-center justify-center gap-2">
              <img src="https://www.svgrepo.com/show/483596/idea-man-person.svg" alt="アイデア" className="w-5 h-5" />
              <p className="text-yellow-800 font-medium text-center">
                面接官に「どんなことをしたんですか？」と前のめりで聞かれる、そんなガクチカが作れます！
              </p>
            </div>
          </div>
        </div>

        {/* Positions */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 text-gray-800">募集職種</h2>
          <div className="space-y-6 lg:space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg p-4 lg:p-8 border shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gray-800">{position.title}</h3>
                    <p className="text-gray-600 text-base lg:text-lg mb-4">{position.subtitle}</p>
                    <p className="text-gray-700 mb-4 lg:mb-6 text-sm lg:text-base">{position.description}</p>
                    
                    <div className="mb-4 lg:mb-6">
                      <h4 className="text-base lg:text-lg font-bold text-gray-800 mb-2 lg:mb-3">求める人物像</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm lg:text-base text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {position.note && (
                      <div className="mb-4 lg:mb-6 p-3 lg:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                        <p className="text-xs lg:text-sm text-yellow-800 font-medium">💡 {position.note}</p>
                      </div>
                    )}
                    
                    {position.count && (
                      <div className="mb-4 lg:mb-6 p-2 lg:p-3 bg-blue-50 border border-blue-200 rounded">
                        <p className="text-xs lg:text-sm text-blue-800 font-semibold">{position.count}</p>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-base lg:text-lg font-bold text-gray-800 mb-3 lg:mb-4">得られる経験</h4>
                    <div className="space-y-2 lg:space-y-3">
                      {position.benefits.map((benefit, idx) => (
                        <div key={idx} className="p-2 lg:p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                          <span className="text-xs lg:text-sm text-gray-700">{benefit}</span>
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
        <div className="mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 text-gray-800">応募の流れ</h2>
          <div className="overflow-x-auto lg:overflow-x-visible">
            <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-8 min-w-max lg:min-w-0">
            <div className="text-center flex-shrink-0 w-48 lg:w-auto">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 text-white rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center font-bold text-base lg:text-lg">
                1
              </div>
              <h3 className="text-sm lg:text-lg font-bold mb-2 text-gray-800">エントリー</h3>
              <p className="text-xs lg:text-sm text-gray-600">下記フォームまたはメールからご応募ください</p>
            </div>
            <div className="text-center flex-shrink-0 w-48 lg:w-auto">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 text-white rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center font-bold text-base lg:text-lg">
                2
              </div>
              <h3 className="text-sm lg:text-lg font-bold mb-2 text-gray-800">カジュアル面談</h3>
              <p className="text-xs lg:text-sm text-gray-600">プロジェクトや志望動機についてお話しします</p>
            </div>
            <div className="text-center flex-shrink-0 w-48 lg:w-auto">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 text-white rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center font-bold text-base lg:text-lg">
                3
              </div>
              <h3 className="text-sm lg:text-lg font-bold mb-2 text-gray-800">技術面談</h3>
              <p className="text-xs lg:text-sm text-gray-600">技術レベルの確認と今後の学習プランを相談</p>
            </div>
            <div className="text-center flex-shrink-0 w-48 lg:w-auto">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 text-white rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center font-bold text-base lg:text-lg">
                4
              </div>
              <h3 className="text-sm lg:text-lg font-bold mb-2 text-gray-800">参加決定</h3>
              <p className="text-xs lg:text-sm text-gray-600">プロジェクトへの参加とオンボーディング</p>
            </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-12 p-4 lg:p-8 bg-red-50 border border-red-200 rounded-lg">
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-bold text-red-800 mb-4">⚠️ 重要事項</h3>
            <div className="bg-white p-4 lg:p-6 rounded-lg border-2 border-red-300">
              <p className="text-base lg:text-lg text-red-700 font-semibold">
                現時点では<span className="underline">給料の支給はありません</span>。
              </p>
              <p className="text-xs lg:text-sm text-red-600 mt-2">
                プロジェクトの成長に応じて、将来的な報酬体系の見直しを検討いたします。
              </p>
            </div>
            <p className="text-sm lg:text-base text-gray-700 mt-4">
              それでも一緒にプロダクトを作り上げていきたい、熱意のある方をお待ちしています！
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 lg:p-12 rounded-lg">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">今すぐ応募する</h2>
          <p className="text-base lg:text-lg mb-6 lg:mb-8 max-w-3xl mx-auto">
            Nom!Nom!プロジェクトで、あなたの情熱とスキルを活かしませんか？<br />
            一緒に学生生活をより良くするサービスを作りましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Link href="/contact" className="bg-red-500 hover:bg-red-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded font-bold uppercase transition-colors text-sm lg:text-base">
              採用に関するお問い合わせ
            </Link>
            <a href="mailto:sales@qurest.tech?subject=【採用応募】&body=お名前：%0A学年：%0A学部：%0A希望職種：%0A自己紹介・志望理由：%0A%0A" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded font-bold uppercase transition-colors text-sm lg:text-base">
              直接メール
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}