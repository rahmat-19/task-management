// src/Navbar.js
import React, { useState, useEffect } from "react";
import {
  useScrollDirection,
  menuNavbarLandingPage,
} from "../Hooks/useScrollDirection";
import Link from "next/link";

const Navbar = () => {
  const isVisible = useScrollDirection(true, 40);
  return (
    <div
      className={`fixed w-full top-0 left-0 transition-transform duration-300 bg-gray-800 text-white p-4 z-50 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex items-center justify-around">
        {/* BRND */}
        <div>
          <h1 className="text-xl">Manag Task</h1>
        </div>
        {/* ITEM MENU */}
        <div className="">
          <div
            className={`flex gap-x-14 font-semibold text-white shadow-custome shadow-custome `}
          >
            {menuNavbarLandingPage.map((data, index) => (
              <Link
                key={index}
                href={data.link}
                // className={`${
                //   scrollDirection == "up" && scrolling
                //     ? "transition ease-in-out delay-150 text-white"
                //     : "text-slate-700"
                // }`}
              >
                {data.label}
              </Link>
            ))}
          </div>
        </div>
        {/* AUTHANTICATIN */}
        <div className="flex items-center justify-around gap-x-2">
          <button
            className="hidden select-none border rounded-lg  py-2 px-4 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
          >
            <span>Sign in</span>
          </button>
          <button
            className="hidden select-none rounded-lg  py-2 px-4 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
          >
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
