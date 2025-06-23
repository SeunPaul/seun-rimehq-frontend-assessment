"use client";
import MentorCard from "../../components/MentorCard";

function Mentors() {
  const mentors = [
    {
      id: 1,
      image: "/images/user1.jpg",
      name: "Padhang Satrio",
      role: "Mentor",
      color: "#F2DDF7",
    },
    {
      id: 2,
      image: "/images/user2.jpg",
      name: "Zakir Horizontal",
      role: "Mentor",
      color: "#E2DDF8",
    },
    {
      id: 3,
      image: "/images/user3.jpg",
      name: "Leonardo Samsul",
      role: "Mentor",
      color: "#DBEEF7",
    },
  ];

  return (
    <div className="bg-purple-10 rounded-2xl pt-2 pb-5 px-2">
      {mentors.map((mentor) => (
        <div className="border-b border-dashed border-[#ccc] my-1">
          <MentorCard key={mentor.id} {...mentor} />
        </div>
      ))}
      <button className="bg-purple-50 text-sm h-10 w-full rounded-2xl font-bold text-purple-400 mt-5 cursor-pointer focus:outline-1 focus:outline-purple-400">
        See All
      </button>
    </div>
  );
}

export default Mentors;
