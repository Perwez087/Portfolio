import React from 'react';

const ExperienceAndEducation = () => {
    const experiences = [
        {
            date: 'July 2024 - Present',
            role: 'Oscar Printing',
            company: 'Freelancer'
        },
        {
            date: 'Feb 2024 - July 2024',
            role: 'FRONTEND TRAINEE',
            company: 'Noida, Uttar Pradesh'
        },
        {
            date: 'May 2023 - Oct 2023',
            role: 'FULL STACK DEVELOPER',
            company: 'Noida, Uttar Pradesh'
        },
    ];

    const education = [
        {
            date: 'Aug 2020 - May 2024',
            course: 'B.Tech (CSE)',
            institution: 'JIET, Jodhpur'
        },
        {
            date: 'May 2018 - May 2020',
            course: '12th',
            institution: 'Patna Muslim High School+2'
        },
        {
            date: 'May 2018',
            course: '10th',
            institution: 'Infant Jesus School'
        },
    ];

    return (
        <div id='resume' className="bg-black py-12 px-4 md:px-12 lg:px-24 text-white">
            <div className="lg:p-16 p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className='flex flex-col gap-2'>
                    <h2 className='bg-gradient-to-r from-[#563891] to-purple-100 bg-clip-text text-transparent font-bold md:text-4xl lg:text-5xl text-3xl py-4'>
                        My Experience
                    </h2>
                    {experiences.map((experience, index) => (
                        <div key={index} className="bg-[#140C1C] group hover:bg-gradient-to-r from-[#7351b8] to-[#210852] p-6 rounded-2xl mt-8 duration-300 ease-in-out transition-all space-y-2">
                            <div className="lg:text-xl text-lg font-extrabold group-hover:text-gray-100 text-[#8750F7]">{experience.date}</div>
                            <div className="lg:text-2xl text-xl font-bold">{experience.role}</div>
                            <div className="text-gray-300">{experience.company}</div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='bg-gradient-to-r from-[#563891] to-purple-100 bg-clip-text text-transparent font-bold md:text-4xl lg:text-5xl text-3xl py-4'>
                        <span className="mr-2"></span> My Education
                    </h2>
                    {education.map((edu, index) => (
                        <div key={index} className="bg-[#140C1C] group hover:bg-gradient-to-r from-[#7351b8] to-[#210852] p-6 rounded-2xl mt-8 duration-300 ease-in-out transition-all space-y-2">
                            <div className="lg:text-xl text-lg font-extrabold group-hover:text-gray-100 text-[#8750F7]">{edu.date}</div>
                            <div className="lg:text-2xl text-xl font-bold">{edu.course}</div>
                            <div className="text-gray-300">{edu.institution}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceAndEducation;
