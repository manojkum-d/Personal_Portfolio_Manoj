import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Spline from "@splinetool/react-spline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form
      fetch("https://getform.io/f/paygwgva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => {
        // Handle successful submission
        alert("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      });
    }
  };

  return (
    <div id="contact" className="w-full pt-7 lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl uppercase tracking-widest text-[#1E90FF]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className=" desktop-only h-[70vh] rounded-xl hover:scale-105 ease-in duration-300">
                <Spline
                  scene="https://prod.spline.design/HYSplE2T-pNK2Cu1/scene.splinecode"
                  className="rounded-xl"
                />
              </div>
              <div>
                <h2 className="py-2">Manoj Kumar D</h2>
                <p>BCA | MCA</p>
                <p className="py-4">
                  Feel free to reach out if you&apos;re looking for a developer,
                  have a question, or just want to connect.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/manoj-xd/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/manojkum-d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/manoj__xd/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsInstagram />
                    </div>
                  </a>
                  <a target="_blank" href="/Manoj_Kumar_Resume.pdf">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="grid grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <button
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="w-full p-4 text-gray-100 mt-4 bg-[#1E90FF] rounded-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#1E90FF]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
