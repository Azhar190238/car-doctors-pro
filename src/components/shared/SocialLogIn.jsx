import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const SocialLogin = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");

    const handleSocialLogin = async (provider) => {
        const resp = await signIn(provider, 
            {
               redirect: true,
               callbackUrl: path ? path : '/' 
            }
        )
    }

    return (
        <div>
            <div className='mt-5 flex text-3xl justify-center text-blue-800 gap-3'>
                <button onClick={() => handleSocialLogin('github')}> <FaGithub /> </button>
                <button onClick={() => handleSocialLogin('google')}><AiFillGoogleCircle /> </button>
                <button onClick={() => handleSocialLogin('facebook')}> <FaFacebook /> </button>
            </div>
        </div>
    );
};


export default SocialLogin;