import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white text-[#2F2A28]">
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        {/* Top Divider */}
        <div className="border-t border-[#D8D5D0] mb-10" />

        {/* Top Text Row */}
        <div className="text-center text-xl tracking-widest uppercase font-serif mb-12">
          Handcrafted Furniture &nbsp;|&nbsp; Custom Orders &nbsp;|&nbsp; Worldwide Delivery
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10 mb-12">
          <Link
            href="/collection"
            className="uppercase tracking-widest text-xl font-serif hover:opacity-60 transition"
          >
            Collection
          </Link>

          <Link
            href="/contact"
            className="uppercase tracking-widest text-xl font-serif hover:opacity-60 transition"
          >
            Contact Us
          </Link>

          <Link
            href="/about"
            className="uppercase tracking-widest text-xl font-serif hover:opacity-60 transition"
          >
            About Us
          </Link>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-md font-serif">
          {/* Left */}
          <p className="text-center md:text-left">
            © {currentYear}, Mandawa Design House. All rights reserved.
          </p>

          {/* Center */}
          <p className="text-center uppercase tracking-widest text-md">
            Made in India
          </p>

          {/* Right - Social Icons */}
          <div className="flex justify-center md:justify-end gap-6">
                <Link href="https://www.linkedin.com/in/mandawadesignhouse/"><Image className="cursor-pointer" src={"/images/global/linkedin.svg"} width={24} height={24} alt="LinkedIn" /></Link>
                <Link href="#"><Image className="cursor-pointer" src={"/images/homePageImages/instagram.png"} width={24} height={24} alt="Instagram" /></Link>
            <Link href="#"><Image className="cursor-pointer" src={"/images/homePageImages/pinterest.png"} width={24} height={24} alt="pinterest" /></Link>
            <Link href="#"><Image className="cursor-pointer" src={"/images/homePageImages/whatsapp.png"} width={24} height={24} alt="whatsapp" /></Link>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#D8D5D0] mt-10" />
      </div>
    </footer>
  );
};

export default Footer;
