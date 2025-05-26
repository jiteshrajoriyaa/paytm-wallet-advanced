import Link from "next/link"
import { Button } from "@repo/ui/button"

interface NavbarProps {
    user?: {
        name?: string | null 
    },
    onSignin: any,
    onSignout: any,
    image: string
}

export const Navbar =  ({ user, onSignin, onSignout, image}: NavbarProps) => {
    return (
        <nav className="h-20 flex justify-between pl-20 pr-20 items-center shadow-md border-box overflow-x-hidden">
            <Link href={"/"}><img src="/images/Logo.svg" alt="logo" /></Link>
            <div>
                <Link className="font-sans font-semibold" href={"/signup"} >Paytm for Consumer</Link>
            </div>
            <div className="flex gap-2 items-center" >
                <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
                {user ? <Link href={"/dashboard/profile"} >
                    <img className="max-w-10 w-full max-h-10 h-full p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={image} alt="Bordered avatar"></img>
                </Link>: ""}
            </div>

        </nav>
    )
}