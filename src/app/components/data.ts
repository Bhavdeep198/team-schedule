interface Slot {
  member: number;
  time: string;
  color: string;
}

export const selectedSlots: Slot[] = [
  { member: 1, time: "10:20 am - 10:45 am", color: "bg-blue-200" },
  { member: 3, time: "1:15 pm - 2:00 pm", color: "bg-yellow-200" },
  { member: 5, time: "9:30 am - 10:00 am", color: "bg-purple-200" },
  { member: 6, time: "8:00 am - 8:30 am", color: "bg-blue-200" },
  { member: 7, time: "6:30 am - 8:30 am", color: "bg-yellow-200" },
  { member: 8, time: "11:30 am - 12:00 pm", color: "bg-purple-200" },
  { member: 10, time: "12:30 pm - 1:00 pm", color: "bg-blue-200" },
];

export const colors: string[] = [
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-cyan-500",
  "bg-purple-500",
  "bg-green-500",
  "bg-pink-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-purple-500",
  "bg-blue-500",
];

export const users = [
  {
    name: "Cameron Williamson",
    address: "4140 Parker Rd.\nAllentown, NM 31134",
    jobId: "JOB106731",
  },
  {
    name: "Leslie Alexander",
    address: "1234 Elm St.\nAustin, TX 73301",
    jobId: "JOB106732",
  },
  {
    name: "Jane Cooper",
    address: "5678 Oak St.\nDenver, CO 80202",
    jobId: "JOB106733",
  },
  {
    name: "Robert Fox",
    address: "9101 Pine St.\nSeattle, WA 98101",
    jobId: "JOB106734",
  },
];
