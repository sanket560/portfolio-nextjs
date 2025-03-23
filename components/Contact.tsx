"use client";
import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import MagicButton from "./ui/MagicButton";
import toast from "react-hot-toast";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api", {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      const responseData = await response.json();
      toast.success(responseData["message"]);
    } catch (err) {
      console.error(err);
      toast.error("Error, please try resubmitting the form");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="md:mt-10 mt-12 mb-20 z-50" id="contact">
      <div className="flex my-16 justify-center lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl md:text-2xl rounded-md">
            Contact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <p className="text-xl pb-10 text-center text-[#d3d8e8]">
        If you have any questions or concerns, please don&apos;t hesitate to contact
        me.
      </p>
      <div className="max-w-3xl mx-auto text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSendMail}>
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#1a1443] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#1a1443] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              required={true}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#1a1443] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              name="message"
              required={true}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <MagicButton
              title="Send Message"
              icon={<TbMailForward />}
              position="left"
              type="submit"
              loading={submitting}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;