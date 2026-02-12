import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white text-[#2F2A28]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-7 md:py-10">
        {/* Top Divider */}
        <div className="border-t border-[#D8D5D0] mb-5 md:mb-10" />

        {/* Top Text Row */}
        <div className="text-center md:text-[18px] tracking-widest uppercase text-[14px] mb-3 md:mb-6">
          <span className="block md:inline-block">Handcrafted Furniture</span>
          <span className="hidden md:inline-block mx-16">|</span>
          <span className="block md:inline-block">Custom Orders</span>
          <span className="hidden md:inline-block mx-16">|</span>
          <span className="md:inline-block">Worldwide Delivery</span>
        </div>

        {/* Navigation */}
        <div className="tracking-widest uppercase text-[12px] md:text-[16px] text-center  hover:opacity-60 transition mb-3 md:mb-6">
          <Link
            href="/collection"
            className="block md:inline-block md:relative md:left-[-225px]"
          >
            Collection
          </Link>
          <Link
            href="/contact-us"
            className="block md:inline-block"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="block md:inline-block md:relative md:right-[-225px]"
          >
            About Us
          </Link>
        </div>

        {/* Bottom Row */}
        <div className="text-[12px] text-center">
          {/* Left */}
          <p className="block md:inline-block md:relative md:left-[-236px]">
            © {currentYear}, Mandawa Design House. All rights reserved.
          </p>

          {/* Center */}
          <p className="text-center my-2 md:my-0 uppercase tracking-widest block md:inline-block text-[12px] md:relative md:left-[-90px]">
            Made in India
          </p>

          {/* Right - Social Icons */}
          <div className="inline-flex justify-center md:justify-center gap-6 md:relative md:right-[-140px]">
                {/* <Link href="https://www.linkedin.com/in/mandawadesignhouse/"><Image className="cursor-pointer" src={"/images/global/linkedin.svg"} width={24} height={24} alt="LinkedIn" /></Link> */}
                <Link href="https://www.instagram.com/mandawa_design_house?igsh=MzR5OHljMDNkYjR4"><Image className="cursor-pointer" src={"/images/homePageImages/instagram.png"} width={16} height={16} alt="Instagram" /></Link>
            <Link href="https://pin.it/4fhXXpTuk"><Image className="cursor-pointer" src={"/images/homePageImages/pinterest.png"} width={16} height={16} alt="pinterest" /></Link>
            <Link href="https://wa.me/919829823333"><Image className="cursor-pointer" src={"/images/homePageImages/whatsapp.png"} width={16} height={16} alt="whatsapp" /></Link>
          </div>
        </div>

        {/* Bottom Divider */}
        {/* <div className="border-t border-[#D8D5D0] mt-10" /> */}
      </div>
    </footer>
  );
};

export default Footer;
