import React, { useEffect } from 'react'
import ProjectDetails from './projects/ProjectDetails'
import Details from './projects/Details'
import project1 from "../assets/project4.png"
import project2 from "../assets/project3.png"
import project3 from "../assets/project2.png"
import project4 from "../assets/project1.png"

const ProjectLayout_4 = () => {
  const allData = {
    name: "eStudy",
    breadcrum: "Home",
    description: "An eStudy website built with React.js and Tailwind CSS offers a modern, interactive platform for online learning. The website features a clean, responsive design created using Tailwind CSS, which ensures that the layout adapts seamlessly to different screen sizes and devices. React.js is used to build dynamic, reusable components that enhance user interaction and functionality.",
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
    projectImage: project4,
    projectLink: "https://education-app-sepia.vercel.app/",
    projectdesc:{
      projectDescription1: "An eStudy website built with React.js and Tailwind CSS offers a modern, interactive platform for online learning. The website features a clean, responsive design created using Tailwind CSS, which ensures that the layout adapts seamlessly to different screen sizes and devices. React.js is used to build dynamic, reusable components that enhance user interaction and functionality.",
      projectDescription2: "The homepage typically presents an engaging interface with sections for featured courses, categories, and a search bar to help users find specific subjects. The course listings are often displayed in a grid or card format, allowing users to easily browse and select their desired content. Detailed course pages provide information such as course descriptions, instructor details, and enrollment options. ",
    },
    project:[
      {
        projectDetail: "OUR APPROACH",
        projectDesc: "Creating an eStudy website with React.js and Tailwind CSS involves several key steps. Start by defining the overall structure and functionality of the site. React.js will be used to build the core features of the website, such as interactive components for course listings, user profiles, and dashboards. Tailwind CSS will be employed to design the user interface, ensuring a clean and responsive layout."
      }
    ]
  }

  useEffect(() => {
    document.title = "eStudy - Perwez";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProjectDetails data={allData} />
      <Details data={allData} />
    </div>
  )
}

export default ProjectLayout_4
