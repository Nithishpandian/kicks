"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import kicks_logo from "../../app/assests/images/common/kicks_logo.png";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow style
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="md:mx-10 bg-white py-5 px-5 rounded-xl font-bold text-sm flex items-center justify-between gap-5 relative z-20 ">
      <div className="hidden md:flex items-center gap-7">
        <Link href={"#"}>New Drops 🔥</Link>
        <Link href={"#"} className="flex items-center gap-1">
          <p>Men</p> <TiArrowSortedDown />
        </Link>
        <Link href={"#"} className="flex items-center gap-1">
          <p>Women</p> <TiArrowSortedDown />
        </Link>
      </div>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex md:hidden cursor-pointer w-fit h-fit z-50"
      >
        {isMenuOpen ? (
          <IoMdClose className="text-3xl text-stone-800" />
        ) : (
          <IoIosMenu className="text-3xl text-stone-800" />
        )}
      </div>
      <div>
        <Image
          className="w-20 sm:w-28 md:w-40"
          src={kicks_logo}
          alt="Kicks_logo"
        />
      </div>
      <div className="flex items-center gap-7">
        <IoSearch className="text-lg hidden md:flex" />
        <FaUser />
        <div className="px-2 py-1 text-xs rounded-full bg-[#FFA52F]">0</div>
      </div>
      {isMenuOpen && (
        <div
          className={`md:hidden fixed top-16 left-0 w-full h-full bg-[#E7E7E3] shadow-lg z-10 transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "transform translate-y-0 opacity-100"
              : "transform -translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-between items-stretch h-full -mt-16 py-3 px-6">
            <div className=" mt-16 flex flex-col">
              <Link
                href={"#"}
                className=" text-2xl font-bold py-3 border-b border-b-stone-400"
              >
                HOME
              </Link>
              <Link
                href={"#"}
                className=" text-2xl font-bold py-3 border-b border-b-stone-400"
              >
                T-SHIRT
              </Link>
              <Link
                href={"#"}
                className=" text-2xl font-bold py-3 border-b border-b-stone-400"
              >
                CUSTOMIZE OPTION
              </Link>
              <Link
                href={"#"}
                className="text-2xl font-bold py-3 border-b border-b-stone-400"
              >
                <div
                  onClick={() => setShowOptions(!showOptions)}
                  className=" flex items-center justify-between w-full "
                >
                  <span>LEVEL</span>
                  {showOptions ? (
                    <IoIosArrowUp className=" text-xl text-stone-700" />
                  ) : (
                    <IoIosArrowDown className=" text-xl text-stone-700" />
                  )}
                </div>
                {showOptions && (
                  <div className=" text-base py-1.5 pl-10 font-medium flex flex-col gap-2">
                    <h2>Rare</h2>
                    <h2>Conman</h2>
                    <h2>Epic</h2>
                    <h2>Legendary</h2>
                    <h2>Only one</h2>
                  </div>
                )}
              </Link>
              <Link
                href={"#"}
                className=" text-2xl font-bold py-3 border-b border-b-stone-400"
              >
                REFER
              </Link>
              <Link
                href={"#"}
                className=" text-2xl font-bold py-3 border-b border-b-stone-400"
              >
                YOUR ORDER
              </Link>
            </div>
            <div className=" flex flex-col gap-6">
              <div className=" flex flex-col gap-1.5">
                <h1 className=" text-[#FF0000] text-lg font-bold">Company</h1>
                <div className=" font-semibold flex items-center justify-around">
                  <Link href={"#"}>About</Link>
                  <Link href={"#"}>contact</Link>
                  <Link href={"#"}>Blogs</Link>
                </div>
              </div>
              <div className=" flex items-center justify-between gap-2">
                <h1 className=" text-lg font-bold">Follow us</h1>
                <FaFacebook className=" text-xl text-[#FF0000]" />
                <FaTwitter className=" text-xl text-[#FF0000]" />
                <FaInstagram className=" text-xl text-[#FF0000]" />
                <FaTiktok className=" text-xl text-[#FF0000]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
