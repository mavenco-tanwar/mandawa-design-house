import React from "react";
import Button from "@/components/Global/Buttons";

const ContactForm = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        {/* Title */}
        <div className="text-center">
          <h3 className="font-belleza text-2xl sm:text-3xl md:text-4xl text-[#191919]">
            Contact Form
          </h3>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-8 w-full">
          {/* Inputs */}
          <div className="flex flex-col md:flex-row md:justify-between gap-[20px]">
            <div className="flex flex-col md:flex-row md:gap-6 gap-4 justify-between flex-1">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[56px] px-4 border border-[#EAEAEA] focus:outline-none focus:border-[#A3A3A3] placeholder:text-[#A3A3A3] placeholder:font-poppins"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[56px] px-4 border border-[#EAEAEA] focus:outline-none focus:border-[#A3A3A3] placeholder:text-[#A3A3A3] placeholder:font-poppins"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-[56px] px-4 border border-[#EAEAEA] focus:outline-none focus:border-[#A3A3A3] placeholder:text-[#A3A3A3] placeholder:font-poppins"
              />
            </div>
          </div>

          {/* Textarea */}
          <textarea
            rows="6"
            placeholder="Comment"
            className="w-full px-4 py-4 border border-[#EAEAEA] focus:outline-none focus:border-[#A3A3A3] placeholder:text-[#A3A3A3] placeholder:font-poppins resize-none"
          ></textarea>

          {/* Button */}
          <div className="flex justify-center">
            <div className="w-full max-w-[400px]">
              <Button text="Send" variant="Brown" styles={{ width: "100%" }} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
