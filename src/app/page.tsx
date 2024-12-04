'use client'
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [text, setText] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [sharedText, setSharedText] = useState('');


  useEffect(() => {
    setUniqueId(uuidv4())
  }, []);

  const handleShare = (): void => {
    setSharedText(text);
    console.log(uniqueId)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">TextShare</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="シェアしたいテキストを入力してください"
        className="w-full max-w-2xl p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        rows={5}
      />
      <Link href={`/${uniqueId}`} className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200">
        シェアする
      </Link>

    </div>
  );
}
