"use client";
import { color } from "chart.js/helpers";
import { JSX } from "react";
import { HiDotsVertical } from "react-icons/hi";

type AnalyticsCardProps = {
  icon: JSX.Element;
  iconColor: string;
  iconBackgroundColor: string;
  title: string;
  details: string;
};

function AnalyticsCard({
  icon,
  iconColor,
  iconBackgroundColor,
  title,
  details,
}: AnalyticsCardProps) {
  return (
    <div className="flex w-full items-center justify-between bg-white px-3 py-2.5 rounded-[20px] min-w-[200px]">
      <div className="flex items-center gap-2">
        <div
          style={{ backgroundColor: iconBackgroundColor, color: iconColor }}
          className="rounded-[16px] p-3.5"
        >
          {icon}
        </div>
        <div>
          <p className="text-sm text-[#a6a6a6]">{details}</p>
          <p className="text-lg">{title}</p>
        </div>
      </div>
      <HiDotsVertical className="cursor-pointer text-[#a4a4a4]" />
    </div>
  );
}

export default AnalyticsCard;
