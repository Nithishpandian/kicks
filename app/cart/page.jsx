import React from "react";
import Image from "next/image";
import product_img from "../assests/images/cart/product_img.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FaRegHeart } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
import YouMayAlsoLike from "@/components/common/YouMayAlsoLike";

export default function page() {
  return (
    <div className=" px-3 py-8 sm:p-5 md:p-9 lg:p-10 flex flex-col gap-6 sm:gap-10">
      <div className=" flex flex-col gap-2">
        <h1 className=" font-bold text-3xl">Saving to celebrate </h1>
        <p>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <div className=" text-lg flex items-center gap-1.5">
          <p className=" underline">Join us</p> or{" "}
          <p className=" underline">Sign-in</p>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className=" lg:col-span-2 bg-white rounded-xl p-5 flex flex-col gap-6">
          <div className=" flex flex-col gap-2">
            <h1 className=" font-bold text-3xl">Your Bag </h1>
            <p>
              Items in your bag not reserved- check out now to make them yours.
            </p>
          </div>
          <div className=" flex flex-col sm:flex-row gap-3 sm:gap-7">
            <Image
              className=" max-w-52"
              src={product_img}
              alt="Product image"
            />
            <div className=" w-full flex flex-col gap-3">
              <div className=" flex gap-2 justify-between w-full font-bold text-xl lg:text-2xl">
                <h1>DROPSET TRAINER SHOES</h1>
                <h1 className=" text-[#FF0000]">$130.00</h1>
              </div>
              <h1 className=" font-semibold text-sm md:text-base lg:text-xl">
                Men’s Road Running Shoes{" "}
              </h1>
              <h1 className=" font-semibold text-sm md:text-base lg:text-xl">
                Enamel Blue/ University White
              </h1>
              <div className=" flex items-center gap-3 sm:gap-5 text-sm lg:text-base">
                <FormControl size="small" className=" font-medium ">
                  <InputLabel id="demo-simple-select-label">SIZE 10</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="SIZE 10"
                    className=" min-w-32"
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
                <FormControl size="small" className=" font-medium ">
                  <InputLabel id="demo-simple-select-label">
                    QUANTITY 1
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="QUANTITY 1"
                    className=" min-w-40"
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
              <div className=" mt-2 text-lg md:text-xl lg:text-2xl flex items-center gap-5">
                <FaRegHeart />
                <RiDeleteBin2Line />
              </div>
            </div>
          </div>
        </div>
        <div className=" p-6 flex flex-col gap-4 bg-white lg:bg-transparent rounded-xl">
          <h1 className="font-bold text-2xl sm:text-3xl">Order Summary</h1>
          <div className=" flex flex-col gap-2 w-full text-sm sm:text-base lg:text-lg">
            <div className=" flex justify-between items-center w-full">
              <h1 className=" font-semibold">1 ITEM</h1>
              <h2 className=" font-medium">$130.00</h2>
            </div>
            <div className=" flex justify-between items-center w-full">
              <h1 className=" font-semibold">Delivery</h1>
              <h2 className=" font-medium">$6.99</h2>
            </div>{" "}
            <div className=" flex justify-between items-center w-full">
              <h1 className=" font-semibold">Sales Tax</h1>
              <h2 className=" font-medium">-</h2>
            </div>{" "}
            <div className=" flex justify-between items-center w-full text-2xl font-bold">
              <h1 className=" ">Total</h1>
              <h2 className=" ">$136.99</h2>
            </div>
          </div>
          <button className=" w-full text-white bg-[#232321] py-2 sm:py-3 px-6 font-medium text-sm rounded-lg">
            CHECKOUT
          </button>
          <h1 className=" font-semibold underline">Use a promo code</h1>
        </div>
      </div>
      <YouMayAlsoLike />
    </div>
  );
}
