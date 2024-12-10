'use server';
import { redirect } from 'next/navigation';
import prisma from '@/lib/db';

export async function createSharedText(body: { text: string }) {
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
