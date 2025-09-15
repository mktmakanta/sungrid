"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation"; 
import { LoaderCircle } from "lucide-react";
import SuccessIcon from "./SuccessIcon";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
    setLoading(true);

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setIsModalOpen(true);
        setLoading(false);
      },
      (error) => {
        console.error("FAILED...", error);
        setStatus("Failed to send the message. Please try again.");
        setIsModalOpen(true);
        setLoading(false);
      }
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  return (
    <section className="py-5 bg-slate-100 sm:py-10 lg:py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            Have Questions? We're Just a Message Away!.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-8 sm:mt-12">
          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-5 py-7 sm:p-10">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Your name
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="block w-full px-3 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="block w-full px-3 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Phone number
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number (Optional)"
                        className="block w-full px-3 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Company name
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name (Optional)"
                        className="block w-full px-3 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-base font-medium text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="block w-full px-3 py-3 text-black placeholder-gray-500  transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex items-center justify-center w-full px-3 py-3 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 disabled:bg-gray-400 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 `}
                    >
                      {loading ? (
                        <>
                          <LoaderCircle className="animate-spin mr-2" />
                          loading...
                        </>
                      ) : (
                        "Send"
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {status && (
                <p className="mt-4 text-center text-sm text-gray-600">
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for error or success */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md ">
            <div className="flex justify-center my-4">
              {" "}
              <SuccessIcon />
            </div>

            <h3 className="text-lg font-semibold text-gray-900"> {status}</h3>
            <p className="text-slate-500 mt-2 text-sm">
              Thank you for reaching out to Sungrid Solutions! Your message has
              been received, and our team will get back to you shortly. We
              appreciate your interest in our services.
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-6 py-2 text-white w-full bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactPage;
