import React from "react";
import product_img from "../assests/images/cart/product_img.png";
import Image from "next/image";

export default function page() {
  return (
    <div className=" flex flex-col gap-8 p-10">
      <div className=" flex flex-col gap-2">
        <h1 className=" font-bold text-3xl">Saving to celebrate </h1>
        <p>
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <div className=" flex items-center gap-1.5">
          <p className=" underline">Join us</p> or{" "}
          <p className=" underline">Sign-in</p>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-8">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-xl p-5 flex flex-col gap-6"
          >
            <div className=" flex flex-col gap-1">
              <h1 className=" font-bold text-2xl">12-Feb-2024</h1>
              <p className=" ">
                Items in your bag not reserved- check out now to make them
                yours.
              </p>
            </div>
            <div className=" flex gap-7">
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
                <h1 className=" font-semibold ">
                  Enamel Blue/ University White
                </h1>
                <div className=" flex items-center gap-10  text-sm my-2">
                  <div>Size 10</div>
                  <div>Quantity 1</div>
                </div>
                <div className=" text-[#FF0000] text-lg font-bold">$130.00</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
