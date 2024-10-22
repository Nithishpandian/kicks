import React from "react";
import Image from "next/image";
import product1_img from "../../app/assests/images/landing/product1.png";
import product2_img from "../../app/assests/images/landing/product2.png";
import product3_img from "../../app/assests/images/landing/product3.png";

export default function ProductOfTheYear() {
  return (
    <div className=" px-10">
      <div className=" relative h-fit w-full">
        <Image
          className=" w-full max-h-[750px] "
          src={product1_img}
          alt="Product Image 1"
        />
        <div className=" absolute -left-[68px] top-32">
          <div className=" rotate-[270deg]  text-[#E7E7E3] font-semibold">
            <p className="bg-[#232321] px-4 py-6 rounded-b-xl">
              Nike product of the year
            </p>
          </div>
        </div>
        <div className=" absolute bottom-5 right-5 flex flex-col gap-3">
          <Image className="  " src={product2_img} alt="Product Image 2" />{" "}
          <Image className="  " src={product3_img} alt="Product Image 3" />
        </div>
        <div className=" flex flex-col gap-4 text-white absolute bottom-10 left-10">
          <h1 className=" font-bold text-7xl">NIKE AIR MAX</h1>
          <div className=" text-2xl text-[#E7E7E3]">
            Nike introducing the new air max for <p> everyone's comfort</p>
          </div>
          <div>
            <button className="bg-[#FF0000] py-3 px-6 font-medium text-sm rounded">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
