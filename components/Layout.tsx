import React, { Children, useState } from "react";
import Navbar from "./Navbar";

function Layout({ children }: any) {
  const [change, setChange] = useState(false);
  const ModeChange = () => {
    setChange(!change);
  };
  return (
    <div className="">
      <Navbar ModeChange={ModeChange} change={change} />
      <main
        className={` w-full flex-1 justify-center items-center ${
          change ? "bg-slate-600 text-slate-300" : "bg-[#F4F4FE] text-gray-700"
        }`}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
