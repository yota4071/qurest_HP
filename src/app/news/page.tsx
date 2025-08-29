'use client';

const news = [
  {
    id: 1,
    title: 'Nom!Nom! プロジェクト始動',
    date: '2025-08-15',
    summary: '立命館大学OICキャンパスのキッチンカー評価プラットフォームの開発を開始しました。',
    content: '立命館大学OICキャンパスのキッチンカー評価プラットフォーム「Nom!Nom!」の開発プロジェクトを正式に開始いたします。学生の皆様のキャンパスライフをより豊かにするため、使いやすく便利なプラットフォームの構築を目指します。'
  },
  {
    id: 2,
    title: 'チーム結成',
    date: '2025-07-20',
    summary: '学生による開発チームが正式に結成され、プロジェクトの企画段階に入りました。',
    content: '意欲的な学生開発者、デザイナー、プロジェクトマネージャーによる開発チームが結成されました。多様な専攻・学年のメンバーが集まり、それぞれの専門性を活かしたプロダクト開発を進めています。'
  },
  {
    id: 3,
    title: '市場調査完了',
    date: '2025-06-10',
    summary: 'キャンパス内での食事に関する学生のニーズ調査が完了しました。',
    content: 'OICキャンパスの学生300名を対象とした大規模なアンケート調査を実施しました。キッチンカー利用の現状や課題、求める機能などを詳細に把握し、プロダクト設計に反映させています。'
  },
  {
    id: 4,
    title: 'プロトタイプ開発完了',
    date: '2025-01-15',
    summary: '基本機能を実装したプロトタイプが完成し、初期テストを開始しました。',
    content: 'キッチンカー検索、レビュー機能、ユーザー認証などの基本機能を実装したプロトタイプが完成しました。学内の協力者による初期テストを実施し、ユーザビリティの改善点を特定しています。'
  },
  {
    id: 5,
    title: '大学との連携協定締結',
    date: '2024-12-01',
    summary: '立命館大学との正式な連携協定を締結し、プロジェクトが大学公認となりました。',
    content: '立命館大学学生部との連携協定を締結し、Nom!Nom!プロジェクトが大学公認の学生プロジェクトとなりました。大学からのサポートを受けながら、より質の高いサービス開発を進めていきます。'
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">最新情報</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            QURESTとNom!Nom!プロジェクトの最新情報をお届けします
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* News List */}
        <div className="space-y-8">
          {news.map((item) => (
            <article key={item.id} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="text-blue-600 text-sm font-medium mb-2">{item.date}</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h2>
                  <p className="text-gray-600 text-lg mb-4">{item.summary}</p>
                </div>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-50 p-12 rounded-lg text-center border">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">最新情報を受け取る</h2>
          <p className="text-gray-600 mb-8">
            Nom!Nom!プロジェクトの進捗やリリース情報をいち早くお届けします
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              登録
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}