"use client";
import React, { useState } from "react";
import { RiGalleryFill } from "react-icons/ri";

export default function page() {
  const [tab, setTab] = useState("newUpload");

  return (
    <div className=" px-3 py-8 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-10">
      <h1 className=" text-3xl font-bold">Media Status</h1>
      <div className="flex flex-col items-center min-h-screen py-10">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow pt-6">
          {/* Tabs */}
          <div className=" grid grid-cols-2 sm:grid-cols-3 justify-between items-center w-full mb-4 px-5">
            <div className=" hidden sm:flex"></div>
            <div className=" flex items-center">
              <button
                onClick={() => setTab("newUpload")}
                className={` text-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                  tab === "newUpload" ? "bg-black text-white" : "text-gray-500"
                }`}
              >
                New Upload
              </button>
              <button
                onClick={() => setTab("recent")}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  tab === "recent" ? "bg-black text-white" : "text-gray-500"
                }`}
              >
                Recent
              </button>
            </div>
            <div className=" flex justify-end items-center">
              <button className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12h18M3 6h18M3 18h18"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          {tab === "newUpload" ? (
            <div className=" mx-6 mb-6 bg-gray-50 rounded-lg border-dashed border-2 border-gray-300 h-40 flex items-center justify-center">
              <p className="text-gray-400 text-sm sm:text-base px-4 text-center">
                Click to browse or drag and drop your files
              </p>
            </div>
          ) : (
            <div className="w-full">
              {[0, 1, 2].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-2 py-3 px-4 border-b border-gray-200"
                >
                  {/* File Information */}
                  <div className="flex items-center space-x-4">
                    <RiGalleryFill />
                    <div>
                      <p className="font-medium text-gray-800 text-sm ">
                        man holding mobile phone while...
                      </p>
                      <p className="text-gray-400 text-xs">7 days ago</p>
                    </div>
                  </div>

                  {/* Expiration Info */}
                  <div className=" flex justify-between items-center gap-3">
                    <div className=" flex flex-col sm:flex-row items-center gap-1 sm:gap-2 font-medium text-xs">
                      <p className="text-gray-600 text-[10px] sm:text-sm text-nowrap">
                        For 7 Days
                      </p>

                      {/* File Size */}
                      <p className="text-gray-600 text-[10px] sm:text-sm">
                        92KB
                      </p>
                    </div>

                    {/* Options Button */}
                    <button className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 3a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              <p className=" bg-slate-100 text-gray-700 font-medium py-2 text-xs mt-2 px-4">
                Last synced: 3 mins ago
              </p>
            </div>
          )}

          {/* Footer */}
        </div>
        <div className="flex justify-end items-end gap-3 mt-4 w-full max-w-2xl">
          <div className="relative">
            <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
              <option>1 day</option>
              <option>7 days</option>
              <option>30 days</option>
            </select>
          </div>
          <button className="px-7 py-2 text-sm bg-black text-white font-semibold rounded">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
