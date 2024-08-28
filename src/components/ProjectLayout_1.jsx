import React, { useEffect } from 'react';
import ProjectDetails from './projects/ProjectDetails';
import Details from './projects/Details';
import project1 from "../assets/project4.png"
import project2 from "../assets/project3.png"
import project3 from "../assets/project2.png"
import project4 from "../assets/project1.png"

const ProjectLayout_1 = () => {
  const allData = {
    name: "Yahya Booking",
    breadcrum: "Home",
    description: "Yahya Booking is a comprehensive travel booking website designed to make the process of planning and reserving travel experiences seamless and convenient. The platform allows users to explore and book a variety of travel services, including hotels, flights, and car rentals, all in one place.",
    req: [
      {
        title: "Category",
        desc: "Web Design",
      },
      {
        title: "Client",
        desc: "Artboard Studio",
      },
      {
        title: "Start Date",
        desc: "Feb 16, 2023",
      },
      {
        title: "Designer",
        desc: "ThemeJunction",
      },
    ],
    sliderImages: [
      project1,
      project2,
      project3,
      project4
    ],
    projectImage: project1,
    projectLink: "https://yahya-bookingcom.vercel.app/",
    projectdesc: {
      projectDescription1:
        "The top section of the page includes the company logo, yahya booking, which is styled with a blue and yellow color scheme The navigation bar includes links to different sections of the site: Home, Hotels, Flight, and Car rentals, each accompanied by a relevant icon.On the right side of the navigation bar, there are buttons for Register and Sign in, allowing users to create an account or log in.",
      projectDescription2:
        "The central part of the image is a hero section with a large collage of travel-related images, including famous landmarks, luxurious accommodations, and people enjoying vacations.The main headline reads, Discover Your Dream Destination with YahYa Tours Corporation, which is prominently displayed in large, bold white text. Below the headline is a subtext: Let's start exploring the world together with YahYa, which invites users to engage with the service. The design incorporates a star rating graphic, enhancing the brand's credibility. ",
    },
    project: [
      {
        projectDetail: "OUR APPROACH",
        projectDesc:
          "Use semantic HTML to structure the page, including a <header> for the navigation, a <section> for the hero area, and other sections as needed for additional content. Use Tailwind CSS (or traditional CSS) for styling to achieve the modern, clean look seen in the image. Tailwind’s utility classes make it easy to quickly apply styles such as background colors, font sizes, margins, and padding.Ensure that the design is fully responsive using Tailwind’s responsive classes to adjust layouts for different screen sizes.",
      },
    ],
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Yahya Booking - Perwez";
  }, []);

  return (
    <div>
          <ProjectDetails data={allData} />
          <Details data={allData} />
    </div>
  );
};

export default ProjectLayout_1;
