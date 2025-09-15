"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  X } from "lucide-react";
import ButtonContact from "./ButtonContact";
import Image from "next/image";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header>
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
            isScrolled ? "text-black bg-white shadow-md " : "bg-transparent "
          }`}
        >
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 p-1  md:p-3">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <Link href="/" className="text-5xl font-bold flex items-center">
                  <Image
                    src="/icons/logo-text.svg"
                    alt="sungrid logo"
                    width={60}
                    height={40}
                    className="w-28 md:w-40 mr-2"
                  />
                </Link>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:ring-2 hover:ring-gray-600 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {isOpen ? (
                  <X className={`${isOpen ? "text-gray-800" : "text-white"}`} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-8 h-8 ${
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

              <div className="hidden lg:flex">
                <ButtonContact />
              </div>
            </nav>
          </div>
        </div>

        {/* Overlay when mobile nav is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* xs to lg - Make this fixed */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full bg-gray-50 z-50 p-4"
            key="modal"
          >
            <div className=" flex justify-end p-5 mb-4 ">
              {" "}
              <X
                onClick={() => setIsOpen(false)}
                className={`size-8 ring-2 ring-slate-300 rounded-lg ${
                  isOpen ? "text-gray-800" : "text-white"
                }`}
              />
            </div>
            <div className="flex flex-col text-lg space-y-4">
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
