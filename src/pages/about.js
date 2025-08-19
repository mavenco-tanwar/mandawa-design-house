import MainLayout from '@/Layouts/MainLayout';
import React from 'react'
import AboutHero from '@/components/AboutPage/AboutHero/AboutHero';

const About = () => {
  return (
<>
<AboutHero />
</>
  )
}

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About
