"use client";
import React, { useState } from "react";
import product_img1 from "../assests/images/product/product_img1.png";
import product_img2 from "../assests/images/product/product_img2.png";
import product_img3 from "../assests/images/product/product_img3.png";
import product_img4 from "../assests/images/product/product_img4.png";
import bid_img from "../assests/images/common/bid_img.png";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import YouMayAlsoLike from "@/components/common/YouMayAlsoLike";

export default function page() {
  const sizeArray = [
    {
      size: 38,
      isAvailable: true,
    },
    {
      size: 39,
      isAvailable: false,
    },
    {
      size: 40,
      isAvailable: false,
    },
    {
      size: 41,
      isAvailable: true,
    },
    {
      size: 42,
      isAvailable: true,
    },
    {
      size: 43,
      isAvailable: true,
    },
    {
      size: 44,
      isAvailable: true,
    },
    {
      size: 45,
      isAvailable: true,
    },
    {
      size: 46,
      isAvailable: true,
    },
    {
      size: 47,
      isAvailable: true,
    },
    {
      size: 48,
      isAvailable: true,
    },
  ];

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState(sizeArray[0].size);

  const bids = [
    {
      username: "randomdash",
      date: "Aug 18, 2022",
      time: "18:80",
      amount: "125.00",
      avatar: bid_img,
    },
    {
      username: "randomdash",
      date: "Aug 18, 2022",
      time: "18:80",
      amount: "125.00",
      avatar: bid_img,
    },
    {
      username: "randomdash",
      date: "Aug 18, 2022",
      time: "18:80",
      amount: "125.00",
      avatar: bid_img,
    },
  ];

  return (
    <div>
      <div className=" grid grid-cols-5 gap-6 p-10">
        <div className=" col-span-3 grid grid-cols-2 gap-4">
          <Image
            className=" rounded-tl-3xl"
            src={product_img1}
            alt="Product image"
          />
          <Image
            className=" rounded-tr-3xl"
            src={product_img2}
            alt="Product image"
          />
          <Image
            className=" rounded-bl-3xl"
            src={product_img3}
            alt="Product image"
          />
          <Image
            className=" rounded-tr-3xl"
            src={product_img4}
            alt="Product image"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <button className="bg-[#FF0000] pt-1 pb-1.5 px-3 font-medium text-white rounded-xl h-fit w-fit">
            New Release
          </button>
          <h1 className=" text-4xl font-extrabold">
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </h1>
          <p className=" text-3xl font-extrabold text-[#FF0000]">$125.00</p>
          <div className=" bg-white font-extrabold rounded-xl p-4 flex items-center justify-between">
            <div className=" flex flex-col gap-1">
              <h3 className=" text-[#686A6C] ">Highest bid</h3>
              <h1 className=" text-3xl font-black">1.1 ETH</h1>
              <h3 className=" text-[#686A6C]">$1,815.70</h3>
            </div>
            <div className=" flex flex-col gap-1">
              <h3 className=" text-[#686A6C] ">Auction ends in</h3>
              <div className=" grid grid-cols-3 justify-between gap-4">
                <h1 className=" text-3xl font-black">23</h1>
                <h1 className=" text-3xl font-black">59</h1>
                <h1 className=" text-3xl font-black">59</h1>
              </div>
              <div className=" grid grid-cols-3 justify-between gap-4">
                <h3 className=" text-[#686A6C]">hours</h3>
                <h3 className=" text-[#686A6C]">minutes</h3>
                <h3 className=" text-[#686A6C]">seconds</h3>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-xl py-5 px-7 flex flex-col justify-between gap-7">
            <button className=" bg-[#FF0000] py-3 px-4 rounded-xl text-white font-semibold">
              PLACE A BID
            </button>
            <div className=" flex items-end justify-between gap-5 font-black">
              <div className="">
                <h3 className=" text-[#686A6C] ">BUY NOW</h3>
                <h1 className=" text-3xl font-black">$125.00</h1>
              </div>
              <button className=" text-white bg-[#232321] py-2 px-6 rounded-md font-bold">
                BUY NOW
              </button>
            </div>
          </div>

          <div className=" flex flex-col gap-2 text-lg">
            <h1 className=" font-black text-lg">ABOUT THE PRODUCT</h1>
            <p>Shadow Navy / Army Green</p>
            <p className=" my-1.5">
              This product is excluded from all promotional discounts and
              offers.
            </p>
            <ul>
              <li className=" list-disc list-inside">
                Pay over time in interest-free installments with Affirm, Klarna
                or Afterpay.
              </li>
              <li className=" list-disc list-inside">
                Join adiClub to get unlimited free standard shipping, returns, &
                exchanges.
              </li>
            </ul>
          </div>

          <div className=" bg-gray-100 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Provenance</h2>
            {bids.map((bid, index) => (
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <Image
                    src={bid.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full border-2 border-transparent"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Bid by{" "}
                      <span className="text-gray-700">@{bid.username}</span>
                    </p>
                    <p className="text-xs font-medium text-gray-500">
                      {bid.date} at {bid.time}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-gray-900">${bid.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <YouMayAlsoLike />
    </div>
  );
}
