"use client";
import React, { useState } from "react";
import { users } from "./data";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex w-1/4 pt-3 bg-white shadow-md border-l border-gray-300 flex-col">
        <SidebarContent />
      </div>
      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
        >
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-12 left-0 right-0 max-h-[80vh] bg-white border-t border-gray-300 shadow-xl overflow-y-auto z-30 p-4 md:hidden rounded-t-2xl">
          <SidebarContent />
        </div>
      )}
    </>
  );
}

function SidebarContent() {
  return (
    <>
      <div className="flex justify-between border-b border-gray-200 pb-3 px-3">
        {["Assigned", "Unassigned"].map((label, index) => (
          <button
            key={index}
            className={`w-1/2 py-2 text-sm font-small rounded-md ml-1 mr-1 ${
              index === 1
                ? "text-white bg-blue-600"
                : "text-gray-700 border border-gray-300 bg-gray-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-3">
        <button className="w-[90%] bg-blue-500 text-white py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition">
          Assign All ✨
        </button>
      </div>
      {users.map(({ name, address, jobId }, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-3 px-3 flex justify-between items-center"
        >
          <div>
            <p className="font-semibold text-gray-900 text-sm">{name}</p>
            <p className="text-gray-500 text-xs whitespace-pre-line">
              {address}
            </p>
          </div>
          <div className="text-right">
            <span className="text-gray-400 text-xs block">{jobId}</span>
            <button className="border border-gray-300 text-gray-700 text-xs py-1 px-3 rounded-md mt-2 hover:bg-gray-100">
              Assign
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
