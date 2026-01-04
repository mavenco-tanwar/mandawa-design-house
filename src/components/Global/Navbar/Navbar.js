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
          <div className="flex-shrink-0 md:w-[175.06px] w-auto">
            <Link href="/">
              <div className="flex items-center gap-4">
                {/* <Image width={136} height={32} src="/images/global/image-VM.png" alt="Mandawa Design House" className="h-auto w-auto" /> */}
                <Image 
  width={136} 
  height={32} 
  src="/images/global/image-VM.png" 
  alt="Mandawa Design House" 
  className="h-auto w-auto max-md:w-24 max-md:h-30 md:w-[136px] md:h-[160px]" 
/>
                {/* <p className="md:block hidden">Mandawa Design House</p> */}
              </div>
            </Link>
          </div>
          <NavLinks />
          <div className="flex justify-end md:gap-0 gap-4 items-center md:w-[175.06px]">
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
