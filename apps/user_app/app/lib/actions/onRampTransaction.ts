"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";


export async function onRampTransaction(provider: string, amount: number){
  try { const session = await getServerSession(authOptions)
    if(!session?.user?.id || !session?.user){
        return{
            message: "User is unauthenticated"
        }
    }

    const token = (Math.random()*1000).toString();
    console.log("Creating transaction with token:", token);// Debug

    await prisma.onRampTransaction.create({
        data:{
            provider,
            amount: amount*100,
            userId: Number(session?.user?.id),
            token,
            startTime: new Date(),
            status: "Processing"    
        }
    })

    return {
        message: "Done"
    }}catch (error: any) {
        console.error("Error creating transaction: ", error); // Log the error
        return {
            message: "Failed to create transaction",
            error: error.message
        };
    }
}