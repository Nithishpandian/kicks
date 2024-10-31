"use client";
import React, { useState } from "react";
import Image from "next/image";
import banner_img from "../assests/images/listing/banner_img.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import NewDropProducts from "@/components/landing/NewDropProducts";
import shoe1_img from "../assests/images/landing/shoe1.png";
import shoe2_img from "../assests/images/landing/shoe2.png";
import shoe3_img from "../assests/images/landing/shoe3.png";
import shoe4_img from "../assests/images/landing/shoe4.png";

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
  ];

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

  const [price, setPrice] = useState(500);
  const [selectedSize, setSelectedSize] = useState(sizeArray[0].size);

  const [currentPage, setCurrentPage] = useState(2); // Initial page set to 2
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className=" flex flex-col gap-10 p-12">
      <div className=" relative w-full">
        <Image className=" w-full" src={banner_img} alt="Banner image" />
        <div className=" absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <h2 className=" text-2xl text-[#E7E7E3] font-medium">
            Limited time only
          </h2>
          <h1 className=" text-5xl font-bold text-white">Get 30% off</h1>
          <p className="text-[#E7E7E3] w-[400px] text-lg">
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-10">
        <div className=" flex flex-col gap-3">
          <div>
            <h1 className=" text-3xl font-bold">Life Style Shoes</h1>
            <p className=" font-semibold mt-1 ">122 items</p>
          </div>
          <h1 className=" text-xl font-bold my-1">Filters</h1>
          <div className="">
            {/* Refine By */}
            <div className="mb-6">
              <h3 className=" font-bold">REFINE BY</h3>
              <div className="flex gap-3 mt-2">
                <button className="pt-1 pb-1.5 px-4 font-medium text-sm bg-[#4A69E2] text-white rounded-lg">
                  Mens
                </button>
                <button className="pt-1 pb-1.5 px-4 font-medium text-sm bg-[#4A69E2] text-white rounded-lg">
                  Casual
                </button>
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className=" font-bold">SIZE</h3>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {sizeArray.map((item, index) => (
                  <button
                    onClick={() => setSelectedSize(item.size)}
                    className={` cursor-pointer py-3 px-5 rounded-xl font-medium ${
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

            {/* Color */}
            <div className="mb-6">
              <h3 className=" font-bold">COLOR</h3>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {[
                  "#3B82F6",
                  "#FBBF24",
                  "#047857",
                  "#374151",
                  "#F97316",
                  "#94A3B8",
                  "#A16207",
                  "#B45309",
                ].map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-md"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Shoe Types */}
            <div className="mb-6">
              <h3 className=" font-bold">SIZE</h3>
              <div className="flex flex-col gap-2 mt-2">
                {[
                  "Casual shoes",
                  "Runners",
                  "Hiking",
                  "Sneaker",
                  "Basketball",
                  "Golf",
                  "Outdoor",
                ].map((type, index) => (
                  <label
                    key={index}
                    className="flex items-center font-medium bg-transparent"
                  >
                    <input type="checkbox" className="mr-2 bg-transparent" />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div className="mb-6">
              <h3 className=" font-bold">GENDER</h3>
              <div className="flex flex-col gap-2 mt-2">
                {["Men", "Women"].map((gender, index) => (
                  <label key={index} className="flex items-center font-medium">
                    <input type="checkbox" className="mr-2" />
                    {gender}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div className="mb-6">
              <h3 className=" font-bold">PRICE</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>${0}</span>
                <span>${1000}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className=" col-span-3 flex flex-col gap-3">
          <div className=" flex items-end justify-end">
            <FormControl size="small" className=" font-medium ">
              <InputLabel
                id="demo-simple-select-label"
                className=" font-semibold text-sm mt-0.5"
              >
                TRENDING
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="TRENDING"
                className=" min-w-32 bg-white rounded-md"
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className=" grid grid-cols-3 gap-10">
            {newDropProducts.map((product, index) => (
              <NewDropProducts key={index} product={product} />
            ))}
          </div>
          <div className=" flex items-center justify-center mt-3">
            <div className="flex items-center justify-center gap-2 p-4 text-sm font-medium">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 border border-gray-400 rounded-md"
                disabled={currentPage === 1}
              >
                &lt; PREVIOUS
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => index + 1)
                .slice(0, 4)
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 border border-gray-400 rounded-md ${
                      currentPage === page
                        ? "bg-black text-white"
                        : "bg-transparent text-black"
                    }`}
                  >
                    {page}
                  </button>
                ))}

              {/* Ellipsis */}
              <span className="px-4 py-2">...</span>

              {/* Last Page */}
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-4 py-2 border border-gray-400 rounded-md"
              >
                {totalPages}
              </button>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 border border-gray-400 rounded-md"
                disabled={currentPage === totalPages}
              >
                NEXT &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
