export const runtime = "edge";
import { notFound } from "next/navigation";
import { findSharedText } from "../../actions/text-share";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
export default async function ShareText({ params }: Props) {
  const { id } = await params;
  const sharedText = await findSharedText(id);
  if (!sharedText) notFound();

  return <pre className="p-[180px]">{sharedText}</pre>;
}
