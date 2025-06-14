"use client"
import { Button } from "@repo/ui/button"
import { InputHeadingWithPlaceholder } from "@repo/ui/input"
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";
import Link from "next/link";


export function SendCard() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [number, setNumber] = useState("")
    const [amount, setAmount] = useState("")

    const onSubmit = async () => {
        setLoading(true);
        const result = await p2pTransfer(number, Number(amount) * 100)
        if (result && result == "Transaction Successful") {
            setSuccess(true)
        } else {
            setSuccess(false)
            alert(result)
        }
        console.log(result)
        setLoading(false);
    }

    if (success) {
        return <Successful />
    }

    return (
        <div className="flex flex-col flex-grow p-10 pr-80 w-full" >
            <div className="flex flex-col justify-center items-center mt-20" >
                <div className=" flex justify-center border-gray-200 border-2 rounded-sm min-w-80">
                    <div className="flex gap-y-8 flex-col w-4/5 pb-6 h-full">
                        <div className="flex justify-center">
                            {<img
                                src="/images/sendMoney.png"
                                alt="Paytm"
                                className="w-52"
                            ></img>}
                        </div>

                        <div className="flex flex-col gap-y-5">
                            <InputHeadingWithPlaceholder label="Phone no." placeholder="Phone no." onChange={(value) => setNumber(value)} />
                            <InputHeadingWithPlaceholder label="Amount" type="text" placeholder="Amount" onChange={(value) => setAmount(value)} />
                        </div>
                        <Button onClick={onSubmit} >{loading ?
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                            : "Send Money"}</Button>

                        <Link className="bg-customBlue hover:bg-customDarkBlue text-wrap text-white p-2 font-sans rounded-md font-semibold flex justify-center text-center " href={'/visit'}>Click to see some registered users</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const handleSendAgain = () => {
    window.location.reload();
}

function Successful() {
    return <div className="flex flex-col flex-grow gap-10 p-10 pr-80 w-full" >
        <div className="flex flex-col justify-center items-center mt-20 " >
            <div className=" flex flex-col justify-center border-gray-200 border-2 rounded-sm min-w-80 min-h-80 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-30 text-green-500">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                </svg>
                <div className="font-bold text-2xl pb-10">Transaction Successful !</div>
                <Button onClick={handleSendAgain} >Click here to send again</Button>
            </div>
        </div>
    </div>
}