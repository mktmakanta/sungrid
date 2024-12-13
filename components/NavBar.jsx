"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        {/* lg+ */}
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
            isScrolled ? "text-black bg-white shadow-md " : "bg-transparent "
          }`}
        >
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 p-1  md:p-3">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <Link href="/" className="text-5xl font-bold flex items-center">
                  <img
                    src="/icons/logo-text.svg"
                    alt="Logo"
                    className="w-28 md:w-40 mr-2"
                  />
                </Link>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:ring-2 hover:ring-gray-600 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }
                  `}
              >
                {isOpen ? (
                  <X className={`${isOpen ? "text-gray-800" : "text-white"}`} />
                ) : (
                  <svg
                    // className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 ${
                      isScrolled ? "text-gray-800" : "text-white"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>

              <div
                className={`hidden lg:flex lg:items-center lg:space-x-10 font-semibold ${
                  isScrolled ? "text-black " : "text-white"
                }`}
              >
                <Link
                  href="/"
                  className={`desktop-links  ${
                    pathname === "/" ? "isActiveDesktop" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`desktop-links ${
                    pathname === "/about" ? "isActiveDesktop" : ""
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className={`desktop-links ${
                    pathname === "/services" ? "isActiveDesktop" : ""
                  }`}
                >
                  Service
                </Link>
                <Link
                  href="/projects"
                  className={`desktop-links ${
                    pathname === "/projects" ? "isActiveDesktop" : ""
                  }`}
                >
                  Project
                </Link>
              </div>

              <Link
                href="/contact"
                title=""
                className="group contact-us items-center justify-center hidden px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent gap-1  rounded-full lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                <span className="">Contact Us</span>{" "}
                <ArrowRight
                  className="size-5 group-hover:translate-x-1
                "
                />
              </Link>
            </nav>
          </div>
        </div>

        {/* xs to lg */}
        {isOpen && (
          <div
            className=" lg:hidden bg-gray-50 z-50 relative top-16"
            key="modal"
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col px-6 py-4 text-lg space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-links ${
                  pathname === "/" ? "isActiveMobileLink" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-links ${
                  pathname === "/about" ? "isActiveMobileLink" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-links ${
                  pathname === "/services" ? "isActiveMobileLink" : ""
                }`}
              >
                Service
              </Link>

              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-links ${
                  pathname === "/projects" ? "isActiveMobileLink" : ""
                }`}
              >
                Project
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-links ${
                  pathname === "/contact" ? "isActiveMobileLink" : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
