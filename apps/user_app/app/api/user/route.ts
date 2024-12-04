import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);

    try {
        if (session?.user) {
            return NextResponse.json({
                user: session.user
            })
        }
        return NextResponse.json({
            message: "You are not loogged in"
        },
            {
                status: 403
            }
        )
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            message: "You are not loogged in"
        },
            {
                status: 403
            })
    }
}