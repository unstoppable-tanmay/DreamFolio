import Image from "next/image";
import "./Terminal.css";

const Terminal = () => {
  return (
    <div className="lg:w-[70vw] w-[90vw] h-[80vh] rounded-xl bg-[#0e0e0e] flex overflow-hidden shadow-2xl relative">
      <Image
        alt=""
        src={"/images/arch.jpg"}
        fill
        className="z-0 opacity-70 object-cover"
      ></Image>
      <div className="taskbar w-full h-[30px] bg-[#2f2f2f] z-10 flex items-center justify-between px-3">
        <div className="h-full items-center flex gap-2">
          <div className="h-[55%] aspect-square rounded-full bg-[#f15d55]"></div>
          <div className="h-[55%] aspect-square rounded-full bg-[#d49b17]"></div>
          <div className="h-[55%] aspect-square rounded-full bg-[#0aa622]"></div>
        </div>
        <div className="text flex items-center justify-center flex-1 -ml-16">
          Tanmay
        </div>
      </div>
    </div>
  );
};

export default Terminal;
