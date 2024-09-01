import React, { useEffect } from 'react'
import ProjectDetails from './projects/ProjectDetails'
import Details from './projects/Details'
import project1 from "../assets/project4.png"
import project2 from "../assets/project3.png"
import project3 from "../assets/project2.png"
import project4 from "../assets/project1.png"

const ProjectLayout_3 = () => {
  
  const allData = {
    name: "Hotel Suites",
    breadcrum: "Home",
    description: "Discover the perfect blend of luxury, comfort, and style in our thoughtfully designed hotel suites. Each suite offers an elevated experience, featuring spacious living areas, plush king-sized beds, and stunning views of the city or ocean.",
    req: [
      {
      title: "Category",
      desc: "Web Design",
    },
    {
      title:"Client",
      desc:"NA"
    },
    {
      title:"Start Date",
      desc:"NA"
    },
    {
      title:"Designer",
      desc:"NA"
    }
    ],
    sliderImages: [
      project1,
      project2,
      project3,
      project4
    ],
    projectImage: project3,
    projectLink: "https://hotel-suite-one.vercel.app/",
    projectdesc:{
      projectDescription1: "Discover the perfect blend of luxury, comfort, and style in our thoughtfully designed hotel suites. Each suite offers an elevated experience, featuring spacious living areas, plush king-sized beds, and stunning views of the city or ocean. The elegant interiors are complemented by modern amenities, including high-speed Wi-Fi, flat-screen TVs, and premium minibars.",
      projectDescription2: "Our hotel suites website is built using React.js for a dynamic, component-based user interface, ensuring fast and seamless navigation. Tailwind CSS provides a utility-first approach to styling, enabling responsive and visually appealing designs. This combination allows for an efficient, modern, and highly customizable website experience. ",
    },
    project:[
      {
        projectDetail: "OUR APPROACH",
        projectDesc: "frontend development using technologies like React.js or Next.js for building interactive components. Begin by setting up your project and installing necessary libraries. Develop key components such as the home page, which displays featured content in carousels or grids, and content pages that provide detailed information about movies or TV shows. Implement search and filter functionality to enhance content discovery and create user profile pages that offer personalized recommendations."
      }
    ]
  }

  useEffect(() => {
    document.title = "Hotel Suites - Perwez";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProjectDetails data={allData} />
      <Details data={allData} />
    </div>
  )
}

export default ProjectLayout_3
