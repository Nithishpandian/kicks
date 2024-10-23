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
      <div className=" rounded-3xl mx-16">
        <div className=" rounded-t-3xl bg-[#FF0000] grid grid-cols-2 items-center px-16 py-16">
          <div className=" flex flex-col gap-6">
            <h1 className=" font-bold text-5xl text-white flex flex-col gap-1 uppercase">
              <p>Join our KicksPlus</p> <p>Club & get 15% off</p>
            </h1>
            <p className=" text-xl text-white">
              Sign up for free! Join the community.
            </p>
            <div className=" flex items-center gap-3">
              <input
                type="text"
                placeholder="Email address"
                className=" min-w-64 border border-stone-100 py-1.5 px-4 rounded-md placeholder:text-stone-50 bg-transparent"
              />
              <button className=" bg-[#232321] text-white font-semibold py-2 px-5 rounded-md">
                Submit
              </button>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <div className=" w-fit">
              <div className=" w-full flex items-center justify-end">
                <FaPlusCircle className=" text-[#FFA52F] text-xl" />
              </div>
              <Image src={kicks_logo_white} alt="Logo" />
            </div>
          </div>
        </div>
        <div className=" bg-[#232321] px-10 pt-10 -mt-7 rounded-3xl">
          <div className=" pb-20 flex items-start justify-between">
            <div className=" flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-4xl font-bold">About us</h1>
              <div className=" flex flex-col text-white font-medium text-lg">
                <p>We are the biggest hyperstore in the universe.</p>{" "}
                <p>We got you all cover with our exclusive</p>{" "}
                <p>collections and latest drops.</p>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-3xl font-bold">Categories</h1>
              <div className=" flex flex-col gap-1 text-white font-medium text-lg">
                <Link href={"#"}>Runners</Link>
                <Link href={"#"}>Sneakers</Link>
                <Link href={"#"}>Basketball</Link>
                <Link href={"#"}>Outdoor</Link>
                <Link href={"#"}>Golf</Link>
                <Link href={"#"}>Hiking</Link>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-3xl font-bold">Company</h1>
              <div className=" flex flex-col gap-1 text-white font-medium text-lg">
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Contact</Link>
                <Link href={"#"}>Blogs</Link>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-3xl font-bold">Follow us</h1>
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
      <div className=" flex items-center gap-2 justify-center mt-4 text-center">
        <p className=" underline">© All rights reserved | Made with ❤️ by</p>{" "}
        <p className=" font-semibold text-[#FF0000]">
          Visiata Systems International
        </p>
      </div>
    </>
  );
}
