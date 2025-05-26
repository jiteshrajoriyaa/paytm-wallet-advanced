"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/client";

export async function p2pTransfer(to: string, amount: number) {
    const session = await getServerSession(authOptions)
    const from = session?.user?.id;
    if (!from) {
        return "unauthenticated user is trying to send money"

    }
    const toUser = await prisma.user.findFirst({
        where: {
            number: to
        }
    })
    if (!toUser) {
        return "Receiver not found"
    }
    if (from == toUser.id) {
        return "You can't send money to yourself"
    }

    try {
        await prisma.$transaction(async (tx) => {
            await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;
            const fromBalance = await tx.balance.findUnique({
                where: {
                    userId: Number(from)
                }
            })
            if (!fromBalance || fromBalance.amount < amount) {
                throw new Error("Insufficient balance. Rolling back transaction.");
            }
            await tx.balance.update({
                where: {
                    userId: Number(from)
                },
                data: {
                    amount: { decrement: amount }
                }
            })

            await tx.balance.update({
                where: {
                    userId: toUser.id
                },
                data: {
                    amount: { increment: amount }
                }
            })

            await tx.p2PTransfer.create({
                data: {
                    fromUserId: Number(from),
                    toUserId: toUser.id,
                    amount,
                    timestamp: new Date()
                }
            })
        })
        return "Transaction Successful"
    } catch (e) {
        console.error(e)
        return "Insuffiecient balance"
    }
}