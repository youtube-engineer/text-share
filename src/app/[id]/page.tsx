export const runtime = "edge";
import { findSharedText } from "../../actions/text-share"

type Props = {
    params: Promise<{
        id: string
    }>;
}
export default async function ShareText({ params }: Props) {
    const { id } = await params

    async function getSharedText() {
        try {
            const sharedText = await findSharedText(id);

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


