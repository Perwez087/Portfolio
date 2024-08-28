import React, { useEffect } from 'react'
import Hero from '../pages/Hero'
import Services from '../pages/Services'
import Work from '../pages/Work'
import ExperienceAndEducation from '../pages/ExperienceAndEducation'
import MySkill from '../pages/Skill'
import Contact from '../pages/Contact'

const Home = () => {
  useEffect(() => {
    document.title = "Perwez - Personal Portfolio";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Hero/>
        <Services/>
        <Work/>
        <ExperienceAndEducation/>
        <MySkill/>
        <Contact/>
    </div>
  )
}

export default Home