"use client"
import {useBalace } from "@repo/store/states";


export default function Testing(){
    const balanceAtom = useBalace();
    return<>
        <div>Hi this is balance from packages {balanceAtom}</div>
    </>
}