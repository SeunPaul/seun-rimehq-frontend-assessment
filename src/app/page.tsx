"use client";
import { FaPlus } from "react-icons/fa6";
import Banner from "@/app/components/Banner";
import CourseAnalytics from "./components/CourseAnalytics";
import Statistics from "@/app/components/Statistics";
import Mentors from "@/app/components/Mentors";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_350px] gap-4 min-h-screen p-5">
      <div className="grid grid-cols-1 grid-rows-[min-content_min-content]">
        <Banner />
        <CourseAnalytics />
      </div>
      <div className="bg-white rounded-[20px] p-4">
        <Statistics />
        <div className="flex justify-between mb-2 mt-6 items-center">
          <p className="font-bold">Your Mentor</p>
          <div className="rounded-full p-1.5 cursor-pointer border text-purple-400 border-[#ccc]">
            <FaPlus className="text-xs" />
          </div>
        </div>
        <Mentors />
      </div>
    </div>
  );
}

// font-[family-name:var(--font-geist-sans)]
