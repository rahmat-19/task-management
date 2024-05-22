import { useContext, useState } from "react";
import { SidebarContext } from "../Context/SidebarContext";
import Header from "./Sidebar/Header";
import Footer from "./Sidebar/Footer";
import Body from "./Sidebar/Body";
// Mengimpor ikon dari Heroicons

export default function Sidebar() {
  const { sidebarValue } = useContext(SidebarContext);
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-800/[.97]  sm:bg-gray-800 text-white w-64 transition-transform ${
        sidebarValue.sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } z-50 `}
    >
      <div className="flex justify-between h-full flex-col">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
