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
      <h1 className=" text-4xl font-bold">UPI History</h1>
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
      </div>
      <div className=" flex items-center justify-end">
        <div className="flex items-center justify-center gap-2 p-4 text-xs font-medium">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 border border-gray-400 rounded-md"
            disabled={currentPage === 1}
          >
            &lt; PREVIOUS
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => index + 1)
            .slice(0, 4)
            .map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border border-gray-400 rounded-md ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-transparent text-black"
                }`}
              >
                {page}
              </button>
            ))}

          {/* Ellipsis */}
          <span className="px-4 py-2">...</span>

          {/* Last Page */}
          <button
            onClick={() => handlePageChange(totalPages)}
            className="px-4 py-2 border border-gray-400 rounded-md"
          >
            {totalPages}
          </button>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 border border-gray-400 rounded-md"
            disabled={currentPage === totalPages}
          >
            NEXT &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
