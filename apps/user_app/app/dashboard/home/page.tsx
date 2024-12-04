import { Transctionchart } from "@repo/ui/transctionchart";
import { getServerSession } from "next-auth";

async function getName(){
    const session = await getServerSession();
    return session?.user?.name
}
export default async function Greet() {
    const name = await getName();
    return (
        <div className="flex flex-col flex-grow gap-10 p-10 w-full">
            <p className="font-extrabold text-customDarkBlue text-4xl">Good morning, {name}</p>
            <div className="bg-customGray w-full  p-8 rounded-lg">
            <Transctionchart/>
            </div>
        </div>
    )
}