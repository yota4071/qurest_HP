// app/page.tsx

'use client';

import Hero from "@/sections/Hero";
import Greeting from "@/sections/Greeting";
import NewsPage from "@/app/news/page";
import RecruitPreview from "@/components/RecruitPreview";
import Link from "next/link";

const topServices = [
  {
    id: 1,
    title: 'AIソリューション開発',
    description: 'AIで業務効率を向上。最適なモデル構築を支援します。',
  },
  {
    id: 2,
    title: 'IoTシステム構築',
    description: 'センサーデバイスの導入から運用まで一括サポート。',
  },
];

export default function Home() {
  return (
    <>
      {/* ヒーローセクションはページ上部で全幅表示 */}
      <Hero/>
      <NewsPage/>

      {/* メイン部分は中央寄せ */}
      <main className="relative flex flex-col items-center justify-center bg-white text-black px-6">
      <Greeting />


<section className="bg-gray-50 py-20 px-6 sm:px-12">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8">提供サービス</h2>

    <div className="grid gap-6 sm:grid-cols-2 text-left">
      {topServices.map((service) => (
        <div
          key={service.id}
          className="bg-white border border-gray-200 p-6 rounded shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}
    </div>

    <Link
      href="/service"
      className="mt-10 inline-block bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
    >
      サービスをもっと見る
    </Link>
  </div>
</section>
      {/* 人材募集セクション */}
      <RecruitPreview />

        {/* フッター */}
        <footer className="py-8 text-sm text-gray-500">
          © 2025 YourCompany Inc.
        </footer>
      </main>
    </>
  );
}