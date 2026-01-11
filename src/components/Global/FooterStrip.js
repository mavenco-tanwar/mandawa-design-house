import React from "react";

const FooterStrip = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-[20px] px-4 bg-black">
      <div className="max-w-[1280px] mx-auto flex justify-center items-center">
        <div className="text-white font-poppins text-center text-sm sm:text-base px-2">
          Copyright © {currentYear} Mandawa Design House. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default FooterStrip;
