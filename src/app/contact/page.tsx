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
        {/* Contact Form */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  お名前 *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="山田太郎"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                件名 *
              </label>
              <select
                id="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              >
                <option value="">件名を選択してください</option>
                <option value="collaboration">コラボレーションについて</option>
                <option value="feedback">Nom!Nom!に関するフィードバック</option>
                <option value="business">ビジネス関連のお問い合わせ</option>
                <option value="technical">技術的なお問い合わせ</option>
                <option value="other">その他</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                メッセージ *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>
            
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy"
                required
                className="mt-1 mr-3 h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                個人情報の取り扱いについて同意します *
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              送信する
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
              <EmailIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">メール</h3>
            <p className="text-gray-600">contact@qurest.com</p>
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