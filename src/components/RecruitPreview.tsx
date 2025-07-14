// components/RecruitPreview.tsx
'use client';

import Link from 'next/link';

export default function RecruitPreview() {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">インターン募集</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Qurestでは、AI・IoTに興味のある学生インターンを積極採用中です。
        </p>

        <Link
          href="/recruit"
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          募集要項を見る
        </Link>
      </div>
    </section>
  );
}