"use client";
import Image from "next/image";
import { RiUserFollowLine } from "react-icons/ri";

type MentorCardProps = {
  image: string;
  name: string;
  role: string;
  color: string;
};

function MentorCard({ image, name, role, color }: MentorCardProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex px-2 gap-2 py-2 items-center outline-none focus-visible:outline-1">
        <div
          style={{ backgroundColor: color }}
          className="rounded-full overflow-hidden h-[35px] w-[35px] flex items-center justify-center"
        >
          <Image
            className="rounded-full"
            src={image}
            alt="friend"
            width={25}
            height={25}
            priority
          />
        </div>
        <div>
          <p className="text-sm leading-4">{name}</p>
          <p className="text-[#818181] text-[11px]">{role}</p>
        </div>
      </div>
      <button className="text-xs h-6 w-20 cursor-pointer border border-purple-400 text-purple-400 rounded-[40px] flex gap-1 items-center justify-center focus:outline-1 focus:outline-purple-400">
        <RiUserFollowLine className="" /> Follow
      </button>
    </div>
  );
}

export default MentorCard;
