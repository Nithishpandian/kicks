import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import NewDropProducts from "../landing/NewDropProducts";
import shoe1_img from "../../app/assests/images/landing/shoe1.png";
import shoe2_img from "../../app/assests/images/landing/shoe2.png";
import shoe3_img from "../../app/assests/images/landing/shoe3.png";
import shoe4_img from "../../app/assests/images/landing/shoe4.png";

export default function YouMayAlsoLike({ yourItem }) {
  const newDropProducts = [
    {
      id: 1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      imageUrl: shoe1_img, // Replace with your image paths
      isNew: true,
    },
    {
      id: 2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      imageUrl: shoe2_img,
      isNew: true,
    },
    {
      id: 3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      imageUrl: shoe3_img,
      isNew: true,
    },
    {
      id: 4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      imageUrl: shoe4_img,
      isNew: true,
    },
  ];

  return (
    <div className=" sm:px-5 md:px-1 lg:px-10 my-16 flex flex-col gap-10">
      <div className=" flex items-end justify-between">
        <h1 className=" text-3xl sm:text-4xl font-black text-[#232321]">
          {yourItem === true ? "Your Items" : "You may also like"}
        </h1>
        {yourItem === true ? (
          <button className=" text-[#FF0000] font-medium">View All</button>
        ) : (
          <div className=" flex gap-2 text-white">
            <button className=" p-2 bg-[#9f9f9f] rounded">
              <IoIosArrowBack />
            </button>
            <button className=" p-2 bg-[#232321] rounded">
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </div>
      <div className=" grid grid-cols-2 sm:flex items-center flex-wrap justify-around gap-6">
        {newDropProducts.map((product, index) => (
          <NewDropProducts key={index} product={product} />
        ))}
      </div>
      <div className=" flex items-center justify-center my-2">
        <div className=" flex items-center gap-2">
          <div className=" py-1 px-8 rounded-2xl bg-[#FF0000]"></div>
          <div className=" py-1 px-8 rounded-2xl bg-[#bebebe]"></div>
          <div className=" py-1 px-8 rounded-2xl bg-[#bebebe]"></div>
          <div className=" py-1 px-8 rounded-2xl bg-[#bebebe]"></div>
        </div>
      </div>
    </div>
  );
}
