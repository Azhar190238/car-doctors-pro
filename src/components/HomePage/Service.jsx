import React from 'react';

import ServiceCard from '../Cards/ServiceCard';
import { getService } from '@/Services/getServices';

const Service = async () => {
    const services = await getService();
    console.log(services);
    
    return (
        <section className='mt-20'>
            <div className='w-full mx-auto'>
                <div className='space-y-5 text-center'>
                    <p className='text-[#FF3811] font-bold lato text-center'>Service: {services?.length}</p>
                    <p className='text-black font-extrabold text-5xl lato text-center'>Our Service Area</p>
                    <p className='text-[#737373] lato text-center'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable.  </p>
                </div>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services?.map((service) => (
                        <ServiceCard service={service} key={service.id}></ServiceCard>
                    ))
                }
            </div>
        </section>
    );
};


export default Service;