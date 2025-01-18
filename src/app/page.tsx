'use client'

import { useState } from 'react';
import { createSharedText } from '../actions/text-share';

export default function Home() {
  const [text, setText] = useState('');
  const setData = { text }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">TextShare</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="シェアしたいテキストを入力してください"
        className="placeholder-gray-300 text-black w-full max-w-2xl p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        rows={5}
      />
      <button onClick={async () => await createSharedText(setData)} className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200">
        シェアする
      </button>
    </div>
  );
}
