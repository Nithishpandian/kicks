"use client";
import React, { use, useState } from "react";
import mobileViewImg from "../assests/images/link-hub/mobile-view.png";
import personImg from "../assests/images/link-hub/person.png";
import centerImg from "../assests/images/link-hub/center.png";
import leftImg from "../assests/images/link-hub/left.png";
import rightImg from "../assests/images/link-hub/right.png";
import lineImg from "../assests/images/link-hub/line.png";
import buttonShadowImg from "../assests/images/link-hub/button-shadow.png";
import designColorImg from "../assests/images/link-hub/design-color.png";
import designVideoImg from "../assests/images/link-hub/design-video.png";
import designImageImg from "../assests/images/link-hub/design-image.png";
import theme1Img from "../assests/images/link-hub/theme1.png";
import theme2Img from "../assests/images/link-hub/theme2.png";
import theme3Img from "../assests/images/link-hub/theme3.png";
import theme4Img from "../assests/images/link-hub/theme4.png";
import theme5Img from "../assests/images/link-hub/theme5.png";
import theme6Img from "../assests/images/link-hub/theme6.png";
import theme7Img from "../assests/images/link-hub/theme7.png";
import theme8Img from "../assests/images/link-hub/theme8.png";
import theme9Img from "../assests/images/link-hub/theme9.png";
import theme10Img from "../assests/images/link-hub/theme10.png";
import theme11Img from "../assests/images/link-hub/theme11.png";
import theme12Img from "../assests/images/link-hub/theme12.png";
import theme13Img from "../assests/images/link-hub/theme13.png";
import theme14Img from "../assests/images/link-hub/theme14.png";
import theme15Img from "../assests/images/link-hub/theme15.png";
import theme16Img from "../assests/images/link-hub/theme16.png";
import theme17Img from "../assests/images/link-hub/theme17.png";
import theme18Img from "../assests/images/link-hub/theme18.png";
import theme19Img from "../assests/images/link-hub/theme19.png";
import theme20Img from "../assests/images/link-hub/theme20.png";
import theme21Img from "../assests/images/link-hub/theme21.png";
import theme22Img from "../assests/images/link-hub/theme22.png";
import theme23Img from "../assests/images/link-hub/theme23.png";
import dragDropImage from "../assests/icons/drag-drop.png";
import instagramImg from "../assests/icons/instagram.png";
import Image from "next/image";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdBlock } from "react-icons/md";

