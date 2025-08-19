import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterStrip from "../FooterStrip";

const Footer = () => {
  return (
    <>
<section
  className="py-[80px] px-4 bg-no-repeat bg-center bg-cover"
  style={{ backgroundImage: "url('/images/global/footer.png')" }}
>
  <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
    {/* Header Row */}
    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
      <h3 className="font-belleza text-white text-[22px] sm:text-[26px] md:text-[34px]">
        Mandawa Design House
      </h3>
      <div className="flex flex-col gap-[18px]">
        <h5 className="font-belleza text-white text-lg sm:text-xl md:text-2xl">
          Contact Us
        </h5>
        <div className="flex gap-4">
          <Image className="cursor-pointer" src={"/images/global/facebook.png"} width={24} height={24} alt="Facebook" />
          <Image className="cursor-pointer" src={"/images/global/insta.png"} width={24} height={24} alt="Instagram" />
          <Image className="cursor-pointer" src={"/images/global/linkedin.png"} width={24} height={24} alt="LinkedIn" />
          <Image className="cursor-pointer" src={"/images/global/youtube.png"} width={24} height={24} alt="YouTube" />
        </div>
      </div>
    </div>

    {/* Grid Section */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {/* Quick Links */}
      <div className="flex flex-col gap-[18px]">
        <p className="underline text-[18px] sm:text-xl md:text-2xl font-belleza text-white">
          Quick Links
        </p>
        <div className="flex flex-col gap-1">
          <Link href="#" className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white">About</Link>
          <Link href="#" className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white">Collection</Link>
          <Link href="#" className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white">Blog</Link>
          <Link href="#" className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white">Contact Us</Link>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col gap-[18px]">
        <p className="underline text-[18px] sm:text-xl md:text-2xl font-belleza text-white">
          Contact Us:
        </p>
        <div className="flex flex-col gap-1">
          <Link href="#" className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white">+91 9829823333</Link>
          <Link href="#" className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white">+91 7014447678</Link>
        </div>
      </div>

      {/* Connect Us */}
      <div className="flex flex-col gap-[18px]">
        <p className="underline text-[18px] sm:text-xl md:text-2xl font-belleza text-white">
          Connect Us:
        </p>
        <div className="flex flex-col gap-1 max-w-[330px] break-words">
          <Link href="#" className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white break-all">
            https://mandawadesignhouse.com/
          </Link>
          <Link href="#" className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white break-all">
            https://www.linkedin.com/in/mandawadesignhouse/
          </Link>
        </div>
      </div>

      {/* Address */}
      <div className="flex flex-col gap-[18px]">
        <p className="underline text-[18px] sm:text-xl md:text-2xl font-belleza text-white">
          Address:
        </p>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white">
          B-158, 1st Phase, RIICO Industrial Area Manda, Chomu, 303702
        </p>
        <p className="underline text-[18px] sm:text-xl md:text-2xl font-belleza text-white">
          GSTIN:
        </p>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-white">
          08AAPCM1097H1Z2
        </p>
      </div>
    </div>
  </div>
</section>


    <FooterStrip/>
    </>
  );
};

export default Footer;
