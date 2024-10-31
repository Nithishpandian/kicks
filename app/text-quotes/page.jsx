import React from "react";

function page() {
  return (
    <div className=" p-10 flex flex-col gap-10">
      <h1 className=" text-4xl font-bold ">Text Quotes</h1>
      <div className=" flex flex-col gap-10 px-12">
        <div className=" my-5 flex flex-col gap-5">
          <h1 className=" text-3xl font-bold text-stone-600">Add Quotes</h1>
          <textarea
            type="text"
            style={{ overflow: "hidden" }}
            className=" bg-transparent border-b border-stone-500 placeholder:font-bold placeholder:text-xl py-2 px-7 w-full"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
          />
          <div className=" flex items-center justify-end gap-4">
            <button className=" font-medium text-white bg-[#232321] py-2 px-6 rounded-md text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
