import Navbar from "@/components/common/Navbar";
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
import kicks_logo_white from "./assests/images/common/kicks_logo_white.png";
import kicks_logo_footer from "./assests/images/common/kicks_logo_footer.png";
import { GoArrowUpRight } from "react-icons/go";
import { FaPlusCircle } from "react-icons/fa";
import ReviewCardLanding from "@/components/landing/ReviewCardLanding";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

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
    <div className=" bg-[#E7E7E3] min-h-screen py-5">
      <Navbar />
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

      <div className=" rounded-3xl mx-16">
        <div className=" rounded-t-3xl bg-[#FF0000] grid grid-cols-2 items-center px-16 py-16">
          <div className=" flex flex-col gap-6">
            <h1 className=" font-bold text-5xl text-white flex flex-col gap-1 uppercase">
              <p>Join our KicksPlus</p> <p>Club & get 15% off</p>
            </h1>
            <p className=" text-xl text-white">
              Sign up for free! Join the community.
            </p>
            <div className=" flex items-center gap-3">
              <input
                type="text"
                placeholder="Email address"
                className=" min-w-64 border border-stone-100 py-1.5 px-4 rounded-md placeholder:text-stone-50 bg-transparent"
              />
              <button className=" bg-[#232321] text-white font-semibold py-2 px-5 rounded-md">
                Submit
              </button>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <div className=" w-fit">
              <div className=" w-full flex items-center justify-end">
                <FaPlusCircle className=" text-[#FFA52F] text-xl" />
              </div>
              <Image src={kicks_logo_white} alt="Logo" />
            </div>
          </div>
        </div>
        <div className=" bg-[#232321] px-10 pt-10 -mt-7 rounded-3xl">
          <div className=" pb-20 flex items-start justify-between">
            <div className=" flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-4xl font-bold">About us</h1>
              <div className=" flex flex-col text-white font-medium text-lg">
                <p>We are the biggest hyperstore in the universe.</p>{" "}
                <p>We got you all cover with our exclusive</p>{" "}
                <p>collections and latest drops.</p>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-3xl font-bold">Categories</h1>
              <div className=" flex flex-col gap-1 text-white font-medium text-lg">
                <Link href={"#"}>Runners</Link>
                <Link href={"#"}>Sneakers</Link>
                <Link href={"#"}>Basketball</Link>
                <Link href={"#"}>Outdoor</Link>
                <Link href={"#"}>Golf</Link>
                <Link href={"#"}>Hiking</Link>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-3xl font-bold">Company</h1>
              <div className=" flex flex-col gap-1 text-white font-medium text-lg">
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Contact</Link>
                <Link href={"#"}>Blogs</Link>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <h1 className=" text-[#FFA52F] text-3xl font-bold">Follow us</h1>
              <div className=" flex gap-7 items-center text-white font-medium text-xl">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaTiktok />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <Image src={kicks_logo_footer} alt="Logo" />
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-2 justify-center mt-4 text-center">
        <p className=" underline">© All rights reserved | Made with ❤️ by</p>{" "}
        <p className=" font-semibold text-[#FF0000]">Visiata Systems International</p>
      </div>
    </div>
  );
}
