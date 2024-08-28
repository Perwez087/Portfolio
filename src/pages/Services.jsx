import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { FiArrowDownRight } from 'react-icons/fi';

const Services = () => {
    const data = [
        {
            Number: '01',
            Brand: 'Branding Design',
            description: 'A brand design description briefly outlines the key visual and conceptual elements that define a brand identity.',
            icons: <MdArrowOutward size={30} />,
        },
        {
            Number: '02',
            Brand: 'UI/UX Design',
            description: 'UI/UX Design focuses on creating intuitive, user-friendly interfaces that enhance the overall user experience.',
            icons: <MdArrowOutward size={30} />,
        },
        {
            Number: '03',
            Brand: 'Web Design',
            description: 'Web Design involves creating visually appealing and functional websites.',
            icons: <MdArrowOutward size={30} />,
        },
        {
            Number: '04',
            Brand: 'App Design',
            description: 'App Design focuses on creating intuitive, visually appealing, and user-friendly mobile or desktop applications.',
            icons: <MdArrowOutward size={30} />,
        },
    ];

    return (
        <div id="services" className='bg-black py-24'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='bg-gradient-to-r from-[#8750f7] to-purple-100 bg-clip-text text-transparent font-bold md:text-5xl sm:text-3xl text-2xl py-4'>
                    My Quality Services
                </h1>
                <p className='text-slate-300 text-center font-medium px-4'>
                    We put your ideas and thus your wishes in the form of a unique web project that
                    <br /> inspires you and your customers.
                </p>
            </div>

            <div className='max-w-7xl mx-auto py-4 mt-8 px-4'>
                {data.map((item, i) => (
                    <div
                        key={i}
                        className='group hover:bg-gradient-to-tr from-[#7F4BE8] to-[#351B67] duration-500 text-white grid md:grid-cols-2 gap-4 items-center justify-between py-8 px-10 cursor-pointer border-b border-purple-900 transition-colors ease-in-out'
                    >
                        <div className='flex items-center gap-4'>
                            <span className='font-bold md:text-2xl text-xl text-purple-500 group-hover:text-white duration-500'>
                                {item.Number}
                            </span>
                            <span className='font-bold md:text-3xl text-xl'>{item.Brand}</span>
                        </div>
                        <div className='flex items-center gap-10'>
                            <p className='text-slate-300 font-medium m-auto'>{item.description}</p>
                            <span className='group-hover:rotate-0 rotate-90 duration-300 text-purple-500 group-hover:text-white'>
                                {item.icons}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
