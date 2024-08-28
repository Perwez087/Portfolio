import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ProjectDetails = ({data}) => {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("https://gerold.themejunction.net/wp-content/uploads/2024/05/breadcrumb-bg.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className='flex flex-col items-center justify-center text-white py-16 gap-4'>
        <h1 className='md:text-6xl text-3xl font-bold'>{data.name}</h1>
        <div className='flex items-center gap-4 pb-8 md:text-lg text-sm'>
          <Link to={"/"} className='group'>{data.breadcrum}
            <div className="w-0 group-hover:w-full bg-white h-[1px] duration-500"></div>
          </Link>
          <span><IoIosArrowForward/></span>
          <Link>{data.name}</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
