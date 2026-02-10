import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white text-[#2F2A28]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-7 md:py-14">
        {/* Top Divider */}
        <div className="border-t border-[#D8D5D0] mb-10" />

        {/* Top Text Row */}
        <div className="text-center md:text-[18px] tracking-widest uppercase text-[14px] mb-6 md:mb-12">
          Handcrafted Furniture &nbsp;|&nbsp; Custom Orders &nbsp;|&nbsp; Worldwide Delivery
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-5 md:gap-10 mb-6 md:mb-12">
          <Link
            href="/collection"
            className="uppercase tracking-widest  text-[12px] md:text-[16px]  hover:opacity-60 transition"
          >
            Collection
          </Link>

          <Link
            href="/contact-us"
            className="uppercase tracking-widest  text-[12px] md:text-[16px]  hover:opacity-60 transition"
          >
            Contact Us
          </Link>

          <Link
            href="/about"
            className="uppercase tracking-widest  text-[12px] md:text-[16px]  hover:opacity-60 transition"
          >
            About Us
          </Link>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6 md:gap-10 mb-6 md:mb-12">
          {/* Left */}
          <p className="text-center md:text-left text-[12px]">
            © {currentYear}, Mandawa Design House. All rights reserved.
          </p>

          {/* Center */}
          <p className="text-center uppercase tracking-widest text-[12px]">
            Made in India
          </p>

          {/* Right - Social Icons */}
          <div className="flex justify-center md:justify-center gap-6">
                {/* <Link href="https://www.linkedin.com/in/mandawadesignhouse/"><Image className="cursor-pointer" src={"/images/global/linkedin.svg"} width={24} height={24} alt="LinkedIn" /></Link> */}
                <Link href="https://www.instagram.com/mandawa_design_house?igsh=MzR5OHljMDNkYjR4"><Image className="cursor-pointer" src={"/images/homePageImages/instagram.png"} width={16} height={16} alt="Instagram" /></Link>
            <Link href="https://pin.it/4fhXXpTuk"><Image className="cursor-pointer" src={"/images/homePageImages/pinterest.png"} width={16} height={16} alt="pinterest" /></Link>
            <Link href="https://wa.me/919829823333"><Image className="cursor-pointer" src={"/images/homePageImages/whatsapp.png"} width={16} height={16} alt="whatsapp" /></Link>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#D8D5D0] mt-10" />
      </div>
    </footer>
  );
};

export default Footer;
