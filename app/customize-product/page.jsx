import React from "react";
import NewDropProducts from "@/components/landing/NewDropProducts";
import shoe1_img from "../assests/images/landing/shoe1.png";
import shoe2_img from "../assests/images/landing/shoe2.png";
import shoe3_img from "../assests/images/landing/shoe3.png";
import shoe4_img from "../assests/images/landing/shoe4.png";

export default function page() {
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

  return (
    <div className=" p-10 flex flex-col gap-10">
      <h1 className=" text-4xl font-bold ">Your T-Shirt</h1>
      <div className=" grid grid-cols-4 gap-10">
        <div className=" flex flex-col gap-3">
          <div className=" h-full mb-4 bg-white p-4 rounded-xl flex flex-col gap-4">
            <h1 className=" text-4xl font-bold">
              Select the Items where you want to edit
            </h1>
            <p className=" text-sm font-medium text-stone-700">
              As kicks club member you get rewarded with what you love for doing
              what you love. Sign up today and receive immediate access to these
              Level 1 benefits:
            </p>
          </div>
          <button className=" bg-[#232321] px-2 py-3 text-sm font-bold text-white rounded-lg">
            Click Here to customize all
          </button>
        </div>
        {newDropProducts.map((product, index) => (
          <>
            <NewDropProducts
              key={index}
              product={product}
              button={"Customize"}
            />
          </>
        ))}
      </div>
    </div>
  );
}
