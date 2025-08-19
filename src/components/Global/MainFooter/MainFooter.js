import Image from 'next/image'
import React from 'react'
import FooterStrip from '../FooterStrip'

const MainFooter = () => {
  return (
    <>
<section className="py-[60px] px-4 bg-[#6E2F1B]">
  <div className="max-w-[1280px] mx-auto flex flex-col gap-[60px]">
    
    {/* Logo & Title */}
    <div className="flex flex-col items-center text-center">
      <div className="relative w-[300px] h-[50px] sm:w-[400px] sm:h-[60px] md:w-[412px] md:h-[70px]">
        <Image
          src="/images/global/mainFooter 51.png"
          fill
          alt="footer design"
          className="object-contain"
        />
      </div>
      <h2 className="font-belleza text-white text-4xl sm:text-5xl md:text-[60px] mt-4">
        Mandawa Design House
      </h2>
    </div>

    {/* Footer Info Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white">

      {/* Address + GSTIN */}
      <div className="flex flex-col gap-4">
        <div>
          <p className="underline font-belleza text-lg sm:text-xl md:text-2xl mb-[18px]">Address:</p>
          <p className="text-sm sm:text-base md:text-lg font-poppins mt-1">
            B-158, 1st Phase, RIICO Industrial<br />
            Area Manda, Chomu, 303702
          </p>
        </div>
        <div>
          <p className="underline font-belleza text-lg sm:text-xl md:text-2xl mb-[18px]">GSTIN:</p>
          <p className="text-sm sm:text-base md:text-lg font-poppins mt-1">
            08AAPCM1097H1Z2
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-4">
        <p className="underline font-belleza text-lg sm:text-xl md:text-2xl">Contact Us:</p>
        <div className="flex flex-col gap-1">
          <a href="tel:+919829823333" className="text-sm sm:text-base md:text-lg font-poppins">
            +91 9829823333
          </a>
          <a href="tel:+917014447678" className="text-sm sm:text-base md:text-lg font-poppins">
            +91 7014447678
          </a>
        </div>
      </div>

      {/* Connect Us */}
      <div className="flex flex-col gap-4 break-words">
        <p className="underline font-belleza text-lg sm:text-xl md:text-2xl">Connect Us:</p>
        <div className="flex flex-col gap-2 max-w-[330px] break-all font-poppins text-sm sm:text-base md:text-lg">
          <a href="https://mandawadesignhouse.com/" target="_blank" rel="noopener noreferrer">
            https://mandawadesignhouse.com/
          </a>
          <a
            href="https://www.linkedin.com/in/mandawadesignhouse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/mandawadesignhouse/
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
<FooterStrip/>
</>
  )
}

export default MainFooter
