import React, { useEffect } from 'react'
import ProjectDetails from './projects/ProjectDetails'
import Details from './projects/Details'
import project1 from "../assets/project4.png"
import project2 from "../assets/project3.png"
import project3 from "../assets/project2.png"
import project4 from "../assets/project1.png"

const ProjectLayout_2 = () => {
  const allData = {
    name: "Leadtym",
    breadcrum: "Home",
    description: "Leadtym is a marketing platform designed to streamline and optimize various aspects of digital marketing. It offers tools and features tailored for advertisers, publishers, influencers, and businesses looking to enhance their online presence.",
    req: [
      {
      title: "Category",
      desc: "Web Design",
    },
    {
      title:"Client",
      desc:"Leadtym"
    },
    {
      title:"Start Date",
      desc:"August 20, 2023"
    },
    {
      title:"Designer",
      desc:"Figma"
    }
    ],
    sliderImages: [
      project1,
      project2,
      project3,
      project4
    ],
    projectImage: project2,
    projectLink: "https://leadtym-clone.vercel.app/",
    projectdesc:{
      projectDescription1: "The top-left corner features the LEADTYM logo, styled in white and purple, with a circular icon next to the text.The navigation bar is placed at the top-right and includes links to sections like Advertiser, Publisher, Influencer, Loyalty Program, and Referrals.A Login button is also present in the top-right corner, outlined with a white border on a dark background.",
      projectDescription2: "The central part of the image is a hero section with a bold headline that reads, Transform Your Marketing, styled with a gradient from blue to purple.Below the headline is a subtext, Leadtym Publish, with the word Leadtym in white and Publish in blue. A call-to-action button labeled Register now is centered below the text, in a blue color that stands out against the dark background.",
    },
    project:[
      {
        projectDetail: "OUR APPROACH",
        projectDesc: "Use a <header> for the navigation bar and logo.Create a <section> for the hero area containing the main text and call-to-action button. Utilize a <div> or <section> for the thumbnails section to showcase different aspects of the marketing services. Tailwind CSS can be used for quick styling with classes for layout, typography, and colors. Ensure the design is fully responsive, with the navigation bar and hero section adjusting well on different screen sizes. Tailwind’s responsive classes will be useful here. Consider using JavaScript to add interactivity, like toggling the mobile menu or animating elements on scroll.Libraries like AOS (Animate On Scroll) can be used to introduce subtle animations to the text and images as they enter the viewport."
      }
    ],
  }
  useEffect(() => {
    document.title = "Leadtym - Perwez";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProjectDetails data={allData} />
      <Details data={allData} />
    </div>
  )
}

export default ProjectLayout_2
