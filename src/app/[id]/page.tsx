import { findSharedText } from "../../actions/text-share"
export default async function ShareText({ params }: { params: { id: string } }) {
    const { id } = await params
    const sharedText = await findSharedText(id)
    console.log(sharedText);


    return (
        <pre className="p-16">
            {sharedText}
        </pre>
    );
}
