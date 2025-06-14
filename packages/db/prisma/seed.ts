import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

async function main(){
    const alice = await prisma.user.upsert({
        where:{
            number: '1234567890'
        },
        update: {},
        create: {
            name: 'Alice',
            number: '1234567890',
            password: await bcrypt.hash('alice',10),
            Balance:{
                create:{
                    amount: 2000,
                    locked: 0
                }
            },
            OnRampTransaction:{
                create:{
                    startTime: new Date(),
                    status: 'Success',
                    amount: 2000,
                    token: 'token_1',
                    provider: 'HDFC Bank'
                }
            }
        }
    })

    const bob = await prisma.user.upsert({
        where:{
            number: '0123456789'
        },
        update: {},
        create: {
            name: 'Bob',
            number: '0123456789',
            password: await bcrypt.hash('bob',10),
            Balance:{
                create:{
                    amount: 2000,
                    locked: 0
                }
            },
            OnRampTransaction:{
                create:{
                    startTime: new Date(),
                    status: 'Success',
                    amount: 2000,
                    token: 'token_2',
                    provider: 'HDFC Bank'
                }
            }
        }
    })
    console.log({alice, bob})
}

main()
    .then(async ()=>{
        await prisma.$disconnect()
    })
    .catch(async (e)=>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })