"use client"
import Link from "next/link"
export const LayoutNavbar = () => {
    return (
        <nav className="h-20  flex justify-between pl-20 pr-20 items-center border-b">
            <img src="/images/Logo.svg" alt="logo" />
            
            <div className="flex gap-4">
                <Link href={"https://paytm.com/care/customer-care"}><img className="h-10 w-10" src="/layoutIcons/question.svg"></img></Link>
                <Link href={"/dashboard/profile"} >
                    <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/layoutIcons/avtar.jpg" alt="Bordered avatar"></img>
                </Link>
            </div>
        </nav>
    )
}