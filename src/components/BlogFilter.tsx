'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BlogPost } from '@/lib/blog';

interface BlogFilterProps {
  categories: string[];
  tags: string[];
  posts: BlogPost[];
}

type SortType = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc';

export default function BlogFilter({ categories, tags, posts }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortType>('date-desc');

  const filteredPosts = posts
    .filter(post => {
      // カテゴリフィルター
      if (selectedCategory !== 'all' && !post.categories.includes(selectedCategory)) {
        return false;
      }
      
      // タグフィルター
      if (selectedTag !== 'all' && !post.tags.includes(selectedTag)) {
        return false;
      }
      
      // 検索クエリフィルター
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query)) ||
          post.categories.some(category => category.toLowerCase().includes(query))
        );
      }
      
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'title-asc':
          return a.title.localeCompare(b.title, 'ja');
        case 'title-desc':
          return b.title.localeCompare(a.title, 'ja');
        default:
          return 0;
      }
    });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedTag('all');
    setSearchQuery('');
    setSortBy('date-desc');
  };

  return (
    <>
      {/* Search and Filter Controls */}
      <div className="mb-12 space-y-8">
        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto">
          <input
            type="text"
            placeholder="タイトル、内容、タグから検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base placeholder-gray-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {/* Category Filter - 2つ以上の場合のみ表示 */}
          {categories.length >= 2 && (
            <div className="flex-1 min-w-[200px] max-w-[250px]">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2 text-center">
                カテゴリ
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="all">すべてのカテゴリ</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Tag Filter - 2つ以上の場合のみ表示 */}
          {tags.length >= 2 && (
            <div className="flex-1 min-w-[200px] max-w-[250px]">
              <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-2 text-center">
                タグ
              </label>
              <select
                id="tag"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
              >
                <option value="all">すべてのタグ</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    #{tag}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Sort Dropdown */}
          <div className="flex-1 min-w-[200px] max-w-[250px]">
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2 text-center">
              並び順
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
            >
              <option value="date-desc">新しい順</option>
              <option value="date-asc">古い順</option>
              <option value="title-asc">タイトル昇順</option>
              <option value="title-desc">タイトル降順</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          {(selectedCategory !== 'all' || selectedTag !== 'all' || searchQuery || sortBy !== 'date-desc') && (
            <div className="flex-1 min-w-[200px] max-w-[250px] flex items-end">
              <button
                onClick={clearAllFilters}
                className="w-full px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors text-sm font-medium"
              >
                フィルタークリア
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results Info and Active Filters */}
      <div className="mb-6 text-center space-y-3">
        <p className="text-gray-600 text-sm">
          {filteredPosts.length}件の記事が見つかりました
        </p>
        
        {/* Active Filters Display */}
        {(searchQuery || selectedCategory !== 'all' || selectedTag !== 'all') && (
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <span className="text-xs text-gray-500">フィルター:</span>
            {searchQuery && (
              <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                検索: &ldquo;{searchQuery}&rdquo;
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-1 text-purple-500 hover:text-purple-700"
                >
                  ×
                </button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-1 text-blue-500 hover:text-blue-700"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTag !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                #{selectedTag}
                <button
                  onClick={() => setSelectedTag('all')}
                  className="ml-1 text-green-500 hover:text-green-700"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Blog Posts */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl text-gray-300 mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-600 mb-4">該当する記事が見つかりませんでした</h2>
          <p className="text-gray-500 mb-8">
            検索条件を変更するか、フィルターをクリアしてお試しください。
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            すべての記事を表示
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              {post.image && (
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                  {post.categories.slice(0, 1).map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                  {post.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                  {(post.categories.length > 1 || post.tags.length > 1) && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{post.categories.length + post.tags.length - 2}
                    </span>
                  )}
                </div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500 gap-1">
                  <span className="truncate">{post.author}</span>
                  <span className="text-xs">{formatDate(post.date)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}