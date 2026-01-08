import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const NavLinks = () => {
  const router = useRouter();
  return (
    <div className="hidden md:flex">
      <Link href="/" className={clsx(
          "text-[#42393B] font-normal hover:text-black md:p-[8px_16px]",
          router.pathname === "/" && "border-b border-[#191919]"
        )}>
        Home
      </Link>
      {/* <Link
        href="/about"
        className={clsx(
          "text-[#42393B] font-normal hover:text-black md:p-[8px_16px]",
          router.pathname === "/about" && "border-b border-[#191919]"
        )}
      >
        About
      </Link> */}
      <Link
        href="/collection"
        className={clsx(
          "text-[#42393B] font-normal hover:text-black md:p-[8px_16px]",
          router.pathname === "/collection" && "border-b border-[#191919]"
        )}
      >
        Collection
      </Link>

      {/* <Link
        href="/blog"
        className={clsx(
          "text-[#42393B] font-normal hover:text-black md:p-[8px_16px]",
          router.pathname === "/blog" && "border-b border-[#191919]"
        )}
      >
        Blog
      </Link> */}
    </div>
  );
};

export default NavLinks;
