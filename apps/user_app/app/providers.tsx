"use client"
import { SessionProvider} from "next-auth/react";
import { RecoilRoot } from "recoil"
import { AppBarWrapper } from "./appbarwrapper";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    

    return <RecoilRoot>
        <SessionProvider>
            <AppBarWrapper />
            {children}
        </SessionProvider>
    </RecoilRoot>
}