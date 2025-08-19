import Link from "next/link";

import { useRouter } from "next/router";
import React from "react";

const BreadCrumb = () => {
  const router = useRouter();

  const pathName = router.asPath;

  const paths = pathName.split("/").filter((x) => x);

  return (
    <nav className="max-w-[1280px] mx-auto py-10 px-4">
      <span className="text-[#666666] font-poppins text-[14px] ">
        <Link className="mr-[6px]" href="/">
          Home
        </Link>
      </span>
      {paths.map((segment, index) => {
        const href = "/" + paths.slice(0, index + 1).join("/");
        return (
          <span className="text-[#666666] font-poppins text-[14px]" key={href}>
            {"/"}
            <Link className="ml-[6px]" href={href}>
              {" "}
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default BreadCrumb;