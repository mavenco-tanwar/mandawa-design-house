import MainLayout from '@/Layouts/MainLayout';
import React from 'react'
import BreadCrumb from "@/components/Global/BreadCrumb/BreadCrumb";
import ProductSlider from '@/components/CollectionPage/ProductSlider/ProductSlider';
import ProductInfo from '@/components/CollectionPage/ProductDetail/ProductInfo';

const About = () => {
  return (
<>
<BreadCrumb />
<ProductInfo />
<ProductSlider/>
</>
  )
}

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About
