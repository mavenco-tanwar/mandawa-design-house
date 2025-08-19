import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactMap = () => {
  return (
    <section className="py-[80px] px-4 bg-[#F6F4EE]">
      <div className="max-w-[1280px] mx-auto gap-[40px] ">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(300px,760px)_1fr] gap-[30px]">
          {/* Map Section */}
          <div className="relative h-[300px] md:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.1776981932426!2d75.52899947490441!3d27.182151248460755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cf98c0182b7dd%3A0x67c0594f31e5a9e1!2sMandawa%20Design%20House%20pvt.ltd.!5e0!3m2!1sen!2sin!4v1754664682973!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border border-gray-300"
            />
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-[40px]">
            {/* Phone */}
            <div className="flex gap-3.5 items-start">
              <div className="flex-shrink-0 w-[40px] h-[40px]">
                <Image
                  src={"/images/global/phone.png"}
                  width={40}
                  height={40}
                  alt="phone"
                />
              </div>
              <div>
                <h4 className="text-[24px] md:text-[34px] mb-2 font-belleza text-[#6E2F1B]">
                  Phone
                </h4>
                <p className="text-lg md:text-2xl font-poppins text-[#666666]">
                  +91 9829823333
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="flex gap-3.5 items-start">
              <div className="flex-shrink-0 w-[40px] h-[40px]">
                <Image
                  src={"/images/global/web.png"}
                  width={40}
                  height={40}
                  alt="website"
                />
              </div>
              <div>
                <h4 className="text-[24px] md:text-[34px] mb-2 font-belleza text-[#6E2F1B]">
                  Website
                </h4>
                <Link
                  href={"#"}
                  className="text-lg md:text-2xl font-poppins text-[#666666] break-all"
                >
                  https://mandawadesignhouse.com/
                </Link>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-3.5 items-start">
              <div className="flex-shrink-0 w-[40px] h-[40px]">
                <Image
                  src={"/images/global/address.png"}
                  width={40}
                  height={40}
                  alt="address"
                />
              </div>
              <div>
                <h4 className="text-[24px] md:text-[34px] mb-2 font-belleza text-[#6E2F1B]">
                  Address
                </h4>
                <p className="text-lg md:text-2xl font-poppins text-[#666666]">
                  B-158, 1st Phase, RIICO Industrial Area Manda, Chomu, 303702
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
