"use client";
import Image from "next/image";
import { JSX } from "react";

type CourseCard = {
  image: string;
  tag: JSX.Element;
  title: string;
  progress: number;
  mentor: {
    image: string;
    name: string;
    role: string;
    color: string;
  };
};

function CourseCard({ image, tag, title, progress, mentor }: CourseCard) {
  return (
    <div className="hover:shadow-lg px-3 py-3 rounded-[20px] w-[300px] my-1">
      <Image
        className="rounded-3xl h-35 object-cover mb-3"
        src={image}
        alt="friend"
        width={300}
        height={25}
        priority
      />
      {tag}
      <h3 className="my-1">{title}</h3>
      <div className="bg-purple-50 w-full rounded my-2">
        <div
          style={{ width: `${progress}%` }}
          className="h-1 bg-purple-600 rounded"
        />
      </div>
      <div className="flex gap-2 py-2 rounded-xl mb-1 items-center outline-none focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-purple-400 focus-visible:outline-solid">
        <div
          style={{ backgroundColor: mentor.color }}
          className="rounded-full overflow-hidden h-[35px] w-[35px] flex items-center justify-center"
        >
          <Image
            className="rounded-full"
            src={mentor.image}
            alt="friend"
            width={25}
            height={25}
            priority
          />
        </div>
        <div>
          <p className="text-sm leading-4">{mentor.name}</p>
          <p className="text-[#818181] text-[11px]">{mentor.role}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
