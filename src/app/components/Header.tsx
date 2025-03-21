"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const tabs = ["Events", "Team View", "Team Tracking"];
  const selectedTab = "Team View";

  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-gray-200 bg-white shadow-sm relative">
      <div className="flex items-center space-x-2">
        <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
        <span className="text-lg font-semibold text-gray-900 tracking-wide">
          November 2024
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm px-4 py-1 rounded-md transition ${
              tab === selectedTab
                ? "bg-blue-100 text-blue-600 font-medium border border-blue-300"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="md:hidden ml-auto relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center space-x-1 text-sm text-gray-800 font-medium border border-gray-300 rounded-md px-3 py-1 bg-white"
        >
          <span>{selectedTab}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  tab === selectedTab
                    ? "text-blue-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
