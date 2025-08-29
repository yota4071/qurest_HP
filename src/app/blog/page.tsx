import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogFilter from '@/components/BlogFilter';

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">QUREST Blog</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            プロジェクトの進捗、技術的な学び、チームの想いを共有します
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <BlogFilter categories={categories} tags={tags} posts={posts} />
      </div>
    </div>
  );
}