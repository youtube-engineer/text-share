// 例: app/share/page.tsx
"use client";

import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import toast from "react-hot-toast";
import { createSharedText } from "../actions/text-share"; // あなたのactionsファイルへのパス

export default function ShareForm() {
  const handleSubmit = async (formData: FormData) => {
    const responseId = await createSharedText(formData);
    if (!responseId) notFound();

    // 現在のURLを取得し、新しい共有テキストのURLを生成
    // location.href は現在のページの完全なURLなので、そのまま使うと "/share/[id]" のようになります。
    // ベースURL (例: "https://your-domain.com/") を取得するためには、もう少し工夫が必要です。
    // 以下は、一時的なURLを生成する例です。
    // 実際のアプリケーションでは、環境変数などからベースURLを取得することを推奨します。
    const baseUrl = window.location.origin; // 例: "http://localhost:3000"
    const sharedUrl = `${baseUrl}/${responseId}`; // または `${baseUrl}/texts/${responseId}` など、ルーティングによる

    navigator.clipboard.writeText(sharedUrl);
    toast.success("URLがクリップボードにコピーされました", {
      duration: 5000,
    });
    redirect(responseId); // 共有されたテキストのページへリダイレクト
  };

  const siteName = "TechShareHub"; // サイト名

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header - ダークテーマに合わせた配色 */}

      {/* Main Content - フォーム部分 */}
      <main className="flex-grow flex items-center justify-center p-4 py-12">
        <form
          action={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-3xl border border-gray-700" // 全体をダークな背景、シャドウを強調、わずかにボーダー
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 text-center">
            コード / テキストを共有
          </h1>
          <p className="text-gray-400 text-center mb-8 text-lg">
            あなたの知見を瞬時に共有し、世界中のエンジニアと繋がろう。
          </p>
          <textarea
            name="text"
            placeholder="// シェアしたいコードやテキストを入力してください..."
            className="placeholder-gray-500 text-gray-200 bg-gray-700 font-mono w-full p-6 border border-gray-600 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-6 text-base md:text-lg resize-y" // コードエディタ風に
            rows={15} // さらに行数を増やし、コード記述に適したサイズに
            spellCheck="false" // スペルチェックを無効化（コード向け）
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-xl px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 w-full tracking-wide transform hover:scale-105" // より大きく、インタラクティブなボタンに
          >
            コードをシェアする
          </button>
        </form>
      </main>

      {/* Footer - ダークテーマに合わせた配色 */}
      <footer className="bg-gray-950 text-gray-400 p-6 text-center mt-auto">
        <div className="container mx-auto">
          <div className="mb-4">
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white mx-2 transition duration-200"
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white mx-2 transition duration-200"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-white mx-2 transition duration-200"
            >
              お問い合わせ
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
