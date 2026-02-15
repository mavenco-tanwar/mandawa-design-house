import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactMap = () => {
  return (
    <section className="py-10 md:py-20 px-4 pb-8 mx-auto flex">
      <div className="mx-auto gap-[40px]">
        {/* <div className="grid grid-cols-1 xl:grid-cols-[minmax(300px,760px)_1fr] gap-[30px]"> */}
          {/* <div className="relative h-[300px] md:h-[480px] shadow-[0_4px_8px_#0000004d]  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.1776981932426!2d75.52899947490441!3d27.182151248460755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cf98c0182b7dd%3A0x67c0594f31e5a9e1!2sMandawa%20Design%20House%20pvt.ltd.!5e0!3m2!1sen!2sin!4v1754664682973!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="  border border-gray-300"
            />
          </div> */}

          <div className="flex flex-col md:flex-row gap-[40px]">
            <div className="flex gap-3.5 md:w-[220px] items-start">
              <div className="flex-shrink-0 w-[45px] h-[45px] mt-2">
                <Image
                  src={"/images/global/phone.svg"}
                  width={45}
                  height={45}
                  alt="phone"
                />
              </div>
              <div className="md:w-[33vw]">
                <h4 className="uppercase tracking-wide text-[18px] md:text-[22px]  text-[#000]">
                  Phone
                </h4>
                <Link href="tel:+919829823333" className="tracking-widest text-[12px] md:text-[16px] hover:opacity-60 transition">
                  +91 9829823333
                </Link>
              </div>
            </div>

            <div className="flex gap-3.5 items-start md:w-[380px]">
              <div className="flex-shrink-0 w-[45px] h-[45px] mt-2">
                <Image
                  src={"/images/global/web.svg"}
                  width={45}
                  height={45}
                  alt="website"
                />
              </div>
              <div>
                <h4 className="uppercase tracking-wide text-[18px] md:text-[22px]  text-[#000]">
                  Business Email
                </h4>
                <Link
                  href="mailto:mandawadesignhouse@gmail.com"
                  className="text-lg md:text-xl font-poppins text-[#42393B] break-all"
                >
                  mandawadesignhouse@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <div className="flex-shrink-0 w-[45px] h-[45px] mt-2">
                <Image
                  src={"/images/global/address.svg"}
                  width={45}
                  height={45}
                  alt="address"
                />
              </div>
              <div>
                <h4 className="uppercase tracking-wide text-[18px] md:text-[22px]  text-[#000]">
                  Address
                </h4>
                <p className="tracking-widest text-[12px] md:text-[16px] hover:opacity-60 transition">
                  B-158, 1st Phase, RIICO Industrial Area Manda, Chomu, 303702
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default ContactMap;
