export const runtime = "edge";
import Link from "next/link";

// メタデータの設定
export const metadata = {
  title: "TechShareHub - エンジニアのためのテキスト共有サイト",
  description:
    "プログラミングの知見、便利な設定、エラー解決のヒントを共有・学習できるエンジニア向けサイト",
};

export default function Home() {
  const siteName = "TechShare"; // サイト名

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header - ダークテーマに合わせた配色 */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gray-800 rounded-lg shadow-2xl mb-12 border border-gray-700">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
            エンジニアのためのテキスト共有サイト
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            プログラミングの知見、便利な設定、エラー解決のヒント、そして日々の学習メモまで。あなたの知識を共有し、他のエンジニアの知識から学びましょう。
          </p>
          <Link
            href="/share"
            className="bg-blue-600 text-white text-xl px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            今すぐ共有を始める
          </Link>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-200 text-center mb-8">
            主な機能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                瞬時に共有
              </h3>
              <p className="text-gray-400">
                コードスニペット、設定ファイル、Markdown形式のテキストなど、あらゆるテキストを簡単に共有できます。
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                シンタックスハイライト
              </h3>
              <p className="text-gray-400">
                主要なプログラミング言語に対応したシンタックスハイライトで、コードを読みやすく表示します。
              </p>
            </div>
            {/* コメントアウトされているセクションも、ダークテーマに合わせたクラスに変更 */}
          </div>
        </section>

        {/* Latest Texts Section - コメントアウトされているセクションもダークテーマに合わせたクラスに変更 */}

        {/* About Section - ダークテーマに合わせたクラスに変更 */}
        <section className="text-center py-12 bg-gray-800 rounded-lg shadow-2xl border border-gray-700">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">
            {siteName}について
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {siteName}
            は、エンジニア同士が気軽にテキスト(ログやコード)を共有し合うことをサポートします。
          </p>
        </section>
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
