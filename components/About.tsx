import Image from "next/image";
import React, { useState } from "react";
import AboutImage from "../public/Photo.jpg";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function about() {
  const [tabValue, setTabValue] = useState(1);
  const Information = [
    { name: "Kalyani Nandi", Type: "Name : " },
    { name: "15 feb 2000", Type: "Birthday : " },
    { name: "(+91) 9337498176", Type: "Phone : " },
    { name: "Cuttack, Odisha", Type: "Address : " },
  ];
  const Education = [
    { name: "Utkal University - (Master Degree)", Year: "2020-2022 : " },
    { name: "Utkal University - (Gaduation)", Year: "2017-2010 : " },
    { name: "Bahugram Junior College - (Intermediate)", Year: "2015-2017 : " },
    { name: " Padmapur High School - (Matriculation)", Year: "2014-2015 : " },
  ];
  const Experience = [
    {
      name: " Full stack web Devloper Training  at Hyscalar Technologies",
      Year: "2022-2023 : ",
    },
  ];
  const follow = [
    { icon: <MdEmail size="30px" />, name: "email", color: "text-[#673AB7]" },
    {
      icon: <GoMarkGithub size="30px" />,
      name: "github",
      color: "text-[#000000]",
    },
    {
      icon: <FaLinkedin size="30px" />,
      name: "linkedin",
      color: "text-[#0A66C2]",
    },
  ];
  return (
    <div>
      <div className=" py-10 w-full flex gap-10 sm:flex-row flex-col-reverse px-5 md:px-10 lg:px-20 font-sans">
        <div className="sm:w-[50%] 2xl:items-center sm:justify-start justify-center items-center  sm:items-center 2xl:justify-center flex h-full w-full">
          <div className=" 2xl:w-[60%] w-[80%] p-4  h-full">
            <Image
              alt="photo"
              className="object-cover rounded-lg border"
              src={AboutImage}
            />
          </div>
        </div>
        <div className="sm:w-[50%]  2xl:px-20 2xl:justify-center flex flex-col h-full w-full px-4">
          <div className="">
            <div className=" text-[25px] font-semibold  hover:text-purple-500 text-purple-600 cursor-pointer ">
              <span className="link-underline link-underline-black pb-1 w-fit rounded-md uppercase">
                About Me
              </span>
            </div>
            <p className="font-normal py-2 sm:text-base text-sm ">
              Hello! My name is Kalyani Nandi And I'am a Web Devloper from
              Cuttack,Odisha.Hello! My name is Kalyani Nandi And I'am a Web
              Devloper from Cuttack,Odisha.Hello! My name is Kalyani Nandi And
              I'am a Web Devloper from Cuttack,Odisha.
            </p>

            <div className="lg:block sm:hidden block">
              <div className="w-full py-3 grid grid-cols-3 gap-4 text-base font-medium ">
                <button
                  className={` ${
                    tabValue === 1 &&
                    "border-b-purple-600 border-solid  border-b-4 "
                  }
                }  hover:text-purple-600 py-1 rounded-md `}
                  onClick={() => setTabValue(1)}
                >
                  Information
                </button>
                <button
                  className={`  ${
                    tabValue === 2 &&
                    "border-b-purple-600 border-solid  border-b-4 "
                  } cursor-pointer   py-1  rounded-md hover:text-purple-600`}
                  onClick={() => setTabValue(2)}
                >
                  Education
                </button>
                <button
                  className={` ${
                    tabValue === 3 &&
                    "border-b-purple-600 border-solid  border-b-4 "
                  }  py-1  rounded-md hover:text-purple-600 `}
                  onClick={() => setTabValue(3)}
                >
                  Experience
                </button>
              </div>
              <div>
                {tabValue === 1 && (
                  <div>
                    <ul className="">
                      {Information.map((info: any, i: any) => {
                        return (
                          <li
                            key={i}
                            className="py-1 xl:flex-row flex-col flex gap-4"
                          >
                            <div className=" text-base font-medium text-purple-600">
                              {info.Type}
                            </div>
                            <div className="text-sm mb-1 font-normal ">
                              {info.name}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {tabValue === 2 && (
                  <div>
                    <ul className="">
                      {Education.map((edu: any, i: any) => {
                        return (
                          <li
                            key={i}
                            className="py-1 xl:flex-row flex-col flex gap-4"
                          >
                            <div className=" text-base font-medium text-purple-600">
                              {edu.Year}
                            </div>
                            <div className="text-sm mb-1 font-normal ">
                              {edu.name}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {tabValue === 3 && (
                  <div>
                    <ul className="">
                      {Experience.map((exe: any, i: any) => {
                        return (
                          <li
                            key={i}
                            className="py-1 xl:flex-row flex-col  flex gap-4"
                          >
                            <div className=" text-base font-medium text-purple-600">
                              {exe.Year}
                            </div>
                            <div className="text-sm mb-1 font-normal ">
                              {exe.name}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden px-9 pb-5 md:px-10 lg:px-20 sm:block hidden">
        <div className="w-full py-3 grid grid-cols-3 gap-4 text-base font-medium ">
          <button
            className={` ${
              tabValue === 1 && "border-b-purple-600 border-solid  border-b-4 "
            }
                }  hover:text-purple-600 py-1 rounded-md `}
            onClick={() => setTabValue(1)}
          >
            Information
          </button>
          <button
            className={`  ${
              tabValue === 2 && "border-b-purple-600 border-solid  border-b-4 "
            } cursor-pointer   py-1  rounded-md hover:text-purple-600`}
            onClick={() => setTabValue(2)}
          >
            Education
          </button>
          <button
            className={` ${
              tabValue === 3 && "border-b-purple-600 border-solid  border-b-4 "
            }  py-1  rounded-md hover:text-purple-600 `}
            onClick={() => setTabValue(3)}
          >
            Experience
          </button>
        </div>
        <div>
          {tabValue === 1 && (
            <div>
              <ul className="">
                {Information.map((info: any, i: any) => {
                  return (
                    <li key={i} className="py-1 flex gap-4">
                      <div className=" text-base font-medium text-purple-600">
                        {info.Type}
                      </div>
                      <div className="text-sm mb-1 font-normal ">
                        {info.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {tabValue === 2 && (
            <div>
              <ul className="">
                {Education.map((edu: any, i: any) => {
                  return (
                    <li key={i} className="py-1 flex gap-4">
                      <div className=" text-base font-medium text-purple-600">
                        {edu.Year}
                      </div>
                      <div className="text-sm font-normal mb-1">{edu.name}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {tabValue === 3 && (
            <div>
              <ul className="">
                {Experience.map((exe: any, i: any) => {
                  return (
                    <li key={i} className="py-1 flex gap-4">
                      <div className=" text-base font-medium text-purple-600">
                        {exe.Year}
                      </div>
                      <div className="text-sm mb-1 font-normal ">
                        {exe.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="px-9 md:px-10 lg:px-20 grid-cols-2 grid sm:grid-cols-3 justify-items-center  gap-5">
        {follow.map((fol: any, i: any) => {
          return (
            <div
              key={i}
              className={`flex ${
                fol.name === "linkedin" && "sm:col-span-1 col-span-2"
              } cursor-pointer  gap-x-4`}
            >
              <span className={`${fol.color}`}>{fol.icon}</span>
              <span
                className={` link-underline link-underline-black  hover:text-violet-600 text-lg font-semibold`}
              >
                {fol.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default about;
