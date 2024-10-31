import Image from "next/image";
import React from "react";

export default function NewDropProducts({ product, button }) {
  return (
    <div className=" flex justify-center items-center w-fit">
      <div className=" flex flex-col gap-3">
        <Image
          className=" bg-white p-2 rounded-2xl min-w-80"
          src={product.imageUrl}
          alt="Shoe1_img"
        />
        <h1 className=" text-2xl font-black text-[#232321]">{product.name}</h1>
        <button className=" bg-[#232321] px-2 py-3 text-sm font-bold text-white rounded-lg">
          <span>{button ? button : "VIEW PRODUCT -"}</span>{" "}
          {!button && <span className=" text-[#FFA52F]">{product.price}</span>}
        </button>
      </div>
    </div>
  );
}
