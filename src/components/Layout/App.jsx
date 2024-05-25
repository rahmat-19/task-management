import { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { SidebarContext } from "../Context/SidebarContext";
import Navigation from "./Navbar/Navigation";

export default function Layout({ children }) {
  const { sidebarValue } = useContext(SidebarContext);

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div
        className={`flex-1 flex flex-col transition-all duration-200 ${
          sidebarValue.sidebarOpen ? "sm:ml-64" : "sm:ml-0"
        }`}
      >
        <Navbar />
        <main className="p-4 mt-16">
          <Navigation />
          <div className="mt-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
