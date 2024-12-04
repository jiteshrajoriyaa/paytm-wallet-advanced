interface BalanceProps{
    amount: number,
    locked: number
}
export const Balance = ({amount, locked}: BalanceProps) => {
    return (
        <div className="p-4 rounded-lg flex flex-col gap-2 border">
            <p className="text-xl font-bold border-b pb-2 border-gray-400">Balance</p>
            <div className="font-semibold text-lg flex justify-between border-b-1  w-full p-1">
                <p>Unlocked Balance</p>
                <p>{amount/100} INR</p>
            </div>
            <div className="font-semibold text-lg flex justify-between border-b-1 w-full p-1">
                <p>Total locked Balance</p>
                <p>{locked/100} INR</p>
            </div>
            <div className="font-semibold text-lg flex justify-between border-b-1 w-full p-1">
                <p>Total Balance</p>
                <p className="text-green-600">{(locked + amount)/100} INR</p>
            </div>
        </div>
    )
}