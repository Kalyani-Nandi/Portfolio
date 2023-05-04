import React from "react";
import {
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiExpress,
  SiReact,
} from "react-icons/si";

function skills() {
  const skills = [
    { icon: <SiReact size="40px" />, color: "text-[#61DAFB]" },
    { icon: <SiNextdotjs size="40px" />, color: "text-[#010101]" },
    { icon: <SiGraphql size="40px" />, color: "text-[#DF38A9]" },
    { icon: <SiTailwindcss size="40px" />, color: "text-[#38BDF8]" },
    { icon: <SiExpress size="40px" />, color: "text-[#525252]" },
  ];
  return (
    <div className="px-5 py-5 md:px-10 lg:px-20">
      <div className=" text-[25px] font-semibold hover:text-purple-500 p-4 text-purple-600 cursor-pointer ">
        <span className="link-underline link-underline-black pb-1 w-fit rounded-md uppercase">
          Skills
        </span>
      </div>
      <div className="p-4 grid grid-cols-5 justify-items-center gap-5">
        {skills.map((skill: any, i: any) => {
          return (
            <span key={i} className={` cursor-pointer  ${skill.color}`}>
              {skill.icon}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default skills;
