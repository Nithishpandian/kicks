import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function page() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 md:gap-9 lg:gap-12 xl:gap-16 px-4 py-8 sm:p-5 md:p-8 lg:p-12">
      <div className=" py-6 sm:px-10 flex flex-col gap-4">
        <div className=" flex flex-col gap-1">
          <h3 className="text-3xl font-bold">Register</h3>
          <h2 className=" font-semibold ">Sign up with</h2>
        </div>
        <div className=" grid grid-cols-3 items-center gap-4 text-2xl">
          <div className=" flex items-center justify-center border border-stone-500 py-3 px-6 rounded-xl bg-transparent">
            <FcGoogle />
          </div>
          <div className=" flex items-center justify-center border border-stone-500 py-3 px-6 rounded-xl bg-transparent">
            <FaApple />
          </div>
          <div className=" flex items-center justify-center border border-stone-500 py-3 px-6 rounded-xl bg-transparent">
            <FaFacebook className=" text-blue-600" />
          </div>{" "}
        </div>
        <div className=" my-1 font-medium">OR</div>
        <h1 className=" text-xl font-bold">Your Name</h1>
        <input
          type="text"
          placeholder="First Name"
          // value={lastName}
          // onChange={(e) => setLastName(e.target.value)}
          className="p-2 border border-gray-500 placeholder:text-stone-500 bg-transparent rounded-md"
        />
        <input
          type="text"
          placeholder="Last Name"
          // value={lastName}
          // onChange={(e) => setLastName(e.target.value)}
          className="p-2 border border-gray-500 placeholder:text-stone-500 bg-transparent rounded-md"
        />
        <h1 className=" text-xl font-bold">Gender</h1>
        <div className=" flex items-center gap-3">
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label={"Male"}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label={"Female"}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label={"Other"}
          />
        </div>
        <h1 className=" text-xl font-bold">Login Details</h1>
        <input
          type="text"
          placeholder="Username"
          // value={lastName}
          // onChange={(e) => setLastName(e.target.value)}
          className="p-2 border border-gray-500 placeholder:text-stone-500 bg-transparent rounded-md"
        />{" "}
        <input
          type="text"
          placeholder="Email"
          // value={lastName}
          // onChange={(e) => setLastName(e.target.value)}
          className="p-2 border border-gray-500 placeholder:text-stone-500 bg-transparent rounded-md"
        />{" "}
        <div>
          <input
            type="password"
            placeholder="Password"
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            className=" w-full mb-1 p-2 border border-gray-500 placeholder:text-stone-500 bg-transparent rounded-md"
          />
          <p className=" text-xs font-medium">
            Minimum 8 characters with at least one uppercase, one lowercase, one
            special character and a number
          </p>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          }
          label={
            "By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions."
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          }
          label={
            "Keep me logged in - applies to all log in options below. More info"
          }
        />
        <button className=" flex items-center justify-between w-full bg-[#232321] text-white py-3 px-5 text-sm rounded-md font-semibold hover:bg-gray-800">
          <p>REGISTER</p>
          <FaArrowRight />
        </button>
      </div>

      <div className=" bg-gray-100 rounded-lg py-7 px-8 font-medium h-fit">
        <h1 className=" text-3xl sm:text-4xl font-bold mb-4">
          Join Kicks Club Get Rewarded Today.
        </h1>
        <p className="text-gray-700 mb-4">
          As a Kicks Club member, you get rewarded with what you love for doing
          what you love. Sign up today and receive immediate access to these
          Level 1 benefits:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Free shipping</li>
          <li>A 15% off voucher for your next purchase</li>
          <li>Access to Members Only products and sales</li>
          <li>Access to adidas Running and Training apps</li>
          <li>Special offers and promotions</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Join now to start earning points, reach new levels, and unlock more
          rewards and benefits from adiClub.
        </p>
        <button className=" flex items-center justify-between w-full bg-[#232321] text-white py-3 px-5 text-sm rounded-md font-semibold hover:bg-gray-800">
          <p>JOIN THE CLUB</p>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
