import React from "react";
import star_icon from "../../app/assests/icons/star.png";
import Image from "next/image";

export default function ReviewCardLanding({ product }) {
  return (
    <div className=" rounded-[1.9rem] bg-white w-80">
      <div className=" px-5 py-4 flex gap-5 items-start">
        <div className=" flex flex-col gap-1.5">
          <h1 className=" text-xl font-bold">{product.quality}</h1>
          <p className="">{product.review}</p>
          <div className=" flex items-center gap-1">
            <Image src={star_icon} alt="Star_icon" />
            <Image src={star_icon} alt="Star_icon" />
            <Image src={star_icon} alt="Star_icon" />
            <Image src={star_icon} alt="Star_icon" />
            <Image src={star_icon} alt="Star_icon" />
            <h1 className=" font-semibold">{product.rating}</h1>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <Image src={product.user_img} alt={product.review} />
        </div>
      </div>
      <Image
        className=" rounded-b-[1.9rem]"
        src={product.shoe_img}
        alt={product.review}
      />
    </div>
  );
}
