"use client";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import product_img from "../assests/images/cart/product_img.png";
import Image from "next/image";

export default function page() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [sameInfo, setSameInfo] = useState(true);
  const [ageConfirmation, setAgeConfirmation] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-7 lg:gap-4 xl:gap-16 px-4 py-8 sm:p-5 md:p-8 lg:p-10 xl:p-12">
      <div className=" order-2 lg:order-1 lg:col-span-2">
        <h2 className=" underline font-semibold mb-4">
          Login and Checkout faster
        </h2>

        <h3 className="text-2xl font-bold">Contact Details</h3>
        <p className="text-gray-600 mb-4">
          We will use these details to keep you informed about your delivery.
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md mb-4 border-gray-500 placeholder:text-stone-500 bg-transparent"
        />

        <h3 className="text-2xl font-bold mb-4">Shipping Address</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border border-gray-500 placeholder:text-stone-500 bg-transparent rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name*"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border border-gray-500 placeholder:text-stone-500 bg-transparent rounded-md"
          />
        </div>
        <div className=" mb-4">
          <input
            type="text"
            placeholder="Find Delivery Address*"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-500 placeholder:text-stone-500 bg-transparent rounded-md"
          />
          <p className=" text-sm text-stone-700">
            Start typing your street address or zip code for suggestion
          </p>
        </div>
        <div className=" mb-4">
          <input
            type="tel"
            placeholder="Phone Number* (E.g. (123) 456-7890)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-500 placeholder:text-stone-500 bg-transparent rounded-md "
          />

          <p className=" text-sm text-stone-700">E.g. (123) 456-7890</p>
        </div>
        <h3 className="text-2xl font-bold mb-4">Delivery Options</h3>
        <div className="border p-4 rounded-xl mb-4 bg-white">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-xl mb-1">Standard Delivery</p>
              <p className="text-gray-600 text-sm font-medium">
                Enter your address to see when you’ll get your order
              </p>
            </div>
            <p className="font-bold text-[#FF0000]">$6.00</p>
          </div>
        </div>
        <div className="border p-4 rounded-xl mb-6 border-stone-500">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-xl mb-1">Collect in store</p>
              <p className="text-gray-600 text-sm font-medium">
                Pay now, collect in store
              </p>
            </div>
            <p className="font-bold">Free</p>
          </div>
        </div>

        <div className="flex items-center mb-2 font-semibold">
          <FormControlLabel
            checked={sameInfo}
            onChange={() => setSameInfo(!sameInfo)}
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label={"My billing and delivery information are the same"}
          />
        </div>

        <div className="flex items-center mb-2 font-semibold">
          <FormControlLabel
            checked={ageConfirmation}
            onChange={() => setAgeConfirmation(!ageConfirmation)}
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label={"I’m 13+ years old"}
          />
        </div>

        <h3 className="font-bold mb-1">
          Also want product updates with our newsletter?
        </h3>
        <div className="flex items-center mb-4 font-semibold">
          <FormControlLabel
            checked={newsletter}
            onChange={() => setNewsletter(!newsletter)}
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label={
              "Yes, I’d like to receive emails about exclusive sales and more."
            }
          />
        </div>

        <div className=" grid sm:grid-cols-3">
          <button className=" text-nowrap w-full bg-[#232321] text-white py-3 px-3 text-sm rounded-md font-semibold hover:bg-gray-800">
            REVIEW AND PAY
          </button>
        </div>
      </div>
      <div className=" order-1 lg:order-2 flex flex-col gap-6">
        <div className=" p-6 flex flex-col gap-4 bg-white rounded-xl">
          <h1 className="font-bold text-2xl">Order Summary</h1>
          <div className=" flex flex-col gap-2 w-full ">
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
            <div className=" flex justify-between items-center w-full text-xl font-bold">
              <h1 className=" ">Total</h1>
              <h2 className=" ">$136.99</h2>
            </div>
          </div>
        </div>
        <div className=" col-span-2 bg-white rounded-xl p-5 flex flex-col gap-6">
          <div className=" flex flex-col gap-2">
            <h1 className=" font-bold text-2xl">Order details</h1>
          </div>
          <div className=" flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-7">
            <Image
              className=" max-w-40"
              src={product_img}
              alt="Product image"
            />
            <div className=" w-full flex flex-col gap-1">
              <div className=" flex justify-between w-full font-bold text-lg">
                <h1>DROPSET TRAINER SHOES</h1>
              </div>
              <h1 className=" font-semibold ">Men’s Road Running Shoes </h1>
              <h1 className=" font-semibold ">Enamel Blue/ University White</h1>
              <div className=" flex items-center gap-5  text-sm my-2">
                <div>Size 10</div>
                <div>Quantity 1</div>
              </div>
              <div className=" text-[#FF0000] font-bold">$130.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
