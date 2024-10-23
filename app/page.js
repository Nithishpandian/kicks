import ProductOfTheYear from "@/components/landing/ProductOfTheYear";
import shoe1_img from "./assests/images/landing/shoe1.png";
import shoe2_img from "./assests/images/landing/shoe2.png";
import shoe3_img from "./assests/images/landing/shoe3.png";
import shoe4_img from "./assests/images/landing/shoe4.png";
import NewDropProducts from "@/components/landing/NewDropProducts";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import shoe5_img from "./assests/images/landing/shoe5.png";
import shoe6_img from "./assests/images/landing/shoe6.png";
import shoe7_img from "./assests/images/landing/shoe7.png";
import user1_img from "./assests/images/landing/user1.png";
import shoe8_img from "./assests/images/landing/shoe8.png";
import user2_img from "./assests/images/landing/user2.png";
import shoe9_img from "./assests/images/landing/shoe9.png";
import user3_img from "./assests/images/landing/user3.png";
import { GoArrowUpRight } from "react-icons/go";
import ReviewCardLanding from "@/components/landing/ReviewCardLanding";

export default function Home() {
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
  ];

  const reviewData = [
    {
      shoe_img: shoe7_img,
      user_img: user1_img,
      rating: 5,
      quality: "Good Quality",
      review: "I highly recommend shopping from kicks",
    },
    {
      shoe_img: shoe8_img,
      user_img: user2_img,
      rating: 5,
      quality: "Good Quality",
      review: "I highly recommend shopping from kicks",
    },
    {
      shoe_img: shoe9_img,
      user_img: user3_img,
      rating: 5,
      quality: "Good Quality",
      review: "I highly recommend shopping from kicks",
    },
  ];

  return (
    <div className=" ">
      <div className=" text-center text-[14rem] font-black px-10">
        DO IT <span className=" text-[#FF0000]">RIGHT</span>
      </div>
      <ProductOfTheYear />
      <div className=" px-10 my-16 flex flex-col gap-10">
        <div className=" flex items-end justify-between">
          <h1 className=" text-7xl font-black text-[#232321]">
            <p>Don’t miss out</p> <p>new drops</p>
          </h1>
          <button className=" text-white bg-[#FF0000] py-3 px-6 font-medium text-sm rounded-lg">
            SHOP NEW DROPS
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-around gap-4">
          {newDropProducts.map((product, index) => (
            <NewDropProducts key={index} product={product} />
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-12 pt-16 bg-[#232321]">
        <div className=" px-20 flex items-center justify-between">
          <h1 className=" text-white font-bold text-7xl">CATEGORIES</h1>
          <div className=" flex gap-2">
            <button className=" p-2 bg-[#9f9f9f] rounded">
              <IoIosArrowBack />
            </button>
            <button className=" p-2 bg-[#E7E7E3] rounded">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className=" pl-20 grid grid-cols-2">
          <div className=" bg-[#ECEEF0] text-[#212321] rounded-tl-3xl px-8 py-5">
            <div className=" flex justify-center items-end ">
              <Image
                src={shoe5_img}
                className=" max-h-[400px] object-cover"
                alt="Shoe "
              />
            </div>
            <div className=" flex justify-between items-end">
              <div className=" text-3xl font-bold">
                <p>LIFESTYLE</p>
                <p>SHOES</p>
              </div>
              <div className=" text-white bg-[#232321] p-2 rounded-md h-fit">
                <GoArrowUpRight className=" text-xl" />
              </div>
            </div>
          </div>
          <div className=" bg-[#F6F6F6] text-[#212321] px-8 py-5">
            <div className=" flex justify-center items-end ">
              <Image
                src={shoe6_img}
                className=" max-h-[400px] object-cover"
                alt="Shoe "
              />
            </div>
            <div className=" flex justify-between items-end">
              <div className=" text-3xl font-bold">
                <p>BASKETBALL</p>
                <p>SHOES</p>
              </div>
              <div className=" text-white bg-[#232321] p-2 rounded-md h-fit">
                <GoArrowUpRight className=" text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-20 py-20 flex flex-col gap-8">
        <div className=" flex items-end justify-between">
          <h1 className=" text-7xl font-black text-[#232321]">REVIEWS</h1>
          <button className=" text-white bg-[#FF0000] py-3 px-6 font-medium text-sm rounded-lg">
            SEE ALL
          </button>
        </div>
        <div className=" flex items-center justify-around gap-4">
          {reviewData.map((data, index) => (
            <ReviewCardLanding key={index} product={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
