import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"

async function getProfile(){
    const session = await getServerSession(authOptions)
    if(!session?.user?.id){
        return {
            name: "Anonymous",
            number: "0000000000"
        }
    }

    

    return {
        number: session?.user?.email,
        name: session?.user?.name,
    }
}

export default async function Account(){
    const profile = await getProfile();
    return (
        <div className="flex flex-col gap-10 p-10 w-full">
            <p className="font-extrabold text-customDarkBlue text-3xl">Account</p>
            <div className="pt-10 pl-8  pb-10 rounded-lg flex flex-col gap-4 bg-customGray">
                <p className="font-bold text-2xl">Personal info</p>
                <div className="flex w-full">
                    <div className="w-1/6 flex flex-col gap-4">
                        <p className="font-semibold text-zinc-500" >Legal Name</p>
                        <p className="font-semibold text-zinc-500" >Phone no./ email Id</p>
                        <p className="font-semibold text-zinc-500" >Country</p>
                        </div>
                    <div className="w-5/6 flex flex-col gap-4">
                        <p className="font-semibold" >{profile.name}</p>
                        <p className="font-semibold" >{profile.number}</p>
                        <p className="font-semibold" >India</p>
                        </div>
                </div>
            </div>
        </div>
    )
}