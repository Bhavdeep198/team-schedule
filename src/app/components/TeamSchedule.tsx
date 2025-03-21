import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { colors, selectedSlots } from "./data";

const HOURS = Array.from({ length: 9 }, (_, i) => 6 + i);
const MEMBERS = Array.from({ length: 11 }, (_, i) => i + 1);

export default function TeamSchedule() {
  const getLeftOffset = (timeRange: string): number => {
    const [startTime] = timeRange.split(" - ");
    const [time, period] = startTime.split(" ");
    let [hour, minute] = time.split(":").map(Number);

    if (period.toLowerCase() === "pm" && hour !== 12) hour += 12;
    if (period.toLowerCase() === "am" && hour === 12) hour = 0;

    const startMinutes = hour * 60 + minute;
    const baseMinutes = 6 * 60;
    const totalMinutes = 9 * 60;

    return ((startMinutes - baseMinutes) / totalMinutes) * 100;
  };
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-50">
      {/* Left Panel */}
      <div className="flex-[2] shadow-md bg-white overflow-auto border-r border-gray-300">
        <Topbar />
        <div className="overflow-x-auto w-full">
          {/* Header Row */}
          <div className="min-w-[600px] grid grid-cols-[1.5fr_8.4fr] text-gray-700 border-b border-gray-300 border-r">
            <span className="text-sm font-semibold text-left pl-4 py-2 text-black bg-white sticky left-0 z-10">
              Team
            </span>
            <div className="grid grid-cols-9 text-center bg-gray-50">
              {HOURS.map((hour, i) => {
                const formattedHour = hour > 12 ? hour - 12 : hour;
                const period = hour >= 12 ? "PM" : "AM";
                return (
                  <div
                    key={i}
                    className="text-xs px-1 text-gray-500 border-l border-gray-300 first:border-none py-2"
                  >
                    {formattedHour} {period}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Schedule Rows */}
          <div className="min-w-[600px]">
            {MEMBERS.map((member) => (
              <div
                key={member}
                className="grid grid-cols-[1.5fr_8.5fr] border-b border-gray-300 items-center"
              >
                {/* Member Info */}
                <div className="flex items-center pl-4 py-3 text-sm font-medium bg-white sticky left-0 z-10">
                  <span
                    className={`w-3 h-3 rounded-full inline-block mr-3 ${
                      colors[member - 1]
                    }`}
                  ></span>
                  Member {member}
                </div>

                {/* Time Blocks */}
                <div className="grid grid-cols-9 border-l border-gray-300 relative bg-white">
                  {HOURS.map((_, col) => (
                    <div
                      key={col}
                      className="border-l border-gray-300 h-12 flex relative"
                    >
                      <div className="flex-1 border-r border-gray-200 h-full bg-white" />
                      <div className="flex-1 border-gray-200 h-full bg-white" />
                    </div>
                  ))}

                  {/* Scheduled Slots */}
                  {selectedSlots
                    .filter((slot) => slot.member === member)
                    .map((slot, index) => (
                      <div
                        key={`${slot.member}-${index}`}
                        className={`absolute ${slot.color} text-[13px] px-3 py-[6px] rounded-xl border border-gray-200 shadow-md font-medium text-black w-max whitespace-nowrap`}
                        style={{
                          left: `${getLeftOffset(slot.time)}%`,
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        <div className="absolute left-0 top-0 h-full w-[6px] bg-black/10 rounded-l-xl pointer-events-none" />
                        <div className="text-sm font-semibold">Client Name</div>
                        <div className="text-xs text-gray-700">{slot.time}</div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="sm:hidden text-xs text-center text-gray-400 mt-2">
            Swipe right ⟶ to view full schedule
          </div>
        </div>
      </div>

      {/* Right Panel (Sidebar) */}
      <Sidebar />
    </div>
  );
}
