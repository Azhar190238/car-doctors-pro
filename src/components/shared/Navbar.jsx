
// "use client";
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from "next/image";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { RiSearchLine } from "react-icons/ri";
// // import { useNavigate } from 'react-router-dom';

















































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
    const session = useSession();
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

    return (
        <div className={`navbar relative z-10 max-w-[1320px] bg-slate-600 dark:bg-black mx-auto my-5 `}>
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
                <Image src='/assets/logo.svg' height={46} width={90} alt="logo image"></Image>
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
                {/* <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        className="theme-controller"
                        checked={theme === "dark"}
                        onChange={handleThemeChange}
                    />

                    <svg
                        className="swap-off h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <svg
                        className="swap-on h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label> */}
                <ThemeControl></ThemeControl>
                <HiOutlineShoppingBag className={`text-xl text-[var(--text-color)]`} />
                <RiSearchLine className={`text-xl text-[var(--text-color)]`} />
                {/* <button className={`px-8 py-3 border-2 border-[var(--button-bg)] text-[var(--button-bg)] text-xl rounded-[4px] hover:bg-[var(--button-bg)] hover:text-white transition-colors duration-300`}>
            Appointment
          </button> */}
                <button className="px-8 py-3 border-2 border-[var(--button-bg)] text-[var(--button-bg)] text-xl rounded-[4px] bg-white shadow-md transition-transform transition-shadow duration-300 hover:bg-[var(--button-bg)] hover:text-white hover:shadow-lg hover:translate-y-[-2px]">
                    Appointment
                </button>
                {
                    !session.data ? <button onClick={() => navigate.push('/login')} className={`px-8 py-3 border-2 border-[var(--button-bg)] text-[var(--button-bg)] text-xl rounded-[4px] hover:bg-[var(--button-bg)] hover:text-white transition-colors duration-300`}>
                        Login
                    </button> : <button onClick={() => navigate.push('/dashboard')} className={`px-8 py-3 border-2 border-[var(--button-bg)] text-[var(--button-bg)] text-xl rounded-[4px] hover:bg-[var(--button-bg)] hover:text-white transition-colors duration-300`}>
                        Dashboard
                    </button>
                }
            </div>
        </div>
    );
};

export default Navbar;
