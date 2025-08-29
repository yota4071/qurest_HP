'use client';

import EmailIcon from "@/components/icons/EmailIcon";
import CampusIcon from "@/components/icons/CampusIcon";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">お問い合わせ</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            プロジェクトのご相談やお問い合わせはこちらから<br />
            新しいアイデアをお待ちしています
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Contact Information */}
        <div className="bg-white rounded-lg p-8 shadow-sm text-center">
          <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
            <EmailIcon className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">お問い合わせはメールで</h2>
          <p className="text-lg text-gray-600 mb-6">
            プロジェクトのご相談、ビジネス関連のお問い合わせ、<br />
            コラボレーションのご提案など、お気軽にご連絡ください
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">メールアドレス</p>
            <a 
              href="mailto:sales@qurest.tech?subject=【お問い合わせ】&body=お名前：%0A会社名・団体名：%0A件名：%0A%0Aお問い合わせ内容：%0A%0A"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              sales@qurest.tech
            </a>
          </div>
          <div className="space-y-4 text-left max-w-lg mx-auto">
            <h3 className="text-lg font-bold text-gray-800">お問い合わせ例</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Nom!Nom!プロジェクトについて
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                技術的なコラボレーション
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                ビジネスパートナーシップ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                メディア・取材のお問い合わせ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                その他のご質問・ご相談
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
              <EmailIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">メール</h3>
            <p className="text-gray-600">sales@qurest.tech</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
              <CampusIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">キャンパス</h3>
            <p className="text-gray-600">立命館大学OICキャンパス</p>
          </div>
        </div>
      </div>
    </div>
  );
}