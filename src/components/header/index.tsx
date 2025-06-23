"use client";
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <header className="fixed inset-x-0 top-0 px-4 md:px-6 lg:pl-[220px] lg:pr-[20px] z-20 flex items-center h-16 duration-[0.5s] bg-purple-10">
        <div className="rounded-[40px] h-[45px] relative bg-white border border-[#ccc] w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ccc]" />
          <input
            className="bg-transparent overflow-hidden w-full h-full pl-8 text-sm rounded-[40px] focus:outline-1 focus:outline-purple-400"
            placeholder="Search your course..."
          />
        </div>
        <div className="flex">
          <div className="gap-4 border-r hidden sm:flex border-[#ccc] px-4">
            <div className="border border-[#ccc] h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
              <MdEmail />
            </div>
            <div className="border border-[#ccc] h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
              <IoMdNotifications />
            </div>
          </div>
          <div className="flex px-4 md:px-0 md:w-42 justify-center items-center gap-2">
            <div className="rounded-full overflow-hidden h-10 bg-[#E2DDF8] w-10 flex items-center justify-center cursor-pointer">
              <Image
                className="rounded-full"
                src="/images/user2.jpg"
                alt="friend"
                width={25}
                height={25}
                priority
              />
            </div>
            <p className="font-bold hidden md:block">Jason Ranti</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
