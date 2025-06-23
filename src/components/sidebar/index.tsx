"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";
import { VscSettingsGear } from "react-icons/vsc";
import { LuLogOut } from "react-icons/lu";
import { navItems } from "./navItems";
import { friends } from "./friends";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed z-20 top-0 lg:hidden block left-0 w-full h-full bg-[#43424280] backdrop-blur"
        />
      )}
      <nav
        className={`bg-primary w-[200px] duration-[0.5s] fixed inset-y-0 ${
          open ? "left-0" : "-left-[250px]"
        } lg:left-0 z-30`}
      >
        <IoCloseCircle
          onClick={() => setOpen(!open)}
          className={`cursor-pointer w-10 h-10 top-2 lg:hidden block absolute text-black ${
            open ? "-right-12" : "-right-16"
          }`}
        />
        <div className="bg-white h-full px-3.5 py-5 mb-10">
          {/* logo */}
          <div className="flex gap-2 px-3">
            <div className="bg-purple-400 rounded-full h-6 w-6 flex items-center justify-center">
              <PiStarFourFill className="text-white" />
            </div>
            <p className="text-xl">Coursue</p>
          </div>
          <div className="mt-10 overflow-y-auto vertical-scroll h-[calc(100vh-260px)]">
            {/* overview */}
            <div>
              <p className="text-[10px] px-3 font-bold text-[#818181]">
                OVERVIEW
              </p>
              <div className="mt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.to}
                    className="flex items-center mx-1 px-2 gap-2 py-2 rounded-xl mb-1 hover:bg-purple-50 outline-none focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-purple-400 focus-visible:outline-solid"
                  >
                    <p
                      className={
                        item.title === "Dashboard" ? "text-purple-400" : ""
                      }
                    >
                      {item.icon}
                    </p>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            {/* friends */}
            <div className="mt-8">
              <p className="text-[10px] px-3 font-bold text-[#818181]">
                FRIENDS
              </p>
              <div className="mt-2">
                {friends.map((item) => (
                  <Link
                    key={item.id}
                    href={item.to}
                    className="flex hover:bg-purple-50 mx-1 px-2 gap-2 py-2 rounded-xl mb-1 items-center outline-none focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-purple-400 focus-visible:outline-solid"
                  >
                    <div
                      style={{ backgroundColor: item.color }}
                      className="rounded-full overflow-hidden h-[35px] w-[35px] flex items-center justify-center"
                    >
                      <Image
                        className="rounded-full"
                        src={item.image}
                        alt="friend"
                        width={25}
                        height={25}
                        priority
                      />
                    </div>
                    <div>
                      <p className="text-sm leading-4">{item.name}</p>
                      <p className="text-[#818181] text-[11px]">
                        {item.relationship}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* settings */}
          <div className="mt-8">
            <p className="text-[10px] px-3 font-bold text-[#818181]">
              SETTINGS
            </p>
            <div className="mt-2">
              <Link
                href="/"
                className="flex items-center px-3 gap-2 py-2 rounded-xl mb-1 hover:bg-purple-50 outline-none focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-purple-400 focus-visible:outline-solid"
              >
                <VscSettingsGear className="w-4 h-4" />
                <span>Settings</span>
              </Link>
              <Link
                href="/"
                className="flex items-center px-3 gap-2 py-2 rounded-xl mb-1 text-[#e3734e] hover:bg-purple-50 outline-none focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-purple-400 focus-visible:outline-solid"
              >
                <LuLogOut className="w-4 h-4" />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
