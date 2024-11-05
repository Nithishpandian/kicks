import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { FaQrcode, FaUserCircle, FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineLink, AiOutlineEdit } from "react-icons/ai";
import {
  MdOutlineHistory,
  MdOutlineImage,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import Image from "next/image";
import upi_icon from "../assests/images/profile/upi_icon.png";
import media_icon1 from "../assests/images/profile/media_icon1.png";
import media_icon2 from "../assests/images/profile/media_icon2.png";
import YouMayAlsoLike from "@/components/common/YouMayAlsoLike";

function page() {
  const level = 12;
  const currentXP = 5000;
  const totalXP = 2560;
  const progressPercentage = Math.min((currentXP / totalXP) * 100, 100);

  return (
    <div className=" px-3 py-8 sm:p-5 md:p-8 lg:p-10 flex flex-col gap-6 sm:gap-10">
      <div className="flex items-center justify-center bg-gray-200">
        <div className=" flex flex-col gap-4 bg-[#232321] text-white p-3 sm:p-8 rounded-lg w-full">
          <div className="flex justify-between items-center gap-4">
            <div className=" bg-white p-1.5 mb-4 rounded-lg overflow-hidden max-w-xs w-full">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image URL
                alt="Profile"
                className="w-full h-full min-h-64 object-cover"
              />
            </div>
            <div className=" hidden lg:flex flex-col gap-7 ">
              <h1 className=" text-7xl xl:text-8xl font-black text-center text-white mb-2">
                Sulaiman<span className="text-[#ff0000]">.</span>
              </h1>
              <div className=" flex flex-col gap-2 lg:px-10 xl:px-20 2xl:px-32">
                <div className=" flex gap-4 items-center">
                  <p className="text-[#70706E] font-semibold text-lg mb-1 min-w-24">
                    Username:
                  </p>
                  <p className="text-2xl font-bold mb-2">@Salman</p>
                </div>
                <div className=" flex gap-4 items-center">
                  <p className="text-[#70706E] font-semibold text-lg mb-1 min-w-24">
                    Email
                  </p>
                  <p className="text-2xl font-bold mb-2">xyz@gmail.com</p>
                </div>
                <div className=" flex gap-4 items-center">
                  <p className="text-[#70706E] font-semibold text-lg mb-1 min-w-24">
                    Phone
                  </p>
                  <p className="text-2xl font-bold mb-2">+91 98765 43210</p>
                </div>
                <div className=" flex gap-4 items-center">
                  <p className="text-[#70706E] font-semibold text-lg mb-1 min-w-24">
                    Quotes:
                  </p>
                  <p className="text-2xl font-bold mb-2">
                    Courage is being scared to death, but saddling up anyway.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-3 ">
              <div className=" bg-white flex flex-col gap-2 text-[10px] sm:text-sm font-medium rounded-lg p-2 sm:p-4 text-center justify-between w-full mb-8">
                <button className="bg-[#232321] text-nowrap text-white px-2 sm:px-7 py-2 rounded-md">
                  EDIT PROFILE
                </button>
                <button className="bg-[#232321] text-nowrap text-white px-2 sm:px-7 py-2 rounded-md">
                  SHARE PROFILE
                </button>
              </div>
              <div className="bg-white text-[#232321] flex flex-col sm:gap-2 font-bold rounded-lg p-2 sm:px-4 sm:py-4 w-full text-center">
                <p className=" text-6xl sm:text-8xl font-black">12</p>
                <p className=" font-medium text-lg">Level</p>
              </div>
            </div>
          </div>

          <div className=" lg:hidden flex flex-col gap-7">
            <h1 className="text-5xl font-black text-center text-white mb-2">
              Sulaiman<span className="text-[#ff0000]">.</span>
            </h1>
            <div className=" flex flex-col gap-2 lg:px-10 xl:px-20 2xl:px-32">
              <div className=" flex gap-4 items-center">
                <p className="text-[#70706E] font-semibold text-lg mb-1 min-w-24">
                  Username:
                </p>
                <p className="text-base font-bold mb-2">@Salman</p>
              </div>
              <div className=" flex gap-4 items-center">
                <p className="text-[#70706E] font-semibold text-lg mb-1 min-w-24">
                  Email
                </p>
                <p className="text-base font-bold mb-2">xyz@gmail.com</p>
              </div>
              <div className=" flex gap-4 items-center">
                <p className="text-[#70706E] font-semibold text-lg mb-1 min-w-24">
                  Phone
                </p>
                <p className="text-base font-bold mb-2">+91 98765 43210</p>
              </div>
              <div className=" flex gap-4 items-center">
                <p className="text-[#70706E] font-semibold text-lg mb-1 min-w-24">
                  Quotes:
                </p>
                <p className="text-base font-bold mb-2">
                  Courage is being scared to death, but saddling up anyway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 lg:gap-10 px-2">
        <div className=" md:col-span-3 flex flex-col gap-3 bg-white shadow-sm rounded-lg px-7 py-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-2xl font-extrabold">Level {level}</span>
            <span className="text-[#70706E] text-lg font-bold">
              {currentXP}/{totalXP}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-black h-5 rounded-full"
              style={{ width: `70%` }}
            />
          </div>
        </div>
        <div className=" md:col-span-2 bg-[#FAFAFA] shadow-sm rounded-lg p-4 text-gray-800">
          <div className=" font-bold mb-2">Total View</div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800 p-3 rounded-md">
              <AiOutlineEye className="text-white text-2xl" />
            </div>
            <div className=" flex items-center gap-10">
              <div className="text-3xl font-bold">2,054</div>
              <div className="flex items-center font-bold">
                <span className="">
                  <FaArrowUp />
                </span>
                <span className="ml-1">34.7%</span>
              </div>
            </div>
          </div>
          <div className="text-[#70706E] font-medium mt-2 text-sm">
            Compared to Jan 2022
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-2xl flex flex-col items-center p-3 sm:p-8 md:p-5 lg:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-rows-5 md:grid-cols-5 gap-4">
            <div className="md:col-span-3 md:row-span-1">
              <SingleLinkCard />
            </div>
            <div className="md:col-span-2 md:row-span-2">
              <PaymentCard />
            </div>
            <div className="md:col-span-3 md:row-span-2">
              <TextQuotesCard />
            </div>
            <div className="md:col-span-2 md:row-span-3">
              <LinkHubCard />
            </div>
            <div className="md:col-span-3 md:row-span-2">
              <MediaStatusCard />
            </div>
          </div>
        </div>
      </div>
      <YouMayAlsoLike yourItem={true} />
    </div>
  );
}

export default page;

const Card = ({ title, children }) => (
  <div className="bg-[#232321] text-white p-6 rounded-xl flex flex-col w-full h-full shadow-lg relative">
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-3xl font-bold text-[#FFFFFF] text-opacity-50">
        {title}
      </h2>
      <FiExternalLink className="text-gray-400" />
    </div>
    {children}
  </div>
);

const SingleLinkCard = () => (
  <Card title="Single Link">{/* Content can be added if required */}</Card>
);

const TextQuotesCard = () => (
  <Card title="Text Quotes">
    <div className="bg-[#2C2C2C] p-5 rounded-lg mt-2 flex justify-between">
      <div className=" flex flex-col gap-3">
        <p className="font-bold text-xl text-stone-50">@Salman</p>
        <p className="text-gray-200 font-medium">
          Courage is being scared to death, but saddling up anyway.
        </p>
      </div>
      <FaQrcode className="text-gray-400" />
    </div>
  </Card>
);

const MediaStatusCard = () => (
  <Card title="Media Status">
    <div className=" grid grid-cols-2 gap-5 px-5 mt-2">
      <div className="bg-[#2C2C2C] px-12 py-16 rounded-lg flex items-center justify-center">
        <Image src={media_icon1} alt="Media icon 1" />
      </div>
      <div className="bg-[#2C2C2C] px-12 py-16 rounded-lg flex items-center justify-center">
        <Image src={media_icon2} alt="Media icon 2" />
      </div>
    </div>
  </Card>
);

const PaymentCard = () => (
  <Card title="Payment">
    <div className="flex items-center justify-center py-4">
      <Image src={upi_icon} alt="UPI" />
    </div>
    <div className=" text-[#FFFFFF] text-opacity-50 border-t border-stone-600 font-medium flex items-center justify-around py-2 mt-4">
      <button className="flex items-center space-x-1">
        <span>Edit</span>
      </button>
      <button className="flex items-center space-x-1">
        <span>History</span>
      </button>
    </div>
  </Card>
);

const LinkHubCard = () => (
  <Card title="Link Hub">
    <div className="bg-[#2C2C2C] p-4 md:p-3 lg:p-4 rounded-lg flex flex-col gap-3 items-center mt-2 ml-2 md:ml-0 lg:ml-10 xl:ml-20">
      <FaUserCircle className="text-6xl text-gray-500" />
      <h3 className="text-xl font-semibold mt-2">Chris Linx</h3>
      <p className="text-gray-300 text-center mt-1">
        Experienced UX designer based in the US known for creating intuitive and
        engaging user experiences.
      </p>
      <div className="flex space-x-3 mt-4">
        <button className="bg-[#232321] py-1 px-4 rounded text-gray-200 text-sm">
          Website
        </button>
        <button className="bg-[#232321] py-1 px-4 rounded text-gray-200 text-sm">
          E-Mail
        </button>
      </div>
      <div className=" flex items-center justify-between w-full gap-4 border border-stone-600 bg-[#232321] p-4 rounded-lg">
        <div className=" flex items-center gap-3">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Profile"
            className=" w-10 object-cover rounded-md"
          />
          <div className=" font-medium">
            <h1 className=" text-stone-200 text-sm">Canvas Supply</h1>
            <p className=" text-xs text-stone-400">Framer Resources</p>
          </div>
        </div>
        <button className=" bg-transparent border border-stone-600 rounded-lg p-2">
          <FiExternalLink className="text-gray-400" />
        </button>
      </div>
    </div>
    <div className=" text-[#FFFFFF] text-opacity-50 border-t border-stone-600 font-medium flex items-center justify-center py-2 mt-4">
      <button className="flex items-center space-x-1">
        <span>Edit</span>
      </button>
    </div>
  </Card>
);
