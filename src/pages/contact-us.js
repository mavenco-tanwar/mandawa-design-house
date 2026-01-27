import ContactForm from '@/components/ContactPage/ContactForm/ContactForm';
import ContactHero from '@/components/ContactPage/ContactHero/ContactHero';
import ContactMap from '@/components/ContactPage/ContactMap/ContactMap';
import MainLayout from '@/Layouts/MainLayout';
import React from 'react'

const ContactUs = () => {
  return (
<>
<ContactHero title="Contact Us" imageUrl="/images/global/contacthero.png"/>
<ContactMap/>
<ContactForm/>
</>
  )
}

ContactUs.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ContactUs
