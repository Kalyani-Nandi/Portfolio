import Image from "next/image";
import React from "react";
import image from "../public/femaleDev.jpg";
function Home() {
  return (
    <div>
      <div className="grid pt-20 w-full grid-cols-1 sm:grid-cols-2 px-5 md:px-10 lg:px-20 font-sans">
        <div className="items-start 2xl:items-center 2xl:justify-center justify-start h-full p-4 flex flex-col w-full">
          <div className="2xl:w-[50%] w-full   ">
            <div className="  text-left font-medium  text-[35px] sm:text-[40px] py-1">
              Hello!,
            </div>
            <div className="py-1 flex ">
              <div className=" text-left font-medium  text-[25px] sm:text-[30px]">
                {"I am "}
                <span className="text-purple-600 text-left font-medium text-[25px]  sm:text-[30px]">
                  {"Full-stack Web Developer"}
                </span>
              </div>
            </div>
            <div className="py-1.5 sm:text-[18px] text-[14px] text-left font-normal text-gray-400">
              {"I am Kalyani Nandi and I worked as a Developer"}
            </div>
            <div className="py-3">
              <button className="bg-purple-600 hover:bg-purple-500 text-white text-sm  py-1.5 px-3 rounded-md">
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="items-center sm:items-start 2xl:items-center 2xl:justify-center sm:justify-start justify-center p-4 flex w-full ">
          <div className="h-[80%] w-full lg:w-[60%] md:w-[70%] flex md:ml-12  ">
            <Image
              src={image}
              alt="photo"
              className="object-cover rounded-md -mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
