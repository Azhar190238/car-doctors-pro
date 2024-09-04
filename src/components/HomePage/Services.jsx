import React from 'react';
import ServicseCard from '../cards/ServicseCard';
import { getService } from '@/services/getServices';


const Services = async () => {
    const services = await getService();
    console.log(services);
    return (
        <div className='max-w-[1320px] mx-auto -mt-32'>
     
            <div className='flex flex-col space-y-6 items-center text-center mb-10'>
                <h1 className='font-bold text-xl text-[#FF3811]'>Services</h1>
                <h2 className='font-bold  text-2xl md:text-5xl '>Our Service Area</h2>
                <p className=' max-w-[700px] text-[16px] text-gray-500 text-center'> The majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable</p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                    services?.map((service) => (
                        <ServicseCard service={service} key={service.id}/>
                    ))
                }


            </div>
        </div>
    );
};

export default Services;


// };

// export default Services;
