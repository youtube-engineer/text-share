'use server';
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation';

export async function createSharedText(body: { text: string }) {
    const prisma = new PrismaClient()
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
    redirect(`/${response?.id}`)
}

export async function findSharedText(uniqueId: string) {
    const prisma = new PrismaClient()
    try {
        const result = await prisma.sharedText.findUnique({
            where: {
                id: uniqueId,
            },
        });
        console.log(result?.text, "result")
        return result?.text
    } catch (error) {
        console.log(error)
    }
}
