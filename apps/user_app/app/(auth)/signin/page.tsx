"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/button";
import { InputHeadingWithPlaceholder } from "@repo/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserSchema } from "../../lib/zodValidation";

export default function Signin() {

    const pathname = usePathname();
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        setLoading(true);
        const result = await signIn('credentials', {
            phone,
            password,
            redirect: false,
            callbackUrl: "/dashboard/home"
        })
        if (!result || result.error) {
            alert("Login failed. Phone no or password is incorrect");
        }
        else{
            window.location.href = "/dashboard/home";
        }
        console.log('form submitted')
        setLoading(false);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(UserSchema)
    })


    return (
        <div className="flex flex-col justify-center items-center mt-20" >
            <div className=" flex justify-center border-gray-200 border-2 rounded-sm">
                <div className="flex gap-y-8 flex-col w-4/5 pb-6 h-full">
                    <div className="flex justify-center">
                        {<img
                            src="/images/paytm-etonline.jpg"
                            alt="Paytm"
                            className="w-52"
                        ></img>}
                    </div>

                    <div className="text-slate-500 text-xl font-semibold font-sans flex gap-6">
                        <Link className={`border-b-2 pb-2 ${pathname === '/signin' ? 'border-customBlue text-customBlue' : 'border-transparent'}`} href={"/signin"}>{"Log in"}</Link>
                        <Link className="border-b-2 border-transparent pb-2 " href={"/signup"}>{"Sign Up"}</Link>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center">
                        <div className="flex flex-col gap-y-5">
                            <InputHeadingWithPlaceholder
                                label="Phone no."
                                placeholder="Enter Phone No."
                                onChange={(value) => { setPhone(value) }}
                                register={register}
                                errors={errors}
                                name="phone" />
                            <InputHeadingWithPlaceholder
                                label="Password"
                                type="password"
                                placeholder=""
                                onChange={(value) => { setPassword(value) }}
                                register={register}
                                errors={errors}
                                name="password" />
                        </div>
                        <Button onClick={onSubmit} >{loading ?
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                            : "Sign in"}</Button>
                    </form>
                    <div className="text-center text-slate-500	 text-sm pt-10 font-sm font-sans">By Signing Up you agree to our <span className="text-customBlue">T&C</span> and <span className="text-customBlue">Privacy Policy</span></div>
                    <Link className="bg-customBlue hover:bg-customDarkBlue text-white p-2 font-sans rounded-md font-semibold flex justify-center" href={'/visit'}>Click to see some registered users</Link>
                </div>
            </div>
        </div>

    )
}


