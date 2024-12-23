"use client";
import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import avatar_img from "../assests/images/text-quotes/avatar.png";
import Image from "next/image";

function page() {
  const [quoteInput, setQuoteInput] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
  );
  return (
    <div className=" px-3 py-8 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-10">
      <div className="flex items-center justify-center p-5 sm:p-20 md:p-28 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-6 rounded-2xl border border-stone-50 shadow max-w-lg w-full text-white">
          <div className=" flex items-center gap-3">
            <div>
              <div className=" w-full flex items-end justify-end">
                <Image
                  src={avatar_img} // Replace with actual image URL
                  alt="Esther Howard"
                  className=" sm:hidden flex w-16 h-16 rounded-full mr-3 border-2 border-yellow-400"
                />
              </div>
              <FaQuoteLeft className="text-3xl text-white mb-4" />
              <p className=" text-sm sm:text-base md:text-lg">{quoteInput}</p>
            </div>
            <Image
              src={avatar_img} // Replace with actual image URL
              alt="Esther Howard"
              className=" hidden sm:flex w-20 h-20 rounded-full mr-3 border-2 border-yellow-400"
            />
          </div>
          <div className="flex items-center mt-4">
            <div>
              <p className="font-semibold text-white">Esther Howard</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold ">
        Text Quotes
      </h1>
      <div className=" flex flex-col gap-10 px-5 sm:px-12">
        <div className=" my-5 flex flex-col gap-5">
          <h1 className=" text-2xl sm:text-3xl font-bold text-stone-600">
            Add Quotes
          </h1>
          <textarea
            type="text"
            onChange={(e) => setQuoteInput(e.target.value)}
            value={quoteInput}
            style={{ overflow: "hidden" }}
            className=" bg-transparent border-b border-stone-500 font-bold text-xl text-stone-600 placeholder:font-bold placeholder:text-xl py-2 px-7 w-full focus:outline-none"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
          />
          <div className=" flex items-center justify-end gap-4">
            <button className=" font-medium text-white bg-[#232321] py-2 px-6 rounded-md text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
