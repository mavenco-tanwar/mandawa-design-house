import Link from "next/link";
import Button from "@/components/Global/Buttons";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="shadow-md sticky top-0 z-[2]  bg-white " >
    <nav className="max-w-[1400px] m-auto font-poppins">
      <div className="md:mx-[40px] mx-5 py-2 sm:py-3 lg:py-[14px]">
        <div className="flex justify-between h-16 items-center">
            <MobileMenu />
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center">
                <Image width={136} height={32} src="/images/global/image VM.png" alt="Mandawa Design House" className="h-auto w-auto" />
              </div>
            </Link>
          </div>
          <NavLinks />
          <div className="flex justify-center md:gap-0 gap-4 items-center">
            <Link href="/contact-us">
              <Button text="Contact Us" className="px-2" variant="Brown"/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
