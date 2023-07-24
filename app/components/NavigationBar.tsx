"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiXMark, HiBars3 } from "react-icons/hi2";

export default function NavigationBar() {
  const headerList = [
    {
      id: 1,
      title: "Home",
      link: "Home",
    },
    {
      id: 2,
      title: "Movies",
      link: "Movies",
    },
    {
      id: 3,
      title: "Tvshows",
      link: "Tvshows",
    },
    {
      id: 4,
      title: "Genre",
      link: "Genre",
    },
    {
      id: 5,
      title: "Country",
      link: "Country",
    },
  ];
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full  sticky top-0 z-50 bg-nav-color md:pb-[2%]">
      <div className="text-white flex justify-center items-center h-fit max-w-screen mx-auto px-4 ">
        <ul className=" hidden md:flex">
          {headerList.map((item) => (
            <li key={item.id} className="p-4 text-2xl cursor-pointer">
              <Link href={item.link}> {item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="block md:hidden" onClick={handleNav}>
          {!nav ? <HiXMark size={25} /> : <HiBars3 size={25} />}
        </div>
        <div
          className={
            !nav
              ? "fixed right-0 top-11 w-[60%] h-fit border-r border-r-gray-900 bg-black ease-in-out duration-500 "
              : "fixed left-[-100%] block md:hidden"
          }
        >
          <h1 className="w-full text-2xl font-semibold m-4">
            {" "}
            Nouelle Caparas
          </h1>
          <ul className="pt-12 uppercase p-4 ">
            {headerList.map((item) => (
              <li key={item.id} className="p-4 border-b border-black">
                <Link href={item.link}> {item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
