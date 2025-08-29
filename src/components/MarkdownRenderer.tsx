'use client';

import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';
import { highlight } from 'sugar-high';
import NomNomText from './NomNomText';
import { ReactNode } from 'react';

interface ComponentProps {
  children?: ReactNode;
  [key: string]: any;
}

interface LinkProps {
  href?: string;
  children?: ReactNode;
  [key: string]: any;
}

interface ImageProps {
  src?: string;
  alt?: string;
  children?: ReactNode;
  [key: string]: any;
}

interface CodeProps {
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

const components = {
  h1: (props: ComponentProps) => (
    <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-8 first:mt-0" {...props} />
  ),
  h2: (props: ComponentProps) => (
    <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8" {...props} />
  ),
  h3: (props: ComponentProps) => (
    <h3 className="text-xl font-bold text-gray-800 mb-4 mt-6" {...props} />
  ),
  p: (props: ComponentProps) => (
    <p className="text-gray-700 leading-relaxed mb-6" {...props} />
  ),
  a: (props: LinkProps) => {
    const { href, ...restProps } = props;
    const linkHref = href || '#';
    return (
      <Link 
        href={linkHref} 
        className="text-blue-600 hover:text-blue-700 underline transition-colors"
        target={linkHref.startsWith('http') ? '_blank' : undefined}
        rel={linkHref.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...restProps} 
      />
    );
  },
  img: (props: ImageProps) => {
    const { src, alt, ...restProps } = props;
    const imageSrc = src || '';
    
    if (!imageSrc) return null;
    
    return (
      <div className="my-8 relative">
        <Image
          src={imageSrc}
          alt={alt || ''}
          width={800}
          height={400}
          className="rounded-lg shadow-sm w-full h-auto"
          style={{ width: 'auto', height: 'auto' }}
          {...restProps}
        />
        {alt && (
          <p className="text-center text-sm text-gray-500 mt-2 italic">
            {alt}
          </p>
        )}
      </div>
    );
  },
  ul: (props: ComponentProps) => (
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4" {...props} />
  ),
  ol: (props: ComponentProps) => (
    <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2 ml-4" {...props} />
  ),
  li: (props: ComponentProps) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentProps) => (
    <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6 italic text-gray-700" {...props} />
  ),
  code: (props: CodeProps) => {
    if (props.className?.includes('language-')) {
      const language = props.className.replace('language-', '');
      const highlighted = highlight(props.children as string);
      return (
        <div className="my-6">
          <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium rounded-t-lg">
            {language}
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlighted }} />
          </pre>
        </div>
      );
    }
    return (
      <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm" {...props} />
    );
  },
  pre: (props: ComponentProps) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6" {...props} />
  ),
  table: (props: ComponentProps) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-300" {...props} />
    </div>
  ),
  thead: (props: ComponentProps) => (
    <thead className="bg-gray-50" {...props} />
  ),
  tbody: (props: ComponentProps) => (
    <tbody className="bg-white divide-y divide-gray-200" {...props} />
  ),
  th: (props: ComponentProps) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
  ),
  td: (props: ComponentProps) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...props} />
  ),
  hr: (props: ComponentProps) => (
    <hr className="border-gray-300 my-8" {...props} />
  ),
  NomNomText,
};

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown components={components as any}>{content}</ReactMarkdown>
    </div>
  );
}