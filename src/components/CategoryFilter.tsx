'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BlogPost } from '@/lib/blog';

interface CategoryFilterProps {
  categories: string[];
  posts: BlogPost[];
}

export default function CategoryFilter({ categories, posts }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.categories.includes(selectedCategory));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border'
            }`}
          >
            すべて
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl text-gray-300 mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-600 mb-4">まだ記事がありません</h2>
          <p className="text-gray-500 mb-8">
            新しいブログ記事を作成するには、<code className="bg-gray-200 px-2 py-1 rounded text-sm">content/blog/</code> フォルダにMarkdownファイルを追加してください。
          </p>
          <div className="text-left max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg text-sm">
            <p className="font-bold mb-2">サンプル記事の作成方法:</p>
            <p className="text-gray-700">
              1. <code>content/blog/2025-01-15-sample-post.md</code> ファイルを作成<br/>
              2. フロントマターとコンテンツを記述<br/>
              3. Vercelに自動デプロイされます
            </p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              {post.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}