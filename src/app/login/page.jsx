// "use client"
// import Image from 'next/image';
// import React from 'react';
// import { signIn } from 'next-auth/react';
// import { Button, Form, Input } from 'antd';
// import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import { AiFillGoogleCircle } from "react-icons/ai";
// import Link from 'next/link';

// const Page = () => {

//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };

//     const handleLogin = async (values) => {
//         const email = values.email;
//         const password = values.password;
//         console.log('received');
//         const resp = await signIn('credentials', {
//             email,
//             password,
//             redirect: false
//         });
//         console.log(resp);
//     };

//     return (
//         <section className='mt-5'>
//             <div className='flex flex-col lg:flex-row items-center'>
//                 <div className='flex-1'>
//                     <Image src='/assets/images/login/login.svg' width={540} height={640} alt='login' />
//                 </div>
//                 <div className='flex-1'>
//                     <div className='ml-5 lg:ml-20 border px-10 py-5'>
//                         <h1 className='lato text-5xl text-black font-bold text-center'>Login</h1>
//                         <Form
//                             // onFinish={handleLogin1}
//                             initialValues={{ remember: true }}
//                             onFinishFailed={onFinishFailed}
//                             autoComplete="off"
//                         >

//                             <div className='mt-10'>
//                                 <p className='lato text-xl'>Email:</p>
//                                 <Form.Item className=''
//                                     name="email"
//                                     rules={[
//                                         { required: true, type: 'email' },
//                                     ]}
//                                 >
//                                     <Input className='border border-[#FF3811] p-3' placeholder='Email' />
//                                 </Form.Item>
//                             </div>
//                             <div className='mt-10'>
//                                 <p className='lato text-xl'>Password:</p>
//                                 <Form.Item
//                                     name="password"

//                                     rules={[
//                                         { required: true, message: 'Please input your password!' },
//                                     ]}
//                                 >
//                                     <Input.Password className='border border-[#FF3811] p-3' placeholder='Password' />
//                                 </Form.Item>
//                             </div>

//                             <Form.Item >
//                                 <Button onClick={handleLogin} className='lato font-bold mt-5 w-full p-5 border border-[#FF3811] bg-[#FF3811] text-white'>



"use client";
import React from 'react';
import Image from 'next/image';
import { Button, Form, Input, message } from 'antd';
import { FaFacebookF } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { RiLinkedinFill } from "react-icons/ri";
import { signIn } from "next-auth/react";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import SocialLogIn from '@/components/shared/SocialLogIn';


const SubmitButton = ({ form, children, handleLogin }) => {
    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);

    React.useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
        <Button
            type="primary"
            htmlType="submit"
            className="w-full border-2 border-[#FF3811] bg-[#FF3811] text-white py-6 text-xl font-semibold"
            disabled={!submittable}
            onClick={() => form.submit()}
        >
            {children}
        </Button>
    );
};

const LoginPage = () => {
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");

    // const router = useRouter();
    const [form] = Form.useForm();
  

    const handleLogin = async (values) => {
        const { email, password } = values;

        try {
            const resp = await signIn("credentials", {
                email,
                password,
                redirect: true,
            callbackUrl: path ? path : "/",
      

            });

            if (resp.ok) {
                Swal.fire("Log In Successfully Done!");
               
             
            } else {
                message.error('Login failed, please check your credentials.');
            }

           
        } catch (error) {
            message.error('An error occurred during login.');
            console.error("Login error:", error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1320px] mx-auto mb-10">
            <div>
                <Image
                    src='/assets/images/login/login.svg'
                    height={550}
                    width={450}
                    alt='LogIn'
                    className='h-[550px]'
                />
            </div>
            <div className="border-2 shadow-xl text-xl rounded-md font-semibold p-16">
                <h1 className="text-4xl font-bold text-center text-gray-500 mb-10">
                    Log In
                </h1>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleLogin}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="Your Password"
                            className="input input-bordered w-full"
                        />
                    </Form.Item>

                    <Form.Item>
                        <SubmitButton form={form}>
                            Log In
                        </SubmitButton>
                    </Form.Item>

                    <h1 className="text-xl font-medium text-center ">Or Log in With</h1>
                    <SocialLogIn></SocialLogIn>
                    <h1 className="text-xl font-medium text-center mt-8">
                        Have an Account?{' '}
                        <a href="/signin">
                            <span className="text-[#ff3811]">Sign Up</span>
                        </a>
                    </h1>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
