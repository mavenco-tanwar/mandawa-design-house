import MainLayout from '@/Layouts/MainLayout';
import React from 'react'
import AboutHeroN from '@/components/AboutPage/AboutHero/AboutHeroN';

const About = () => {
  return (
<>
<AboutHeroN />
</>
  )
}

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About
