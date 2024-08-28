import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import BackToTop from '../components/BackToTop';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import banner from "../assets/Banner.jpeg";
import resume from "../assets/Resume.pdf";


const Hero = () => {
    const [counterOn, setCounterOn] = useState(false);

    const data = [
        {
            title: 2,
            desc: "Years of",
            desc2: "Experience"
        },
        {
            title: 20,
            desc: "Project",
            desc2: "Completed"
        },
        {
            title: 100,
            desc: "Happy",
            desc2: "Clients"
        }
    ];

    return (
        <main className='bg-gradient-to-tr from-[#040205] to-[#14022c] pb-8'>
            <Navbar />
            <BackToTop />
            <div className='lg:p-20 p-10'>
                <div className='flex md:flex-row flex-col items-center gap-4'>
                    <div className='lg:w-[60%] w-full flex flex-col gap-4 sm:px-8 px-4'>
                        <span className='text-white md:text-3xl text-xl font-semibold'>Perwez Alam</span>
                        <h1 className='lg:text-7xl sm:text-4xl text-3xl pb-4 font-bold bg-gradient-to-r from-[#8750f7] to-purple-100 bg-clip-text text-transparent xl:w-[80%]'>Web Developer + UX Designer</h1>
                        <p className='text-slate-100 sm:text-xl md:block hidden text-lg text-pretty sm:w-[70%] lg:[50%]'>I break down complex user experience problems to create integrity-focused solutions that connect billions of people</p>

                        <div className='md:flex lg:flex-row flex-col items-start lg:items-center hidden gap-4 mt-4'>
                            <a 
                                href={resume} 
                                download="Perwez_Alam_CV.pdf"
                                className='flex items-center hover:bg-[#783fe9] hover:text-[#d6c6f8] border-[#552ba4] border text-[#844EF2] px-10 py-3 duration-500 rounded-full gap-2 cursor-pointer font-semibold'
                            >
                                <button>Download CV</button>
                                <span><MdOutlineFileDownload size={22}/></span>
                            </a>
                            <div className='text-white flex items-center gap-4'>
                                <a href="https://www.linkedin.com/in/alam-perwez" className='hover:bg-[#783fe9] border-[#552ba4] border text-[#844EF2] hover:text-white duration-500 p-2 rounded-full' target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} /></a>
                                <a href="https://www.instagram.com/perwez087?igsh=MWI0dHZ3dDVpdHl5ag%3D%3D&utm_source=qr" className='hover:bg-[#783fe9] border-[#552ba4] border text-[#844EF2] hover:text-white duration-500 p-2 rounded-full' target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
                                <a href="https://github.com/Perwez087" className='hover:bg-[#783fe9] border-[#552ba4] border text-[#844EF2] hover:text-white duration-500 p-2 rounded-full' target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='group md:rotate-[5deg] md:hover:rotate-0 md:duration-700 md:px-0 sm:px-24'>
                            <img className='lg:w-[350px] w-[380px] border-[#2A1454] group-hover:border-[#552ba4] rounded-3xl border-2' src={banner} alt="img" />
                        </div>
                        <p className='text-slate-100 sm:text-xl md:hidden text-lg text-pretty mt-4 sm:px-10'>I break down complex user experience problems to create integrity-focused solutions that connect billions of people</p>
                        <div className='flex md:hidden sm:flex-row flex-col items-start lg:items-center gap-4 mt-4 sm:px-10 sm:mt-6'>
                            <a 
                                href={resume} 
                                download="Perwez_Alam_CV.pdf"
                                className='flex items-center hover:bg-[#783fe9] hover:text-[#d6c6f8] border-[#552ba4] border text-[#844EF2] px-10 py-3 rounded-full gap-2 cursor-pointer font-semibold'
                            >
                                <button>Download CV</button>
                                <span><MdOutlineFileDownload /></span>
                            </a>
                            <div className='text-white flex items-center gap-4'>
                                <a href="https://www.linkedin.com/in/alam-perwez" className='hover:bg-[#783fe9] border-[#552ba4] border text-[#844EF2] hover:text-white duration-500 p-2 rounded-full' target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} /></a>
                                <a href="https://www.instagram.com/perwez087?igsh=MWI0dHZ3dDVpdHl5ag%3D%3D&utm_source=qr" className='hover:bg-[#783fe9] border-[#552ba4] border text-[#844EF2] hover:text-white duration-500 p-2 rounded-full' target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
                                <a href="https://github.com/Perwez087" className='hover:bg-[#783fe9] border-[#552ba4] border text-[#844EF2] hover:text-white duration-500 p-2 rounded-full' target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-2 px-4 mt-12'>
                    {
                        data.map((item, idx) => (
                            <div key={idx} className='flex md:flex-row flex-col gap-3 justify-center items-center text-white'>
                                <h1 className='md:text-6xl text-4xl font-bold'>
                                    {counterOn && 
                                        <CountUp start={0} end={item.title} duration={2.5} />
                                    }
                                    {item.title === 20 ? "+" : ""}
                                </h1>
                                <div className='text-gray-300 font-semibold'>
                                    <p>{item.desc}</p>
                                    <p>{item.desc2}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </ScrollTrigger>
        </main>
    );
}

export default Hero;
