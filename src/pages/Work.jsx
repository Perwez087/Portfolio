import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import project1 from "../assets/project4.png"
import project2 from "../assets/project3.png"
import project3 from "../assets/project2.png"
import project4 from "../assets/project1.png"

const Work = () => {
    const [filter, setFilter] = useState('All');
    const navigate = useNavigate();

    const projects = [
        {
            title: 'Yahya Booking',
            description: 'Yahya Booking is a comprehensive travel booking.',
            image: project1,
            category: 'Branding',
            link: '/projects/yahya',
            icons: <MdArrowOutward size={30} />
        },
        {
            title: 'Leadtym',
            description: 'Leadtym is a marketing platform designed.',
            image: project2,
            category: 'Apps',
            link: '/projects/leadtym',
            icons: <MdArrowOutward size={30} />
        },
        {
            title: 'Netflix-clone',
            description: 'A Netflix clone is a web application.',
            image: project3,
            category: 'Branding',
            link: '/projects/netflix',
            icons: <MdArrowOutward size={30} />
        },
        {
            title: 'eStudy',
            description: 'An eStudy website built with React.js.',
            image: project4,
            category: 'UX/UI',
            link: '/projects/estudy',
            icons: <MdArrowOutward size={30} />
        }
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

    const handleIconClick = (link) => {
        navigate(link);
    };

    return (
        <div id="works" className='bg-[#0F0715] py-12 px-4 md:px-12 lg:px-24'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='bg-gradient-to-r from-[#8750f7] to-purple-100 bg-clip-text text-transparent font-bold md:text-5xl sm:text-3xl text-xl py-2'>My Recent Works</h1>
                <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 item-center gap-6 mt-8 bg-black p-1 md:px-0 px-4 rounded-full'>
                    {['All', 'Apps', 'Branding', 'UX/UI'].map(category => (
                        <button
                            key={category}
                            className={`text-slate-100 py-3 md:px-6 px-4 rounded-full font-medium ${filter === category && 'bg-gradient-to-r from-slate-800 to-[#7D4AE6] transition-colors duration-500 ease-in-out'}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-8 mt-8 md:p-10">
                {filteredProjects.map((project, index) => (
                    <div key={index} className='bg-[#140C1C] pl-6 pr-6 pt-6 rounded-xl'>
                        <div className="relative group shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full object-cover" />
                            <div className="absolute group-hover:bottom-5 bg-gradient-to-tr from-[#7F4BE8] to-[#351B67] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-between rounded-2xl cursor-pointer p-4 xl:p-6 w-full" 
                            onClick={() => handleIconClick(project.link)}>
                                <div>
                                    <h3 className="lg:text-3xl md:text-2xl text-xl font-bold text-white">{project.title}</h3>
                                    <p className="text-white md:text-lg mt-2">{project.description}</p>
                                </div>
                                <div 
                                    className='group-hover:rotate-0 rotate-180 duration-500 cursor-pointer'>
                                    <span className='text-white'>{project.icons}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
