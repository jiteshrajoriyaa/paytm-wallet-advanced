import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { TransactionCard } from "../../../components/transactionCard";

async function getTransactions() {
    const session = await getServerSession(authOptions);
    const from = session?.user?.id;
    const currentUserName = session?.user?.name;

    if (!from) {
        throw new Error("User is not Authenticated");
    }

    const txns = await prisma.p2PTransfer.findMany({
        where: {
            OR: [
                { fromUserId: Number(from) },
                { toUserId: Number(from) }
            ]
        },
        include: {
            fromUser: true,
            toUser: true
        }
    });

    return {
        transactions: txns.map((t) => ({
            amount: t.amount,
            fromName: t.fromUser?.name ?? "Unknown Sender",
            toName: t.toUser?.name ?? "Unknown Receiver",
            timeStamp: t.timestamp.toLocaleString(), // Format date to string
        })),
        currentUserName
    };
}

export default async function TransactionPage() {
    const { transactions, currentUserName } = await getTransactions();
    return (
        <div className="flex flex-col flex-grow gap-10 p-10 w-full">
            <p className="font-extrabold text-customDarkBlue text-4xl">Transaction</p>
            <div className="bg-customGray w-full p-8 rounded-lg flex flex-col gap-14">
                <p className="font-bold text-2xl w-full border-b-2 border-gray-500 pb-4">Transactions</p>
                <TransactionCard transaction={transactions} currentUserName={currentUserName} />
            </div>
        </div>
    );
}
