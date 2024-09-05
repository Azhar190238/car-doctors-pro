import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <section>
            <div className='flex flex-col lg:flex-row mt-20'>
                <div className='flex-1'>
                    <Image className='rounded-lg ' src='/assets/images/about_us/person.jpg' width={460} height={100} alt='person' />
                    <Image className='rounded-lg relative border-4 border-white bottom-36 left-48' src='/assets/images/about_us/parts.jpg' width={327} height={100} alt='person' />
                </div>
                <div className='flex-1 space-y-5'>
                    <p className='text-[#FF3811] font-bold lato'>About us</p>
                    <p className='text-black font-extrabold text-5xl lato w-full lg:w-3/4'>We are qualified & of experience in this field</p>
                    <p className='text-[#737373] text-justify lato'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className='text-[#737373] text-justify lato'>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="lato bg-[#FF3811] border border-[#FF3811] text-xl text-white rounded-lg px-6 py-3 font-bold">Get more info </button>
                </div>

            </div>
        </section>
    );
};


export default About;