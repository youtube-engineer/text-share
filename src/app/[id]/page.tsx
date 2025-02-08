export const runtime = "edge";
import { findSharedText } from "../../actions/text-share";

type Props = {
	params: Promise<{
		id: string;
	}>;
};
export default async function ShareText({ params }: Props) {
	const { id } = await params;
	let sharedText : string | undefined;

	try {
		sharedText = await findSharedText(id);
	} catch (error) {
		// エラーが発生した場合の処理
		console.error("Error fetching shared text:", error);
	}

	return <pre className="p-[180px]">{sharedText}</pre>;
}
