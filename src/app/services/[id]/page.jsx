import React from 'react';

const Page = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <div
                className="h-[300px] bg-cover opacity-90 bg-center bg-[linear-gradient(180deg, rgba(21, 21, 21, 0) 0%, rounded-xl  #151515 100%)] relative flex items-center justify-center"
                style={{ backgroundImage: "url('/assets/images/banner/servicesBanner.png')" }}
            >
                <h1 className='font-bold  text-3xl md:text-5xl text-white'>Service Details</h1>
            </div>
        </div>
    );
};

export default Page;
