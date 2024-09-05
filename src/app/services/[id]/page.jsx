import { getServiceDetails } from '@/Services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";


const page = async ({ params }) => {
    const serviceDetails = await getServiceDetails(params.id);
    // console.log(serviceDetails);
    const { img, title, description, facility, price } = serviceDetails;
    return (
        <section>
            <div>
                <div className=' rounded-lg'>
                    <Image className='w-[100%] h-[300px] rounded-lg' src={img} alt='image' height={10} width={1320} />
                </div>
                <h2 className='relative bottom-44 left-28 lato text-5xl font-bold text-white'>Service Details</h2>
                <div className='bg-[#FF3811] bg-area max-w-[330px] h-[200px] relative bottom-[248px] mx-auto flex items-end justify-center'>
                    <h4 className='text-xl font-bold text-white px-2 py-1 lato'>Home/Service Details</h4>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 -mt-20'>
                <div className='col-span-2'>
                    <Image className='w-[100%]' src='/carDetails.png' alt='image' height={400} width={852} />
                    <div className='mt-5'>
                        <h3 className='text-black lato text-2xl font-bold'>{title}</h3>
                        <p> {description} </p>
                    </div>
                    <div className='mt-5 grid grid-cols-2 gap-4'>
                        {
                            facility.map((item, index) => (
                                <div key={index} className='bg-[#F3F3F3] text-[#737373] lato p-5 border-t-4 rounded-xl border-t-red-500'>
                                    <h3 className='text-2xl font-bold text-black '> {item.name} </h3>
                                    <p className='mt-3'> {item.details} </p>
                                </div>
                            ))
                        }

                    </div>
                    <div className='mt-5 lato'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. </p>
                    </div>
                    <h2 className='mt-10 lato text-4xl font-bold text-black'>
                        3 Simple Steps to Process
                    </h2>
                    <div className='mt-10 lato'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. </p>
                    </div>
                    <div className='lato mt-10 flex justify-between mb-10'>
                        <div className='border p-10 flex flex-col justify-center w-[30%] rounded-lg'>
                            <div className='mx-auto'>
                                <div className='border-[15px] border-[#FF38111A] rounded-full'>
                                    <p className='rounded-full bg-[#FF3811] text-white text-2xl px-5 py-3 text-center'>
                                        1
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-3xl text-black uppercase mt-3 lato text-center'>step one</h3>
                                <p className='mt-3 lato text-center'>It uses a dictionary <br /> of over 200 .</p>
                            </div>
                        </div>
                        <div className='border p-10 flex flex-col justify-center w-[30%] rounded-lg'>
                            <div className='mx-auto'>
                                <div className='border-[15px] border-[#FF38111A] rounded-full'>
                                    <p className='rounded-full bg-[#FF3811] text-white text-2xl px-5 py-3 text-center'>
                                        2
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-3xl text-black uppercase mt-3 lato text-center'>step two</h3>
                                <p className='mt-3 lato text-center'>It uses a dictionary <br /> of over 200 .</p>
                            </div>
                        </div>
                        <div className='border p-10 flex flex-col justify-center w-[30%] rounded-lg'>
                            <div className='mx-auto'>
                                <div className='border-[15px] border-[#FF38111A] rounded-full'>
                                    <p className='rounded-full bg-[#FF3811] text-white text-2xl px-5 py-3 text-center'>
                                        3
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-3xl text-black uppercase mt-3 lato text-center'>step three</h3>
                                <p className='mt-3 lato text-center'>It uses a dictionary <br /> of over 200 .</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mb-10 rounded-lg" style={{ width: '100%', height: '450px' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://www.youtube.com/embed/ducLiWY7l4Q`}
                            title="YouTube video player"

                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>
                <div className='lato'>
                    <div className='px-4 py-5 bg-[#F3F3F3] rounded-lg'>
                        <h4 className='text-3xl font-bold text-black'>Service</h4>
                        <Link className='mt-6' href='/'>
                            <div className='mt-3 p-4 rounded-lg flex justify-between items-center mx-auto w-[80%] bg-white hover:bg-[#FF3811] text-black  group'>
                                <p className='text-xl text-black font-bold group-hover:text-white hover:text-white'>Full Car Service</p>
                                <FaArrowRight className='text-black text-2xl group-hover:text-white'></FaArrowRight>
                            </div>
                        </Link>
                        <Link className='mt-6' href='/'>
                            <div className='mt-3 p-4 rounded-lg flex justify-between items-center mx-auto w-[80%] bg-white hover:bg-[#FF3811] text-black  group'>
                                <p className='text-xl text-black font-bold group-hover:text-white hover:text-white'>Engine Repair</p>
                                <FaArrowRight className='text-black text-2xl group-hover:text-white'></FaArrowRight>
                            </div>
                        </Link>
                        <Link className='mt-6' href='/'>
                            <div className='mt-3 p-4 rounded-lg flex justify-between items-center mx-auto w-[80%] bg-white hover:bg-[#FF3811] text-black  group'>
                                <p className='text-xl text-black font-bold group-hover:text-white hover:text-white'>Automatic  Service</p>
                                <FaArrowRight className='text-black text-2xl group-hover:text-white'></FaArrowRight>
                            </div>
                        </Link>
                        <Link className='mt-6' href='/'>
                            <div className='mt-3 p-4 rounded-lg flex justify-between items-center mx-auto w-[80%] bg-white hover:bg-[#FF3811] text-black  group'>
                                <p className='text-xl text-black font-bold group-hover:text-white hover:text-white'>Engine Oil Service</p>
                                <FaArrowRight className='text-black text-2xl group-hover:text-white'></FaArrowRight>
                            </div>
                        </Link>
                        <Link className='mt-6' href='/'>
                            <div className='mt-3 p-4 rounded-lg flex justify-between items-center mx-auto w-[80%] bg-white hover:bg-[#FF3811] text-black  group'>
                                <p className='text-xl text-black font-bold group-hover:text-white hover:text-white'>Battery Charge</p>
                                <FaArrowRight className='text-black text-2xl group-hover:text-white'></FaArrowRight>
                            </div>
                        </Link>
                        <Link className='mt-6' href='/'>
                            <div className='mt-3 p-4 rounded-lg flex justify-between items-center mx-auto w-[80%] bg-white hover:bg-[#FF3811] text-black  group'>
                                <p className='text-xl text-black font-bold group-hover:text-white hover:text-white'>Exclusive Service</p>
                                <FaArrowRight className='text-black text-2xl group-hover:text-white'></FaArrowRight>
                            </div>
                        </Link>
                        <Link className='mt-6' href='/'>
                            <div className='mt-3 p-4 rounded-lg flex justify-between items-center mx-auto w-[80%] bg-white hover:bg-[#FF3811] text-black  group'>
                                <p className='text-xl text-black font-bold group-hover:text-white hover:text-white'>Give and Take Service</p>
                                <FaArrowRight className='text-black text-2xl group-hover:text-white'></FaArrowRight>
                            </div>
                        </Link>
                    </div>
                    <div className='mt-10 bg-black text-white rounded-lg'>
                        <h4 className='text-2xl font-bold text-white px-10 pt-10'> Download</h4>
                        <div className='flex justify-between items-center py-5 px-10'>
                            <div>
                                <p className='text-white font-bold text-xl'>Our Brochure</p>
                                <p className='text-white'>Download</p>
                            </div>
                            <button className='bg-[#FF3811] text-white text-xl p-5 rounded-lg'>
                                <FaArrowRight></FaArrowRight>
                            </button>
                        </div>
                        <div className='flex justify-between items-center py-5 px-10'>
                            <div>
                                <p className='text-white font-bold text-xl'>Company Details</p>
                                <p className='text-white'>Download</p>
                            </div>
                            <button className='bg-[#FF3811] text-white text-xl p-5 rounded-lg'>
                                <FaArrowRight></FaArrowRight>
                            </button>
                        </div>

                    </div>

                    <div className='mt-10 bg-black text-white rounded-lg w-[100%] mx-auto'>
                        <Image className='w-[30%] mx-auto pt-5 text-white' src='/assets/logo.svg' alt='logo' height={100} width={200} />
                        <p className='text-xl font-bold text-center mx-auto mt-8'>Need Help <br /> We are Here</p>
                        <div className='text-center mt-8 w-[80%] bg-white text-black rounded-lg mx-auto p-5 pb-10'>
                            <p className='text-xl font-bold'> <span className='text-[#FF3811]'> Car Doctor </span>Special </p>
                            <p className='font-bold mt-3'> Save up to <span className='text-[#FF3811]'>60% off</span></p>
                        </div>
                        <div className='mx-auto relative bottom-7 rounded-lg bg-[#FF3811] w-[50%] text-white py-4'>
                            <p className='text-white font-bold text-center text-xl'>Get a Queue</p>
                        </div>
                    </div>
                    <h3 className='my-10 text-3xl font-bold text-black'>Price: ${price}</h3>
                    <button className='w-full bg-[#FF3811] rounded-lg text-white text-2xl font-bold p-5 '>Processed to Check</button>
                </div>

            </div>

        </section>
    );
};


export default page;