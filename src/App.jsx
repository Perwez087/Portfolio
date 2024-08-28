import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectLayout_1 from './components/ProjectLayout_1';
import ProjectLayout_2 from './components/ProjectLayout_2';
import ProjectLayout_3 from './components/ProjectLayout_3';
import ProjectLayout_4 from './components/ProjectLayout_4';
import BackToTop from './components/BackToTop';
import Services from './pages/Services';
import Work from './pages/Work';
import ExperienceAndEducation from './pages/ExperienceAndEducation';
import MySkill from './pages/Skill';
import Contact from './pages/Contact';
import Loading from './components/Loading'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/yahya" element={<ProjectLayout_1 />} />
            <Route path="/projects/leadtym" element={<ProjectLayout_2 />} />
            <Route path="/projects/netflix" element={<ProjectLayout_3 />} />
            <Route path="/projects/estudy" element={<ProjectLayout_4 />} />
          </Routes>
          <BackToTop />
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
