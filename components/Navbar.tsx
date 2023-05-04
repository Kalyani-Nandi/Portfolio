import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { BiHomeHeart } from "react-icons/bi";
import { RiUserSettingsLine, RiMapPinUserLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import {
  MdOutlineConnectWithoutContact,
  MdOutlineNightsStay,
} from "react-icons/md";
import Router from "next/router";
import { GiNightSleep } from "react-icons/gi";
import { AiOutlineAppstore } from "react-icons/ai";
function Navbar(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarOpen = () => {
    setIsOpen(!isOpen);
  };
  const menu = [
    {
      name: "Home",
      link: "home",
      icon: <BiHomeHeart />,
    },
    {
      name: "About me",
      link: "about",
      icon: <RiMapPinUserLine />,
    },
    {
      name: "Skills",
      link: "skills",
      icon: <RiUserSettingsLine />,
    },
    {
      name: "Projects",
      link: "projects",
      icon: <AiOutlineAppstore />,
    },
    {
      name: "Contact me",
      link: "contact",
      icon: <MdOutlineConnectWithoutContact />,
    },
  ];

  const scroll2El = (elID: string) => {
    console.log(elID);

    window.scrollTo({
      top: (document.getElementById(elID)?.offsetTop as number) - 60,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e: any) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    console.log(e);

    setIsOpen(false);
    setTimeout(() => {
      scroll2El(goto);
    });
  };
  return (
    <div className="w-full">
      <nav
        className={` ${
          props.change ? "bg-slate-600" : " bg-[#F4F4FE]"
        } fixed w-full`}
      >
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                type="button"
                className={`inline-flex items-center justify-center rounded-md p-2  ${
                  props.change ? "text-gray-400" : " text-gray-700"
                }  hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={sidebarOpen}
              >
                <span>
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </span>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="relative md:block hidden mx-3">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <span
                  goto="home"
                  onClick={onBtnClick}
                  className="block text-lg font-semibold text-purple-500 cursor-pointer lg:hidden"
                >
                  Kalyani Nandi
                </span>
                <span
                  goto="home"
                  onClick={onBtnClick}
                  className="hidden text-lg font-semibold text-purple-500 cursor-pointer lg:block"
                >
                  Kalyani Nandi
                </span>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 md:block">
                <div className="flex items-center space-x-4">
                  {menu.map((menu: any, i: any) => {
                    return (
                      <span
                        key={i}
                        goto={menu?.link}
                        onClick={onBtnClick}
                        className={` link-underline link-underline-black hover:text-purple-400 cursor-pointer ${
                          props.change ? "text-slate-300" : "text-gray-900"
                        }  rounded-md px-3 py-3 text-sm font-medium`}
                        aria-current="page"
                      >
                        {menu?.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={() => props.ModeChange()}
                className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {/* <MdOutlineNightsStay/> */}
                <GiNightSleep />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative w-full overflow-hidden"
            onClose={() => setIsOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-100 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-100 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="fixed inset-0 " />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full  text-center">
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-200"
                  leaveFrom="opacity-100 "
                  leaveTo="opacity-0"
                >
                  <Dialog.Panel className="max-w-md transform block bg-white md:hidden text-left align-middle shadow-xl transition-all">
                    <div
                      className={`top-0 left-0  px-5  ${
                        props.change ? "bg-slate-600" : " bg-[#F4F4FE]"
                      } h-full`}
                    >
                      <div
                        className={` 
            w-44 ${
              props.change ? "bg-slate-600" : " bg-[#F4F4FE]"
            } shadow-sidebar h-full pt-4 relative `}
                      >
                        <div className="relative flex  mx-3">
                          <div className="mr-6">
                            <button
                              type="button"
                              className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                              id="user-menu-button"
                              aria-expanded="false"
                              aria-haspopup="true"
                            >
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </button>
                          </div>
                          <span
                            className={`block text-lg font-semibold ${
                              props.change ? "text-slate-300" : " text-gray-700"
                            }  `}
                          >
                            {"<K"}
                          </span>
                          <span className="block text-lg font-semibold text-purple-600 ">
                            {"N/>"}
                          </span>
                        </div>
                        <ul className="mt-5">
                          {menu.map((menu: any, i: any) => {
                            return (
                              <li key={i} className="flex flex-col py-2">
                                <div
                                  className={`px-3  ${
                                    props.change
                                      ? "text-slate-300"
                                      : " text-gray-700"
                                  }  hover:bg-purple-700 hover:text-white cursor-pointer  rounded-md py-2 flex `}
                                >
                                  <span className="mt-1  ">{menu.icon}</span>
                                  <span
                                    goto={menu?.link}
                                    onClick={onBtnClick}
                                    className="  ml-3 text-sm font-medium"
                                    aria-current="page"
                                  >
                                    {menu?.name}
                                  </span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
}

export default Navbar;
