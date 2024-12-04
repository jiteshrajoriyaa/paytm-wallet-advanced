import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import db from "@repo/db/client"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Phone number",
            credentials: {
                phone: { label: "Phone Number", type: "text", placeholder: "Ph. No." },
                password: { label: "password", type: "password", required: true }
            },


            async authorize(credentials: any) {
                try {
                    const existingUser = await db.user.findFirst({
                        where: {
                            number: credentials.phone
                        }
                    })

                    if (existingUser?.passowrd) {
                            const passwordValidation = await bcrypt.compare(credentials?.password, existingUser.passowrd);
                            if (passwordValidation) {
                                return {
                                    id: existingUser.id.toString(),
                                    name: existingUser.name,
                                    email: existingUser.number
                                }
                
                            }
                            return null
                    }
                    return null
                } catch (e) {
                    console.error(e);
                }

                return null
            }


        })
    ],

    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async session({ token, session }: any) {
            session.user.id = token.sub
            return session
        }
    },

    pages: {
        signIn: "/signin",
    }
}