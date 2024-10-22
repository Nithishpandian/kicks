import Link from "next/link";
import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import kicks_logo from "../../app/assests/images/common/kicks_logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className=" mx-10 bg-white py-5 px-5 rounded-xl font-bold text-sm flex items-center justify-between gap-5">
      <div className=" flex items-center gap-7">
        <Link href={"#"}>New Drops 🔥</Link>
        <Link href={"#"} className=" flex items-center gap-1">
          <p>Men</p> <TiArrowSortedDown />
        </Link>
        <Link href={"#"} className=" flex items-center gap-1">
          <p>Women</p> <TiArrowSortedDown />
        </Link>
      </div>
      <div>
        <Image className=" w-40" src={kicks_logo} alt="Kicks_logo" />
      </div>
      <div className=" flex items-center gap-7">
        <IoSearch className=" text-lg" />
        <FaUser />
        <div className=" px-2 py-1 text-xs rounded-full bg-[#FFA52F]">0</div>
      </div>
    </div>
  );
}
