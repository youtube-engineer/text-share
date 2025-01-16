export const runtime = "edge";
import { findSharedText } from "../../actions/text-share"

type Props = {
    params: Promise<{
        id: string
    }>;
}
export default async function ShareText({ params }: Props) {
    const { id } = await params

    // const sharedText = await findSharedText(id)

    async function getSharedText() {
        try {
            // `findSharedText` を非同期で呼び出し
            const sharedText = await findSharedText(id);

            // 必要に応じて `sharedText` を利用
            console.log('Shared Text:', sharedText);
            return sharedText
        } catch (error) {
            // エラーが発生した場合の処理
            console.error('Error fetching shared text:', error);
        }
    }
    const sharedText = getSharedText()


    return (
        <pre className="p-16">
            {sharedText}
        </pre>
    );
}


