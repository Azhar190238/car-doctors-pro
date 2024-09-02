
// "use client";
// import Image from 'next/image';
// import React from 'react';
// import { Button, Form, Input } from 'antd';
// import { FaFacebookF } from 'react-icons/fa';
// import { FcGoogle } from "react-icons/fc";
// import { RiLinkedinFill } from "react-icons/ri";

// const SubmitButton = ({ form, children, onClick }) => {
//     const [submittable, setSubmittable] = React.useState(false);
//     const values = Form.useWatch([], form);

//     React.useEffect(() => {
//         form
//             .validateFields({
//                 validateOnly: true,
//             })
//             .then(() => setSubmittable(true))
//             .catch(() => setSubmittable(false));
//     }, [form, values]);

//     return (
//         <Button 
//             type='primary' 
//             className="w-full border-2 border-[#FF3811] bg-[#FF3811] text-white py-6 text-xl font-semibold" 
//             htmlType="submit" 
//             disabled={!submittable}
//             onClick={onClick}  // Handle the submit event
//         >
//             {children}
//         </Button>
//     );
// };

// const Page = () => {
//     const [form] = Form.useForm();

//     const handleSignUp = async (values) => {
//         const newUser = {
//             name: values.name,
//             email: values.email,
//             password: values.password,
//         };
//         const res =await fetch("http://localhost:3000/signin/api" , {
//             method: "POST",
//             body : JSON.stringify(newUser),
//             headers : {
//                 "content-type" : "application/json"
//             }
//         })

//         console.log('newUser:', res);
//         //here user information stored in database 
//     };

//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1320px] mx-auto mb-10'>
//             <div>
//                 <Image src='/assets/images/login/login.svg' height={550} width={450} alt='LogIn' className='h-[550px]' />
//             </div>
//             <div className='border-2 shadow-xl text-xl rounded-md font-semibold p-16'>
//                 <h1 className='text-4xl font-bold text-center text-gray-500 mb-10'>Sign Up</h1>
//                 <Form
//                     form={form}
//                     layout="vertical"
//                     onFinish={handleSignUp} // Use the onFinish method to handle form submission
//                 >
                       className="input input-bordered w-full" 

"use client";
import Image from 'next/image';
import React from 'react';
import { Button, Form, Input } from 'antd';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { RiLinkedinFill } from "react-icons/ri";
import Swal from 'sweetalert2'; // Import SweetAlert

const SubmitButton = ({ form, children}) => {
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
            type='primary' 
            className="w-full border-2 border-[#FF3811] bg-[#FF3811] text-white py-6 text-xl font-semibold" 
            htmlType="submit" 
            disabled={!submittable}
         
        >
            {children}
        </Button>
    );
};

const Page = () => {
    const [form] = Form.useForm();

    const handleSignUp = async (values) => {
        const newUser = {
            name: values.name,
            email: values.email,
            password: values.password,
        };
        const res = await fetch("http://localhost:3000/signin/api", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        });

        if (res.ok) {
            Swal.fire("Sign Up Successfully Done!");
            form.resetFields(); // Clear the form after successful submission
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1320px] mx-auto mb-10'>
            <div>
                <Image src='/assets/images/login/login.svg' height={550} width={450} alt='LogIn' className='h-[550px]' />
            </div>
            <div className='border-2 shadow-xl text-xl rounded-md font-semibold p-16'>
                <h1 className='text-4xl font-bold text-center text-gray-500 mb-10'>Sign Up</h1>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSignUp}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input 
                            type="text" 
                            placeholder="Your Name" 
                            className="input input-bordered w-full" 
                        />
                    </Form.Item>

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
                        <SubmitButton form={form} >
                            Sign Up
                        </SubmitButton>
                    </Form.Item>

                    <h1 className='text-xl font-medium text-center'>Or Sign Up With</h1>
                    <div className='flex items-center justify-center space-x-8 mt-8'>
                        <button className='p-4 rounded-full bg-slate-100'>
                            <FaFacebookF className='text-xl text-[#0A66C2]' />
                        </button>
                        <button className='p-4 rounded-full bg-slate-100'>
                            <RiLinkedinFill className='text-xl text-[#0A66C2]' />
                        </button>
                        <button className='p-4 rounded-full bg-slate-100'>
                            <FcGoogle className='text-xl text-[#0A66C2]' />
                        </button>
                    </div>
                    <h1 className='text-xl font-medium text-center mt-8'>Already have an Account? <a href="/login"> <span className='text-[#ff3811]'>LogIn</span></a> </h1>
                </Form>
            </div>
        </div>
    );
};

export default Page;


