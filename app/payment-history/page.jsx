"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function page() {
  const [currentPage, setCurrentPage] = useState(2); // Initial page set to 2
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const transactions = [
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
    {
      productName: "Adidas Ultra boost",
      date: "12/02/24",
      amount: "X345345@ybl",
    },
  ];
  return (
    <div className=" p-10 flex flex-col gap-10">
      <h1 className=" text-4xl font-bold ">Payment</h1>
      <div className=" flex flex-col gap-10 px-12">
        <div className=" my-5 flex flex-col gap-5">
          <h1 className=" text-3xl font-bold text-stone-600">Add UPI id</h1>
          <input
            type="text"
            className=" bg-transparent border-b border-stone-500 placeholder:font-bold placeholder:text-xl py-1 px-10 w-full"
            placeholder="https://www.google.com/search?q......"
          />
          <div className=" flex items-center justify-end gap-4">
            <button className=" font-medium text-white bg-[#232321] py-2 px-6 rounded-md text-xs">
              Verify
            </button>
            <button className=" font-medium text-white bg-[#232321] py-2 px-6 rounded-md text-xs">
              Save
            </button>
          </div>
        </div>
        <h1 className=" text-4xl font-bold text-stone-600">History</h1>
        <div className=" bg-gray-100 rounded-lg p-6">
          <div className=" flex items-center justify-between">
            <h2 className="text-lg font-bold mb-4">
              Upi Id added History of last 3 months
            </h2>
            <BsThreeDotsVertical />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600 text-sm">
                  <th className="py-2">Product Name</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 text-sm font-medium"
                  >
                    <td className="py-3 text-gray-800">
                      {transaction.productName}
                    </td>
                    <td className="py-3 text-gray-800">{transaction.date}</td>
                    <td className="py-3 text-gray-800">{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className=" bg-[#232321] py-3 px-4 rounded-lg text-white font-medium w-full mt-4">
            View all
          </button>
        </div>
      </div>
    </div>
  );
}
