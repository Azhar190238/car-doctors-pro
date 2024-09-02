import { services } from '@/lib/services';
import Image from 'next/image';
import React from 'react';
import {  FaArrowRight } from 'react-icons/fa6';

const ServicseCard = ({ service }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 p-8 shadow-xl">
                <figure>
                    <Image src={service.img} width={310} height={210} alt='card image' className='rounded-md h-[210px] w-[310px]' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{service.title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-xl text-[#FF3811]'>Price: ${service.price}</p>
                      
                        <button className="btn hover:bg-[#FF3811] text-black hover:text-white">  <FaArrowRight className="" /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicseCard;