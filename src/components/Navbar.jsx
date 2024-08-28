import React, { useState } from 'react';
import logo from '../assets/logo.png';

const navItems = [
  { name: 'Services', path: 'services' },
  { name: 'Works', path: 'works' },
  { name: 'Resume', path: 'resume' },
  { name: 'Skills', path: 'skills' },
  { name: 'Contact', path: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden'; 
  };

  const handleNavClick = () => {
    setIsOpen(false);
    document.body.style.overflow = ''; 
  };

  return (
    <div className="text-white">
      <nav className="flex items-center justify-between px-5 py-6 md:py-10 md:mx-8 xl:px-20 relative">
        
        <div className="flex items-center gap-4 md:gap-8">
          <a href="/">
            <img className="w-10 md:w-14" src={logo} alt="logo" />
          </a>
          <a href="mailto:Parwez4568@gmail.com" className="font-semibold hidden md:block">
            Parwez4568@gmail.com
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button className="font-semibold bg-gradient-to-l hover:bg-gradient-to-r from-slate-800 to-[#7D4AE6] px-4 py-3 rounded-full shadow-xl transition duration-300 ease-in-out">
            Hire me!
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Small Device (Mobile) Menu Content */}
        <div
          className={`lg:hidden transform transition-transform duration-500 ease-in-out fixed top-0 left-0 w-full bg-[#2A1454] py-10 px-20 z-10 ${
            isOpen ? 'translate-y-0 h-screen' : '-translate-y-full h-screen'
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-4 focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex mb-6">
            <a href="/">
              <img className="w-16 sm:w-20" src={logo} alt="logo" />
            </a>
          </div>

          <ul className="flex flex-col gap-6 font-semibold sm:text-xl text-lg">
            {navItems.map(({ name, path }) => (
              <li key={name} className="group duration-500">
                <a
                  href={`/${path}`}
                  className="text-white bg-transparent border-none"
                  onClick={handleNavClick}
                >
                  {name}
                  <div className="w-0 group-hover:w-full bg-purple-500 h-[2px] duration-500"></div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Large Device (Tablet and Desktop) Menu */}
        <div className="hidden lg:flex lg:flex-row gap-12">
          <ul className="flex flex-row items-center gap-8 font-semibold">
            {navItems.map(({ name, path }) => (
              <li key={name} className="group duration-500">
                <a
                  href={`#${path}`}
                  className="text-white bg-transparent border-none"
                  onClick={handleNavClick}
                >
                  {name}
                  <div className="w-0 group-hover:w-full bg-purple-500 h-[2px] duration-500"></div>
                </a>
              </li>
            ))}
          </ul>
          <a href="mailto:Parwez4568@gmail.com" className="font-semibold">
            <button className="bg-gradient-to-l hover:bg-gradient-to-r from-slate-800 to-[#7D4AE6] px-8 py-3 rounded-full shadow-xl font-bold transition duration-300 ease-in-out">
              Hire me!
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
