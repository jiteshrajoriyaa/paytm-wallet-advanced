import { Transctionchart } from "@repo/ui/transctionchart";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

async function getName() {
    const session = await getServerSession(authOptions);
    return session?.user?.name
}

function greeting() {
    const now = new Date()
    const hours = now.getHours()
    if (hours >= 0 && hours < 12) {
        return "Good morning"
    } else if (hours >= 12 && hours < 17) {
        return "Good afternoon"
    } else return "Good evening"

}

export default async function Greet() {
    const name = await getName();
    return (
        <div className="flex flex-col flex-grow gap-10 p-10 w-full">
            <p className="font-extrabold text-customDarkBlue text-4xl">{greeting()}, {name}</p>
            <div className="bg-customGray w-full  p-8 rounded-lg">
                <Transctionchart />
            </div>
        </div>
    )
}