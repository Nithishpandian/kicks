import React from "react";
import Image from "next/image";
import product1_img from "../../app/assests/images/landing/product1.png";
import product2_img from "../../app/assests/images/landing/product2.png";
import product3_img from "../../app/assests/images/landing/product3.png";

export default function ProductOfTheYear() {
  return (
    <div className=" px-2 sm:px-3 md:px-4 lg:px-10">
      <div className=" relative h-fit w-full">
        <Image
          className=" w-full max-h-[750px] min-h-96 object-cover rounded-3xl"
          src={product1_img}
          alt="Product Image 1"
        />
        <div className=" absolute -left-[68px] sm:-left-[66px] md:-left-[72px] lg:-left-[68px] top-32">
          <div className=" rotate-[270deg]  text-[#E7E7E3] font-semibold">
            <p className="bg-[#232321] px-4 py-1.5 sm:py-2 md:py-3 lg:py-6 rounded-b-xl text-xs md:text-sm lg:text-base">
              Nike product of the year
            </p>
          </div>
        </div>
        <div className=" absolute bottom-1 sm:bottom-5 right-1 sm:right-5 flex flex-col gap-3">
          <Image
            className=" w-16 sm:w-auto "
            src={product2_img}
            alt="Product Image 2"
          />{" "}
          <Image
            className=" w-16 sm:w-auto "
            src={product3_img}
            alt="Product Image 3"
          />
        </div>
        <div className=" flex flex-col gap-2 sm:gap-4 text-white absolute bottom-4 sm:bottom-10 left-5 sm:left-12">
          <h1 className=" font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            NIKE AIR MAX
          </h1>
          <div className=" text-sm sm:text-xl md:text-2xl text-[#E7E7E3]">
            Nike introducing the new air max for <p> everyone's comfort</p>
          </div>
          <div>
            <button className="bg-[#FF0000] py-1.5 sm:py-3 px-3 sm:px-6 font-medium text-xs sm:text-sm rounded">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
