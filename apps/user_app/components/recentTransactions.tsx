interface txnProps {
    transactions: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[]
}

export const RecentTransations = ({ transactions }: txnProps) => {
    if (!transactions.length) {
        return (
            <div className="flex flex-col p-4 rounded-lg border gap-4 ">
                <p className="text-xl font-bold border-b w-full border-gray-400 pb-2 ">Recent Transaction</p>
                <div className="flex justify-center items-center">No Recent Transactions</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col p-4 rounded-lg border gap-4 ">
            <p className="text-xl font-bold border-b w-full border-gray-400 pb-2 ">Recent Transaction</p>
            <div className="max-h-64 overflow-y-auto pr-4">
                {transactions.map(t => <div className="flex flex-col gap-2" >
                    <div className="flex justify-between">
                        <div>
                            <div className="text-sm font-semibold">Received INR</div>
                            <div className="text-slate-600 text-xs">
                                {t.time.toDateString()}
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center text-green-600 font-semibold">
                                + Rs {t.amount / 100}
                            </div>
                            <div className="flex flex-col justify-center text-sm text-purple-400">
                                {t.status}
                            </div>
                            <div className="flex flex-col justify-center text-sm text-blue-500">
                                from {t.provider}
                            </div>
                        </div>
                    </div>
                    <hr className="border-b-2" />
                </div>
                )}
            </div>
        </div>
    )
}