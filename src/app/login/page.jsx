"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import SocialLogin from "@/components/Shared/SocialLogin";
import { useRouter, useSearchParams } from "next/navigation";
const Page = () => {
    const router = useRouter();
    const session = useSession();
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");


    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl: path ? path : "/",
        });
        if (resp.status === 200) {
            router.push('/')
        }
    };

    return (
        <div className="max-w-[1320px] mx-auto py-20 bg-white dark:bg-black">
            <div className="grid grid-cols-2 gap-12 items-center">
                <div>
                    <Image
                        src="/assets/images/login/login.svg"
                        height="540"
                        width="540"
                        alt="login image"
                    />
                </div>
                <div className="border-2 p-12">
                    <h6 className="text-3xl font-semibold text-black dark:text-red-800 lato text-center mb-12">
                        Sign In
                    </h6>
                    <form onSubmit={handleLogin} action="">
                        <label htmlFor="email">Email</label> <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="your email"
                            className="mt-3 w-full border border-[#FF3811] p-3 rounded-lg"
                        />
                        <br /> <br />
                        <label htmlFor="password">Password</label> <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="your password"
                            className="w-full mt-3 border border-[#FF3811] p-3 rounded-lg"
                        />
                        <br />
                        <button
                            type="submit" className='lato font-bold mt-10 rounded-lg w-full p-3 border border-[#FF3811] bg-[#FF3811] text-white'>
                            Sign Up
                        </button>
                    </form>

                    <p className='lato mt-5 text-center'>or continue with</p>
                    <SocialLogin />
                    <p className='mt-5 lato text-[#737373] text-center'>New Here ? Please <span className='text-[#FF3811] font-bold'> <Link href='/signup'>Sign Up</Link> </span> </p>

                </div>
            </div>
        </div >
    );
};

export default Page;
