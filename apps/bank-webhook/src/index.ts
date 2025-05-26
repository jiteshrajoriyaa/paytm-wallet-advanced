import express from "express"
import db from "@repo/db/client";

const app = express()
interface paymentProps {
    token: string,
    userId: string,
    amount: string
}
app.use(express.json());
app.post('/hdfcWebhook', async (req, res) => {
    try {
    const paymentInformation: paymentProps = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: String(req.body.amount * 100)
    }

    const processing = await db.onRampTransaction.findFirst({
        where:{
            token: paymentInformation.token
        }
    })
    
    if(processing?.status == "Success") {
        return res.json({
            msg: "Transaction has already been made"
        })
    }

    if(processing?.amount !== Number(paymentInformation?.amount)){
        return res.status(400).json({
            msg: "You are commiting a crime/Amount is different from the user is inserted before"
        })
    }

        await db.$transaction([

            db.balance.update({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            })
            ,
            db.onRampTransaction.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success"
                }
            })
        ])

        return res.status(200).json({
            message: "captured"
        })

    } catch (e) {
        console.error(e)
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }
})

app.listen(3003, ()=>{
    console.log("Server is running on port 3003")
});