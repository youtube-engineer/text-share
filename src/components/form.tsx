// "use client";

// import { notFound, redirect } from "next/navigation";
// import toast from "react-hot-toast";
// import { createSharedText } from "../actions/text-share";

export default function Form() {
  // const handleSubmit = async (formData: FormData) => {
  //   // const responseId = await createSharedText(formData);
  //   // if (!responseId) notFound();
  //   // navigator.clipboard.writeText(`${location.href}${responseId}`);
  //   // toast.success("URLがクリップボードにコピーされました", {
  //   //   duration: 5000,
  //   // });
  //   // redirect(responseId);
  // };
  return (
    <form
      // action={handleSubmit}
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-600">TextShareeeee</h1>
      <textarea
        name="text"
        placeholder="シェアしたいテキストを入力してください"
        className="placeholder-gray-300 text-black w-full max-w-2xl p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        rows={5}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
      >
        シェアする
      </button>
    </form>
  );
}
