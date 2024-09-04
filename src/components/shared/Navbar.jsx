
// "use client";
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from "next/image";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { RiSearchLine } from "react-icons/ri";
// import { useRouter } from 'next/navigation';
// import { signOut, useSession } from 'next-auth/react';
// import ThemeControl from '../ThemeControler';

// const Navbar = () => {
//     const session = useSession();
//     const navigate = useRouter();

//     const [activeLink, setActiveLink] = useState('');

//     const links = [
//         { label: 'Home', path: '/' },
//         { label: 'About', path: '/' },
//         { label: 'Services', path: '/' },
//         { label: 'Blog', path: '/' },
//         { label: 'Contact', path: '/' },
//     ];

//     const handleLinkClick = (label) => {
//         setActiveLink(label);
//     };

//     return (
//         <div className={`navbar relative z-10 max-w-[1320px]   mx-auto my-5 `}>
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
                         stroke="currentColor">

"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import ThemeControl from '../ThemeControler';

const Navbar = () => {
    const { data: session } = useSession();
    const navigate = useRouter();

    const [activeLink, setActiveLink] = useState('');

    const links = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/' },
        { label: 'Services', path: '/' },
        { label: 'Blog', path: '/' },
        { label: 'Contact', path: '/' },
    ];

    const handleLinkClick = (label) => {
        setActiveLink(label);
    };

    const handleLogout = async () => {
        await signOut();
        setActiveLink('Login');
        navigate.push('/login');
    };

    return (
        <div className={`navbar relative z-10 max-w-[1320px] mx-auto my-5`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 text-[var(--text-color)]`}
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
                    <ul tabIndex={0} className="flex flex-col dropdown-content mt-3 w-36 p-2 text-[16px] bg-[var(--bg-color)]">
                        {links.map(link => (
                            <li key={link.label}>
                                <Link
                                    href={link.path}
                                    className={`${activeLink === link.label ? 'text-[#FF3811]' : 'text-[var(--text-color)]'}`}
                                    onClick={() => handleLinkClick(link.label)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Image src='/assets/logo.svg' height={46} width={90} alt="logo image" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex flex-row px-1 space-x-[30px] text-[16px]">
                    {links.map(link => (
                        <li key={link.label} className="relative">
                            <Link
                                href={link.path}
                                className={`${activeLink === link.label ? 'text-[#FF3811]' : 'text-[var(--text-color)]'}`}
                                onClick={() => handleLinkClick(link.label)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end space-x-6">
                <ThemeControl />
                <HiOutlineShoppingBag className={`text-xl text-[var(--text-color)]`} />
                <RiSearchLine className={`text-xl text-[var(--text-color)]`} />
     
                <button className="px-8 py-3 border-2 border-[#FF3811] text-[#FF3811] text-xl rounded-[4px] bg-white shadow-md transition-transform transition-shadow duration-300 hover:bg-[#FF3811] hover:text-white hover:shadow-lg hover:translate-y-[-2px]">
                    Appointment
                </button>
                {
                    !session ? <button onClick={() => navigate.push('/login')} className={`px-8 py-3 border-2 border-[#FF3811] text-[#FF3811] text-xl rounded-[4px] hover:bg-[#FF3811] hover:text-white transition-colors duration-300`}>
                        Login
                    </button> : <button onClick={handleLogout} className={`px-8 py-3 border-2 border-[#FF3811] text-[#FF3811] text-xl rounded-[4px] hover:bg-[#FF3811] hover:text-white transition-colors duration-300`}>
                       Logout
                    </button>
                }
            </div>
        </div>
    );
};

export default Navbar;

