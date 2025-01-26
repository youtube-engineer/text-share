import Form from "@/components/form";
import Loading from "@/components/loading";
import { Suspense } from "react";
export const runtime = "edge";

export default function Home() {
	return (
		<Suspense fallback={<Loading />}>
			<Form />
		</Suspense>
	);
}
