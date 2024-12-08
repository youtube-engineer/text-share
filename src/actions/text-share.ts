'use server';
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation';

export async function createSharedText(body: { text: string }) {
    const prisma = new PrismaClient()
    try {
        const response = await prisma.sharedText.create({
            data: {
                text: body.text,
            }
        })

        redirect(`/${response.id}`)

    } catch (error) {
        console.log(error)
    }
}

export async function findSharedText(uniqueId: string) {
    const prisma = new PrismaClient()
    try {
        const result = await prisma.sharedText.findUnique({
            where: {
                id: uniqueId,
            },
        });

        return result?.text
    } catch (error) {
        console.log(error)
    }
}
