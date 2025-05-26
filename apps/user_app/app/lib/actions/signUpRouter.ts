"use server"
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";
import { UserSchema } from "../zodValidation";
import { nanoid } from "nanoid"

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
        const token = nanoid()
        const user = await prisma.user.create({
            data: {
                name,
                number: phone,
                password: hashedPassword,
                Balance: {
                    create: {
                        amount: 2020,
                        locked: 0
                    }
                },
                OnRampTransaction: {
                    create: {
                        startTime: new Date(),
                        status: 'Success',
                        amount: 20000,
                        token: `signup_bonus_${token}`,
                        provider: 'HDFC Bank'
                    }
                }
            }
        })

        return {
            id: user.id.toString(),
            name: user.name,
            number: user.number,
        }

    } catch (e) {
        console.error(e)
        return {
            message: "Signup failed"
        }
    }
}