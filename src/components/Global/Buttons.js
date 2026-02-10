import React from "react";
import clsx from "clsx";

const Button = ({ text, onClick, variant = "default" , styles}) => {
  return (
    <button
    style={styles}
      onClick={onClick}
      className={clsx(
        "md:px-8 px-4 md:py-3 py-2 transition font-medium w-fit  cursor-pointer ",
        {
          "bg-[#191919] text-[#FAFAFA] hover:bg-[#191919] hover:opacity-80": variant === "Brown",
          "bg-white text-[#1D2130] hover:bg-[#d56e20] hover:text-[#FAFAFA] relative right-2":
            variant === "whiteSubscribe",
          "bg-white text-[#1D2130] hover:bg-slate-600 hover:text-[#FFD12D]":
            variant === "white",
          "bg-[#FFD12D] rounded-[8px] p-4 font-normal  text-black hover:bg-gray-800 hover:text-white":
            variant === "yellowSubmit",
          "bg-[#fff] text-[#FFD12D] border border-[#FFD12D] hover:bg-[#FFD12D] hover:text-black":
            variant === "yellowOutline",
          "bg-[#F2C94C] text-black hover:bg-gray-800 hover:text-white":
            variant === "yellow",
        }
      )}
    >
      {text}
    </button>
  );
};

export default Button;
