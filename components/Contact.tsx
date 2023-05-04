import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

function contact() {
  const contact = [
    {
      icon: <MdLocationOn size="30px" />,
      title: "My Address",
      name: "Cuttack,Odisha",
    },
    {
      icon: <MdEmail size="30px" />,
      title: "Email me",
      name: "kalyaninandi15@gmail.com",
    },
    {
      icon: <IoMdCall size="30px" />,
      title: "Call me",
      name: "+91 9337498176",
    },
  ];
  return (
    <div className="px-5 py-5 md:px-10 lg:px-20">
      <div className=" text-[25px] font-semibold hover:text-purple-500 p-4 text-purple-600 cursor-pointer ">
        <span className="link-underline link-underline-black pb-1 w-fit rounded-md uppercase">
          Contact me
        </span>
      </div>

      <div className="px-9 md:px-10 lg:px-20 py-5 grid-cols-1  grid sm:grid-cols-3 justify-items-center  gap-5">
        {contact.map((con: any, i: any) => {
          return (
            <div key={i} className="flex flex-col gap-y-4">
              <span
                className={`text-green-600 flex cursor-pointer justify-center hover:text-purple-600 items-center h-full w-full`}
              >
                {con.icon}
              </span>
              <span
                className={`link-underline text-xl  cursor-pointer pb-1 link-underline-black flex justify-center items-center h-full w-full hover:text-violet-600 font-semibold`}
              >
                {con.title}
              </span>

              <span className={` text-gray-400 font-normal text-lg `}>
                {con.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* <div className="p-5" >
        <div className="grid grid-cols-1 py-3 justify-items-center gap-10 sm:grid-cols-3">
          <div className="w-full">
            <input
              type="text"
              name="name"
              className="h-9 focus:outline-none border  rounded-md p-1 focus:outline-purple-500 border-gray-400 w-full"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              className="h-9 focus:outline-none border rounded-md p-1 focus:outline-purple-500 border-gray-400 w-full"

              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="w-full">
          <input
            type="text"
            className="h-9 focus:outline-none border rounded-md p-1 focus:outline-purple-500 border-gray-400 w-full"

            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
        </div>
        </div>
       
        <div className="py-4">
          <textarea
            className="focus:outline-none border rounded-md p-1 focus:outline-purple-500 border-gray-400 w-full"

            name="message"
            placeholder="Message"
            id="message"
            required
          ></textarea>
        </div>

        <div className="text-right py-4">
          <button type="submit" className='bg-purple-600 hover:bg-purple-500 text-white text-sm  py-1.5 px-3 rounded-md'>
            {" "}
            Send Message{" "}
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default contact;
