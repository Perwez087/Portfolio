import React, { useEffect } from 'react'
import ProjectDetails from './projects/ProjectDetails'
import Details from './projects/Details'
import project1 from "../assets/project4.png"
import project2 from "../assets/project3.png"
import project3 from "../assets/project2.png"
import project4 from "../assets/project1.png"

const ProjectLayout_4 = () => {
  const allData = {
    name: "Movie-App",
    breadcrum: "Home",
    description: "The Movie Detail app is an interactive platform where users can dive into comprehensive information about their favorite movies. Built with React, it displays essential movie details like synopsis, cast, and release dates, along with tailored recommendations and similar movie suggestions. The app is crafted for a smooth browsing experience, ensuring it looks and works well on all screen sizes..",
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
    projectLink: "https://movie-app-ten-silk.vercel.app/",
    projectdesc:{
      projectDescription1: "A movie app built with React.js, Tailwind CSS, and the TMDB API. This app allows users to browse and explore movie details, view ratings, and access related recommendations, all with a sleek and responsive design powered by Tailwind CSS. The TMDB API provides rich movie data, including cast, genres, and similar movies, offering users an engaging and dynamic movie-browsing experience.",
      projectDescription2: "The Movie Detail app is an interactive platform where users can dive into comprehensive information about their favorite movies. Built with React, it displays essential movie details like synopsis, cast, and release dates, along with tailored recommendations and similar movie suggestions. The app is crafted for a smooth browsing experience, ensuring it looks and works well on all screen sizes. ",
    },
    project:[
      {
        projectDetail: "OUR APPROACH",
        projectDesc: "A movie app built with React.js, Tailwind CSS, and the TMDB API. This app allows users to browse and explore movie details, view ratings, and access related recommendations, all with a sleek and responsive design powered by Tailwind CSS. The TMDB API provides rich movie data, including cast, genres, and similar movies, offering users an engaging and dynamic movie-browsing experience."
      }
    ]
  }

  useEffect(() => {
    document.title = "Movie - Perwez";
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
