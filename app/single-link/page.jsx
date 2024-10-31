import React from "react";

function page() {
  return (
    <div className=" p-10 flex flex-col gap-10">
      <h1 className=" text-4xl font-bold ">Single Link</h1>
      <div className=" flex flex-col gap-10 px-12">
        <div className=" my-5 flex flex-col gap-5">
          <h1 className=" text-3xl font-bold text-stone-600">Add URL</h1>
          <input
            type="text"
            className=" bg-transparent border-b border-stone-500 placeholder:font-bold placeholder:text-xl py-1 px-10 w-full"
            placeholder="https://www.google.com/search?q......"
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
