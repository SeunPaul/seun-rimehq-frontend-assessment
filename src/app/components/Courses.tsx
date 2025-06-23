"use client";
import { FaPencilRuler } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdOutlineFlipToFront } from "react-icons/md";
import CourseCard from "@/components/CourseCard";

function Courses() {
  const coursesData = [
    {
      id: 1,
      image: "/images/frontend.jpeg",
      tag: (
        <div className="bg-[#E8F5FC] w-min flex gap-1 text-[#90C4DB] items-center px-2 py-1 rounded-2xl text-xs font-bold text-nowrap">
          <MdOutlineFlipToFront className="text-[#90C4DB]" /> FRONTEND
        </div>
      ),
      title: "Beginner's Guide to Becoming a Professional Front-End Developer",
      progress: 60,
      mentor: {
        image: "/images/user1.jpg",
        name: "Padhang Satrio",
        role: "Mentor",
        color: "#F2DDF7",
      },
    },
    {
      id: 2,
      image: "/images/ui-ux.png",
      tag: (
        <div className="bg-[#EBEAFC] w-min flex gap-1 text-[#6e61e5] items-center px-2 py-1 rounded-2xl text-xs font-bold text-nowrap">
          <FaPencilRuler className="text-[#6e61e5]" /> UI/UX DEESIGN
        </div>
      ),
      title: "Optimizing User Experience with the Best UI/UX Design",
      progress: 50,
      mentor: {
        image: "/images/user1.jpg",
        name: "Padhang Satrio",
        role: "Mentor",
        color: "#F2DDF7",
      },
    },
    {
      id: 3,
      image: "/images/branding.jpg",
      tag: (
        <div className="bg-[#F7E9FC] w-min flex gap-1 text-[#D89CD2] items-center px-2 py-1 rounded-2xl text-xs font-bold text-nowrap">
          <MdOutlineBrandingWatermark className="text-[#D89CD2]" /> BRANDING
        </div>
      ),
      title: "Reviving and Refreshing Company Image",
      progress: 60,
      mentor: {
        image: "/images/user1.jpg",
        name: "Padhang Satrio",
        role: "Mentor",
        color: "#F2DDF7",
      },
    },
  ];

  return (
    <div className="my-5 overflow-x-auto bg-white px-2 rounded-3xl py-2 grid w-full ">
      <div className="min-w-200 flex gap-4 ">
        {coursesData.map((data) => (
          <CourseCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
