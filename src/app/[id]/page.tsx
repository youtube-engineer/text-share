import { findSharedText } from "../../actions/text-share"
export default async function ShareText({ params }: { params: { id: string } }) {
    const { id } = await params
    const sharedText = await findSharedText(id)

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {sharedText}
        </div>
    );
}
