import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - QUREST Blog',
    };
  }

  return {
    title: `${post.title} - QUREST Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image && { images: [{ url: post.image }] }),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Blog */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            ← ブログ一覧に戻る
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      {post.image && (
        <div className="relative h-96 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-white text-sm space-x-4">
                <span>{post.author}</span>
                <span>•</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {!post.image && (
          <header className="mb-12 text-center">
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
            <div className="flex items-center justify-center text-gray-500 text-sm space-x-4">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </header>
        )}

        {post.excerpt && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
            <p className="text-lg text-gray-700 italic">{post.excerpt}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm p-8">
          <MarkdownRenderer content={post.content} />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">タグ</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ブログ一覧に戻る
          </Link>
        </div>
      </article>
    </div>
  );
}