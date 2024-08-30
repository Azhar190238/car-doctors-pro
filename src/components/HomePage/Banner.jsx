

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


const Banner = () => {


    return (
        <div className="container max-w-[1320px] mx-auto text-white">
            <div className="carousel  w-full ">
                {banners.map((banner, index) => (
                    <div
                        style={{
                            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
                        }}
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full bg-top bg-no-repeat h-[85vh] rounded-xl"
                    >
                        <div className="h-full w-full flex items-center pl-36">
                            <div className="space-y-6">
                                <h1 className="text-3xl md:text-6xl font-bold max-w-[450px] leading-[60px]">{banner.title}</h1>
                                <p className="max-w-[500px]">{banner.description}</p>
                                <button className="px-8 mr-10 py-3 border-2 border-[#FF3811] text-[#FF3811] text-xl rounded-[4px] hover:bg-[#FF3811] hover:text-white transition-colors duration-300">
                                    Discover More
                                </button>
                                <button className="px-8 py-3 border-2 border-[#FF3811] text-[#FF3811] text-xl rounded-[4px] hover:bg-[#FF3811] hover:text-white transition-colors duration-300">
                                    Latest Project
                                </button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform  bottom-12 right-12">
                            <a href={banner.previous} className="btn btn-circle bg-[#FFFFFF33] hover:bg-[#FF3811] mr-6">
                                <FaArrowLeft className="text-white" />

                            </a>
                            <a href={banner.next} className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] btn-circle">
                                <FaArrowRight className="text-white" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
const banners = [
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide2',
        previous: "#slide6",
    },
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide3',
        previous: "#slide1",
    },
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide4',
        previous: "#slide2",
    },
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide5',
        previous: "#slide3",
    },
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide6',
        previous: "#slide4",
    },
    {
        title: 'Affordable Price For Car Servicing',
        description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide1',
        previous: "#slide5",
    },
];

// const banners = [
//   {
//     title: "Affordable Price For Car Servicing",
//     description:
//       "There are many variations of passages of  available, but the majority have suffered alteration in some form",
//     next: "#slide2",
//     prev: "#slide4",
//   },
//   {
//     title: "Affordable Price For Car Servicing",
//     description:
//       "There are many variations of passages of  available, but the majority have suffered alteration in some form",
//     next: "#slide3",
//     prev: "#slide1",
//   },
//   {
//     title: "Affordable Price For Car Servicing",
//     description:
//       "There are many variations of passages of  available, but the majority have suffered alteration in some form",
//     next: "#slide4",
//     prev: "#slide2",
//   },
//   {
//     title: "Affordable Price For Car Servicing",
//     description:
//       "There are many variations of passages of  available, but the majority have suffered alteration in some form",
//     next: "#slide1",
//     prev: "#slide3",
//   },
// ];

export default Banner;
