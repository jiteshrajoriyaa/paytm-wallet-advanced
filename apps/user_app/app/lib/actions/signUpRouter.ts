"use server"
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";
import { UserSchema } from "../zodValidation";

export async function signUpRouter(name: string, phone: string, password: string) {
    try {
        const result = UserSchema.safeParse({ name, phone, password })
        if (!result.success) {
            return {
                message: "Credentials are not in correct format"
            }
        }
        const existingUser = await prisma.user.findFirst({
            where: {
                number: phone
            }
        })

        if (existingUser) {
            return {
                message: "User already exist"
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name,
                number: phone,
                passowrd: hashedPassword
            }
        })

        return {
            id: user.id.toString(),
            name: user.name,
            number: user.number,
        }

    } catch (e) {
        async () => {
            console.error(e)
        }
    }

    return {
        message: "Signup failed"
    }

}