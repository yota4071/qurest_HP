'use client';

import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">お問い合わせ</h1>
        <p className="mb-6 text-center text-gray-600">
          お問い合わせ内容を以下のフォームにご記入ください。早急に担当者よりご連絡いたします。
        </p>
        <ContactForm />
      </div>
    </main>
  );
}