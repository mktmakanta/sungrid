import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-white sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 xl:pr-8">
            <Image
              className="w-auto h-20  "
              src="/icons/logo-white-text.svg"
              alt="footer-logo"
              width={70}
              height={50}
            />

            <p className="text-base leading-relaxed text-gray-400 mt-7">
              Innovating sustainable energy systems and empowering communities
              with reliable, eco-friendly power solutions."
            </p>

            <Link
              href="https://wa.me/2348140818850"
              title="whatsapp"
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
                  href="/services"
                  title=""
                  className="flex text-sm text-gray-400 transition-all duration-200 hover:text-blue-500 focus:text-blue-500"
                >
                  {" "}
                  Services{" "}
                </Link>

                <Link
                  href="/projects"
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
            <p className="text-base font-semibold text-white">Contacts</p>

            <div className="mt-6 gap-5 md:grid grid-cols-2 space-y-4 md:space-y-2 max-w-xl">
              <div className="col-span-1 md:col-span-2 ">
                <h1 className="">Email </h1>
                <p className="text-slate-400 text-sm">Omisholajosh@gmail.com</p>
              </div>
              <div className="col-span-1 md:col-span-2 ">
                <h1 className="">Telephone </h1>
                <div className="text-slate-400 text-sm mt-2 space-y-1">
                  <p>+234 814 081 8850</p>
                  <p>+234 802 417 3174</p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 ">
                <h1 className="">Head Office </h1>
                <p className="text-slate-400 text-sm">
                  Opposite Federal University of Technology Minna, Niger State,
                  Nigeria.
                </p>
              </div>
              <div className="col-span-1 md:col-span-2 ">
                <h1 className="">Branch Office </h1>
                <p className="text-slate-400 text-sm">
                  Beside Micheal Imodo, Olunlade Quarters, Ifelodun LGA. Illorin
                  , Kwara State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-white" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-white">
            © Copyright{" "}
            {(() => {
              const currentYear = new Date().getFullYear(); // Store the year in a variable
              return currentYear === 2020
                ? "2020"
                : currentYear === 2021
                ? "2021"
                : currentYear === 2022
                ? "2022"
                : currentYear === 2023
                ? "2023"
                : currentYear === 2024
                ? "2024"
                : currentYear === 2025
                ? "2025"
                : currentYear === 2026
                ? "2026"
                : currentYear === 2027
                ? "2027"
                : currentYear === 2028
                ? "2028"
                : currentYear === 2029
                ? "2029"
                : currentYear === 2030
                ? "2030"
                : "Unknown year";
            })()}
            , All Rights Reserved by Sungridsolutions
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
              href="https://wa.me/2348140818850"
              title=""
              className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-400 rounded-full w-7 h-7 focus:bg-blue-500 hover:text-white focus:text-white hover:bg-blue-500 hover:border-blue-500 focus:border-blue-500"
            >
              <FaWhatsapp />
            </Link>

            <Link
              href="https://www.linkedin.com/in/sungrid-solutions-71a2a2209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
