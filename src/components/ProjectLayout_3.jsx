import React, { useEffect } from 'react'
import ProjectDetails from './projects/ProjectDetails'
import Details from './projects/Details'
import project1 from "../assets/project4.png"
import project2 from "../assets/project3.png"
import project3 from "../assets/project2.png"
import project4 from "../assets/project1.png"

const ProjectLayout_3 = () => {
  
  const allData = {
    name: "Netflix",
    breadcrum: "Home",
    description: "A Netflix Clone is a web or mobile application designed to replicate the functionality, features, and user experience of the popular streaming service Netflix. It allows users to browse, stream, and manage their favorite movies, TV shows, and documentaries in a user-friendly interface.",
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
    projectLink: "https://netflix-app-six-pi.vercel.app/",
    projectdesc:{
      projectDescription1: "A Netflix clone is a web application designed to mimic the core functionality and user experience of Netflix. It features user authentication to allow individuals to create and manage their accounts, providing a personalized experience. The home page typically showcases a variety of content through dynamic layouts, such as carousels or grids, displaying featured movies and TV shows.",
      projectDescription2: "The design is responsive, ensuring that the application is accessible and functional across different devices, including desktops, tablets, and smartphones. Overall, a Netflix clone combines frontend technologies, like React.js or Next.js. ",
    },
    project:[
      {
        projectDetail: "OUR APPROACH",
        projectDesc: "frontend development using technologies like React.js or Next.js for building interactive components. Begin by setting up your project and installing necessary libraries. Develop key components such as the home page, which displays featured content in carousels or grids, and content pages that provide detailed information about movies or TV shows. Implement search and filter functionality to enhance content discovery and create user profile pages that offer personalized recommendations."
      }
    ]
  }

  useEffect(() => {
    document.title = "Netflix - Perwez";
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
