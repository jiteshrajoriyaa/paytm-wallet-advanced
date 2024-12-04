"use client"
import { Button } from "@repo/ui/button";
import { InputHeadingWithPlaceholder } from "@repo/ui/input";
import { Selection } from "@repo/ui/selectionInput";
import { useState } from "react"
import { onRampTransaction } from "../app/lib/actions/onRampTransaction";

const SUPPORTED_BANKS = [
    {
        name: "HDFC BANK",
        redirectURL: "https://netbanking.hdfcbank.com"
    },
    {
        name: "Axis Bank",
        redirectURL: "https://www.axisbank.com/"
    },
    {
        name: "ICICI Bank",
        redirectURL: "https://www.icicibank.com/"
    }
]

export const AddMoney = () => {
    const [amount, setAmount] = useState(0);
    const [bank, setBank] = useState(SUPPORTED_BANKS[0]?.name || "")
    const [redirectURL, setRedirectURL] = useState(SUPPORTED_BANKS[0]?.redirectURL || "")

    return (
        <div className="flex flex-col gap-6 p-4 w-1/2 border rounded-lg">
            <p className="w-full border-b border-gray-400 pb-2 font-bold text-xl" >Add Money</p>
            
            <InputHeadingWithPlaceholder 
                label={"Amount"} 
                placeholder={"Amount"} 
                type="number" 
                onChange={(value) => { setAmount(Number(value)) }} />
            
            <Selection
                label={"Bank"}
                options={SUPPORTED_BANKS.map(x => ({
                    key: x.name,
                    value: x.name
                }))}
                onSelect={(value) => {
                    setRedirectURL(SUPPORTED_BANKS.find(x => x.name === value)?.redirectURL || "")
                    setBank(SUPPORTED_BANKS.find(x => x.name === value)?.name || "")
                }}  />

            <Button
                onClick={async ()=>{
                    await onRampTransaction(bank, amount)
                    await onRampTransaction(bank, amount)
                    window.open(redirectURL || "", "_blank")
                }}
            >Add Money</Button>
            
        </div>
    )
}