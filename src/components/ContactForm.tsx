'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでAPIやメール送信の処理を行う（後で拡張可能）
    setSubmitted(true);
  };

  return submitted ? (
    <div className="text-center text-green-600 font-semibold">
      送信が完了しました。ありがとうございました。
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">お名前</label>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">メールアドレス</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
        <textarea
          name="message"
          rows={5}
          required
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        送信する
      </button>
    </form>
  );
}