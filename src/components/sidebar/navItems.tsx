import { MdSpaceDashboard } from "react-icons/md";
import { FiInbox } from "react-icons/fi";
import { MdOutlinePlayLesson } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineRealEstateAgent, MdOutlineInventory2 } from "react-icons/md";
import { TbCoins } from "react-icons/tb";
import { IoWalletOutline, IoSettingsOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";

export const navItems = [
  {
    id: 1,
    title: "Dashboard",
    to: "/",
    icon: <MdSpaceDashboard className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "Inbox",
    to: "/",
    icon: <FiInbox className="w-4 h-4" />,
  },
  {
    id: 3,
    title: "Lesson",
    to: "/",
    icon: <MdOutlinePlayLesson className="w-4 h-4" />,
  },
  {
    id: 4,
    title: "Tasks",
    to: "/",
    icon: <GoTasklist className="w-4 h-4" />,
  },
  {
    id: 5,
    title: "Group",
    to: "/",
    icon: <HiOutlineUsers className="w-4 h-4" />,
  },
];
