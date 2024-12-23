import Image from "next/image";
import React from "react";

export default function NewDropProducts({ product, button }) {
  return (
    <div className=" flex items-center justify-center max-w-54 sm:max-w-full sm:w-72 md:w-80">
      <div className=" flex justify-center items-center w-fit max-w-[400px]">
        <div className=" flex flex-col gap-1 sm:gap-3">
          <Image
            className=" bg-white p-2 rounded-2xl sm:min-w-72 w-full max-w-[400px]"
            src={product.imageUrl}
            alt="Shoe1_img"
          />
          <h1 className=" text-base sm:text-2xl font-black text-[#232321]">
            {product.name}
          </h1>
          <button className=" bg-[#232321] px-2 py-3 text-xs sm:text-sm font-bold text-white rounded-lg">
            <span>{button ? button : "VIEW PRODUCT -"}</span>{" "}
            {!button && (
              <span className=" text-[#FFA52F]">{product.price}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
