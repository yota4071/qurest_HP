'use client';

import StudentIcon from "@/components/icons/StudentIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import InnovationIcon from "@/components/icons/InnovationIcon";
import GrowthIcon from "@/components/icons/GrowthIcon";
import NomNomText from "@/components/NomNomText";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">私たちについて</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            学生の、学生による、学生のためのサービスを目指して
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Message */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              私たちQURESTは、学生生活をより便利で楽しいものにするためのサービス開発に取り組んでいます。
              現在開発中の「<NomNomText />」は、キャンパス内のキッチンカー情報を学生同士で共有できるプラットフォームです。
            </p>
            <p className="text-blue-600 font-medium text-lg">
              学生の、学生による、学生のためのサービスを目指して。
            </p>
          </div>
        </div>

        {/* Project Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">私たちの価値観</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <StudentIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Student First</h3>
              <p className="text-gray-600 leading-relaxed">学生のニーズと課題を最優先に考え、真に役立つソリューションを提供します</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <TeamIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Community</h3>
              <p className="text-gray-600 leading-relaxed">キャンパス内でのつながりを大切にし、学生同士の交流を促進します</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <InnovationIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">新しい技術と創造性で、学生生活をより豊かにする体験を創造します</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <GrowthIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Growth</h3>
              <p className="text-gray-600 leading-relaxed">プロジェクトを通じて学生としてもエンジニアとしても成長し続けます</p>
            </div>
          </div>
        </div>

        {/* Project History */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">プロジェクトの歩み</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
              <div className="font-bold text-blue-600 mb-2">2024年秋</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">プロジェクト発案</h3>
              <p className="text-gray-600">OICキャンパスのキッチンカー情報不足の課題に気づき、<NomNomText />プロジェクトを発案</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
              <div className="font-bold text-green-600 mb-2">2024年10月</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">チーム結成</h3>
              <p className="text-gray-600">開発メンバーが集まり、本格的なプロダクト開発をスタート</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
              <div className="font-bold text-orange-600 mb-2">2025年1月</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">プロトタイプ完成</h3>
              <p className="text-gray-600">基本機能を実装したプロトタイプが完成し、初期テストを開始</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
              <div className="font-bold text-purple-600 mb-2">2025年春</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">正式ローンチ予定</h3>
              <p className="text-gray-600">立命館大学OICキャンパスでの正式サービス開始を予定</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}