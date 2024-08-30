import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='max-w-[1320px] mx-auto mt-16 '>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className=''>
                    <Image src='/assets/images/about_us/person.jpg' width={450} height={500} alt='person' className='h-[450px] max-w-[450px] rounded-md' />
                    <Image src='/assets/images/about_us/parts.jpg' width={400} height={320} alt='parts' className='h-[310px] max-w-[300px] rounded-md border-8 border-slate-300 relative bottom-56 left-52' />
                </div>
                <div className='flex flex-col space-y-8 '>
                    <h1 className='font-bold text-xl text-[#FF3811]'>About Us</h1>
                    <h2 className='font-bold max-w-[370px] text-2xl md:text-5xl leading-10 md:leading-[60px]'>We are qualified & of experience in this field</h2>
                    <p className='text-justify text-[16px] text-gray-500'> There are many variations of passages of Lorem Ipsum available, but the majority There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p  className='text-justify  text-[16px] text-gray-500 '>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="px-3 max-w-[170px] mt-10 py-3 border-2 border-[#FF3811] text-[#FF3811] text-xl rounded-[4px] hover:bg-[#FF3811] hover:text-white transition-colors duration-300">
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;