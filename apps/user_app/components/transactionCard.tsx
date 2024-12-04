interface transactionProps {
    transaction: {
        fromName: string | null,
        toName: string | null,
        amount: number,
        timeStamp: React.ReactNode
    }[],
    currentUserName: string | null
}

export const TransactionCard = ({ transaction, currentUserName }: transactionProps) => {
    return (
        <div>
            {transaction.map((t) => (
                <div className="flex justify-between items-center w-1/2 pb-3 border-b-2 border-gray-300">
                    <div className="flex gap-4 items-center">
                        <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/layoutIcons/avtar.jpg" alt="Bordered avatar"></img>
                        <p className="font-bold text-lg"> 
                            {t.fromName === currentUserName ? t.toName : t.fromName} 
                        </p>
                    </div>
                    <p className={`font-bold font-sans text-lg ${t.fromName === currentUserName ? 'text-red-500' : 'text-green-500'}`}>
                        {t.fromName === currentUserName ? '-' : '+'} {(t.amount/100)}
                    </p>
                    <div>{t.timeStamp}</div>
                </div>
            ))}
        </div>
    )
}
