"use client";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import BarChart from "../../components/chart/BarChart";

function Statistics() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 20,
        max: 60,
        ticks: {
          stepSize: 20,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: ["1-10 Aug", "10-11 Aug", "21-30 Aug", "1-10 Sep", "10-11 Sep"],
    datasets: [
      {
        label: "Dataset",
        data: [35, 45, 35, 60, 35],
        backgroundColor: "#6e61e5",
        borderWidth: 0,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold text-lg">Statistics</p>
        <HiDotsVertical className="cursor-pointer" />
      </div>
      <div className="flex justify-center my-4">
        <div className="relative border-2 border-r-purple-400 border-t-purple-400 border-l-[#ccc] border-b-[#ccc]  rounded-full p-2">
          <div className="rounded-full overflow-hidden h-25 w-25 bg-[#E2DDF8] flex items-center justify-center cursor-pointer">
            <Image
              className="rounded-full"
              src="/images/user2.jpg"
              alt="friend"
              width={60}
              height={60}
              priority
            />
          </div>
          <p className="w-9 h-4 bg-purple-400 absolute text-xs text-white top-0 right-0 flex items-center justify-center rounded-2xl">
            32%
          </p>
        </div>
      </div>
      <h3 className="text-center text-lg">Good morning Jason 🔥</h3>
      <p className="text-center text-[#9e9e9e] text-xs">
        continue your learning to achieve your target
      </p>
      <div className="bg-purple-10 rounded-3xl p-4 mt-6">
        <BarChart options={options} data={data} />
      </div>
    </div>
  );
}

export default Statistics;
