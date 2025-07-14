'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 sm:px-8 py-4 bg-white">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-md px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between">

        {/* ロゴとキャッチコピー */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer">
          <Image src="/Qurest.png" alt="Logo" width={40} height={40} />
          <div className="flex flex-col text-sm">
            <span className="text-xs text-gray-500">正しい未来を</span>
            <span className="text-lg font-bold text-gray-800">Qurest</span>
          </div>
        </Link>

        {/* 右メニュー全体 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 sm:mt-0 sm:ml-auto text-sm">

          {/* ナビゲーションリンク */}
          <nav className="flex gap-4">
            <Link href="/news" className="text-gray-700 hover:underline">News</Link>
            <Link href="/about" className="text-gray-700 hover:underline">Company</Link>
            <Link href="/service" className="text-gray-700 hover:underline">Service</Link>
            <Link href="/recruit" className="text-gray-700 hover:underline">Recruit</Link>
          </nav>

          {/* 言語選択・検索・問い合わせ */}
          <span className="text-gray-700 whitespace-nowrap">Qurest Group</span>
          <div className="flex items-center gap-1 text-xs">
            <span>JP</span><span>|</span><span>EN</span>
          </div>
          <input
            type="text"
            placeholder="検索"
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          />
          <button className="border border-gray-500 text-gray-800 rounded px-3 py-1 hover:bg-gray-100 transition text-sm">
            お問い合わせ
          </button>
        </div>
      </div>
    </header>
  );
}