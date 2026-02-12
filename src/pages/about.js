import MainLayout from '@/Layouts/MainLayout';
import React from 'react'
import AboutHeroN from '@/components/AboutPage/AboutHero/AboutHeroN';
import ProductionDrawing from '@/components/HomePage/ProductionDrawing/ProductionDrawing';

const About = () => {
  return (
<>
<AboutHeroN />
   <ProductionDrawing/>
</>
  )
}

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default About
