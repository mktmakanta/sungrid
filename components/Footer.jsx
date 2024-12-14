import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-900 text-white sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 xl:pr-8">
            <img
              className="w-auto h-20  "
              src="/icons/logo-white-text.svg"
              alt=""
            />

            <p className="text-base leading-relaxed text-gray-400 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <Link
              href="#"
              title=""
              className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Start Live Chat
            </Link>
          </div>

          <div className="col-span-2 grid grid-cols-2">
            <div className="">
              <p className="text-base font-semibold text-white">Quick Links</p>

              <div className="mt-6 space-y-5">
                <Link
                  href="/about"
                  title=""
                  className="flex text-sm text-gray-400 transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  About{" "}
                </Link>

                <Link
                  href="/service"
                  title=""
                  className="flex text-sm text-gray-400 transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Services{" "}
                </Link>

                <Link
                  href="/project"
                  title=""
                  className="flex text-sm text-gray-400 transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Projects{" "}
                </Link>

                <Link
                  href="/contact"
                  title=""
                  className="flex text-sm text-gray-400 transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Contact Us{" "}
                </Link>
              </div>
            </div>

            <div className="">
              <p className="text-base font-semibold text-white">Help</p>

              <div className="mt-6 space-y-4">
                <Link
                  href="/"
                  title=""
                  className="flex text-sm text-gray-400 transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Customer Support{" "}
                </Link>

                <Link
                  href="/"
                  title=""
                  className="flex text-sm text-gray-400 transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Terms & Conditions{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-6 lg:col-span-2">
            <p className="text-base font-semibold text-white">Address</p>

            <div className="mt-6 gap-5 md:grid grid-cols-2 space-y-5 max-w-xl">
              <div className="col-span-1 md:col-span-2 ">
                <h1 className="">Home Address</h1>
                <p className="text-slate-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  ullam, eum inventore perferendis vel ipsa culpa expedita
                  accusamus corrupti, itaque fugiat pariatur.
                </p>
              </div>
              <div className="col-span-1 md:col-span-2 ">
                <h1 className="">Head Office </h1>
                <p className="text-slate-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  ullam, eum inventore perferendis vel ipsa culpa expedita
                  accusamus corrupti, itaque fugiat pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-white" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-white">
            © Copyright {thisYear}, All Rights Reserved by Sungridsolutions
          </p>

          <div className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            <Link
              href="#"
              title=""
              className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-400 rounded-full w-7 h-7 focus:bg-blue-500 hover:text-white focus:text-white hover:bg-blue-500 hover:border-blue-500 focus:border-blue-500"
            >
              <FaTwitter />
            </Link>

            <Link
              href="#"
              title=""
              className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-400 rounded-full w-7 h-7 focus:bg-blue-500 hover:text-white focus:text-white hover:bg-blue-500 hover:border-blue-500 focus:border-blue-500"
            >
              <FaWhatsapp />
            </Link>

            <Link
              href="#"
              title=""
              className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-400 rounded-full w-7 h-7 focus:bg-blue-500 hover:text-white focus:text-white hover:bg-blue-500 hover:border-blue-500 focus:border-blue-500"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
