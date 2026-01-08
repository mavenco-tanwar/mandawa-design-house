"use client";

import React, { useState } from "react";
import Button from "@/components/Global/Buttons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10–15 digits";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact-requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else {
        setMessage("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h3 className="font-belleza text-2xl sm:text-3xl md:text-4xl text-[#42393B]">
            Contact Form
          </h3>
        </div>

        <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:justify-between gap-[20px]">
            <div className="flex flex-col md:flex-row md:gap-6 gap-4 justify-between flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full h-[56px] px-4 border border-[#EAEAEA] focus:outline-none focus:border-[#A3A3A3] placeholder:text-[#A3A3A3] placeholder:font-poppins"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full h-[56px] px-4 border border-[#EAEAEA] focus:outline-none focus:border-[#A3A3A3] placeholder:text-[#A3A3A3] placeholder:font-poppins"
              />
              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  pattern="[0-9]{10,15}"
                  className={`w-full h-[56px] px-4 border ${errors.phone ? "border-red-500" : "border-[#EAEAEA]"
                    } focus:outline-none focus:border-[#A3A3A3] placeholder:text-[#A3A3A3] placeholder:font-poppins`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            required
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-4 py-4 border border-[#EAEAEA] focus:outline-none focus:border-[#A3A3A3] placeholder:text-[#A3A3A3] placeholder:font-poppins resize-none"
          ></textarea>

          <div className="flex justify-center">
            <div className="w-full max-w-[400px]">
              <Button
                text={loading ? "Sending..." : "Send"}
                variant="Brown"
                styles={{ width: "100%" }}
                disabled={loading}
              />
            </div>
          </div>

          {message && (
            <p
              className={`text-center text-sm mt-4`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
