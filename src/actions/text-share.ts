'use server';

import { redirect } from 'next/navigation';
import prisma from '@/lib/db';


// export async function createSharedText() {
//     console.log("createSharedText実行")
//     return { text: "createSharedText実行 in actionsフォルダ" }
// }




export async function createSharedText(body: { text: string }) {
    "use server"
    console.log("createSharedText実行")
    let response
    try {
        response = await prisma.sharedText.create({
            data: {
                text: body.text,
            }
        })

    } catch (error) {
        console.log(error)
    }
    console.log("redirect直前")
    redirect(`/${response?.id}`)
}

export async function findSharedText(uniqueId: string) {
    try {
        const result = await prisma.sharedText.findUnique({
            where: {
                id: uniqueId,
            },
        });
        return result?.text
    } catch (error) {
        console.log(error, "テキストを共有する際にエラーが発生しました")
    }
}
