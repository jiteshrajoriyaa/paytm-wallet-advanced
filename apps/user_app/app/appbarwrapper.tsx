"use client";

import { signIn, signOut, useSession } from "next-auth/react"
import { Navbar } from "../components/navbar";


export const AppBarWrapper = () => {
    const {data: session, status} = useSession();
    const handleSignOut = async () => {
        await signOut({callbackUrl: '/'});
    }
    
    const isAuthenticated = status === 'authenticated'
    return <Navbar 
        onSignin={signIn} 
        onSignout={handleSignOut} 
        user={isAuthenticated ? session.user : undefined} 
        image={isAuthenticated ? session?.user?.image || "/layoutIcons/avtar.jpg" : "/layoutIcons/avtar.jpg"} />
};
