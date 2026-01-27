"use client"
import Navbar from '@/components/Global/Navbar/Navbar'
import Footer from '@/components/Global/FooterN/FooterN'

const MainLayout = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
