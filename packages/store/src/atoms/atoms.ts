import { atom } from "recoil";

export const balanceAtom = atom<number>({
    key: "balanceAtom",
    default: 100
})

export const phoneAtom = atom<string> ({
    key: "phoneAtom",
    default: ""
})
export const passowrdAtom = atom<string> ({
    key: "passwordAtom",
    default: ""
})