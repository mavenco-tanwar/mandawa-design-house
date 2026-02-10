"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Global/Buttons";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll is beyond 90vh instead of full window height
      const isBeyondHero = window.scrollY > window.innerHeight * 0.85;
      setScrolled(isBeyondHero);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-[20] transition-all duration-300
        ${scrolled ? "bg-white text-black" : "bg-white"}
      `}
    >
      <nav className="m-auto font-poppins">
        <div className="md:mx-[0px] mx-5 py-2 sm:py-3 lg:py-[0px]">

          {/* MOBILE (unchanged) */}
          <div className="flex justify-between h-16 items-center md:hidden">
            <MobileMenu />

            <Link href="/">
              <Image
                width={136}
                height={32}
                src="/images/homePageImages/mandawaLogo.png"
                alt="Mandawa Design House"
                className="w-24 h-auto"
              />
            </Link>

            <Link href="/contact-us">
              <Button text="Contact Us" className="px-2" variant="Brown" />
            </Link>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex flex-col items-center">

            {/* LOGO ROW */}
            <div className="flex items-center justify-center h-24">
              <Link href="/">
                <Image
                  src="/images/homePageImages/mandawaLogo.png"
                  alt="Mandawa Design House"
                  width={150}
                  height={100}
                  className="object-contain w-[135px]"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 h-10 border-t w-full border-gray-200">
              <Link href="/" className="nav-link">HOME</Link>
              <Link href="/collection" className="nav-link">COLLECTION</Link>
              <Link href="/contact-us" className="nav-link">CONTACT US</Link>
              <Link href="/about" className="nav-link">ABOUT US</Link>
            </div>

          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
