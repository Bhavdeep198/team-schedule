import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const filterOptions = ["Status", "Team"];
const timeOptions = ["1 hour", "Day"];

export default function Topbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 py-3 px-4 gap-3 bg-white">
      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        {filterOptions.map((option) => (
          <select
            key={option}
            className="text-sm px-2 py-2 rounded-md border border-gray-300 text-gray-700 hover:border-blue-400 transition w-[24%] sm:w-auto"
          >
            <option>{option}</option>
          </select>
        ))}
      </div>
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 w-full sm:w-auto">
        <div className="flex gap-2 w-full sm:w-auto">
          {timeOptions.map((option) => (
            <select
              key={option}
              className="text-sm px-2 py-2 rounded-md border border-gray-300 text-gray-700 hover:border-blue-400 transition w-[24%] sm:w-auto"
            >
              <option>{option}</option>
            </select>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
          <button className="p-2 rounded-md hover:bg-gray-100 transition">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition text-sm">
            Today
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 transition">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
