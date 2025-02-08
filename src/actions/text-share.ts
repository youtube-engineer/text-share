"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function createSharedText(body: { text: string }) {
	"use server";
	let response : { id: string; text: string; createdAt: Date; } | undefined;

	try {
		response = await prisma.sharedText.create({
			data: {
				text: body.text,
			},
		});
	} catch (error) {
		console.log(error, `テキスト(${body.text})を保存する際にエラーが発生しました`);
	}
	redirect(`/${response?.id}`);
}

export async function findSharedText(uniqueId: string) {
	// "use server";

	try {
		const result = await prisma.sharedText.findUnique({
			where: {
				id: uniqueId,
			},
		});

		return result?.text;
	} catch (error) {
		console.log(error, "テキストを共有する際にエラーが発生しました");
	}
}
