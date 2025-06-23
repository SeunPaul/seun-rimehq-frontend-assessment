import { FaAngleRight } from "react-icons/fa6";

function Banner() {
  return (
    <div className="bg-purple-400 rounded-3xl p-5 text-white">
      <p className="text-sm">ONLINE COURSE</p>
      <h3 className="text-3xl max-w-120 font-bold mt-4">
        Sharpen Your Skills With Professional Online Courses
      </h3>
      <button className="bg-black rounded-[40px] flex items-center gap-2 pl-6 pr-2 py-1.5 mt-10">
        <p className="text-xs font-bold">Join Now</p>
        <div className="rounded-full flex items-center justify-center bg-white p-1.5">
          <FaAngleRight className="text-black text-sm" />
        </div>
      </button>
    </div>
  );
}

export default Banner;
