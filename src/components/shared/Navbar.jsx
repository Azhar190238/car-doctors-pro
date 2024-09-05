"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ThemeControl from './ThemeControl';

const Navbar = () => {

    const session = useSession();
    console.log(session.data);
    const router = useRouter()

    const [activeLink, setActiveLink] = useState('Home');

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Services', path: '/' },
        { name: 'Blogs', path: '/' },
        { name: 'Contact', path: '/' },
    ];

    return (
        <div>
            <div className="navbar dark:bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl lato">
                            {
                                links.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className={activeLink === link.name ? 'text-[#FF3811] lato' : 'text-black dark:text-white'}
                                            onClick={() => setActiveLink(link.name)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <a className="text-xl">
                        <Image src='/assets/logo.svg' height={50} width={90} alt="logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl lato">
                        {
                            links.map(link => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className={activeLink === link.name ? 'text-[#FF3811] ' : 'text-black dark:text-white'}
                                        onClick={() => setActiveLink(link.name)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4">
                    <ThemeControl/>
                    <IoBagOutline className="text-2xl text-black" />
                    <IoIosSearch className="text-2xl text-black" />
                    <a className="font-bold bg-white lato hover:bg-[#FF3811] border border-[#FF3811] text-xl text-[#FF3811] hover:text-white rounded-lg px-6 py-3">Appointment</a>

                    {
                        !session.data ?
                            <button onClick={() => router.push('/login')} className="font-bold bg-white lato hover:bg-[#FF3811] border border-[#FF3811] text-xl text-[#FF3811] hover:text-white rounded-lg px-6 py-3">Login</button> :
                            <button onClick={() => signOut()} className="font-bold bg-white lato hover:bg-[#FF3811] border border-[#FF3811] text-xl text-[#FF3811] hover:text-white rounded-lg px-6 py-3">Logout</button>
                    }
                </div>
            </div>
        </div>
    );
}
export default Navbar;