import React from "react";
import Switch from "@mui/material/Switch";

export default function page() {
  const options = [
    { title: "Single Link", actions: ["Edit", "View"] },
    { title: "Text Quotes", actions: ["Edit", "View"] },
    { title: "Media Status", actions: ["Edit", "View"] },
    { title: "Payment", actions: ["Edit", "History"] },
    { title: "Link Hub", actions: ["Edit", "View"] },
  ];

  return (
    <div className=" p-10">
      <div className=" bg-white rounded-xl p-10">
        <h2 className="text-3xl font-bold mb-4">Customize Option</h2>
        <div className="space-y-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-black text-white rounded-lg px-10 py-4 shadow-md"
            >
              <div className="flex items-center space-x-4">
                <span className="font-bold text-2xl">{option.title}</span>
              </div>
              <Switch defaultChecked color="primary" className=" text-white" />
              <div className="flex items-center space-x-4">
                <div className="flex space-x-3 text-gray-200 font-medium text-sm">
                  {option.actions.map((action, i) => (
                    <button key={i} className="hover:underline">
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
