import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import Carousel from './Carousel';
import ProjectDescription from './ProjectDescription';
import { Link } from 'react-router-dom';

const Details = ({ data }) => {
    return (
        <div className='bg-black'>
            <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
                <div>
                    <img
                        className='w-full h-auto object-cover bg-[#2A1454] pt-4 pl-4 pr-4 sm:pt-8 lg:pt-12 lg:pl-12 lg:pr-12'
                        src={data.projectImage}
                        alt="project1"
                    />
                </div>
                <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between text-white py-6 space-y-6 lg:space-y-0 lg:space-x-6'>
                    <div className='w-full lg:w-[45%] flex flex-col gap-4'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>{data.name}</h1>
                        <p className='text-base sm:text-lg text-justify text-gray-300'>
                            {data.description}
                        </p>
                        <div>
                            <Link to={data.projectLink}>
                                <button className='group flex gap-3 items-center bg-gradient-to-l hover:bg-gradient-to-r from-slate-800 to-[#7D4AE6] px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-xl font-bold transition duration-700 ease-in-out'>
                                    Live Preview <MdArrowOutward size={20} className="group-hover:rotate-45 duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-4 w-full lg:w-[40%]'>
                        {data.req.map((item, idx) => (
                            <div key={idx}>
                                <h2 className='text-base sm:text-lg text-gray-300'>{item.title}</h2>
                                <p className='text-lg sm:text-xl font-semibold'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='lg:mt-8'>
                    <Carousel slider={data.sliderImages} />
                </div>
                <div className='lg:mt-8'>
                    <ProjectDescription project={data.project} projectDesc={data.projectdesc} />
                </div>
            </div>
        </div>
    );
};

export default Details;
