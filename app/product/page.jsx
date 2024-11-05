"use client";
import React, { useState } from "react";
import product_img1 from "../assests/images/product/product_img1.png";
import product_img2 from "../assests/images/product/product_img2.png";
import product_img3 from "../assests/images/product/product_img3.png";
import product_img4 from "../assests/images/product/product_img4.png";
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

  const images = [product_img1, product_img2, product_img3, product_img4];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className=" px-3 py-8 sm:p-5 md:p-8 lg:p-10 flex flex-col gap-6 sm:gap-10">
      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-6 ">
        <div className=" hidden lg:col-span-3 lg:grid grid-cols-2 gap-4 h-fit">
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
        <div className=" flex lg:hidden flex-col items-start">
          <div className="w-full max-h-96 object-cover mb-4">
            <Image
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            {images.map((image, index) => (
              <button key={index} onClick={() => setSelectedImage(image)}>
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded-lg ${
                    selectedImage === image ? "ring-2 ring-blue-500" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4">
          <button className="bg-[#FF0000] pt-1 pb-1.5 px-3 font-medium text-white rounded-xl h-fit w-fit">
            New Release
          </button>
          <h1 className=" text-3xl sm:text-4xl font-extrabold">
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </h1>
          <p className=" text-2xl sm:text-3xl font-extrabold text-[#FF0000]">$125.00</p>
          <div className=" my-2 flex flex-col gap-2">
            <h1 className=" font-black text-xl">COLOR</h1>
            <div className=" flex items-center gap-3">
              <div
                className={` ${
                  selectedColor === "black" &&
                  "border-4 border-stone-700 p-1 rounded-full"
                }`}
              >
                <div
                  onClick={() => setSelectedColor("black")}
                  className={`cursor-pointer bg-[#253043] p-3 rounded-full`}
                ></div>
              </div>
              <div
                className={` ${
                  selectedColor === "green" &&
                  "border-4 border-stone-700 p-1 rounded-full"
                } `}
              >
                <div
                  onClick={() => setSelectedColor("green")}
                  className={`cursor-pointer bg-[#707E6E] p-3 rounded-full`}
                ></div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <div className=" flex items-center justify-between">
              <h1 className=" font-black text-xl">SIZE</h1>
              <h1 className=" font-black text-xl underline">SIZE CHART</h1>
            </div>
            <div className=" flex items-center gap-2 flex-wrap text-sm sm:text-base">
              {sizeArray.map((item, index) => (
                <button
                  onClick={() => setSelectedSize(item.size)}
                  className={` cursor-pointer py-2 px-4 sm:py-3 sm:px-5 rounded-xl font-medium ${
                    selectedSize === item.size
                      ? " text-white bg-[#232321]"
                      : item.isAvailable
                      ? "bg-white text-[#232321]"
                      : "bg-[#D2D1D3] text-[#8F8C91]"
                  } `}
                  key={index}
                  disabled={item.isAvailable === true ? false : true}
                >
                  {item.size}
                </button>
              ))}
            </div>
          </div>

          <div className=" my-3 flex flex-col gap-2">
            <div className=" flex items-center gap-2 w-full">
              <button className=" w-full text-white bg-[#232321] py-3 px-6 font-medium text-sm rounded-lg">
                ADD TO CART
              </button>
              <button className=" text-white bg-[#232321] py-3 px-6 font-medium text-sm rounded-lg">
                <FaRegHeart className=" text-xl" />
              </button>
            </div>
            <button className=" text-white bg-[#FF0000] py-3 px-6 font-medium text-sm rounded-lg">
              BUY IT NOW
            </button>
          </div>

          <div className=" flex flex-col gap-2 text-sm sm:text-base md:text-lg">
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
        </div>
      </div>
      <YouMayAlsoLike />
    </div>
  );
}
