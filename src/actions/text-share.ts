"use server";

import prisma from "@/lib/db";

export async function createSharedText(formData: FormData) {
  const inputText = formData.get("text");
  try {
    const response = await prisma.sharedText.create({
      data: {
        text: inputText as string,
      },
    });

    if (!response) {
      throw new Error("テキストの保存に失敗しました");
    }

    return response.id;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        error,
        `テキスト(${inputText})を保存する際にエラーが発生しました`,
      );
      throw new Error("テキストの保存に失敗しました");
    }
  }
}

export async function findSharedText(uniqueId: string) {
  try {
    const result = await prisma.sharedText.findUnique({
      where: {
        id: uniqueId,
      },
    });
    if (!result) throw new Error("テキストが見つかりません");

    return result.text;
  } catch (error) {
    console.error(error, "テキストを共有する際にエラーが発生しました");
  }
}
