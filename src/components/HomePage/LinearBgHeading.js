import React from "react";

const LinearBgHeading = ({text}) => {
  return (
    <div
      className="py-[34px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/images/global/linearHeadingBG.png') " }}
    >
      <div className="flex justify-center">
        <h2 className="text-white font-belleza text-3xl md:text-5xl lg:text-6xl text-center">{text}</h2>
      </div>
    </div>
  );
};

export default LinearBgHeading;
