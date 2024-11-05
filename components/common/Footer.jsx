import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import kicks_logo_white from "../../app/assests/images/common/kicks_logo_white.png";
import kicks_logo_footer from "../../app/assests/images/common/kicks_logo_footer.png";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className=" rounded-3xl mx-4 sm:mx-6 md:mx-7 lg:mx-10 xl:mx-16">
        <div className=" rounded-t-3xl bg-[#FF0000] grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-4 sm:p-6 md:p-10 lg:p-12 xl:p-16">
          <div className=" flex flex-col gap-6">
            <h1 className=" font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white flex flex-col gap-1 uppercase">
              <p>Join our KicksPlus</p> <p>Club & get 15% off</p>
            </h1>
            <p className=" text-xl text-white">
              Sign up for free! Join the community.
            </p>
            <div className=" flex items-center gap-3">
              <input
                type="text"
                placeholder="Email address"
                className=" w-full sm:min-w-64 border border-stone-100 py-1.5 px-4 rounded-md placeholder:text-stone-50 bg-transparent"
              />
              <button className=" bg-[#232321] text-white font-semibold text-sm sm:text-base py-2 px-5 rounded-md">
                Submit
              </button>
            </div>
          </div>
          <div className=" flex flex-col md:items-center justify-center mb-7">
            <div className=" w-fit">
              <div className=" w-full flex items-center justify-end">
                <FaPlusCircle className=" text-[#FFA52F] text-xl" />
              </div>
              <Image className=" w-full" src={kicks_logo_white} alt="Logo" />
            </div>
          </div>
        </div>
        <div className=" bg-[#232321] px-3 sm:px-5 md:px-7 xl:px-10 pt-10 -mt-7 rounded-3xl">
          <div className=" pb-20 flex flex-col md:flex-row gap-5 items-start justify-between">
            <div className=" flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-2xl sm:text-3xl lg:text-4xl font-bold">
                About us
              </h1>
              <div className=" flex flex-col text-white font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                <p>We are the biggest hyperstore in the universe.</p>{" "}
                <p>We got you all cover with our exclusive</p>{" "}
                <p>collections and latest drops.</p>
              </div>
            </div>
            <div className="  hidden lg:flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-xl sm:text-2xl lg:text-3xl font-bold">
                Categories
              </h1>
              <div className=" flex flex-col gap-1 text-white font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                <Link href={"#"}>Runners</Link>
                <Link href={"#"}>Sneakers</Link>
                <Link href={"#"}>Basketball</Link>
                <Link href={"#"}>Outdoor</Link>
                <Link href={"#"}>Golf</Link>
                <Link href={"#"}>Hiking</Link>
              </div>
            </div>
            <div className=" flex flex-col gap-3 w-full">
              <h1 className=" text-[#FFA52F] text-xl sm:text-2xl lg:text-3xl font-bold">
                Company
              </h1>
              <div className=" flex md:flex-col justify-around w-full gap-1 text-white font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Contact</Link>
                <Link href={"#"}>Blogs</Link>
              </div>
            </div>
            <div className=" flex md:flex-col justify-between gap-3 w-full">
              <h1 className=" text-[#FFA52F] text-xl sm:text-2xl lg:text-3xl font-bold">
                Follow us
              </h1>
              <div className=" flex gap-7 items-center text-white font-medium text-xl">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaTiktok />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <Image src={kicks_logo_footer} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="  mt-4 text-center px-4">
        <span className=" underline">© All rights reserved | Made with ❤️ by</span>{" "}
        <span className=" font-semibold text-[#FF0000]">
          Visiata Systems International
        </span>
      </div>
    </>
  );
}
