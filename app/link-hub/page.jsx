"use client";
import React, { useState } from "react";
import mobileViewImg from "../assests/images/link-hub/mobile-view.png";
import personImg from "../assests/images/link-hub/person.png";
import centerImg from "../assests/images/link-hub/center.png";
import leftImg from "../assests/images/link-hub/left.png";
import rightImg from "../assests/images/link-hub/right.png";
import lineImg from "../assests/images/link-hub/line.png";
import dragDropImage from "../assests/icons/drag-drop.png";
import Image from "next/image";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const page = () => {
  const [activeTab, setActiveTab] = useState("Links");
  const [design, setDesign] = useState("Own");

  const [bgColor, setBgColor] = useState("bg-black");
  const [buttonStyle, setButtonStyle] = useState("bg-black text-white");
  const [shadowX, setShadowX] = useState(0);
  const [shadowY, setShadowY] = useState(0);

  const tabs = ["Links", "Design", "Settings"];

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
                                <img
                                  src="https://via.placeholder.com/40"
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
                  <button className=" py-[10px] px-2 rounded-md bg-[#FF0000] text-white font-bold text-sm">
                    SELECT FROM DESIGN LIBRARY
                  </button>
                  <div className="p-6 bg-white rounded-lg">
                    {/* Background Section */}
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Background</h2>
                      <div className="flex gap-4 items-center">
                        <button className="w-16 h-16 rounded-md bg-gray-800 border border-gray-300"></button>
                        <button className="w-16 h-16 rounded-md bg-white border border-gray-300"></button>
                        <button className="w-16 h-16 rounded-md bg-gradient-to-r from-pink-500 to-purple-500"></button>
                        <button className="w-16 h-16 rounded-md bg-green-500"></button>
                        <button className="w-16 h-16 rounded-md bg-red-500"></button>
                        <button className="w-16 h-16 rounded-md bg-black"></button>
                      </div>
                    </div>

                    {/* Button Section */}
                    <div className="w-full p-4 rounded-md">
                      <h2 className="text-xl font-semibold mb-4">Button</h2>
                      <div className="flex gap-4 items-center">
                        <button className="w-36 h-12 bg-black text-white rounded-full"></button>
                        <button className="w-36 h-12 border border-black text-black rounded-full"></button>
                        <button className="w-36 h-12 bg-black text-white rounded-md"></button>
                      </div>
                    </div>

                    {/* Button Shadow Section */}
                    <div className="w-full p-4 rounded-md">
                      <h2 className="text-xl font-semibold mb-4">
                        Button Shadow
                      </h2>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <span>Blur:</span>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            className="w-full"
                          />
                        </div>
                        <div className="flex items-center gap-4">
                          <span>Spread:</span>
                          <input
                            type="range"
                            min="-100"
                            max="100"
                            className="w-full"
                          />
                        </div>
                        <div className="flex items-center gap-4">
                          <span>X:</span>
                          <input
                            type="range"
                            min="-100"
                            max="100"
                            value={shadowX}
                            onChange={(e) => setShadowX(e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div className="flex items-center gap-4">
                          <span>Y:</span>
                          <input
                            type="range"
                            min="-100"
                            max="100"
                            value={shadowY}
                            onChange={(e) => setShadowY(e.target.value)}
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div
                          className={`w-36 h-12 bg-black text-white rounded-full flex items-center justify-center`}
                          style={{
                            boxShadow: `${shadowX}px ${shadowY}px 10px rgba(0, 0, 0, 0.5)`,
                          }}
                        >
                          Button
                        </div>
                      </div>
                    </div>

                    {/* Font Section */}
                    <div className="w-full p-4 rounded-md">
                      <h2 className="text-xl font-semibold mb-4">Font</h2>
                      <div className="grid grid-cols-3 gap-4">
                        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md">
                          Inter
                        </button>
                        <button className="px-4 py-2 border border-gray-500 text-gray-500 rounded-md">
                          Poppins
                        </button>
                        <button className="px-4 py-2 border border-black text-black rounded-md">
                          EB Garamond
                        </button>
                        <button className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md">
                          PT Sans
                        </button>
                        <button className="px-4 py-2 border border-green-700 text-green-700 rounded-md">
                          Quicksand
                        </button>
                        <button cl  assName="px-4 py-2 border border-gray-700 text-gray-700 rounded-md">
                          DM Sans
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {design === "Library" && <div>library</div>}
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
