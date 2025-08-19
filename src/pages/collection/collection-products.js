import MainLayout from '@/Layouts/MainLayout';
import React from 'react'
import CollectionHero from '@/components/CollectionPage/CollectionHero';
import CollectionsGroup from '@/components/CollectionPage/CollectionsGroup';

const ContactUs = () => {
  return (
<>
<CollectionHero  title="Café Chairs" description="Elegance & Comfort" />
<CollectionsGroup />
</>
  )
}

ContactUs.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default ContactUs
