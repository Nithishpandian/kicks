import Image from "next/image";
import React from "react";

export default function NewDropProducts({ product }) {
  return (
    <div className=" flex justify-center items-center w-96">
      <div className=" flex flex-col gap-3">
        <Image
          className=" bg-white p-2 rounded-2xl min-w-96"
          src={product.imageUrl}
          alt="Shoe1_img"
        />
        <h1 className=" text-3xl font-black text-[#232321]">{product.name}</h1>
        <button className=" bg-[#232321] px-2 py-[14px] font-bold text-white rounded-lg">
          VIEW PRODUCT -{" "}
          <span className=" text-[#FFA52F]">{product.price}</span>
        </button>
      </div>
    </div>
  );
}
