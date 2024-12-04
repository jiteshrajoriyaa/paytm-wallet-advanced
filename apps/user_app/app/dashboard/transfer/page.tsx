import { getServerSession } from "next-auth";
import { AddMoney } from "../../../components/addmoney";
import { Balance } from "../../../components/balance";
import { RecentTransations } from "../../../components/recentTransactions";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function getBalance() {
    try {
        const session = await getServerSession(authOptions);
        const userId = session?.user?.id;

        if (!userId) {
            throw new Error("User not authenticated");
        }

        const balance = await prisma.balance.findFirst({
            where: {
                userId: Number(userId),
            },
        });

        return {
            amount: balance?.amount || 0,
            locked: balance?.locked || 0,
        };
    } catch (error) {
        console.error("Error fetching balance:", error);
        return { amount: 0, locked: 0 }; // Return default balance on error
    }
}

async function getOnRampTransactions() {
    try {
        const session = await getServerSession(authOptions);
        const userId = session?.user?.id;

        if (!userId) {
            throw new Error("User not authenticated");
        }

        const txns = await prisma.onRampTransaction.findMany({
            where: {
                userId: Number(userId),
            },
        });

        return txns.map((t) => ({
            time: t.startTime,
            status: t.status,
            amount: t.amount,
            provider: t.provider,
        }));
    } catch (error) {
        console.error("Error fetching transactions:", error);
        return []; 
    }
}

export default async function Transfer() {
    try {
        const balance = await getBalance();
        const transactions = await getOnRampTransactions();

        return (
            <div className="flex flex-col flex-grow gap-10 p-10 w-full">
                <p className="font-extrabold text-customDarkBlue text-4xl">Transfer</p>
                <div className="bg-customGray w-full p-8 rounded-lg flex gap-4">
                    <AddMoney />
                    <div className="w-1/2 flex flex-col gap-10">
                        <Balance amount={balance.amount} locked={balance.locked} />
                        <RecentTransations transactions={transactions} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error in Transfer component:", error);
        return <p>Something went wrong. Please try again later.</p>; // Display an error message
    }
}
