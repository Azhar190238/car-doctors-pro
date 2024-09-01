"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogIn = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const path = searchParams.get('redirect')
  const session = useSession()
    const handleSocialLogin = (provider) => {
        const resp = signIn(provider, {
          redirect : true,
          callbackUrl : path ? path : '/'
        })
    }
    
  return (
    <div className="flex items-center justify-center space-x-8 mt-8">
    <button  className="p-4 rounded-full bg-slate-100">
        <FaFacebookF className="text-xl text-[#0A66C2]" />
    </button>
    <button onClick={() => handleSocialLogin('github')}  className="p-4 rounded-full bg-slate-100">
        <BsGithub  className="text-xl text-[#0A66C2]" />
    </button>
    <button onClick={() => handleSocialLogin('google')} className="p-4 rounded-full bg-slate-100">
        <FcGoogle  className="text-xl text-[#0A66C2]" />
    </button>
</div>



  );
};

export default SocialLogIn;