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
        ${scrolled ? "bg-black/90 text-white" : "bg-black/40"}
      `}
    >
      <nav className="max-w-[1400px] m-auto font-poppins">
        <div className="md:mx-[40px] mx-5 py-2 sm:py-3 lg:py-[14px]">

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
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-20">

            {/* LEFT LINKS */}
            <div className="flex justify-end gap-20 pr-20">
              <Link href="/" className="nav-link">HOME</Link>
              <Link href="/collection" className="nav-link">COLLECTION</Link>
            </div>
          <Link href="/" className="flex justify-center">
            <Image
              src="/images/homePageImages/mandawaLogo.png"
              alt="Mandawa Design House"
              width={150}
              height={100}
              className="object-contain w-[135px]"
            />
          </Link>

            {/* RIGHT LINKS */}
            <div className="flex justify-start gap-20 pl-20">
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
