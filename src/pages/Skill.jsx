import React from 'react';
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";



const skills = [
    { name: 'Java', percentage: '92%', icon:<FaJava/>, color:'#FFAD60'},
    { name: 'ReactJs', percentage: '80%', icon:<FaReact/>,color:'#179BAE' },
    { name: 'Tailwind CSS', percentage: '85%',icon:<BiLogoTailwindCss/>,color:'#179BAE' },
    { name: 'JavaScript', percentage: '99%',icon: <IoLogoJavascript/>,color:'#F6E96B'},
    { name: 'NodeJs', percentage: '89%',icon:<FaNodeJs/>,color:'#387F39'},
    { name: 'MongoDB', percentage: '93%', icon:<DiMongodb/>,color:'#387F39' },
];

const SkillCard = ({ name, percentage, icon , color}) => (
    <div className='flex flex-col items-center gap-2'>
        <div className="bg-[#140C1C] group hover:bg-[#2A1454] hover:border-[#2A1454] duration-300 hover:scale-95 px-14 py-8 rounded-3xl shadow-md space-y-4">
            <span className='text-5xl text-gray-400' style={{color}}>{icon}</span>
            <div className="text-2xl text-gray-500 font-bold text-center group-hover:text-purple-700">{percentage}</div>
        </div>
        <div>
            <h1 className='text-center text-purple-700 text-lg'>{name}</h1>
        </div>
    </div>
);

const MySkill = () => (
    <div id='skills' className='bg-[#0F0715] py-12 px-4 md:px-12 lg:px-24'>
        <div className='flex flex-col items-center justify-center gap-3'>
            <h2 className='bg-gradient-to-r from-[#5d34af] to-purple-100 bg-clip-text text-transparent font-bold lg:text-5xl md:text-3xl text-2xl py-4'>My Skills</h2>
            <p className='text-center lg:text-lg text-white'>We put your ideas and thus your wishes in the form of a unique web project that <br /> inspires you and your customers.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 py-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </div>
    </div>
);

export default MySkill;