const page = () => {
  const tabs = ["Links", "Design", "Settings"];
  const [activeTab, setActiveTab] = useState("Links");
  const [design, setDesign] = useState("Library");

  const [bgColor, setBgColor] = useState("bg-black");
  const [buttonStyle, setButtonStyle] = useState("bg-black text-white");
  const [shadowX, setShadowX] = useState(0);
  const [shadowY, setShadowY] = useState(0);

  const [selectedThemes, setSelectedThemes] = useState("Link in bio");
  const [selectedDesignButton, setSelectedDesignButton] = useState(0);
  const [selectedDesignFont, setSelectedDesignFont] = useState(0);

  const [cards, setCards] = useState([
    {
      id: "1",
      platform: "Instagram",
      url: "https://www.instagram.com/lexstays/",
    },
    {
      id: "2",
      platform: "Instagram",
      url: "https://www.instagram.com/lexstays/",
    },
  ]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCards(items);
  };

  const [showImageName, setShowImageName] = useState(false);
  const [showLevel, setShowLevel] = useState(true);
  const [position, setPosition] = useState("center");

  const [activeDesignBg, setActiveDesignBg] = useState(0);
  const [designBg, setDesignBg] = useState([
    {
      title: "Color",
      image: designColorImg,
    },
    {
      title: "Video",
      image: designVideoImg,
    },
    {
      title: "Image",
      image: designImageImg,
    },
  ]);

  const [libraryThemes, setLibraryThemes] = useState([
    {
      title: "Basics",
      image: theme1Img, // Replace with the actual image import
      category: "Link in bio",
    },
    {
      title: "Carbon",
      image: theme2Img,
      category: "Link in bio",
    },
    {
      title: "Xmas '23",
      image: theme3Img,
      category: "Link in bio",
    },
    {
      title: "Pride",
      image: theme4Img,
      category: "Link in bio",
    },
    {
      title: "Glitch",
      image: theme5Img,
      category: "Link in bio",
    },
    {
      title: "Minter - Live",
      image: theme6Img,
      category: "Link in bio",
    },
    {
      title: "Glossy - Live",
      image: theme7Img,
      category: "Link in bio",
    },
    {
      title: "Chameleon - Live",
      image: theme8Img,
      category: "Link in bio",
    },
    {
      title: "Rainy Night - Live",
      image: theme9Img,
      category: "Link in bio",
    },
    {
      title: "Neon - Live",
      image: theme10Img,
      category: "Link in bio",
    },
    {
      title: "Summer",
      image: theme11Img,
      category: "Link in bio",
    },
    {
      title: "Retro",
      image: theme12Img,
      category: "Link in bio",
    },
    {
      title: "Strawberry",
      image: theme13Img,
      category: "Link in bio",
    },
    {
      title: "Desert",
      image: theme14Img,
      category: "Link in bio",
    },
    {
      title: "Sunny",
      image: theme15Img,
      category: "Link in bio",
    },
    {
      title: "Autumn",
      image: theme16Img,
      category: "Link in bio",
    },
    {
      title: "Leaf",
      image: theme17Img,
      category: "Link in bio",
    },
    {
      title: "Clear Sky",
      image: theme18Img,
      category: "Link in bio",
    },
    {
      title: "Blush",
      image: theme19Img,
      category: "Link in bio",
    },
    {
      title: "Unicorn",
      image: theme20Img,
      category: "Link in bio",
    },
    {
      title: "Minimal",
      image: theme21Img,
      category: "Link in bio",
    },
    {
      title: "Cloudy",
      image: theme22Img,
      category: "Link in bio",
    },
    {
      title: "Shadow",
      image: theme23Img,
      category: "Link in bio",
    },
  ]);

  const [selectedThemeImage, setSelectedThemeImage] = useState("Basics");

  return (
    <div className=" bg-[#F9F9F9] rounded-2xl py-4 px-3 sm:p-8 m-2 sm:m-10 flex flex-col gap-12">
      <h1 className=" font-bold text-black text-3xl">Link Hub</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className=" hidden lg:flex items-center justify-center">
          <Image className=" w-[60%]" src={mobileViewImg} alt="mobile view" />
        </div>
        <div className=" text-[#6E6D7A] col-span-2 xl:px-20 flex flex-col gap-10">
          <div className=" grid grid-cols-3 space-x-8 border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-2 font-semibold hover:text-[#0D0C22] ${
                  activeTab === tab ? "text-[#0D0C22]" : ""
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#FF0000]"></span>
                )}
              </button>
            ))}
          </div>
          {activeTab === "Links" && (
            <>
              <button className=" py-[10px] px-2 rounded-md bg-[#FF0000] text-white font-bold text-sm">
                + ADD LINK
              </button>
              <h1 className=" font-semibold">+ Add header</h1>
              <div className="flex flex-col space-y-4 justify-center">
                <div className="flex items-center justify-center text-center p-6 bg-white rounded-md shadow-sm w-full font-bold text-stone-800">
                  Hello Everyone
                </div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="cards">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-4 w-full"
                      >
                        {cards.map(({ id, platform, url }, index) => (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="flex items-center gap-1 px-2 sm:px-4 py-4 bg-white rounded-md shadow-sm w-full"
                              >
                                <Image
                                  src={instagramImg}
                                  alt={platform}
                                  className=" w-9 sm:w-10 h-9 sm:h-10 mr-1 sm:mr-4 "
                                />
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold text-stone-800">
                                    {platform}
                                  </h3>
                                  <p className="text-gray-500 text-xs sm:text-sm">
                                    {url}
                                  </p>
                                </div>
                                <Image
                                  src={dragDropImage}
                                  alt="Drag and drop image"
                                />
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
              <div className=" flex flex-col gap-4">
                <h1 className=" font-bold">SOCIALS</h1>
                <button className=" py-[10px] px-2 rounded-md border border-[#FF0000] text-[#FF0000] bg-white font-semibold text-sm">
                  + Add socials
                </button>
              </div>
            </>
          )}

          {activeTab === "Design" && (
            <div>
              {design === "Own" && (
                <div className=" flex flex-col gap-4">
                  <button
                    onClick={() => setDesign("Library")}
                    className=" py-[10px] px-2 rounded-md bg-[#FF0000] text-white font-bold text-sm"
                  >
                    SELECT FROM DESIGN LIBRARY
                  </button>
                  <div className="p-6 bg-white rounded-lg flex flex-col gap-10">
                    <div className=" flex flex-col gap-5">
                      <h2 className="text-xl font-semibold mb-1">Background</h2>
                      <div className=" flex justify-between gap-4 flex-wrap">
                        {designBg?.map((item, index) => (
                          <div
                            onClick={() => setActiveDesignBg(index)}
                            className=" flex flex-col gap-0.5 cursor-pointer"
                          >
                            <div
                              className={`${
                                activeDesignBg === index
                                  ? "rounded-xl border-2 border-blue-600"
                                  : "rounded-xl border-2 border-white"
                              }`}
                            >
                              <Image
                                src={item.image}
                                className=" p-1"
                                alt="Color"
                              />
                            </div>
                            <h2 className=" text-stone-800 font-bold text-center">
                              {item.title}
                            </h2>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4 items-center flex-wrap">
                        <button className="w-16 h-16 rounded-full border border-gray-300 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 flex items-center justify-center relative">
                          <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5 text-black"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.232 5.232l3.536 3.536M9 11l4 4m-2-6.414l6.414 6.414m4-16.828a2.828 2.828 0 11-4 4L3 21l-2 4 4-2L20.828 4z"
                              />
                            </svg>
                          </span>
                        </button>
                        <button className="w-14 h-14 rounded-full bg-gray-800 border border-gray-300"></button>
                        <button className="w-14 h-14 rounded-full bg-white border border-gray-300"></button>
                        <button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></button>
                        <button className="w-14 h-14 rounded-full bg-green-500"></button>
                        <button className="w-14 h-14 rounded-full bg-red-500"></button>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-5">
                      <h2 className="text-xl font-semibold mb-1">Button</h2>
                      <div className="flex gap-4 items-center justify-around flex-wrap">
                        <div
                          className={` border-2 rounded-full pt-1 px-1 ${
                            selectedDesignButton === 0
                              ? " border-[#0095F6] "
                              : " border-white "
                          }`}
                        >
                          <button
                            onClick={() => setSelectedDesignButton(0)}
                            className={`w-36 h-12 bg-black text-white rounded-full `}
                          ></button>
                        </div>
                        <div
                          className={` border-2 rounded-xl pt-1 px-1 ${
                            selectedDesignButton === 1
                              ? " border-[#0095F6] "
                              : " border-white "
                          }`}
                        >
                          <button
                            onClick={() => setSelectedDesignButton(1)}
                            className={`w-36 h-12 bg-black text-white rounded-xl`}
                          ></button>
                        </div>
                        <div
                          className={` border-2 pt-1 px-1 ${
                            selectedDesignButton === 2
                              ? " border-[#0095F6] "
                              : " border-white "
                          }`}
                        >
                          <button
                            onClick={() => setSelectedDesignButton(2)}
                            className={`w-36 h-12 bg-black text-white`}
                          ></button>
                        </div>
                        <div
                          className={` border-2 rounded-full pt-1 px-1 ${
                            selectedDesignButton === 3
                              ? " border-[#0095F6] "
                              : " border-white "
                          }`}
                        >
                          <button
                            onClick={() => setSelectedDesignButton(3)}
                            className={`w-36 h-12 border border-black text-white rounded-full`}
                          ></button>
                        </div>
                        <div
                          className={` border-2 rounded-xl pt-1 px-1 ${
                            selectedDesignButton === 4
                              ? " border-[#0095F6] "
                              : " border-white "
                          }`}
                        >
                          <button
                            onClick={() => setSelectedDesignButton(4)}
                            className={`w-36 h-12 border border-black text-white rounded-xl`}
                          ></button>
                        </div>
                        <div
                          className={` border-2 pt-1 px-1 ${
                            selectedDesignButton === 5
                              ? " border-[#0095F6] "
                              : " border-white "
                          }`}
                        >
                          <button
                            onClick={() => setSelectedDesignButton(5)}
                            className={`w-36 h-12 border border-black text-white`}
                          ></button>
                        </div>
                      </div>
                      <button className=" xl:ml-12 w-16 h-16 rounded-full border border-gray-300 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 flex items-center justify-center relative">
                        <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5 text-black"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.232 5.232l3.536 3.536M9 11l4 4m-2-6.414l6.414 6.414m4-16.828a2.828 2.828 0 11-4 4L3 21l-2 4 4-2L20.828 4z"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="">
                      <h2 className="text-xl font-semibold mb-4">
                        Button Shadow
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:justify-between w-full">
                        <div className=" shadow-md rounded-md h-full w-full"></div>
                        <div className=" flex flex-col gap-2 items-center w-full">
                          <div className=" flex gap-3 justify-around">
                            <div className=" p-1 bg-white shadow-sm rounded-full">
                              <MdBlock className=" text-red-500 font-bold text-6xl " />
                            </div>
                            <button className=" xl:ml-12 w-16 h-16 rounded-full border border-gray-300 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 flex items-center justify-center relative">
                              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-black"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.232 5.232l3.536 3.536M9 11l4 4m-2-6.414l6.414 6.414m4-16.828a2.828 2.828 0 11-4 4L3 21l-2 4 4-2L20.828 4z"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className=" w-full">
                            <h2 className=" font-bold">Bluer</h2>
                            <input
                              type="range"
                              className=" bg-red-600 w-full"
                            />
                          </div>
                          <div className=" w-full">
                            <h2 className=" font-bold">Spared</h2>
                            <input
                              type="range"
                              className=" bg-red-600 w-full"
                            />
                          </div>
                        </div>
                        <div className=" flex flex-col gap-1 sm:justify-end items-end">
                          <Image src={buttonShadowImg} alt="Button shadow" />
                          <div className=" font-bold">
                            X:{" "}
                            <button className=" py-0.5 px-2 border-2 border-stone-400 bg-stone-100 font-bold rounded-md">
                              100
                            </button>
                          </div>
                          <div className=" font-bold">
                            Y:{" "}
                            <button className=" py-0.5 px-2 border-2 border-stone-400 bg-stone-100 font-bold rounded-md">
                              100
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Font Section */}
                    <div className="w-full p-4 rounded-md">
                      <h2 className="text-xl font-semibold mb-4">Font</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div
                          className={` border-2 p-1 ${
                            selectedDesignFont === 0
                              ? " border-[#0095F6] "
                              : " border-white "
                          } rounded-xl `}
                        >
                          <button
                            onClick={() => setSelectedDesignFont(0)}
                            className="px-4 py-2 border border-gray-500 text-gray-500 rounded-md w-full"
                          >
                            Inter
                          </button>
                        </div>
                        <div
                          className={` border-2 p-1 ${
                            selectedDesignFont === 1
                              ? " border-[#0095F6] "
                              : " border-white "
                          } rounded-xl `}
                        >
                          <button
                            onClick={() => setSelectedDesignFont(1)}
                            className="px-4 py-2 border border-gray-500 text-gray-500 rounded-md w-full"
                          >
                            Poppins
                          </button>
                        </div>
                        <div
                          className={` border-2 p-1 ${
                            selectedDesignFont === 2
                              ? " border-[#0095F6] "
                              : " border-white "
                          } rounded-xl `}
                        >
                          <button
                            onClick={() => setSelectedDesignFont(2)}
                            className="px-4 py-2 border border-gray-500 text-gray-500k rounded-md w-full"
                          >
                            EB Garamond
                          </button>
                        </div>
                        <div
                          className={` border-2 p-1 ${
                            selectedDesignFont === 3
                              ? " border-[#0095F6] "
                              : " border-white "
                          } rounded-xl `}
                        >
                          <button
                            onClick={() => setSelectedDesignFont(3)}
                            className="px-4 py-2 border border-gray-500 text-gray-500 rounded-md w-full"
                          >
                            PT Sans
                          </button>
                        </div>
                        <div
                          className={` border-2 p-1 ${
                            selectedDesignFont === 4
                              ? " border-[#0095F6] "
                              : " border-white "
                          } rounded-xl `}
                        >
                          <button
                            onClick={() => setSelectedDesignFont(4)}
                            className="px-4 py-2 border border-gray-500 text-gray-500 rounded-md w-full"
                          >
                            Quicksand
                          </button>
                        </div>
                        <div
                          className={` border-2 p-1 ${
                            selectedDesignFont === 5
                              ? " border-[#0095F6] "
                              : " border-white "
                          } rounded-xl `}
                        >
                          <button
                            onClick={() => setSelectedDesignFont(5)}
                            className="px-4 py-2 border border-gray-500 text-gray-500 rounded-md w-full"
                          >
                            DM Sans
                          </button>
                        </div>
                        <button className=" xl:ml-12 w-16 h-16 rounded-full border border-gray-300 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 flex items-center justify-center relative">
                          <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5 text-black"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.232 5.232l3.536 3.536M9 11l4 4m-2-6.414l6.414 6.414m4-16.828a2.828 2.828 0 11-4 4L3 21l-2 4 4-2L20.828 4z"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition">
                    Save
                  </button>
                </div>
              )}
              {design === "Library" && (
                <div className=" flex flex-col gap-4">
                  <button
                    onClick={() => setDesign("Own")}
                    className=" py-[10px] px-2 rounded-md bg-[#FF0000] text-white font-bold text-sm"
                  >
                    MAKE YOUR OWN THEME
                  </button>
                  <div className=" p-3 sm:p-6 bg-white rounded-lg flex flex-col gap-10">
                    <div className=" flex flex-col gap-5">
                      <h2 className="text-xl font-semibold mb-1">Themes</h2>
                      <div className=" flex gap-3">
                        {["Link in bio", "Blog", "Shop"].map((item, index) => (
                          <button
                            key={index}
                            className={` ${
                              selectedThemes === item
                                ? " bg-[#0095F6] text-white "
                                : " bg-stone-100 text-stone-700 "
                            } py-1.5 px-4 rounded-full font-bold text-sm`}
                            onClick={() => setSelectedThemes(item)}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                      <div className=" flex gap-3 flex-wrap justify-between">
                        {libraryThemes.map((item, index) => (
                          <div
                            className=" flex flex-col gap-0.5"
                            onClick={() => setSelectedThemeImage(item.title)}
                          >
                            <div
                              className={` border-2 ${
                                selectedThemeImage === item.title
                                  ? " border-[#0095F6] "
                                  : " border-white "
                              } p-1 rounded-xl`}
                            >
                              <Image src={item.image} alt={item.title} />
                            </div>
                            <h2 className=" text-center font-semibold text-stone-800">
                              {item.title}
                            </h2>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition">
                    Save
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === "Settings" && (
            <div className=" flex flex-col gap-4">
              <div className="p-6 bg-white rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Profile</h2>
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-100 bg-gray-100 focus:outline-none font-semibold rounded-md mb-4"
                    />
                    <input
                      type="text"
                      placeholder="Short Description"
                      className="w-full px-4 py-2 border border-gray-100 bg-gray-100 focus:outline-none font-semibold rounded-md"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={personImg}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <button className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 pb-1.5 flex items-center justify-center">
                      x
                    </button>
                  </div>
                </div>

                {/* Toggle Options */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between bg-white shadow-sm p-4 rounded-md">
                    <div>
                      <p className="font-semibold text-lg text-stone-800">
                        Show the image and name
                      </p>
                      <p className="text-sm text-gray-500">
                        Will hide the Bio Link branding from homepage
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showImageName}
                        onChange={() => setShowImageName(!showImageName)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600"></div>
                      <div
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                          showImageName ? "translate-x-5" : ""
                        }`}
                      ></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between bg-white shadow-sm p-4 rounded-md">
                    <div>
                      <p className="font-semibold text-lg text-stone-800">
                        Show the level
                      </p>
                      <p className="text-sm text-gray-500">
                        Enables social sharing options on your page including a
                        QR code.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showLevel}
                        onChange={() => setShowLevel(!showLevel)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600"></div>
                      <div
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                          showLevel ? "translate-x-5" : ""
                        }`}
                      ></div>
                    </label>
                  </div>
                </div>

                {/* Position Options */}
                <div className=" bg-white p-5 rounded-md shadow-sm">
                  <h3 className="font-semibold mb-2">
                    Position to display socials
                  </h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {["center", "left", "right", "line"].map((pos, index) => (
                      <label
                        key={pos}
                        className={`p-3 border rounded-md text-center cursor-pointer ${
                          position === pos
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200"
                        }`}
                      >
                        <Image
                          src={
                            index === 0
                              ? centerImg
                              : index === 1
                              ? leftImg
                              : index === 2
                              ? rightImg
                              : lineImg
                          }
                          alt={pos}
                        />
                        <input
                          type="radio"
                          name="position"
                          value={pos}
                          checked={position === pos}
                          onChange={() => setPosition(pos)}
                          className="hidden"
                        />
                        <div
                          className={`w-6 h-6 mx-auto mb-2 ${
                            pos === "line"
                              ? "border-t-2 border-gray-400"
                              : "rounded-full border-2"
                          }`}
                        ></div>
                        <p className="text-sm capitalize">{pos}</p>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition">
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
