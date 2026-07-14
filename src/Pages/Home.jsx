import React from 'react';
import SEO from '../component/common/SEO';
import Hero from '../component/sections/Hero';
import Services from '../component/sections/Services';
import Projects from '../component/sections/Projects';
import Contact from '../component/sections/Contact';

const Home = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;