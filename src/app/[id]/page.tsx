import { findSharedText } from "../../actions/text-share"

type Props = {
    params: Promise<{
        id: string
    }>;
}
export default async function ShareText({ params }: Props) {
    const { id } = await params

    const sharedText = await findSharedText(id)

    return (
        <pre className="p-16">
            {sharedText}
        </pre>
    );
}


