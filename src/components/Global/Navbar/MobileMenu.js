import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/router";

function MobileMenu() {

  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };


  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <div className="block  md:hidden">
{isMenuOpen ? (<Icon icon="iconoir:cancel" width="26" height="26" className="block md:hidden text-white" onClick={toggleMenu}    />) : (<Icon icon="mynaui:menu" width="24" height="24" className="block md:hidden text-white"  onClick={toggleMenu} />)}
      {isMenuOpen && (
        <div className=" py-[40px] absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white shadow-md md:hidden flex justify-center  px-5">
          <div className="flex flex-col gap-16 w-full">
            <Link
              href="/"
              className="text-[#42393B] text-2xl font-medium capitalize flex items-center hover:text-black px-4 w-full"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#42393B] text-2xl font-medium capitalize flex items-center hover:text-black px-4 w-full"
            >
              About
            </Link>

            <Link
              href="/collection"
              className="text-[#42393B] text-2xl font-medium capitalize flex items-center hover:text-black px-4 w-full"
            >
             Collection
            </Link>

            {/* <Link
              href="/blog"
              className="text-[#42393B] text-2xl font-medium capitalize flex items-center hover:text-black px-4 w-full"
            >
              Blog
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
