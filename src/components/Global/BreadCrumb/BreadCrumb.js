import Link from "next/link";

const BreadCrumb = ({ category, productTitle }) => {
  return (
    <nav className="max-w-[1280px] mx-auto py-10 px-4">
      <span className="text-[#42393B] font-poppins text-[14px]">
        <Link className="mr-[6px]" href="/">
          Home
        </Link>
      </span>

      <span className="text-[#42393B] font-poppins text-[14px]">
        {"/"}
        <Link className="mx-[6px]" href="/collection">
          Collection
        </Link>
      </span>

      {category && (
        <span className="text-[#42393B] font-poppins text-[14px]">
          {"/"}
          <Link className="mx-[6px]" href={`/collection/${category.id}`}>
            {category.name}
          </Link>
        </span>
      )}

      {productTitle && (
        <span className="text-[#42393B] font-poppins text-[14px]">
          {"/"}
          <span className="ml-[6px] capitalize"><b>{productTitle}</b></span>
        </span>
      )}
    </nav>
  );
};

export default BreadCrumb;
