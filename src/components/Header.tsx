'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import QurestLogo from './icons/QurestLogo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <header className="bg-white shadow-sm border-b relative">
        <nav className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <QurestLogo className="w-8 h-8 text-gray-800" />
              <span className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-sintony)' }}>QUREST</span>
            </Link>
          </div>
          
          <ul className={`${
            isMobileMenuOpen 
              ? 'flex flex-col absolute top-full left-0 right-0 bg-white p-6 shadow-lg border-t space-y-4 z-50' 
              : 'hidden md:flex md:space-x-8'
          }`}>
            <li><Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>ホーム</Link></li>
            <li><Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>ブログ</Link></li>
            <li><Link href="/news" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>ニュース</Link></li>
            <li><Link href="/service" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>サービス</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>会社概要</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>お問い合わせ</Link></li>
            <li><Link href="/recruit" className="text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>採用情報</Link></li>
          </ul>
          
          <button 
            className="md:hidden flex flex-col space-y-1 p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            <span className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          </div>
        </nav>
      </header>
    </>
  );
}