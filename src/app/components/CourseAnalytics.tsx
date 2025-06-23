"use client";
import { FaPencilRuler } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdOutlineFlipToFront } from "react-icons/md";
import AnalyticsCard from "@/components/AnalyticsCard";

function CourseAnalytics() {
  const analytics = [
    {
      id: 1,
      icon: <FaPencilRuler />,
      iconColor: "#6e61e5",
      iconBackgroundColor: "#EBEAFC",
      title: "UI/UX Design",
      details: "2/8 watched",
    },
    {
      id: 2,
      icon: <MdOutlineBrandingWatermark />,
      iconColor: "#D89CD2",
      iconBackgroundColor: "#F7E9FC",
      title: "Branding",
      details: "3/8 watched",
    },
    {
      id: 3,
      icon: <MdOutlineFlipToFront />,
      iconColor: "#90C4DB",
      iconBackgroundColor: "#E8F5FC",
      title: "FrontEnd",
      details: "6/12 watched",
    },
  ];

  return (
    <div className="my-5 overflow-x-auto grid w-full">
      <div className="min-w-170 flex gap-4 ">
        {analytics.map((data) => (
          <AnalyticsCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default CourseAnalytics;
